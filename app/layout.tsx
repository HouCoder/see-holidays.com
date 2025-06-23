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
import PostHogProvider from '@/providers/PostHogProvider';
import '@/styles/app.scss';

export const metadata: Metadata = {
  title: 'SeeHolidays – Interactive Holiday Calendar',
  description:
    'Discover public & regional holidays worldwide with SeeHolidays.com. Browse by country or state, plan work and vacations, never miss a celebration!',
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
      <body>
        <PostHogProvider>
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
        </PostHogProvider>
      </body>
    </html>
  );
}
