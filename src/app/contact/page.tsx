import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact UK Drain Response | Drainage Enquiries",
  description:
    "Contact UK Drain Response for drain unblocking, emergency drainage and general drainage enquiries.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="service-hero">
        <div className="container service-hero-inner">
          <div className="service-hero-content">
            <div className="eyebrow">CONTACT UK DRAIN RESPONSE</div>

            <h1>
              Need help with a drain?
              <span> Get in touch.</span>
            </h1>

            <p>
              Tell us about your drainage problem and we'll help arrange the
              right response for your property.
            </p>

            <div className="hero-actions">
              <a href="tel:YOURNUMBER" className="btn btn-primary">
                Call now →
              </a>

              <a href="mailto:YOUREMAIL" className="btn btn-secondary">
                Email us
              </a>
            </div>

            <div className="service-trust">
              <span>✓ 24/7 response</span>
              <span>✓ Domestic &amp; commercial</span>
              <span>✓ Professional drainage specialists</span>
            </div>
          </div>
        </div>
      </section>

      <section className="service-content">
        <div className="container">
          <div className="contact-heading">
            <div className="eyebrow">GET IN TOUCH</div>

            <h2>How can we help?</h2>

            <p>
              Whether you have a blocked drain, overflowing gully, drainage
              emergency or need advice about another drainage issue, contact
              UK Drain Response and tell us what's happening.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}