import { useEffect, useState, type MouseEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { localeLabels, locales, Locale } from "@/i18n/translations";
import { useTranslation } from "@/i18n/useTranslation";
import { getLocalizedPath } from "@/i18n/routes";

const navItems = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/projects", key: "projects" },
  { href: "/customer-advice", key: "reviews" },
  { href: "/blog", key: "blog" },
  { href: "/contact", key: "contact" },
] as const;

export default function Header() {
  const router = useRouter();
  const { locale, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const getIsMobile = () => window.innerWidth <= 768;

    const handleResize = () => {
      const nextIsMobile = getIsMobile();
      setIsMobile(nextIsMobile);
      if (!nextIsMobile) {
        setIsOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === "fr" ? "fr-FR" : "en-US";
    window.localStorage.setItem("portfolio-locale", locale);
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; SameSite=Lax`;
  }, [locale]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        document.body.style.overflow = "";
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = "";
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [router.asPath]);

  const closeDrawer = () => {
    setIsOpen(false);
    document.body.style.overflow = "";
  };

  const navigateFromDrawer = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();
    closeDrawer();
    router.push(getLocalizedPath(locale, href), undefined, { locale: false });
  };

  const switchLocale = (nextLocale: Locale) => {
    if (nextLocale === locale) {
      return;
    }

    window.localStorage.setItem("portfolio-locale", nextLocale);
    document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000; SameSite=Lax`;
    router.push(getLocalizedPath(nextLocale, router.asPath), undefined, {
      locale: false,
    });
  };

  const getNavLinkClassName = (href: string) =>
    router.pathname === href ? "active" : undefined;

  const languageSelector = (isDrawer = false) => (
    <div
      className={`language-switcher ${isDrawer ? "drawer-language-switcher" : ""}`}
      aria-label={t.nav.language}
    >
      {locales.map((item) => (
        <button
          key={item}
          type="button"
          className={`language-option ${locale === item ? "active" : ""}`}
          aria-label={localeLabels[item].ariaLabel}
          aria-pressed={locale === item}
          onClick={() => switchLocale(item)}
        >
          <span aria-hidden="true">{localeLabels[item].flag}</span>
          <span>{isDrawer ? localeLabels[item].nativeName : localeLabels[item].code}</span>
        </button>
      ))}
    </div>
  );

  const navList = (isDrawer = false) => (
    <ul>
      {navItems.map((item) => (
        <li key={item.href}>
          <Link
            href={getLocalizedPath(locale, item.href)}
            locale={false}
            className={getNavLinkClassName(item.href)}
            onClick={
              isDrawer
                ? (event) => navigateFromDrawer(event, item.href)
                : undefined
            }
          >
            {t.nav[item.key]}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <header className="navbar">
      {!isMobile && (
        <nav className="nav0" aria-label={t.nav.mainNavigation}>
          {navList()}
          {languageSelector()}
        </nav>
      )}

      {isMobile && (
        <>
          <button
            type="button"
            className="drawer-button"
            onClick={() => setIsOpen((previous) => !previous)}
            aria-label={isOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            <span className="drawer-button-icon" aria-hidden="true">
              {isOpen ? "×" : "☰"}
            </span>
          </button>

          {isOpen && <div className="overlay" onClick={closeDrawer}></div>}

          <div
            id="mobile-navigation"
            className={`drawer ${isOpen ? "open" : ""}`}
          >
            <div className="drawer-header">
              <div className="drawer-brand">
                <span className="drawer-brand-kicker">{t.footer.title}</span>
                <strong>{t.footer.name}</strong>
              </div>
            </div>

            <nav aria-label={t.nav.mobileNavigation}>
              {navList(true)}
            </nav>

            <div className="drawer-language-section">
              <p className="drawer-section-title">{t.nav.language}</p>
              {languageSelector(true)}
            </div>
          </div>
        </>
      )}
    </header>
  );
}
