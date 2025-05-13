import { type NextRequest } from 'next/server'
import { drizzle } from 'drizzle-orm/libsql/node';
import path from 'path';

export const dynamic = 'force-dynamic';

/*
SQL to select holidays by region id
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

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  // TODO: Validate parameters
  const parameters = {
    region_ids: searchParams.get('region_ids'),
    date: searchParams.get('date'),
  }
  const rootDir = process.cwd();
  const dbPath = path.join(rootDir, 'source.db');
  const db = drizzle({ connection: {
    url: `file:${dbPath}`,
  }});

  const result = await db.run(`
SELECT subquery.region_name, subquery.holiday_name, subquery.description, date.start_date, date.end_date, date.is_working_day
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
    `);

  console.log(result);

  return new Response('Hello, Next.js!');
}
