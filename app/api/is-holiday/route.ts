import { eachDayOfInterval, format, getDay } from 'date-fns';
import { type NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { getHolidaysByRegionName, getRegionByName } from '@/db/queries/common';

export const dynamic = 'force-dynamic';

const isoDateRegex = /^\d{4}-\d{2}-\d{2}$/;
const validator = z.object({
  regionName: z
    .string({
      message: 'regionName is required',
    })
    .nonempty('regionName is required'),
  date: z
    .string()
    .optional()
    .refine((s) => !s || isoDateRegex.test(s), {
      message: 'From must be in YYYY-MM-DD format',
    })
    .refine((s) => !s || !Number.isNaN(Date.parse(s)), {
      message: 'From must be a real date',
    }),
});

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const queryParams = Object.fromEntries(url.searchParams.entries());
  const parsed = validator.safeParse(queryParams);

  if (!parsed.success) {
    return NextResponse.json({ errors: parsed.error.issues }, { status: 400 });
  }

  const { regionName, date } = queryParams;
  const regionDetail = await getRegionByName(regionName);

  if (regionDetail.length === 0) {
    return NextResponse.json(
      { error: `Unable to find ${regionName}.` },
      { status: 400 },
    );
  }

  const allHolidays = await getHolidaysByRegionName(regionName);
  const year = date.split('-')[0];
  const holidaysOfYear = allHolidays.filter((h) =>
    h.startDate.startsWith(year),
  );

  if (holidaysOfYear.length === 0) {
    return NextResponse.json(
      { error: `Current doesn't support holidays in ${year}` },
      { status: 400 },
    );
  }

  const holidaysWithFullDates = allHolidays.map((h) => {
    const dates: string[] = [];

    if (h.endDate === null) {
      dates.push(h.startDate);
    } else {
      eachDayOfInterval({
        start: new Date(h.startDate),
        end: new Date(h.endDate),
      }).forEach((d) => dates.push(format(d, 'yyyy-MM-dd')));
    }

    return {
      holidayName: h.holidayName,
      dates,
      isWorkingDay: h.isWorkingDay,
    };
  });

  const holiday = holidaysWithFullDates.find((h) => h.dates.includes(date));

  if (holiday) {
    return NextResponse.json({
      isWorkingDay: holiday.isWorkingDay,
      holidayName: holiday.holidayName,
    });
  }

  const day = getDay(date);

  if ([0, 6].includes(day)) {
    // Weekend
    return NextResponse.json({
      isWorkingDay: false,
      holidayName: 'Standard weekend',
    });
  }
  // Weekday
  return NextResponse.json({
    isWorkingDay: true,
    holidayName: 'Standard weekday',
  });
}
