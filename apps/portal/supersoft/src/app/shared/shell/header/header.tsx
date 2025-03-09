"use client";
import { useState, useEffect } from "react";
import { IconHexagonLetterS } from "@tabler/icons-react";
import {
  Box,
  Burger,
  Button,
  Drawer,
  Group,
  Select,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DarkModeToggle from "@/app/utilities/dark-mode-toggle";
import { useLocale } from "@/app/locale-provider";

export function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const theme = useMantineTheme();
  const pathname = usePathname();
  const {t} = useLocale();
  const { locale, setLocale } = useLocale(); // Use locale context

  // Ensure text rendering matches server and client
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isActive = (path: string) =>
    pathname === path ? "text-blue-600 font-semibold" : "text-gray-900 dark:text-white";


  return (
    <Box pb={12}>
      <header className="bg-white dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700">
        <Group justify="space-between" h="100%" className="px-6 md:px-36 py-4">
          {/* Logo */}
          <Box className="flex items-center space-x-2 select-none">
            <IconHexagonLetterS
              size={24}
              className="text-blue-500 transition-transform duration-300 hover:rotate-12"
            />
            {isMounted && (
              <h1 className="text-2xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-cyan-400 hover:to-blue-600 transition-all duration-500">
                {"Supersoft"}
              </h1>
            )}
          </Box>

          {/* Desktop Navigation */}
          <Group h="100%" gap={0} className="hidden md:flex font-semibold text-lg">
            <Link href="/" className={`px-4 py-2 hover:text-blue-500 ${isActive("/")}`}>
              {t("Homes")}
            </Link>
            {["About Us", "Services", "Portfolio", "Contact Us"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(/\s/g, "-")}`}
                className={`px-4 py-2 hover:text-blue-500 ${isActive(
                  `/${item.toLowerCase().replace(/\s/g, "-")}`
                )}`}
              >
                {t(item)}
              </Link>
            ))}
          </Group>

          {/* Right Actions */}
          <Group className="hidden md:flex">
            <Select
              data={[
                { value: "en", label: "English" },
                { value: "am", label: "አማርኛ" },
              ]}
              value={locale} // Bind to context locale
              onChange={(val) => setLocale(val as "en" | "am")}
              classNames={{
                input: "w-28 bg-white dark:bg-gray-900 dark:text-white",
                dropdown: "dark:bg-gray-800 dark:text-white",
                option: "dark:hover:bg-gray-700 dark:hover:text-white",
              }}
            />
            <DarkModeToggle />
          </Group>

          {/* Mobile Menu Button */}
          <Burger opened={drawerOpened} onClick={toggleDrawer} className="md:hidden" />
        </Group>
      </header>

      {/* Mobile Drawer */}
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        padding="md"
        size="80%"
        className="md:hidden"
      >
        <nav className="flex flex-col space-y-4">
          <Link href="/" className={`text-lg py-2 ${isActive("/")}`} onClick={closeDrawer}>
            Home
          </Link>
          {["About Us", "Services", "Portfolio", "Contact Us"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(/\s/g, "-")}`}
              className={`text-lg py-2 ${isActive(
                `/${item.toLowerCase().replace(/\s/g, "-")}`
              )}`}
              onClick={closeDrawer}
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="mt-6 flex flex-col space-y-4">
          <Select
            data={[
              { value: "en", label: "English" },
              { value: "am", label: "Amharic" },
            ]}
            value={locale} // Bind to context locale
            onChange={(val) => setLocale(val as "en" | "am")}
            classNames={{
              input: "w-full bg-white dark:bg-gray-900 dark:text-white",
            }}
          />
          <DarkModeToggle />
        </div>
      </Drawer>
    </Box>
  );
}
