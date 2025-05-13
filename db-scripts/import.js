import Database from 'better-sqlite3';
import data from './data.js';

const db = new Database('./see-holidays.db');

// Add countries
data.forEach((region) => {
  const insert = db.prepare(
    'INSERT or IGNORE INTO country (name, flag) VALUES (?, ?)',
  );
  const run = insert.run(region.country, region.emoji);

  if (run.changes === 0) {
    console.log(`Country ${region.country} already exists`);
    return;
  }

  console.log(
    `New country added: ${region.country}, id: ${run.lastInsertRowid}`,
  );
});

// Add regions
data.forEach((region) => {
  const insert = db.prepare(
    'INSERT or IGNORE INTO region (country_id, name) VALUES ((SELECT id FROM country WHERE name = ?), ?)',
  );
  const run = insert.run(region.country, region.region);

  if (run.changes === 0) {
    console.log(`Region ${region.region} in ${region.country} already exists`);
    return;
  }

  console.log(
    `New region added: ${region.region} in ${region.country}, id: ${run.lastInsertRowid}`,
  );
});

// Add holidays
data.forEach((region) => {
  region.holidays.forEach((holiday) => {
    const insert = db.prepare(`
      INSERT OR REPLACE INTO holiday (id, region_id, name, description, link)
      VALUES (
        (SELECT id FROM holiday WHERE name = ? AND region_id = (SELECT id FROM region WHERE name = ?)),
        (SELECT id FROM region WHERE name = ?),
        ?,
        ?,
        ?
      )
    `);
    const run = insert.run(
      holiday.name,
      region.region,
      region.region,
      holiday.name,
      holiday.description,
      holiday.link,
    );

    if (run.changes === 0) {
      console.log(
        `Holiday ${holiday.name} in ${region.region} already exists but was updated`,
      );
    } else {
      console.log(
        `New or updated holiday: ${holiday.name} in ${region.region}, id: ${run.lastInsertRowid}`,
      );
    }
  });
});

// Add dates
data.forEach((region) => {
  region.holidays.forEach((holiday) => {
    holiday.dates.forEach((dateEntry) => {
      const isWorkingDay = holiday.name === 'Special Working Day' ? 1 : 0;

      const insert = db.prepare(`
        INSERT OR REPLACE INTO date (id, holiday_id, start_date, end_date, is_working_day)
        VALUES (
          (SELECT id FROM date WHERE holiday_id = (SELECT id FROM holiday WHERE name = ? AND region_id = (SELECT id FROM region WHERE name = ?)) AND start_date = ?),
          (SELECT id FROM holiday WHERE name = ? AND region_id = (SELECT id FROM region WHERE name = ?)),
          ?,
          ?,
          ?
        )
      `);

      const run = insert.run(
        holiday.name,
        region.region,
        dateEntry.startDate,
        holiday.name,
        region.region,
        dateEntry.startDate,
        dateEntry.endDate || null,
        isWorkingDay,
      );

      if (run.changes === 0) {
        console.log(
          `Date for holiday ${holiday.name} on ${dateEntry.startDate} in ${region.region} already exists but was updated`,
        );
      } else {
        console.log(
          `New or updated date for holiday ${holiday.name} on ${dateEntry.startDate} in ${region.region}, id: ${run.lastInsertRowid}`,
        );
      }
    });
  });
});
