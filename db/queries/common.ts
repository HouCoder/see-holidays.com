import db from '@/db/drizzle';
import { date } from '@/db/schema/date';
import { holiday } from '@/db/schema/holiday';
import { region } from '@/db/schema/region';
import { desc, eq, inArray } from 'drizzle-orm';

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
