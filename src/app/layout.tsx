import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "UK Drain Response | Drainage Services",
  description:
    "Professional drainage services across London, Hertfordshire and Bedfordshire including drain unblocking, CCTV surveys, jetting, repairs and emergency drainage.",
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

  <div className="nav-dropdown">
    <button className="nav-dropdown-button" type="button">
      Areas <span>⌄</span>
    </button>

    <div className="nav-dropdown-menu">
      <Link href="/london-drainage">
        London
      </Link>

      <Link href="/hertfordshire-drainage">
        Hertfordshire
      </Link>

      <Link href="/bedfordshire-drainage">
        Bedfordshire
      </Link>
    </div>
  </div>

  <Link href="/about">About</Link>

  <Link href="/contact">Contact</Link>
</nav>

            <a href="tel:08000029910" className="header-phone">
              <small>24/7 RESPONSE</small>
              <strong>0800 002 9910</strong>
            </a>
          </div>
        </header>

        {children}

        <footer className="site-footer">
          <div className="container footer-grid">
            <div>
              <Logo />
              <p>
                Professional drainage services for homes, landlords and
                businesses across London, Hertfordshire and Bedfordshire.
              </p>
            </div>

            <div>
              <h3>Services</h3>

              <Link href="/drain-unblocking">
                Drain Unblocking
              </Link>

              <Link href="/cctv-drain-surveys">
                CCTV Drain Surveys
              </Link>

              <Link href="/drain-jetting">
                Drain Jetting
              </Link>

              <Link href="/drain-repairs">
                Drain Repairs
              </Link>

              <Link href="/drain-relining">
                Drain Relining
              </Link>

              <Link href="/commercial-drainage">
                Commercial Drainage
              </Link>

              <Link href="/emergency-drainage">
                Emergency Drainage
              </Link>
            </div>

            <div>
              <h3>Areas</h3>

              <Link href="/areas">
                All Areas
              </Link>

              <Link href="/london-drainage">
                London
              </Link>

              <Link href="/hertfordshire-drainage">
                Hertfordshire
              </Link>

              <Link href="/bedfordshire-drainage">
                Bedfordshire
              </Link>

              <h3 className="mt-6">Company</h3>

              <Link href="/about">
                About
              </Link>

              <Link href="/contact">
                Contact
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
