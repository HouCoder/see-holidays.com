import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { getHolidays } from '@/db/queries/common';
import GlobalStoreProvider from '@/providers/GlobalStoreProvider';
import type { Metadata } from 'next';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
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

  return (
    <html lang="en">
      <body>
        <GlobalStoreProvider
          globalStore={{
            holidays,
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
