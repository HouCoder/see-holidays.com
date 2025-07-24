import { GoogleTagManager } from '@next/third-parties/google';
import type { Metadata } from 'next';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import {
  getHolidays,
  getRegionEmojiMap,
  getSelectOptions,
} from '@/db/queries/common';
import GlobalStoreProvider from '@/providers/GlobalStoreProvider';
import '@/styles/app.scss';

export const metadata: Metadata = {
  title: 'See Holidays: Your Guide to Official Public Holiday Calendars',
  description:
    'See Holidays is your simple guide to official public holidays worldwide. Our easy-to-use calendar helps you track international holidays for seamless business and travel planning.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const holidays = await getHolidays();
  const selectOptions = await getSelectOptions();
  const regionEmojiMap = await getRegionEmojiMap();

  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-5559GHWJ" />
      <head>
        <meta name="apple-mobile-web-app-title" content="See Holidays" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/mobile-icon-512x512.png"
        />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        <GlobalStoreProvider
          globalStore={{
            holidays,
            selectOptions,
            regionEmojiMap,
          }}
        >
          <Header />
          <NuqsAdapter>{children}</NuqsAdapter>
          <Footer />
        </GlobalStoreProvider>
      </body>
    </html>
  );
}
