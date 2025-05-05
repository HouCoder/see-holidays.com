import type { Metadata } from "next";
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "@/styles/app.scss";

export const metadata: Metadata = {
  title: "SeeHolidays – Interactive Holiday Calendar",
  description: "Discover public, bank & regional holidays worldwide with SeeHolidays.com. Browse by country or state, export to your calendar, plan vacations & never miss a celebration!",
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
        <NuqsAdapter>
          {children}
        </NuqsAdapter>
        <Footer />
      </body>
    </html>
  );
}
