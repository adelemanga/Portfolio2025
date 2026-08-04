import type { GetServerSideProps } from "next";
import { locales } from "@/i18n/translations";
import { getLocalizedUrl, productionSiteUrl, publicRoutes } from "@/seo/site";

const rootLastModified = "2026-08-04";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function buildSitemap() {
  const rootUrl = `
  <url>
    <loc>${productionSiteUrl}/</loc>
    <lastmod>${rootLastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>`;

  const localizedUrls = publicRoutes
    .flatMap((route) =>
      locales.map((locale) => {
        const alternateLinks = locales
          .map(
            (alternateLocale) =>
              `    <xhtml:link rel="alternate" hreflang="${
                alternateLocale === "fr" ? "fr-FR" : "en-US"
              }" href="${escapeXml(getLocalizedUrl(alternateLocale, route.path))}" />`
          )
          .join("\n");

        return `
  <url>
    <loc>${escapeXml(getLocalizedUrl(locale, route.path))}</loc>
    <lastmod>${route.lastModified}</lastmod>
    <changefreq>${route.changeFrequency}</changefreq>
    <priority>${route.priority.toFixed(1)}</priority>
${alternateLinks}
    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(
      getLocalizedUrl("fr", route.path)
    )}" />
  </url>`;
      })
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">${rootUrl}${localizedUrls}
</urlset>`;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.setHeader("Cache-Control", "public, max-age=3600, s-maxage=3600");
  res.write(buildSitemap());
  res.end();

  return {
    props: {},
  };
};

export default function Sitemap() {
  return null;
}

