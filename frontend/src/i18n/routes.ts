import { Locale } from "./translations";

export function removeLocalePrefix(path: string) {
  const cleanPath = path.replace(/^\/(fr|en)(?=\/|$)/, "") || "/";
  return cleanPath;
}

export function getLocalizedPath(locale: Locale, path: string) {
  const cleanPath = removeLocalePrefix(path);

  if (locale === "fr") {
    return cleanPath === "/" ? "/fr" : `/fr${cleanPath}`;
  }

  return cleanPath === "/" ? "/en" : `/en${cleanPath}`;
}
