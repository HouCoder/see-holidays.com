import db from '@/db/client';
import { country } from '@/db/schema/country';
import { date } from '@/db/schema/date';
import { holiday } from '@/db/schema/holiday';
import { region } from '@/db/schema/region';
import { desc, eq, inArray, sql } from 'drizzle-orm';

/*
SELECT subquery.holiday_id, subquery.region_name, subquery.holiday_name, subquery.description, date.start_date, date.end_date, date.is_working_day
FROM (
    SELECT holiday.id AS holiday_id,
           region.name AS region_name,
           holiday.name AS holiday_name,
           holiday.description
    FROM region
    INNER JOIN holiday ON region.id = holiday.region_id
    WHERE region.id = 1
) AS subquery
INNER JOIN date ON subquery.holiday_id = date.holiday_id
ORDER BY date.start_date;
*/
export const getHolidaysByRegionId = async (regionIds: number[]) => {
  return await db
    .select({
      holidayId: holiday.id,
      regionName: region.name,
      holidayName: holiday.name,
      description: holiday.description,
      startDate: date.startDate,
      endDate: date.endDate,
      isWorkingDay: date.isWorkingDay,
    })
    .from(region)
    .innerJoin(holiday, eq(region.id, holiday.regionId))
    .innerJoin(date, eq(holiday.id, date.holidayId))
    .where(inArray(region.id, regionIds))
    .orderBy(desc(date.startDate))
    .all();
};

export const getRegions = async () => {
  return await db
    .select({
      id: region.id,
      name: region.name,
    })
    .from(region)
    .all();
};

type GroupedRegions = Record<
  number,
  {
    value: number;
    label: string;
  }[]
>;

type SelectOptionBase = {
  label: string;
  name: string;
};

type SelectOptionSingle = SelectOptionBase & {
  value: number;
};

type SelectOptionMulti = SelectOptionBase & {
  options: { value: number; label: string }[];
};

export type SelectOption = SelectOptionSingle | SelectOptionMulti;

export const getSelectOptions = async () => {
  const regions = await db.select().from(region).all();
  const countries = await db.select().from(country).all();
  const groupedRegions = regions.reduce((result: GroupedRegions, region) => {
    if (!result[region.countryId]) {
      result[region.countryId] = [];
    }

    result[region.countryId].push({
      value: region.id,
      label: region.name,
    });

    result[region.countryId].sort((a, b) => a.label.localeCompare(b.label));

    return result;
  }, {});

  const selectOptions: SelectOption[] = countries
    .map((country) => {
      const label = `${country.flag} ${country.name}`;

      if (groupedRegions[country.id].length > 1) {
        return {
          label,
          name: country.name,
          options: groupedRegions[country.id],
        };
      }

      if (groupedRegions[country.id].length === 1) {
        return {
          label,
          name: country.name,
          value: groupedRegions[country.id][0].value,
        };
      }
    })
    .filter((option): option is SelectOption => option !== undefined);

  selectOptions.sort((a, b) => a.name.localeCompare(b.name));

  return selectOptions;
};

/*
SELECT
  holiday.name,
  description,
  link,
  start_date as startDate,
  end_date as endDate,
  is_working_day AS workingDay,
  region.id AS regionId,
  region.name AS regionName,
  country.flag
FROM holiday
JOIN date ON date.holiday_id = holiday.id
JOIN region ON holiday.region_id = region.id
JOIN country ON country.id = region.country_id
ORDER BY region.id ASC
*/
export const getHolidays = async () => {
  return await db
    .select({
      regionName: region.name,
      title: holiday.name,
      link: holiday.link,
      description: holiday.description,
      start: date.startDate,
      end: date.endDate,
      workingDay: date.isWorkingDay,
      regionId: region.id,
      flag: country.flag,
    })
    .from(holiday)
    .innerJoin(date, eq(holiday.id, date.holidayId))
    .innerJoin(region, eq(holiday.regionId, region.id))
    .innerJoin(country, eq(region.countryId, country.id))
    .orderBy(desc(date.startDate))
    .all();
};

/*
SELECT
  region.id as id,
  flag
FROM region
JOIN country ON region.country_id = country.id;
*/
export const getRegionEmojiMap = async () => {
  const map: Record<string, string> = {};
  const queryResult = await db
    .select({
      id: region.id,
      flag: country.flag,
    })
    .from(region)
    .innerJoin(country, eq(region.countryId, country.id))
    .all();

  queryResult.forEach((row) => {
    if (!row.flag) {
      return;
    }

    map[row.id] = row.flag;
  });

  return map;
};
