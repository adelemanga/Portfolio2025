import { useTranslation } from "@/i18n/useTranslation";
import Link from "next/link";
import { getLocalizedPath } from "@/i18n/routes";

function Footer() {
  const { locale, t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/projects", label: t.nav.projects },
    { href: "/customer-advice", label: t.nav.reviews },
    { href: "/blog", label: t.nav.blog },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <div className="portfolio-footer-wrap">
      <footer className="portfolio-footer">
        <div className="portfolio-footer-grid">
          <section className="portfolio-footer-brand" aria-label={t.footer.title}>
            <img
              src="/images/adele-web-studio-logo-gradient.png"
              alt="Adèle Web Studio"
              className="portfolio-footer-logo"
              width="128"
              height="73"
            />
            <p className="portfolio-footer-kicker">{t.footer.title}</p>
            <h2>{t.footer.name}</h2>
            <p className="portfolio-footer-role">{t.footer.role}</p>
            <p className="portfolio-footer-description">{t.footer.description}</p>
          </section>

          <nav className="portfolio-footer-nav" aria-label={t.footer.navigationTitle}>
            <h3>{t.footer.navigationTitle}</h3>
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={getLocalizedPath(locale, link.href)} locale={false}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <section className="portfolio-footer-contact">
            <h3>{t.footer.contactTitle}</h3>
            <a
              href="https://adelewebstudio.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.footer.websiteLabel}
            >
              {t.footer.website}
            </a>
            <a href="mailto:contact@adelewebstudio.com" aria-label={t.footer.emailLabel}>
              contact@adelewebstudio.com
            </a>
            <a href="tel:+33783697464" aria-label={t.footer.phoneLabel}>
              07 83 69 74 64
            </a>
            <Link
              href={getLocalizedPath(locale, "/contact")}
              locale={false}
              className="portfolio-footer-cta"
              aria-label={t.footer.contactLabel}
            >
              {t.footer.contact}
            </Link>
          </section>
        </div>

        <div className="portfolio-footer-bottom">
          <p>
            © {currentYear} {t.footer.name}. {t.footer.copyright}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
