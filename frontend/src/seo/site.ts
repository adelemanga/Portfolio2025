import type { Locale } from "@/i18n/translations";

export const productionSiteUrl = "https://portfolio.adelewebstudio.com";

export type PublicRoute = {
  path: string;
  lastModified: string;
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority: number;
};

export const publicRoutes: PublicRoute[] = [
  {
    path: "/",
    lastModified: "2026-08-04",
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    path: "/about",
    lastModified: "2026-08-04",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/projects",
    lastModified: "2026-08-04",
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    path: "/customer-advice",
    lastModified: "2026-08-04",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    path: "/blog",
    lastModified: "2026-08-04",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/contact",
    lastModified: "2026-08-04",
    changeFrequency: "monthly",
    priority: 0.8,
  },
];

export function getLocalizedUrl(locale: Locale, path: string) {
  const cleanPath = path === "/" ? "" : path;

  return `${productionSiteUrl}/${locale}${cleanPath}`;
}

