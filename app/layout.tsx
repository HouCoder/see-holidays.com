import type { Metadata } from "next";
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./globals.scss";

export const metadata: Metadata = {
  title: "See Holidays",
  description:
    "Easy to see holiday informations in different countries/regions",
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
