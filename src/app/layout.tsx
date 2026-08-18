import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "UK Drain Response | Drainage Services London",
  description:
    "Fast, professional drainage services across London including drain unblocking, CCTV surveys, jetting and drain repairs.",
};

function Logo() {
  return (
    <Link href="/" className="site-logo" aria-label="UK Drain Response home">
      <img
        src="/images/uk-drain-response-header-logo.png"
        alt="UK Drain Response"
        width="300"
        height="120"
        className="brand-logo"
      />
    </Link>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <body>
        <header className="site-header">
          <div className="container header-inner">
            <Logo />

            <nav className="main-nav" aria-label="Main navigation">
              <Link href="/">Home</Link>
              <Link href="/services">Services</Link>
              <Link href="/areas/london">Areas</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </nav>

            <a href="tel:08000000000" className="header-phone">
              <small>24/7 RESPONSE</small>
              <strong>Call us</strong>
            </a>
          </div>
        </header>

        {children}

        <footer className="site-footer">
          <div className="container footer-grid">
            <div>
              <Logo />
              <p>
                Professional drainage services for homes and businesses
                across London.
              </p>
            </div>

            <div>
              <h3>Services</h3>
              <Link href="/drain-unblocking">
                Drain Unblocking
              </Link>
              <Link href="/services/cctv-drain-surveys">
                CCTV Drain Surveys
              </Link>
              <Link href="/services/drain-jetting">
                Drain Jetting
              </Link>
              <Link href="/services/drain-repairs">
                Drain Repairs
              </Link>
            </div>

            <div>
              <h3>Company</h3>
              <Link href="/about">About</Link>
              <Link href="/areas/london">London</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
