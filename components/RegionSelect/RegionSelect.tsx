'use client';

import { REGION_COLORS } from '@/configs/constants';
import type { Holiday } from '@/db/db';
import { getCountryByRegionId, getHolidaysByRegionId } from '@/db/db';
import { type HolidayTheme, useHolidaysStore } from '@/stores/useHolidaysStore';
import { parseAsRegion, removeEmoji, selectOptions } from '@/utils/functions';

import { parseAsArrayOf, parseAsBoolean, useQueryState } from 'nuqs';
import { useEffect } from 'react';
import FormCheck from 'react-bootstrap/FormCheck';
import Select, { components, type MultiValueGenericProps } from 'react-select';
import styles from './styles.module.scss';

// biome-ignore lint/suspicious/noExplicitAny: intentionally using any
interface MultiValueLabelProps extends MultiValueGenericProps<any> {
  data: {
    value: number;
  };
  children: React.ReactNode;
}

const MultiValueLabel = (props: MultiValueLabelProps) => {
  const countryDetail = getCountryByRegionId(props.data.value);
  const newProps = {
    ...props,
    children: `${countryDetail?.flag} ${removeEmoji(props.children as string)}`,
  };

  return <components.MultiValueLabel {...newProps} />;
};

// https://github.com/JedWatson/react-select/pull/5972
const RegionSelect = ({options}) => {
  const setHolidays = useHolidaysStore((state) => state.setHolidays);
  const setHolidayThemes = useHolidaysStore((state) => state.setHolidayThemes);
  const [queryRegions, setQueryRegions] = useQueryState(
    'regions',
    parseAsArrayOf(parseAsRegion).withDefault([]),
  );
  const [sundayFirstDay, setSundayFirstDay] = useQueryState(
    'sunday-first-day',
    parseAsBoolean.withDefault(false),
  );
  const [showWeekNumbers, setShowWeekNumbers] = useQueryState(
    'show-week-numbers',
    parseAsBoolean.withDefault(false),
  );

  // biome-ignore lint/correctness/useExhaustiveDependencies: This effect should only run once
  useEffect(() => {
    const initialHolidays: Holiday[] = [];
    const initialThemes: HolidayTheme = {};

    queryRegions.forEach((region, index) => {
      if (!region) {
        return;
      }

      initialThemes[region.value] = REGION_COLORS[index];
      const events = getHolidaysByRegionId(region.value);

      initialHolidays.push(...events);
    });

    setHolidays(initialHolidays);
    setHolidayThemes(initialThemes);
  }, []);

  return (
    <div className={styles['region-select']}>
      <h3 className="mb-3">Select Regions</h3>
      <Select
        isMulti
        options={options}
        defaultValue={queryRegions}
        components={{ MultiValueLabel }}
        classNamePrefix="react-select"
        placeholder="Select regions"
        onChange={(regions) => {
          const regionsWithoutEmoji = regions
            .filter((r) => r !== undefined)
            .map((region) => ({
              label: removeEmoji(region.label),
              value: region.value,
            }));
          const calendarEvents: Holiday[] = [];
          const themes: HolidayTheme = {};

          setQueryRegions(regionsWithoutEmoji);

          regionsWithoutEmoji.forEach((region, index) => {
            themes[region.value] = REGION_COLORS[index];
            const events = getHolidaysByRegionId(region.value);

            calendarEvents.push(...events);
          });

          setHolidays(calendarEvents);
          setHolidayThemes(themes);
        }}
      />
      <FormCheck
        className="my-3"
        checked={sundayFirstDay}
        type="switch"
        id="sunday-first-day"
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
        id="show-week-number"
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
