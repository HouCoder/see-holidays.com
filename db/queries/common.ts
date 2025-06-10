import { desc, eq, inArray, sql } from 'drizzle-orm';
import db from '@/db/drizzle';
import { date } from '@/db/schema/date';
import { holiday } from '@/db/schema/holiday';
import { country } from '@/db/schema/country';
import { region } from '@/db/schema/region';

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

type GroupedRegions = Record<number, {
  value: number;
  label: string;
}[]>;

type SelectOptionBase = {
  label: string;
  name: string;
};

type SelectOptionSingle = SelectOptionBase & {
  value: number;
}

type SelectOptionMulti = SelectOptionBase & {
  options: { value: number; label: string }[];
}

type SelectOption = SelectOptionSingle | SelectOptionMulti;

export const getSelectOptions = async () => {
  const regions = await db
    .select()
    .from(region)
    .all();
  const countries = await db
    .select()
    .from(country)
    .all();
  const groupedRegions = regions.reduce((result: GroupedRegions, region) =>{
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

  const selectOptions: SelectOption[] = countries.map(country => {
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
  }).filter((option): option is SelectOption => option !== undefined);

  selectOptions.sort((a, b) => a.name.localeCompare(b.name));

  return selectOptions;
}
