'use client';

import { parseAsArrayOf, parseAsBoolean, useQueryState } from 'nuqs';
import { useEffect, useId } from 'react';
import FormCheck from 'react-bootstrap/FormCheck';
import Select, { components, type MultiValueGenericProps } from 'react-select';

import { REGION_COLORS } from '@/configs/constants';
import { useGlobalStore } from '@/providers/GlobalStoreProvider';
import { type HolidayTheme, useHolidaysStore } from '@/stores/useHolidaysStore';
import { parseAsRegion } from '@/utils/functions';

import styles from './styles.module.scss';

// biome-ignore lint/suspicious/noExplicitAny: intentionally using any
interface MultiValueLabelProps extends MultiValueGenericProps<any> {
  data: {
    value: number;
  };
  children: React.ReactNode;
}

const MultiValueLabel = (props: MultiValueLabelProps) => {
  const { regionEmojiMap } = useGlobalStore((state) => state);
  const emoji = regionEmojiMap[props.data.value];
  const nameWithoutEmoji = (props.children as string).replace(emoji, '').trim();

  const newProps = {
    ...props,
    children: `${emoji} ${nameWithoutEmoji}`,
  };

  return <components.MultiValueLabel {...newProps} />;
};

// https://github.com/JedWatson/react-select/pull/5972
const RegionSelect = () => {
  const { selectOptions } = useGlobalStore((state) => state);
  const { setHolidayThemes } = useHolidaysStore((state) => state);
  const [queryRegions, setQueryRegions] = useQueryState(
    'regions',
    parseAsArrayOf(parseAsRegion(selectOptions)).withDefault([]),
  );
  const [sundayFirstDay, setSundayFirstDay] = useQueryState(
    'sunday-first-day',
    parseAsBoolean.withDefault(false),
  );
  const [showWeekNumbers, setShowWeekNumbers] = useQueryState(
    'show-week-numbers',
    parseAsBoolean.withDefault(false),
  );
  const id = useId();

  // biome-ignore lint/correctness/useExhaustiveDependencies: This effect should only run once
  useEffect(() => {
    const initialThemes: HolidayTheme = {};

    queryRegions.forEach((region, index) => {
      if (!region) {
        return;
      }

      initialThemes[region.value] = REGION_COLORS[index];
    });

    setHolidayThemes(initialThemes);
  }, []);

  return (
    <div className={styles['region-select']}>
      <h3 className="mb-3">Select Regions</h3>
      <Select
        isMulti
        options={selectOptions}
        isSearchable={false}
        defaultValue={queryRegions}
        components={{ MultiValueLabel }}
        classNamePrefix="react-select"
        placeholder="Select Regions"
        onChange={(regions) => {
          const validRegions = regions
            .filter((r) => r !== undefined)
            .map((r) => ({
              value: r.value,
              label: 'name' in r ? (r.name as string) : r.label,
            }));
          const themes: HolidayTheme = {};

          validRegions.forEach((region, index) => {
            themes[region.value] = REGION_COLORS[index];
          });

          setQueryRegions(validRegions);
          setHolidayThemes(themes);
        }}
      />
      <FormCheck
        className="my-3"
        checked={sundayFirstDay}
        type="switch"
        id={`${id}-sunday-first-day`}
        label="Weekday starts on Sunday"
        onChange={(event) => {
          const { checked } = event.target;
          setSundayFirstDay(checked);
        }}
      />
      <FormCheck
        className="my-3"
        checked={showWeekNumbers}
        type="switch"
        id={`${id}-show-week-number`}
        label="Show week numbers"
        onChange={(event) => {
          const { checked } = event.target;
          setShowWeekNumbers(checked);
        }}
      />
    </div>
  );
};

export default RegionSelect;
