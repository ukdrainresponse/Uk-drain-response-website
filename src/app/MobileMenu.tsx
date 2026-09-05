"use client";

import Link from "next/link";
import { useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <div className="mobile-menu">
      <button
        type="button"
        className="mobile-menu-button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label="Toggle mobile navigation"
      >
        Menu
      </button>

      {open && (
        <nav
          className="mobile-menu-panel"
          aria-label="Mobile navigation"
        >
          <Link href="/" onClick={closeMenu}>
            Home
          </Link>

          <Link href="/services" onClick={closeMenu}>
            Services
          </Link>

          <div className="mobile-menu-heading">Areas</div>

          <Link
            href="/london-drainage"
            className="mobile-area-link"
            onClick={closeMenu}
          >
            London
          </Link>

          <Link
            href="/hertfordshire-drainage"
            className="mobile-area-link"
            onClick={closeMenu}
          >
            Hertfordshire
          </Link>

          <Link
            href="/bedfordshire-drainage"
            className="mobile-area-link"
            onClick={closeMenu}
          >
            Bedfordshire
          </Link>

          <Link href="/about" onClick={closeMenu}>
            About
          </Link>

          <Link href="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </nav>
      )}
    </div>
  );
}