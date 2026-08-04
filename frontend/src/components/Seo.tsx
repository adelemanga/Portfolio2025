import Head from "next/head";
import { useRouter } from "next/router";
import { Locale } from "@/i18n/translations";
import { useTranslation } from "@/i18n/useTranslation";

const siteUrl = "https://portfolio.adelewebstudio.com";

type SeoProps = {
  title: string;
  description?: string;
};

function getLocalizedUrl(locale: Locale, pathname: string) {
  const cleanPath = pathname === "/" ? "" : pathname;
  return `${siteUrl}/${locale}${cleanPath}`;
}

export default function Seo({ title, description }: SeoProps) {
  const router = useRouter();
  const { locale, t } = useTranslation();
  const metaDescription = description || t.seo.defaultDescription;
  const canonical = getLocalizedUrl(locale, router.pathname);

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={t.seo.siteName} />
      <link rel="canonical" href={canonical} />
      <link rel="alternate" hrefLang="fr-FR" href={getLocalizedUrl("fr", router.pathname)} />
      <link rel="alternate" hrefLang="en-US" href={getLocalizedUrl("en", router.pathname)} />
      <link rel="alternate" hrefLang="x-default" href={getLocalizedUrl("fr", router.pathname)} />
    </Head>
  );
}
