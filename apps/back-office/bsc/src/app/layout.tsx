import type { Metadata } from "next";
import "./globals.css";
import RootStyleRegistry from "./mantine";
import { Shell } from "@lal-erp/core";
import { LocaleProvider } from "./locale-provider";


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
      <body>
        <LocaleProvider>
          <RootStyleRegistry>
            <Shell>{children}</Shell>
          </RootStyleRegistry>{" "}
        </LocaleProvider>
      </body>
    </html>
  );
}
