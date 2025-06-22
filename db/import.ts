import 'dotenv/config';
import { and, eq } from 'drizzle-orm';
import dbClient from './client';
import australia from './data/australia/main';
import china from './data/china/main';
import hongKong from './data/hong-kong/main';
import singapore from './data/singapore/main';
import taiwan from './data/taiwan/main';
import { country as countryTable } from './schema/country';
import { date as dateTable } from './schema/date';
import { holiday as holidayTable } from './schema/holiday';
import { region as regionTable } from './schema/region';

const collection = [australia, china, singapore, hongKong, taiwan] as const;

type IdMap = Record<string, number>;
type Date = {
  startDate: string;
  endDate?: string;
  isWorkingDay?: boolean;
};

type Holiday = {
  name: string;
  description?: string;
  link?: string;
  dates: Date[];
};

async function deleteTables() {
  await dbClient.delete(dateTable);
  await dbClient.delete(holidayTable);
  await dbClient.delete(regionTable);
  await dbClient.delete(countryTable);
}

async function insertCountries() {
  const countryIdMap: IdMap = {};

  for (const country of collection) {
    const result = await dbClient
      .insert(countryTable)
      .values({
        name: country.country,
        flag: country.emoji,
      })
      .returning({ newCountryId: countryTable.id })
      .onConflictDoNothing();

    let countryId = result[0]?.newCountryId;

    if (result.length === 0) {
      const existingCountry = await dbClient
        .select({
          id: countryTable.id,
        })
        .from(countryTable)
        .where(eq(countryTable.name, country.country));

      countryId = existingCountry[0].id;

      console.log(
        `Country ${country.country} already exists, id ${countryId}.`,
      );
    } else {
      console.log(`Inserted new country ${country.country}, id ${countryId}.`);
    }

    countryIdMap[country.country] = countryId;
  }

  return countryIdMap;
}

async function insertRegions(countryIdMap: IdMap) {
  const regionIdMap: IdMap = {};

  for (const country of collection) {
    for (const [region] of Object.entries(country.regions)) {
      const result = await dbClient
        .insert(regionTable)
        .values({
          name: region,
          countryId: countryIdMap[country.country],
        })
        .returning({ newRegionId: regionTable.id })
        .onConflictDoNothing();

      let regionId = result[0]?.newRegionId;

      if (result.length === 0) {
        const existingRegion = await dbClient
          .select({
            id: regionTable.id,
          })
          .from(regionTable)
          .where(eq(regionTable.name, region));

        regionId = existingRegion[0].id;

        console.log(`Region ${region} already exists, id ${regionId}.`);
      } else {
        console.log(`Inserted new region ${region}, id ${regionId}.`);
      }

      regionIdMap[region] = regionId;
    }
  }

  return regionIdMap;
}

async function insertHolidaysAndDates(regionIdMap: IdMap) {
  const allRegions: Record<string, Holiday[]> = collection.reduce(
    (acc, country) => {
      return Object.assign(acc, country.regions);
    },
    {},
  );

  for (const [region, holidays] of Object.entries(allRegions)) {
    // Insert holidays for each region
    for (const holiday of holidays) {
      const holidayResult = await dbClient
        .insert(holidayTable)
        .values({
          name: holiday.name,
          regionId: regionIdMap[region],
          description: holiday.description,
          link: holiday.link,
        })
        .returning({ newHolidayId: holidayTable.id })
        .onConflictDoNothing();

      let holidayId = holidayResult[0]?.newHolidayId;

      if (holidayResult.length === 0) {
        const existingHoliday = await dbClient
          .select({
            id: holidayTable.id,
          })
          .from(holidayTable)
          .where(
            and(
              eq(holidayTable.name, holiday.name),
              eq(holidayTable.regionId, regionIdMap[region]),
            ),
          );

        holidayId = existingHoliday[0].id;

        console.log(
          `Holiday ${holiday.name} in ${region} already exists, id ${holidayId}.`,
        );
      } else {
        console.log(
          `Inserted new holiday ${holiday.name} in ${region}, id ${holidayId}.`,
        );
      }

      // Insert dates for each holiday
      for (const date of holiday.dates) {
        const dateResult = await dbClient
          .insert(dateTable)
          .values({
            holidayId: holidayId,
            startDate: date.startDate,
            endDate: date.endDate,
            isWorkingDay: date.isWorkingDay ?? false,
          })
          .returning({ newDateId: dateTable.id })
          .onConflictDoNothing();

        if (dateResult.length === 0) {
          console.log(
            `Date (${date.startDate}) for holiday ${holiday.name}#${holidayId} in ${region} already exists.`,
          );
        } else {
          console.log(
            `Inserted new date (${date.startDate}) for holiday ${holiday.name}#${holidayId} in ${region}, id ${dateResult[0].newDateId}.`,
          );
        }
      }
    }
  }
}

(async () => {
  // await deleteTables();
  const countryIdMap = await insertCountries();
  const regionIdMap = await insertRegions(countryIdMap);

  await insertHolidaysAndDates(regionIdMap);
})();
