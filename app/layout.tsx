import '@radix-ui/themes/styles.css';
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Theme } from '@radix-ui/themes';
import Navbar from "./Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Issue Tracker App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme>
        <Navbar />
        <main className='m-5'> {children}</main>
        </Theme>
      </body>
    </html>
  );
}
