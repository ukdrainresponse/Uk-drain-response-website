import Link from "next/link";

export const metadata = {
  title: "Commercial Drainage | UK Drain Response",
  description:
    "Commercial drainage services from UK Drain Response for businesses, landlords, property managers and commercial premises.",
};

export default function CommercialDrainagePage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-[#082f49] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="mb-3 font-semibold uppercase tracking-wider text-[#14b8a6]">
              UK Drain Response
            </p>

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              Commercial Drainage Services
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Fast, reliable drainage support for businesses, landlords,
              managing agents and commercial properties.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-lg bg-orange-500 px-6 py-3 text-center font-bold text-white transition hover:bg-orange-600"
              >
                Request Commercial Support
              </Link>

              <a
                href="tel:08000000000"
                className="rounded-lg border border-white px-6 py-3 text-center font-bold text-white transition hover:bg-white hover:text-[#082f49]"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="font-semibold text-[#0f766e]">
                Commercial Drainage Specialists
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Drainage Support for Commercial Properties
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Drainage problems can quickly disrupt a business, inconvenience
                customers and staff, or create hygiene and access issues.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                UK Drain Response provides commercial drainage services for a
                wide range of premises, from offices and retail units to rental
                properties, restaurants, warehouses and managed buildings.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-100 p-8">
              <h3 className="text-2xl font-bold text-slate-900">
                We Can Help With
              </h3>

              <ul className="mt-6 space-y-4 text-slate-700">
                <li className="flex gap-3">
                  <span className="font-bold text-[#14b8a6]">✓</span>
                  Blocked commercial drains
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#14b8a6]">✓</span>
                  Emergency drainage problems
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#14b8a6]">✓</span>
                  CCTV drain surveys
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#14b8a6]">✓</span>
                  High-pressure drain jetting
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#14b8a6]">✓</span>
                  Drain repairs and relining
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#14b8a6]">✓</span>
                  Recurring drainage issues
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TYPES OF CLIENTS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold text-[#0f766e]">Who We Work With</p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Drainage Services for Businesses and Property Professionals
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-5 text-4xl">🏢</div>
              <h3 className="text-xl font-bold text-slate-900">
                Businesses
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                Drainage support for offices, shops, restaurants, warehouses and
                other commercial premises.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-5 text-4xl">🏠</div>
              <h3 className="text-xl font-bold text-slate-900">
                Landlords
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                Responsive drainage services for rental properties and
                portfolios where problems need resolving quickly.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-5 text-4xl">🔑</div>
              <h3 className="text-xl font-bold text-slate-900">
                Managing Agents
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                Drainage support for managed properties, communal areas and
                multi-site portfolios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-semibold text-[#0f766e]">
              Commercial Drainage Solutions
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
              From Emergency Callouts to Planned Repairs
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              We can help diagnose, clear and repair drainage problems depending
              on the needs of the property.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#082f49] text-xl font-bold text-white">
                1
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">
                Drain Unblocking
              </h3>
              <p className="mt-2 text-slate-600">
                Clearing blocked toilets, gullies, waste pipes and underground
                drains.
              </p>
            </div>

            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#082f49] text-xl font-bold text-white">
                2
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">
                CCTV Surveys
              </h3>
              <p className="mt-2 text-slate-600">
                Inspecting underground drainage to locate damage and recurring
                problems.
              </p>
            </div>

            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#082f49] text-xl font-bold text-white">
                3
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">
                Drain Jetting
              </h3>
              <p className="mt-2 text-slate-600">
                High-pressure water jetting for grease, silt and stubborn
                deposits.
              </p>
            </div>

            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#082f49] text-xl font-bold text-white">
                4
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">
                Drain Repairs
              </h3>
              <p className="mt-2 text-slate-600">
                Repair options for cracked, damaged, displaced or collapsed
                drainage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="bg-slate-100">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <div className="rounded-2xl bg-white p-8 shadow-sm md:p-10">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                  Need to Identify a Recurring Drainage Problem?
                </h2>

                <p className="mt-4 max-w-3xl text-slate-600">
                  A CCTV drain survey can help identify damaged pipework,
                  blockages and structural problems beneath commercial
                  properties.
                </p>
              </div>

              <Link
                href="/cctv-drain-surveys"
                className="rounded-lg bg-[#0f766e] px-6 py-3 text-center font-bold text-white transition hover:bg-[#115e59]"
              >
                CCTV Drain Surveys
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#082f49]">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Need Commercial Drainage Support?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200">
            Contact UK Drain Response for help with drainage problems at your
            business or commercial property.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-lg bg-orange-500 px-7 py-3 font-bold text-white transition hover:bg-orange-600"
            >
              Contact Us
            </Link>

            <a
              href="tel:08000000000"
              className="rounded-lg border border-white px-7 py-3 font-bold text-white transition hover:bg-white hover:text-[#082f49]"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}