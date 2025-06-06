import { getHolidaysByRegionId } from '@/db/queries/common';
import { type NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

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

const isoDateRegex = /^\d{4}-\d{2}-\d{2}$/;
const validator = z.object({
  region_ids: z
    .string()
    .nonempty('region_ids is required')
    .transform((s) =>
      s.split(',').map((p) => {
        const n = Number(p);
        if (Number.isNaN(n)) throw new Error(`"${p}" is not a number`);
        return n;
      }),
    ),
  /* Currently not in use
  date: z
    .string()
    .optional()
    .refine((s) => !s || isoDateRegex.test(s), {
      message: "from must be in YYYY-MM-DD format",
    })
    .refine((s) => !s || !Number.isNaN(Date.parse(s)), {
      message: "from must be a real date",
    }),
  */
});

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const queryParams = Object.fromEntries(url.searchParams.entries());
  const parsed = validator.safeParse(queryParams);

  if (!parsed.success) {
    return NextResponse.json({ errors: parsed.error.issues }, { status: 400 });
  }

  const regionIds = queryParams.region_ids.split(',').map(Number);
  const dbResult = await getHolidaysByRegionId(regionIds);
  const processedResult = dbResult.map((row) => ({
    ...row,
    isWorkingDay: Boolean(row.isWorkingDay),
  }));

  return NextResponse.json(processedResult);
}
