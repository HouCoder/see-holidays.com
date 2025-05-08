import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import type { Metadata } from 'next';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import '@/styles/app.scss';

export const metadata: Metadata = {
  title: 'SeeHolidays – Interactive Holiday Calendar',
  description:
    'Discover public & regional holidays worldwide with SeeHolidays.com. Browse by country or state, plan work and vacations, never miss a celebration!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <NuqsAdapter>{children}</NuqsAdapter>
        <Footer />
      </body>
    </html>
  );
}
