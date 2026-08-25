import Link from "next/link";

export const metadata = {
  title: "Contact UK Drain Response | Drainage Help",
  description:
    "Contact UK Drain Response for professional drainage help across London, Hertfordshire and Bedfordshire.",
};

export default function ContactPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-[#082f49] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="mb-3 font-semibold uppercase tracking-wider text-[#14b8a6]">
              Contact UK Drain Response
            </p>

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              Need Help With a Drainage Problem?
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Tell us what is happening and we can help you identify the right
              drainage service. We provide drainage support across London,
              Hertfordshire and Bedfordshire.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:08000029910"
                className="rounded-lg bg-orange-500 px-7 py-3 text-center font-bold text-white transition hover:bg-orange-600"
              >
                Call 0800 002 9910
              </a>

              <Link
                href="/emergency-drainage"
                className="rounded-lg border border-white px-7 py-3 text-center font-bold text-white transition hover:bg-white hover:text-[#082f49]"
              >
                Emergency Drainage
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT OPTIONS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="font-semibold text-[#0f766e]">
                Speak to UK Drain Response
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                The Quickest Way to Get Drainage Help
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                If you have a blocked drain, overflowing gully, recurring
                drainage problem or damaged pipework, call UK Drain Response
                and explain what is happening.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                We can establish which drainage service is likely to be
                required and help arrange the appropriate response.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-100 p-8">
              <p className="font-semibold text-[#0f766e]">Call us</p>

              <a
                href="tel:08000029910"
                className="mt-2 block text-3xl font-bold text-slate-900 transition hover:text-[#0f766e]"
              >
                0800 002 9910
              </a>

              <p className="mt-4 leading-7 text-slate-600">
                Call to discuss your drainage problem and the service you
                require.
              </p>

              <div className="mt-6 border-t border-slate-200 pt-6">
                <p className="font-bold text-slate-900">
                  Emergency drainage problem?
                </p>

                <p className="mt-2 text-slate-600">
                  If the problem requires urgent attention, visit our emergency
                  drainage page.
                </p>

                <Link
                  href="/emergency-drainage"
                  className="mt-4 inline-block font-semibold text-[#0f766e]"
                >
                  Emergency Drainage →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE CHOICES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold text-[#0f766e]">
              What Do You Need Help With?
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Choose Your Drainage Service
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              If you already know what type of drainage service you need,
              select it below for more information.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/drain-unblocking"
              className="rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-5 text-4xl">🔧</div>

              <h3 className="text-xl font-bold text-slate-900">
                Drain Unblocking
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Blocked drains, toilets, gullies and slow-running drainage.
              </p>

              <p className="mt-5 font-semibold text-[#0f766e]">
                Drain Unblocking →
              </p>
            </Link>

            <Link
              href="/drain-jetting"
              className="rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-5 text-4xl">💧</div>

              <h3 className="text-xl font-bold text-slate-900">
                Drain Jetting
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                High-pressure jetting for stubborn deposits, grease, silt and
                debris.
              </p>

              <p className="mt-5 font-semibold text-[#0f766e]">
                Drain Jetting →
              </p>
            </Link>

            <Link
              href="/cctv-drain-surveys"
              className="rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-5 text-4xl">📹</div>

              <h3 className="text-xl font-bold text-slate-900">
                CCTV Drain Surveys
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Investigate recurring problems and inspect underground
                drainage.
              </p>

              <p className="mt-5 font-semibold text-[#0f766e]">
                CCTV Surveys →
              </p>
            </Link>

            <Link
              href="/drain-repairs"
              className="rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-5 text-4xl">🛠️</div>

              <h3 className="text-xl font-bold text-slate-900">
                Drain Repairs
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Repair damaged, cracked, displaced or collapsed drainage
                systems.
              </p>

              <p className="mt-5 font-semibold text-[#0f766e]">
                Drain Repairs →
              </p>
            </Link>

            <Link
              href="/drain-relining"
              className="rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-5 text-4xl">🧱</div>

              <h3 className="text-xl font-bold text-slate-900">
                Drain Relining
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Trenchless internal repairs for suitable damaged drainage
                pipework.
              </p>

              <p className="mt-5 font-semibold text-[#0f766e]">
                Drain Relining →
              </p>
            </Link>

            <Link
              href="/commercial-drainage"
              className="rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-5 text-4xl">🏢</div>

              <h3 className="text-xl font-bold text-slate-900">
                Commercial Drainage
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Drainage services for businesses, landlords and commercial
                properties.
              </p>

              <p className="mt-5 font-semibold text-[#0f766e]">
                Commercial Drainage →
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold text-[#0f766e]">Areas We Cover</p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Find Drainage Services in Your Area
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              Select your area to view more information about our local
              drainage services.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Link
              href="/london-drainage"
              className="rounded-2xl border border-slate-200 bg-white p-8 transition hover:border-[#14b8a6] hover:shadow-md"
            >
              <p className="font-semibold text-[#0f766e]">Greater London</p>

              <h3 className="mt-2 text-2xl font-bold text-slate-900">
                London
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Drainage services across Central, North, South, East and West
                London.
              </p>

              <p className="mt-5 font-semibold text-[#0f766e]">
                View London →
              </p>
            </Link>

            <Link
              href="/hertfordshire-drainage"
              className="rounded-2xl border border-slate-200 bg-white p-8 transition hover:border-[#14b8a6] hover:shadow-md"
            >
              <p className="font-semibold text-[#0f766e]">County Coverage</p>

              <h3 className="mt-2 text-2xl font-bold text-slate-900">
                Hertfordshire
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Coverage including Stevenage, Hitchin, Hertford, St Albans,
                Watford and surrounding areas.
              </p>

              <p className="mt-5 font-semibold text-[#0f766e]">
                View Hertfordshire →
              </p>
            </Link>

            <Link
              href="/bedfordshire-drainage"
              className="rounded-2xl border border-slate-200 bg-white p-8 transition hover:border-[#14b8a6] hover:shadow-md"
            >
              <p className="font-semibold text-[#0f766e]">County Coverage</p>

              <h3 className="mt-2 text-2xl font-bold text-slate-900">
                Bedfordshire
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Coverage including Bedford, Luton, Dunstable, Leighton Buzzard
                and surrounding areas.
              </p>

              <p className="mt-5 font-semibold text-[#0f766e]">
                View Bedfordshire →
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#082f49]">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Speak to UK Drain Response?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200">
            Call us to discuss your drainage problem and the help you require.
          </p>

          <div className="mt-8">
            <a
              href="tel:08000029910"
              className="inline-block rounded-lg bg-orange-500 px-7 py-3 font-bold text-white transition hover:bg-orange-600"
            >
              Call 0800 002 9910
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}