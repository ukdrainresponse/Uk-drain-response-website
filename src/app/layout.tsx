import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://uk-drain-response-website.vercel.app"),
  title: {
    default: "UK Drain Response | Drainage Services London",
    template: "%s | UK Drain Response",
  },
  description:
    "Professional drainage services across London including emergency drain unblocking, CCTV drain surveys, drain jetting and drain repairs.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "UK Drain Response | London Drainage Services",
    description:
      "Fast, reliable drainage solutions for homes and businesses across London.",
    type: "website",
  },
};

function Logo() {
  return (
    <Link className="site-logo" href="/">
      <span className="site-shield">UK</span>
      <span className="site-logo-text">
        <strong>UK DRAIN</strong>
        <span>RESPONSE</span>
      </span>
    </Link>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body>
        <header className="site-header">
          <div className="container header-inner">
            <Logo />

            <nav className="desktop-nav" aria-label="Main navigation">
              <Link href="/">Home</Link>
              <Link href="/services">Services</Link>
              <Link href="/areas/london">Areas</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </nav>

            <a className="header-call" href="tel:08000000000">
              <span>24/7</span>
              Call us
            </a>
          </div>
        </header>

        {children}

        <footer className="site-footer">
          <div className="container footer-grid">
            <div>
              <Logo />
              <p>
                Professional drainage solutions for homes and businesses
                across London.
              </p>
            </div>

            <div>
              <h3>Services</h3>
              <Link href="/services/emergency-drain-unblocking">
                Emergency Drain Unblocking
              </Link>
              <Link href="/services/cctv-drain-surveys">
                CCTV Drain Surveys
              </Link>
              <Link href="/services/drain-jetting">Drain Jetting</Link>
              <Link href="/services/drain-repairs">Drain Repairs</Link>
            </div>

            <div>
              <h3>Company</h3>
              <Link href="/about">About Us</Link>
              <Link href="/areas/london">London</Link>
              <Link href="/contact">Contact</Link>
            </div>

            <div>
              <h3>Need help?</h3>
              <a href="tel:08000000000">0800 XXX XXXX</a>
              <a href="mailto:info@ukdrainresponse.co.uk">
                info@ukdrainresponse.co.uk
              </a>
            </div>
          </div>

          <div className="container footer-bottom">
            <span>© {new Date().getFullYear()} UK Drain Response</span>
            <span>Professional drainage services</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
