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

  // 1) If they already have ?regions=xxx, don’t redirect again
  if (url.searchParams.has('regions')) {
    return NextResponse.next();
  }

  const ip = ipAddress(request) || request.headers.get('x-forwarded-for');

  if (!ip) {
    return NextResponse.next();
  }

  // ::ffff:192.168.21.159 -> 192.168.21.159
  // const pureIp = ip.replace('::ffff:', '');
  const pureIp = '116.255.39.202';

  console.log(await getIpDetails(pureIp));

  return NextResponse.next();
}
