import { type NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { getHolidaysByRegionId } from '@/db/queries/common';

export const dynamic = 'force-dynamic';

const _isoDateRegex = /^\d{4}-\d{2}-\d{2}$/;
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

  return NextResponse.json(dbResult);
}
