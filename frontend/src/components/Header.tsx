import { useEffect, useState, type ChangeEvent, type MouseEvent } from "react";
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
    document.body.classList.toggle("portfolio-drawer-open", isOpen);

    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("portfolio-drawer-open");
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
        document.body.classList.remove("portfolio-drawer-open");
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
    document.body.classList.remove("portfolio-drawer-open");
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [router.asPath]);

  const closeDrawer = () => {
    setIsOpen(false);
    document.body.style.overflow = "";
    document.body.classList.remove("portfolio-drawer-open");
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

  const handleLocaleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    switchLocale(event.target.value as Locale);
  };

  const languageSelector = (isDrawer = false) => (
    <div
      className={`language-select-wrap ${isDrawer ? "drawer-language-select-wrap" : ""}`}
      aria-label={t.nav.language}
    >
      <select
        className="language-select"
        value={locale}
        onChange={handleLocaleChange}
        aria-label={t.nav.language}
      >
        {locales.map((item) => (
          <option key={item} value={item}>
            {localeLabels[item].flag}{" "}
            {isDrawer ? localeLabels[item].nativeName : localeLabels[item].code}
          </option>
        ))}
      </select>
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

  const brand = (
    <Link
      href={getLocalizedPath(locale, "/")}
      locale={false}
      className="header-brand"
      aria-label={t.footer.websiteLabel}
      onClick={isMobile && isOpen ? closeDrawer : undefined}
    >
      <img
        src="/images/adele-web-studio-logo-gradient.png"
        alt="Adèle Web Studio"
        className="header-brand-logo"
      />
      <span className="header-brand-text">Portfolio 2025</span>
    </Link>
  );

  return (
    <header className="navbar">
      {brand}

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
