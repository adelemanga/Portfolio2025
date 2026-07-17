import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="navbar">
      {/* Menu Desktop */}
      {!isMobile && (
        <nav className="nav0">
          <ul>
            <li className="nav1">
              <Link href="/">Accueil🏠</Link>
            </li>
            <li className="nav1">
              <Link href="/about">A propos de moi🙋🏽‍♀️🫱🏾‍🫲🏽</Link>
            </li>
            <li className="nav2">
              <Link href="/projects">Mes projets🗂️</Link>
            </li>
            <li className="nav3">
              <Link href="/customer-advice">Les avis clients⭐⭐⭐</Link>
            </li>
            <li className="nav3">
              <Link href="/blog">Mon blog📝</Link>
            </li>
            <li className="nav3">
              <Link href="/contact">Contact📞</Link>
            </li>
          </ul>
        </nav>
      )}

      {/* Drawer Mobile */}
      {isMobile && (
        <>
          <button className="drawer-button" onClick={() => setIsOpen(true)}>
            ☰
          </button>

          {isOpen && (
            <div className="overlay" onClick={() => setIsOpen(false)}></div>
          )}

          <div className={`drawer ${isOpen ? "open" : ""}`}>
            <button className="close-button" onClick={() => setIsOpen(false)}>
              ✕
            </button>
            <nav>
              <ul>
                <li>
                  <Link href="/" onClick={() => setIsOpen(false)}>
                    Home🏠
                  </Link>
                </li>
                <li>
                  <Link href="/about" onClick={() => setIsOpen(false)}>
                    About Me🙋🏽‍♀️🫱🏾‍🫲🏽
                  </Link>
                </li>
                <li>
                  <Link href="/projects" onClick={() => setIsOpen(false)}>
                    My Projects🗂️
                  </Link>
                </li>
                <li>
                  <Link
                    href="/customer-advice"
                    onClick={() => setIsOpen(false)}
                  >
                    Customer Advices⭐⭐⭐
                  </Link>
                </li>
                <li>
                  <Link href="/blog" onClick={() => setIsOpen(false)}>
                    My Blog📝
                  </Link>
                </li>
                <li>
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Contact📞
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
