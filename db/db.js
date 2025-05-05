import { addDays, format, parseISO } from 'date-fns';

import tableCountry from './data/country.json';
import tableDate from './data/date.json';
import tableHoliday from './data/holiday.json';
import tableRegion from './data/region.json';

export const getCountryByRegionId = (regionId) => {
  const region = tableRegion.find((region) => region.id === regionId);

  return tableCountry.find((country) => country.id === region.country_id);
};

export const getHolidaysByRegionId = (regionId) => {
  const result = [];
  const holidays = tableHoliday.filter(
    (holiday) => holiday.region_id === regionId,
  );
  const country = getCountryByRegionId(regionId);

  holidays.forEach((holiday) => {
    const dates = tableDate.filter((date) => date.holiday_id === holiday.id);
    dates.forEach((date) => {
      const regionName = tableRegion.find(
        (region) => region.id === regionId,
      ).name;

      // This value is exclusive. For example, if you have an all-day event that has an end of 2018-09-03, then it will span through 2018-09-02 and end before the start of 2018-09-03.
      const actualEndDate = date.end_date
        ? format(addDays(parseISO(date.end_date), 1), 'yyyy-MM-dd')
        : null;
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

  result.sort((a, b) => new Date(b.date) - new Date(a.date));

  return result;
};

const getRegionsByCountryId = (countryId) =>
  tableRegion.filter((region) => region.country_id === countryId);

export const getSelectOptions = () => {
  const selectOptions = [];

  tableCountry.forEach((country) => {
    const option = {
      label: `${country.flag} ${country.name}`,
      name: country.name, // Need this extra field for sorting
    };
    const regions = getRegionsByCountryId(country.id);

    if (regions.length === 1) {
      option.value = regions[0].id;

      return selectOptions.push(option);
    }

    option.options = [];
    regions.forEach((region) => {
      option.options.push({
        value: region.id,
        label: region.name,
      });
    });

    option.options.sort((a, b) => a.label.localeCompare(b.label));

    selectOptions.push(option);
  });

  selectOptions.sort((a, b) => a.name.localeCompare(b.name));

  return selectOptions;
};
