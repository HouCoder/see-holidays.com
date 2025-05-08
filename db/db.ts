import { addDays, format, parseISO } from 'date-fns';

import tableCountry from './data/country.json';
import tableDate from './data/date.json';
import tableHoliday from './data/holiday.json';
import tableRegion from './data/region.json';

type Country = {
  id: number;
  name: string;
  flag: string;
};

export const getCountryByRegionId = (regionId: number): Country | undefined => {
  const region = tableRegion.find((region) => region.id === regionId);

  if (!region) {
    return undefined;
  }

  return tableCountry.find((country) => country.id === region.country_id);
};

export type Holiday = {
  title: string;
  description: string;
  link: string;
  start: string;
  end: string | undefined;
  workingDay: boolean;
  regionId: number;
  regionName: string;
  flag: string;
};

export const getHolidaysByRegionId = (regionId: number) => {
  const result: Holiday[] = [];
  const regionName = tableRegion.find((region) => region.id === regionId)?.name;
  const country = getCountryByRegionId(regionId);

  if (regionName === undefined || country === undefined) {
    return result;
  }

  const holidays = tableHoliday.filter(
    (holiday) => holiday.region_id === regionId,
  );

  holidays.forEach((holiday) => {
    const dates = tableDate.filter((date) => date.holiday_id === holiday.id);

    dates.forEach((date) => {
      // This value is exclusive. For example, if you have an all-day event that has an end of 2018-09-03, then it will span through 2018-09-02 and end before the start of 2018-09-03.
      const actualEndDate = date.end_date
        ? format(addDays(parseISO(date.end_date), 1), 'yyyy-MM-dd')
        : undefined;
      const event = {
        title: holiday.name,
        description: holiday.description,
        link: holiday.link,
        start: date.start_date,
        end: actualEndDate,
        workingDay: Boolean(date.is_working_day),
        regionId: regionId,
        regionName: regionName,
        flag: country.flag,
      };

      result.push(event);
    });
  });

  result.sort(
    (a, b) => new Date(a.start).getTime() - new Date(b.start).getTime(),
  );

  return result;
};

const getRegionsByCountryId = (countryId: number) =>
  tableRegion.filter((region) => region.country_id === countryId);

type SelectOptionBase = {
  label: string;
  name: string;
};

type HasValue = SelectOptionBase & {
  value: number;
};

type HasOptions = SelectOptionBase & {
  options: {
    value: number;
    label: string;
  }[];
};

type SelectOption = HasValue | HasOptions;

export const getSelectOptions = (): SelectOption[] => {
  const selectOptions: SelectOption[] = [];

  tableCountry.forEach((country) => {
    const label = `${country.flag} ${country.name}`;
    const name = country.name; // Need this extra field for sorting
    const regions = getRegionsByCountryId(country.id);

    if (regions.length === 1) {
      selectOptions.push({
        label: label,
        name: name,
        value: regions[0].id,
      });

      return;
    }

    const subOptions: {
      value: number;
      label: string;
    }[] = [];

    regions.forEach((region) => {
      subOptions.push({
        value: region.id,
        label: region.name,
      });
    });

    subOptions.sort((a, b) => a.label.localeCompare(b.label));
    selectOptions.push({
      label: label,
      name: name,
      options: subOptions,
    });
  });

  selectOptions.sort((a, b) => a.name.localeCompare(b.name));

  return selectOptions;
};
