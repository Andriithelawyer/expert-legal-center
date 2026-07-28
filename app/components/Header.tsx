"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  function closeMenu() {
    setMenuOpen(false);
  }

  function scrollToContacts() {
    closeMenu();

    if (pathname === "/") {
      const footer = document.querySelector("footer");

      footer?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });

      return;
    }

    sessionStorage.setItem("scrollToContacts", "true");

    router.push("/");
  }

  return (
    <header className="header">

      <div className="container headerContent">

        <div className="logo">

          <Link
            href="/"
            className="logoLink"
            onClick={closeMenu}
          >
            <h2>Expert Legal Center</h2>

            <span>
              Правнича допомога дистанційно
            </span>

          </Link>

        </div>

        <nav className="navigation">

          <a href="/#services">
            Послуги
          </a>

          <Link href="/knowledge">
            Корисні матеріали
          </Link>

          <a href="/#about">
            Про центр
          </a>

          <button
            type="button"
            className="navButton"
            onClick={scrollToContacts}
          >
            Контакти
          </button>

        </nav>

        <Link
          href="/consultation"
          className="headerButton"
        >
          Отримати консультацію
        </Link>

        <button
          className={`burger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Меню"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

      <div className={`mobileMenu ${menuOpen ? "open" : ""}`}>

        <Link href="/" onClick={closeMenu}>
          Головна
        </Link>

        <a href="/#services" onClick={closeMenu}>
          Послуги
        </a>

        <Link href="/knowledge" onClick={closeMenu}>
          Корисні матеріали
        </Link>

        <a href="/#about" onClick={closeMenu}>
          Про центр
        </a>

        <button
          type="button"
          className="mobileMenuLink"
          onClick={scrollToContacts}
        >
          Контакти
        </button>

        <Link
          href="/consultation"
          className="mobileButton"
          onClick={closeMenu}
        >
          Отримати консультацію
        </Link>

      </div>

      {menuOpen && (
        <div
          className="mobileOverlay"
          onClick={closeMenu}
        />
      )}

    </header>
  );
}