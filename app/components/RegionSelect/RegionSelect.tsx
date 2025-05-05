import { getCountryByRegionId, getHolidaysByRegionId } from '@/db/db';
import { useHolidaysStore } from '@/stores/useHolidaysStore';
import {
  parseAsRegion,
  removeEmoji,
  selectOptions,
} from '@/utils/utils';
import { REGION_COLORS } from '@/configs/constants';

import { parseAsArrayOf, parseAsBoolean, useQueryState } from 'nuqs';
import { useEffect } from 'react';
import FormCheck from 'react-bootstrap/FormCheck';
import Select, { components } from 'react-select';

const MultiValueLabel = (props) => {
  const countryDetail = getCountryByRegionId(props.data.value);
  const newProps = {
    ...props,
    children: `${countryDetail.flag} ${removeEmoji(props.children)}`,
  };

  return <components.MultiValueLabel {...newProps} />;
};

const RegionSelect = () => {
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
    const initialHolidays = [];
    const initialThemes = {};

    queryRegions.forEach((region, index) => {
      initialThemes[region.value] = REGION_COLORS[index];
      const events = getHolidaysByRegionId(region.value);

      initialHolidays.push(...events);
    });

    setHolidays(initialHolidays);
    setHolidayThemes(initialThemes);
  }, []);

  return (
    <>
      <h3 className="mb-3">Settings</h3>
      <Select
        isMulti
        options={selectOptions}
        defaultValue={queryRegions}
        components={{ MultiValueLabel }}
        classNamePrefix="react-select"
        placeholder="Select regions"
        onChange={(regions) => {
          console.log(regions);
          const regionsWithoutEmoji = regions.map((region) => ({
            label: removeEmoji(region.label),
            value: region.value,
          }));
          const calendarEvents = [];
          const themes = {};

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
    </>
  );
};

export default RegionSelect;
