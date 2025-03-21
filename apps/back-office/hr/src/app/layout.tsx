import type { Metadata } from "next";
import "./globals.css";
import MantineProviderRegistry from "./mantine";
import { Shell } from "@lal-erp/core";
import { LocaleProvider } from "./locale-provider";

export const metadata: Metadata = {
  title: "LAL-ERP: HR",
  description: "Generated by create next app",
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
          <MantineProviderRegistry>
            <Shell>{children}</Shell>
          </MantineProviderRegistry>{" "}
        </LocaleProvider>
      </body>
    </html>
  );
}
