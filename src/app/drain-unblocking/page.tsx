import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Drain Unblocking | 24/7 Drainage Specialists | UK Drain Response",
  description:
    "Professional drain unblocking for homes and businesses. UK Drain Response provides fast help with blocked drains, toilets, sinks and drainage emergencies.",
};

export default function DrainUnblockingPage() {
  return (
    <main>

      {/* HERO */}
      <section className="service-hero">
        <div className="container service-hero-inner">
          <div className="service-hero-content">
            <div className="eyebrow">24/7 DRAIN UNBLOCKING</div>

            <h1>
              Blocked drain?
              <span> We&apos;ll get it moving.</span>
            </h1>

            <p>
              Fast, professional drain unblocking for homes and businesses.
              From blocked toilets and sinks to stubborn external drains, our
              drainage specialists are ready to help.
            </p>

            <div className="hero-actions">
              <a href="tel:YOURNUMBER" className="btn btn-primary">
                Call now →
              </a>

              <Link href="/contact" className="btn btn-secondary">
                Request a quote
              </Link>
            </div>

            <div className="service-trust">
              <span>✓ 24/7 response</span>
              <span>✓ Domestic & commercial</span>
              <span>✓ Professional drainage specialists</span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="service-section">
        <div className="container service-content-grid">
          <div>
            <div className="eyebrow">DRAIN UNBLOCKING</div>

            <h2>Fast help when your drains stop flowing</h2>

            <p>
              A blocked drain can quickly become more than an inconvenience.
              Slow-draining water, unpleasant smells, overflowing gullies and
              backed-up toilets can all indicate a blockage somewhere in your
              drainage system.
            </p>

            <p>
              UK Drain Response provides professional drain unblocking for
              domestic and commercial properties, using appropriate equipment
              to locate and clear drainage blockages efficiently.
            </p>
          </div>

          <div className="service-card">
            <h3>Common drainage problems</h3>

            <ul>
              <li>Blocked external drains</li>
              <li>Blocked toilets</li>
              <li>Blocked sinks and waste pipes</li>
              <li>Slow-draining water</li>
              <li>Overflowing gullies</li>
              <li>Recurring drain blockages</li>
              <li>Bad smells from drains</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="service-section service-section-alt">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">HOW WE HELP</div>
            <h2>Getting your drains flowing again</h2>
            <p>
              We focus on identifying the cause of the problem and using the
              appropriate method to clear the blockage.
            </p>
          </div>

          <div className="process-grid">
            <div className="process-card">
              <span>01</span>
              <h3>Assess</h3>
              <p>
                We assess the symptoms and drainage system to determine where
                the blockage is likely to be.
              </p>
            </div>

            <div className="process-card">
              <span>02</span>
              <h3>Clear</h3>
              <p>
                Professional drainage equipment is used to remove the blockage
                and restore flow.
              </p>
            </div>

            <div className="process-card">
              <span>03</span>
              <h3>Check</h3>
              <p>
                We check the drainage system and advise if further investigation
                or repair may be required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="service-section">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">RELATED SERVICES</div>
            <h2>More than just drain unblocking</h2>
          </div>

          <div className="related-grid">
            <Link href="/cctv-drain-surveys" className="related-card">
              <h3>CCTV Drain Surveys</h3>
              <p>Investigate recurring problems and inspect your drains.</p>
              <span>Learn more →</span>
            </Link>

            <Link href="/drain-jetting" className="related-card">
              <h3>Drain Jetting</h3>
              <p>High-pressure cleaning for stubborn drainage blockages.</p>
              <span>Learn more →</span>
            </Link>

            <Link href="/drain-repairs" className="related-card">
              <h3>Drain Repairs</h3>
              <p>Solutions for damaged, cracked or collapsed drainage.</p>
              <span>Learn more →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="container final-cta-inner">
          <div>
            <div className="eyebrow eyebrow-light">24/7 DRAINAGE RESPONSE</div>
            <h2>Got a blocked drain?</h2>
            <p>
              Speak to UK Drain Response for professional drain unblocking.
            </p>
          </div>

          <div className="final-cta-actions">
            <a href="tel:YOURNUMBER" className="btn btn-primary">
              Call now →
            </a>

            <Link href="/contact" className="btn btn-outline-light">
              Request a quote
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}