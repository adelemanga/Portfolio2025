import { useRouter } from "next/router";
import { defaultLocale, Locale, translations } from "./translations";

export function getLocale(value?: string): Locale {
  return value === "en" || value === "fr" ? value : defaultLocale;
}

export function useTranslation() {
  const router = useRouter();
  const locale = getLocale(router.locale);

  return {
    locale,
    t: translations[locale],
  };
}
