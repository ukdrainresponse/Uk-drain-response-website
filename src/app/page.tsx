import Link from "next/link";

const services = [
  {
    title: "Emergency Drain Unblocking",
    text: "Fast help for blocked drains, toilets, sinks and external drainage problems.",
    href: "/drain-unblocking",
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
     <section className="bg-[#082f49] text-white">
  <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
    
    {/* LEFT SIDE */}
    <div className="max-w-3xl">
      <p className="mb-3 font-semibold uppercase tracking-wider text-[#14b8a6]">
        London Drainage Specialists
      </p>

      <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
        Fast, Reliable
        <span className="block text-[#14b8a6]">
          Drainage Solutions
        </span>
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
        UK Drain Response provides professional drain unblocking, CCTV surveys,
        drain jetting and drainage repairs for homes and businesses.
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <a
          href="tel:08000000000"
          className="rounded-lg bg-orange-500 px-7 py-3 text-center font-bold text-white transition hover:bg-orange-600"
        >
          Call for Help
        </a>

        <Link
          href="/contact"
          className="rounded-lg border border-white px-7 py-3 text-center font-bold text-white transition hover:bg-white hover:text-[#082f49]"
        >
          Request a Quote
        </Link>
      </div>

      <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
        <span>✓ Fast response</span>
        <span>✓ Clear pricing</span>
        <span>✓ Domestic & commercial</span>
      </div>
    </div>

    {/* RIGHT SIDE - VAN */}
    <div className="flex items-center justify-center">
      <div className="overflow-hidden rounded-2xl bg-white/5 p-4">
        <img
          src="/images/uk-drain-response-van.webp"
          alt="UK Drain Response drainage van"
          className="h-auto w-full"
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
<section className="services-section" id="services">
  <div className="container">
    <div className="services-heading">
      <span className="section-kicker">OUR DRAINAGE SERVICES</span>

      <h2>
        Drainage problems.
        <br />
        <span>Sorted properly.</span>
      </h2>

      <p>
        From emergency blockages to CCTV inspections and drain repairs,
        UK Drain Response provides professional drainage services across London.
      </p>
    </div>

    <div className="services-grid">
      <a href="/drain-unblocking" className="service-card">
        <div className="service-number">01</div>
        <div className="service-icon">↘</div>
        <h3>Blocked Drains</h3>
        <p>Fast diagnosis and clearance for blocked drains at homes and commercial properties.</p>
        <span className="service-link">View service →</span>
      </a>

      <a href="/emergency-drainage" className="service-card featured">
        <div className="service-number">02</div>
        <div className="service-icon">24/7</div>
        <h3>Emergency Drainage</h3>
        <p>Rapid drainage response when a blockage, overflow or drainage problem cannot wait.</p>
        <span className="service-link">Get emergency help →</span>
      </a>

      <a href="/cctv-drain-surveys" className="service-card">
        <div className="service-number">03</div>
        <div className="service-icon">◎</div>
        <h3>CCTV Drain Surveys</h3>
        <p>Inspect underground drainage and identify blockages, damage and recurring problems.</p>
        <span className="service-link">View service →</span>
      </a>

      <a href="/drain-jetting" className="service-card">
        <div className="service-number">04</div>
        <div className="service-icon">≋</div>
        <h3>Drain Jetting</h3>
        <p>High-pressure water jetting to clear grease, silt and stubborn deposits from drainage systems.</p>
        <span className="service-link">View service →</span>
      </a>

      <a href="/drain-repairs" className="service-card">
        <div className="service-number">05</div>
        <div className="service-icon">◇</div>
        <h3>Drain Repairs</h3>
        <p>Practical repair solutions for cracked, damaged or collapsed drainage systems.</p>
        <span className="service-link">View service →</span>
      </a>

      <a href="/commercial-drainage" className="service-card">
        <div className="service-number">06</div>
        <div className="service-icon">▦</div>
        <h3>Commercial Drainage</h3>
        <p>Responsive drainage services for businesses, landlords and commercial properties.</p>
        <span className="service-link">View service →</span>
      </a>
    </div>
  </div>
</section>

{/* Why Choose Us */}
<section className="why-section">
  <div className="container">
    <div className="why-heading">
      <span className="section-label">WHY UK DRAIN RESPONSE</span>

      <h2>
        Professional drainage help
        <br />
        <span>when you need it.</span>
      </h2>

      <p>
        From urgent blockages to planned drainage work, we provide
        practical solutions for homes and businesses across London.
      </p>
    </div>

    <div className="why-grid">
      <div className="why-card">
        <div className="why-icon">24/7</div>
        <h3>24/7 Response</h3>
        <p>
          Drainage problems can happen at any time. Our team is available
          when you need help.
        </p>
      </div>

      <div className="why-card">
        <div className="why-icon">✓</div>
        <h3>Professional Service</h3>
        <p>
          Straightforward advice and practical drainage solutions for
          domestic and commercial properties.
        </p>
      </div>

      <div className="why-card">
        <div className="why-icon">◎</div>
        <h3>Specialist Equipment</h3>
        <p>
          Professional equipment for drain clearing, CCTV inspections,
          jetting and drainage repairs.
        </p>
      </div>

      <div className="why-card">
        <div className="why-icon">↗</div>
        <h3>London Coverage</h3>
        <p>
          Serving homes, landlords and businesses across London with a
          responsive drainage service.
        </p>
      </div>
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
  <div className="container location-layout">
    <div className="location-copy">
      <div className="eyebrow">Drainage services across London</div>

      <h2>Local drainage help across London.</h2>

      <p>
        UK Drain Response provides professional drainage services for homes,
        landlords and businesses across London, including emergency drain
        unblocking, CCTV surveys, drain jetting and drainage repairs.
      </p>

      <Link className="button button-primary" href="/areas/london">
        Explore London services →
      </Link>
    </div>

    <div className="location-links">
      <Link href="/areas/central-london">Central London <span>→</span></Link>
      <Link href="/areas/north-london">North London <span>→</span></Link>
      <Link href="/areas/south-london">South London <span>→</span></Link>
      <Link href="/areas/east-london">East London <span>→</span></Link>
      <Link href="/areas/west-london">West London <span>→</span></Link>
      <Link href="/areas/london">View all London areas <span>→</span></Link>
    </div>
  </div>
</section>

      <section className="final-cta">
  <div className="container final-cta-inner">
    <div>
      <div className="eyebrow eyebrow-light">24/7 drainage response</div>

      <h2>Need a drainage specialist?</h2>

      <p>
        Speak to UK Drain Response for fast, professional drainage help
        across London.
      </p>
    </div>

    <div className="final-cta-actions">
      <a
        className="button button-orange"
        href="tel:08000000000"
      >
        Call now →
      </a>

      <Link
        className="button button-outline-light"
        href="/contact"
      >
        Request a quote
      </Link>
    </div>
  </div>
</section>
    </main>
  );
}
