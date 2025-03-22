"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";
import { NextIntlClientProvider } from "next-intl";

// Import JSON translations
import am from "../../../../translations/apps/portal/am.json";
import en from "../../../../translations/apps/portal/en.json";

type Locale = "en" | "am"; // Define supported languages

interface LocaleContextProps {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string; // Function to get translation by key
}

const LocaleContext = createContext<LocaleContextProps | undefined>(undefined);

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>('en'); // Initially set to null
  const [mounted, setMounted] = useState(false); // To track if the component is mounted on the client

  useEffect(() => {
    setMounted(true); // Mark the component as mounted once it's client-side
  }, []);

  // Only try to load translations after the component is mounted
  const translations: Record<Locale, Record<any, any>> = { en, am };

  // Function to get translations based on the current locale
  const t = (key: string) => {
    return locale ? translations[locale][key] || key : key;
  };

  useEffect(() => {
    if (locale) {
      localStorage.setItem("locale", locale); // Store locale in localStorage for next time
    }
  }, [locale]);

  // Set the locale after mounted
  useEffect(() => {
    if (mounted) {
      const storedLocale = localStorage.getItem("locale") as Locale;
      setLocale(storedLocale || "en");
    }
  }, [mounted]);

  // Avoid rendering if mounted is false, which helps to avoid hydration issues
  if (!mounted) {
    return <div>Loading...</div>;
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      <NextIntlClientProvider locale={locale || "en"}>
        {children}
      </NextIntlClientProvider>
    </LocaleContext.Provider>
  );
};

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
};
