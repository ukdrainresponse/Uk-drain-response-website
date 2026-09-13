import Link from "next/link";

export const metadata = {
  title: "Drainage Services | UK Drain Response",
  description:
    "Professional drainage services including drain unblocking, CCTV surveys, drain jetting, repairs, relining and commercial drainage.",
    alternates: {
  canonical: "/services",
},
};

export default function ServicesPage() {
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
              Professional Drainage Services
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              From blocked drains and high-pressure jetting to CCTV surveys,
              repairs and relining, UK Drain Response provides professional
              drainage services for homes, landlords and businesses.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-lg bg-orange-500 px-7 py-3 text-center font-bold text-white transition hover:bg-orange-600"
              >
                Contact UK Drain Response
              </Link>

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

      {/* INTRO */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="font-semibold text-[#0f766e]">
                Complete Drainage Support
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Help With a Wide Range of Drainage Problems
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Drainage problems can range from a straightforward blockage to
                damaged underground pipework requiring investigation and
                repair.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                Our service pages explain the different drainage solutions
                available and help you identify the right service for the
                problem you are experiencing.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-100 p-8">
              <p className="font-semibold text-[#0f766e]">
                Not sure what you need?
              </p>

              <h3 className="mt-2 text-2xl font-bold text-slate-900">
                Tell Us What Is Happening
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                If you are unsure whether you need drain unblocking, jetting,
                CCTV inspection or repairs, contact UK Drain Response and
                explain the problem.
              </p>

              <Link
                href="/contact"
                className="mt-5 inline-block font-semibold text-[#0f766e]"
              >
                Contact Us →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold text-[#0f766e]">
              Our Drainage Services
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Choose the Service You Need
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              Select a drainage service below for more information.
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
                Help with blocked drains, toilets, gullies and slow-running
                drainage systems.
              </p>

              <p className="mt-5 font-semibold text-[#0f766e]">
                Drain Unblocking →
              </p>
            </Link>

            <Link
              href="/emergency-drainage"
              className="rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-5 text-4xl">⚠️</div>

              <h3 className="text-xl font-bold text-slate-900">
                Emergency Drainage
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Urgent drainage support for serious blockages, overflows and
                disruptive drainage problems.
              </p>

              <p className="mt-5 font-semibold text-[#0f766e]">
                Emergency Drainage →
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
                Camera inspections for recurring drainage problems, damaged
                pipes and underground investigations.
              </p>

              <p className="mt-5 font-semibold text-[#0f766e]">
                CCTV Surveys →
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
                High-pressure water jetting for stubborn deposits, grease,
                silt, debris and drainage cleaning.
              </p>

              <p className="mt-5 font-semibold text-[#0f766e]">
                Drain Jetting →
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
                Repair solutions for cracked, displaced, damaged or collapsed
                underground drainage.
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
                Trenchless internal pipe repairs for suitable cracked or
                damaged drainage systems.
              </p>

              <p className="mt-5 font-semibold text-[#0f766e]">
                Drain Relining →
              </p>
            </Link>

            <Link
              href="/commercial-drainage"
              className="rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-md md:col-span-2 lg:col-span-1"
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

      {/* WHY CHOOSE US */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold text-[#0f766e]">
              UK Drain Response
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Drainage Services for Homes and Businesses
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              Our drainage services are designed to cover everything from
              everyday blockages to more complex underground drainage faults.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-8">
              <h3 className="text-xl font-bold text-slate-900">
                Domestic Drainage
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Drainage support for homeowners and residential properties.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-8">
              <h3 className="text-xl font-bold text-slate-900">
                Landlords & Property
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Drainage services for landlords, letting agents and managed
                properties.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-8">
              <h3 className="text-xl font-bold text-slate-900">
                Commercial Properties
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Drainage support for offices, shops and other commercial
                premises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold text-[#0f766e]">
              Areas We Cover
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Drainage Services Across Our Current Coverage Area
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              Select your area for more information about local drainage
              services.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Link
              href="/london-drainage"
              className="rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-md"
            >
              <p className="font-semibold text-[#0f766e]">
                Greater London
              </p>

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
              className="rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-md"
            >
              <p className="font-semibold text-[#0f766e]">
                County Coverage
              </p>

              <h3 className="mt-2 text-2xl font-bold text-slate-900">
                Hertfordshire
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Coverage across Hertfordshire including major towns and
                surrounding areas.
              </p>

              <p className="mt-5 font-semibold text-[#0f766e]">
                View Hertfordshire →
              </p>
            </Link>

            <Link
              href="/bedfordshire-drainage"
              className="rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-md"
            >
              <p className="font-semibold text-[#0f766e]">
                County Coverage
              </p>

              <h3 className="mt-2 text-2xl font-bold text-slate-900">
                Bedfordshire
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Coverage across Bedfordshire including major towns and
                surrounding areas.
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
            Need Help With a Drainage Problem?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200">
            Contact UK Drain Response and tell us what problem you are
            experiencing.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-orange-500 px-7 py-3 font-bold text-white transition hover:bg-orange-600"
            >
              Contact UK Drain Response
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}