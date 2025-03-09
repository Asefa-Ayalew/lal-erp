import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Notifications } from "@mantine/notifications";
import RootStyleRegistry from "./mantine";
import Shell from "./shared/shell/shell";
import { LocaleProvider } from "./locale-provider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto_mono.variable}`}>
      <body
        suppressHydrationWarning={true}
        className="dark:bg-gray-900 dark:text-white"
      >
        <LocaleProvider>
          <RootStyleRegistry>
            <Notifications />
            <Shell>
              <main>{children}</main>
            </Shell>
          </RootStyleRegistry>
        </LocaleProvider>
      </body>
    </html>
  );
}
