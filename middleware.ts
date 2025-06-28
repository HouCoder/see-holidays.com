import { ipAddress } from '@vercel/functions';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { getIpDetails } from '@/utils/ip';

// Only run on public routes (skip _next, api, static, etc)
export const config = {
  matcher: ['/((?!_next|api|static|favicon.ico).*)'],
};

const cookieOptions = {
  maxAge: 60 * 60 * 24 * 365, // 1 year
  path: '/',
} as const;

export async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const response = NextResponse.next();

  // If they already have ?regions=xxx, don’t redirect again
  const regionsInQuery = url.searchParams.get('regions');

  if (regionsInQuery !== null) {
    response.cookies.set({
      name: 'regions',
      value: regionsInQuery,
      ...cookieOptions,
    });

    return response;
  }

  // If they already have regions set in cookie, redirect based on the cookie values
  const regionsInCookie = request.cookies.get('regions')?.value;

  if (regionsInCookie !== undefined) {
    url.searchParams.set('regions', regionsInCookie);

    return NextResponse.redirect(url);
  }

  // Redirect based on IP
  const ip = ipAddress(request) || request.headers.get('x-forwarded-for');

  if (!ip) {
    return response;
  }

  // ::ffff:192.168.21.159 -> 192.168.21.159
  const pureIp = ip.replace('::ffff:', '');
  const ipDetails = await getIpDetails(pureIp);
  const supportedRegions = [
    'China',
    'Hong Kong',
    'Taiwan',
    'Singapore',
    'Japan',
    'South Korea',

    // Australia states
    'South Australia',
    'New South Wales',
    'Western Australia',
    'Tasmania',
    'Northern Territory',
    'Victoria',
    'Queensland',
    'Australian Capital Territory',

    // New Zealand
    'Auckland',
    'Canterbury',
    'Wellington',
  ];

  if (
    ipDetails.subdivision &&
    supportedRegions.includes(ipDetails.subdivision)
  ) {
    url.searchParams.set('regions', ipDetails.subdivision);

    const redirect = NextResponse.redirect(url);

    redirect.cookies.set({
      name: 'regions',
      value: ipDetails.subdivision,
      ...cookieOptions,
    });

    return redirect;
  }

  if (ipDetails.country && supportedRegions.includes(ipDetails.country)) {
    url.searchParams.set('regions', ipDetails.country);

    const redirect = NextResponse.redirect(url);

    redirect.cookies.set({
      name: 'regions',
      value: ipDetails.country,
      ...cookieOptions,
    });

    return redirect;
  }

  return response;
}
