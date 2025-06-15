import { getIpDetails } from '@/utils/ip';
import { ipAddress } from '@vercel/functions';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Only run on public routes (skip _next, api, static, etc)
export const config = {
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
  const pureIp = ip.replace('::ffff:', '');
  const ipDetails = await getIpDetails(pureIp);
  const supportedRegions = [
    'China',
    'South Australia',
    'New South Wales',
    'Western Australia',
    'Tasmania',
    'Northern Territory',
    'Victoria',
    'Queensland',
    'Australian Capital Territory',
  ];

  if (
    ipDetails.subdivision &&
    supportedRegions.includes(ipDetails.subdivision)
  ) {
    url.searchParams.set('regions', ipDetails.subdivision);

    return NextResponse.redirect(url);
  }

  if (ipDetails.country && supportedRegions.includes(ipDetails.country)) {
    url.searchParams.set('regions', ipDetails.country);

    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
