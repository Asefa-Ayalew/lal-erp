import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import RootStyleRegistry from "./mantine";
import { Shell } from "@lal-erp/core";
import { LocaleProvider } from "./locale-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Balanced score card",
  description: "Balanced score card",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LocaleProvider>

        <RootStyleRegistry>
          <Shell>{children}</Shell>
        </RootStyleRegistry>{" "}
        </LocaleProvider>
      </body>
    </html>
  );
}
