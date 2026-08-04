import Link from "next/link";
import { useTranslation } from "@/i18n/useTranslation";
import { getLocalizedPath } from "@/i18n/routes";

export default function AboutMe() {
  const { locale, t } = useTranslation();

  return (
    <div className="portfolio">
      <div className="blur-background"></div>

      <div className="profile-card">
        <div className="image-container">
          <div className="image-border">
            <img
              src="https://i.imgur.com/1LdqBMP.jpeg"
              alt={t.about.imageAlt}
              width={180}
              height={180}
              className="profile-img"
            />
          </div>
        </div>

        <div className="text-content">
          <h1 className="title">
            {t.about.title} <span>Adèle Manga</span>
          </h1>
          <p className="subtitle">{t.about.subtitle}</p>

          <div className="buttons">
            <Link
              href={getLocalizedPath(locale, "/projects")}
              locale={false}
              className="btn"
            >
              {t.about.projectsCta}
            </Link>
            <Link
              href={getLocalizedPath(locale, "/contact")}
              locale={false}
              className="btn-outline"
            >
              {t.about.contactCta}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
