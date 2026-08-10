import Link from "next/link";

const services = [
  {
    title: "Emergency Drain Unblocking",
    text: "Fast help for blocked drains, toilets, sinks and external drainage problems.",
    href: "/services/emergency-drain-unblocking",
    icon: "🚨",
  },
  {
    title: "CCTV Drain Surveys",
    text: "High-quality CCTV inspections to identify blockages, damage, roots and hidden drainage problems.",
    href: "/services/cctv-drain-surveys",
    icon: "◉",
  },
  {
    title: "High Pressure Water Jetting",
    text: "Powerful drain jetting to clear stubborn blockages, grease, silt and accumulated debris.",
    href: "/services/drain-jetting",
    icon: "↯",
  },
  {
    title: "Drain Repairs",
    text: "Professional repairs for damaged, cracked, collapsed and leaking drainage systems.",
    href: "/services/drain-repairs",
    icon: "⚒",
  },
  {
    title: "Drain Relining",
    text: "Repair suitable damaged pipes without always needing traditional excavation.",
    href: "/services/drain-relining",
    icon: "◎",
  },
  {
    title: "Commercial Drainage",
    text: "Reliable drainage support for commercial properties, landlords and businesses.",
    href: "/services/commercial-drainage",
    icon: "▦",
  },
];

const benefits = [
  "Fast response across London",
  "Experienced drainage professionals",
  "Clear pricing before work starts",
  "Domestic and commercial drainage",
  "CCTV investigation available",
  "Emergency assistance available",
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" />
              London drainage specialists
            </div>

            <h1>
              Fast, reliable
              <span> drainage solutions.</span>
            </h1>

            <p className="hero-text">
              UK Drain Response provides professional drain unblocking,
              CCTV surveys, jetting and drainage repairs for homes and
              businesses across London.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="tel:08000000000">
                Call for help
                <span>→</span>
              </a>

              <Link className="button button-secondary" href="/contact">
                Request a quote
              </Link>
            </div>

           
          </div>

          <div className="hero-card">
<div className="hero-visual">
    <img
      src="/images/uk-drain-response-van.webp"
      alt="UK Drain Response drainage van"
      className="hero-van"
      width="1536"
      height="548"
    />

    
  </div>
</div>
   </div>
    </section>

<section className="trust-strip" aria-label="UK Drain Response service benefits">
  <div className="container trust-features">
    <div className="trust-feature">
      <span className="trust-icon">24/7</span>
      <div>
        <strong>Emergency Response</strong>
        <span>Help when drainage problems can't wait</span>
      </div>
    </div>

    <div className="trust-feature">
      <span className="trust-icon">✓</span>
      <div>
        <strong>Professional Service</strong>
        <span>Clear advice and practical solutions</span>
      </div>
    </div>
    <div className="trust-feature">
      <span className="trust-icon">⌖</span>
      <div>
        <strong>London Coverage</strong>
        <span>Serving homes and businesses across London</span>
      </div>
    </div>

    <div className="trust-feature">
      <span className="trust-icon">↗</span>
      <div>
        <strong>Domestic & Commercial</strong>
        <span>Drainage support for properties of all sizes</span>
      </div>
    </div>
  </div>
</section>

      <section className="section section-dark">
        <div className="container split">
          <div>
            <div className="eyebrow eyebrow-light">Why UK Drain Response</div>
            <h2>Professional drainage without the runaround.</h2>
            <p className="dark-copy">
              Drainage problems can quickly become disruptive. Our approach
              is simple: respond quickly, identify the problem properly and
              explain the work before we carry it out.
            </p>

            <Link className="button button-light" href="/about">
              About UK Drain Response →
            </Link>
          </div>

          <div className="benefit-list">
            {benefits.map((benefit) => (
              <div className="benefit" key={benefit}>
                <span>✓</span>
                <strong>{benefit}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading centered">
            <div>
              <div className="eyebrow">How it works</div>
              <h2>A straightforward approach to drainage.</h2>
            </div>
          </div>

          <div className="steps">
            <div className="step">
              <span>01</span>
              <h3>Tell us the problem</h3>
              <p>
                Call or send an enquiry and explain what is happening at the
                property.
              </p>
            </div>

            <div className="step">
              <span>02</span>
              <h3>We investigate</h3>
              <p>
                Where required, we use professional equipment to identify the
                cause rather than simply treating the symptoms.
              </p>
            </div>

            <div className="step">
              <span>03</span>
              <h3>We solve it</h3>
              <p>
                We explain the recommended solution and get the drainage
                system working properly again.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="location-section">
        <div className="container location-inner">
          <div>
            <div className="eyebrow">London drainage services</div>
            <h2>Local drainage help across London.</h2>
            <p>
              We're starting in London and building a detailed local service
              network. Our area pages will provide genuinely local information
              rather than duplicated location content.
            </p>
          </div>

          <Link className="button button-primary" href="/areas/london">
            Explore London services →
          </Link>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-inner">
          <div>
            <div className="eyebrow eyebrow-light">Need help?</div>
            <h2>Got a drainage problem?</h2>
            <p>Speak to UK Drain Response and tell us what is happening.</p>
          </div>

          <div className="cta-actions">
            <a className="button button-orange" href="tel:08000000000">
              Call 0800 XXX XXXX
            </a>
            <Link className="button button-outline-light" href="/contact">
              Request a quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
