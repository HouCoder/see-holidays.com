import { getRegions } from '@/db/queries/common';
import { getIpDetails } from '@/utils/ip';
import { ipAddress } from '@vercel/functions';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Only run on public routes (skip _next, api, static, etc)
export const config = {
  runtime: 'nodejs',
  matcher: ['/((?!_next|api|static|favicon.ico).*)'],
};

export async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  console.log(url);

  return NextResponse.next();
}
