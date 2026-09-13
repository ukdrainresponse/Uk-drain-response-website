import Link from "next/link";

export const metadata = {
  title: "About UK Drain Response | Professional Drainage Services",
  description:
    "Learn more about UK Drain Response and our professional drainage services for homes, landlords and businesses across London, Hertfordshire and Bedfordshire.",
    alternates: {
  canonical: "/about",
},
};

export default function AboutPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-[#082f49] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="mb-3 font-semibold uppercase tracking-wider text-[#14b8a6]">
              About UK Drain Response
            </p>

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              Professional Drainage Support When You Need It
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              UK Drain Response is being built around a simple goal: make it
              easier for customers to find reliable drainage help quickly and
              understand exactly which service they need.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/services"
                className="rounded-lg bg-orange-500 px-7 py-3 text-center font-bold text-white transition hover:bg-orange-600"
              >
                View Our Services
              </Link>

              <Link
                href="/contact"
                className="rounded-lg border border-white px-7 py-3 text-center font-bold text-white transition hover:bg-white hover:text-[#082f49]"
              >
                Contact Us
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
                Built Around the Customer
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                A Clearer Way to Deal With Drainage Problems
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Drainage problems are often urgent, disruptive and difficult to
                diagnose without the right equipment or experience.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                UK Drain Response is designed to give customers clear
                information about drainage services, explain the likely next
                steps and help connect the problem with the appropriate
                solution.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-100 p-8">
              <p className="font-semibold text-[#0f766e]">
                Our Approach
              </p>

              <h3 className="mt-2 text-2xl font-bold text-slate-900">
                Simple, Clear and Professional
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                We aim to keep the process straightforward, from the first
                enquiry through to identifying the drainage service that is
                required.
              </p>

              <Link
                href="/contact"
                className="mt-5 inline-block font-semibold text-[#0f766e]"
              >
                Contact UK Drain Response →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold text-[#0f766e]">
              What Matters to Us
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              The Standards Behind UK Drain Response
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              Our focus is on making drainage services easier to understand and
              easier to access.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-5 text-4xl">⚡</div>

              <h3 className="text-xl font-bold text-slate-900">
                Fast Response
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Drainage problems can quickly become disruptive, so speed and
                clear communication matter.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-5 text-4xl">🔎</div>

              <h3 className="text-xl font-bold text-slate-900">
                Clear Information
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                We want customers to understand the likely problem and which
                drainage service may be needed.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-5 text-4xl">🛠️</div>

              <h3 className="text-xl font-bold text-slate-900">
                Practical Solutions
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                From basic unblocking to CCTV investigation and drainage
                repairs, the focus is on finding the right solution.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-5 text-4xl">🏠</div>

              <h3 className="text-xl font-bold text-slate-900">
                Residential Support
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Drainage services for homeowners and residential properties.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-5 text-4xl">🏢</div>

              <h3 className="text-xl font-bold text-slate-900">
                Commercial Support
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Drainage services for landlords, businesses and commercial
                properties.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-5 text-4xl">📍</div>

              <h3 className="text-xl font-bold text-slate-900">
                Local Coverage
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Our current coverage focuses on London, Hertfordshire and
                Bedfordshire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold text-[#0f766e]">
              What We Help With
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              A Complete Range of Drainage Services
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              UK Drain Response covers common drainage problems as well as more
              complex investigation and repair work.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/drain-unblocking"
              className="rounded-2xl bg-slate-50 p-8 transition hover:shadow-md"
            >
              <h3 className="text-xl font-bold text-slate-900">
                Drain Unblocking
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Help with blocked drains, gullies, toilets and slow-running
                systems.
              </p>

              <p className="mt-5 font-semibold text-[#0f766e]">
                Learn more →
              </p>
            </Link>

            <Link
              href="/cctv-drain-surveys"
              className="rounded-2xl bg-slate-50 p-8 transition hover:shadow-md"
            >
              <h3 className="text-xl font-bold text-slate-900">
                CCTV Drain Surveys
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Camera inspections for recurring problems and underground
                drainage faults.
              </p>

              <p className="mt-5 font-semibold text-[#0f766e]">
                Learn more →
              </p>
            </Link>

            <Link
              href="/drain-repairs"
              className="rounded-2xl bg-slate-50 p-8 transition hover:shadow-md"
            >
              <h3 className="text-xl font-bold text-slate-900">
                Drain Repairs
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Repair options for damaged, displaced or collapsed drainage.
              </p>

              <p className="mt-5 font-semibold text-[#0f766e]">
                Learn more →
              </p>
            </Link>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/services"
              className="inline-block rounded-lg bg-orange-500 px-7 py-3 font-bold text-white transition hover:bg-orange-600"
            >
              View All Services
            </Link>
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
              Current UK Drain Response Coverage
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              Our initial coverage focuses on London and the surrounding
              counties we are currently building out.
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
                Drainage services across Hertfordshire and surrounding areas.
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
                Drainage services across Bedfordshire and surrounding areas.
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
            Explore our drainage services or contact UK Drain Response to tell
            us what problem you are experiencing.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/services"
              className="rounded-lg bg-orange-500 px-7 py-3 font-bold text-white transition hover:bg-orange-600"
            >
              View Services
            </Link>

            <Link
              href="/contact"
              className="rounded-lg border border-white px-7 py-3 font-bold text-white transition hover:bg-white hover:text-[#082f49]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}