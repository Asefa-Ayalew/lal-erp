import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import RootStyleRegistry from "./mantine";
import { Notifications } from "@mantine/notifications";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto_mono.variable}`}>
      <body suppressHydrationWarning={true}>
        <RootStyleRegistry>
        <Notifications />
        {children}</RootStyleRegistry>
      </body>
    </html>
  );
}
