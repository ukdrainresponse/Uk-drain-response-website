import Link from "next/link";

export const metadata = {
  title: "UK Drain Response | Professional Drainage Services",
  description:
    "Professional drainage services including drain unblocking, CCTV surveys, drain jetting, repairs and emergency drainage across London, Hertfordshire and Bedfordshire.",
};

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-[#082f49] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="mb-3 font-semibold uppercase tracking-wider text-[#14b8a6]">
              UK Drain Response
            </p>

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              Fast, Professional
              <span className="block text-[#14b8a6]">
                Drainage Services
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Professional drainage support for homes, landlords and businesses
              across London, Hertfordshire and Bedfordshire.
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
                Contact Us
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
              <span>✓ Fast response</span>
              <span>✓ Clear information</span>
              <span>✓ Domestic & commercial</span>
            </div>
          </div>

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

      {/* TRUST STRIP */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-slate-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#0f766e]">
                Response
              </p>
              <h3 className="mt-2 text-lg font-bold text-slate-900">
                Emergency Drainage
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Help when drainage problems cannot wait.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#0f766e]">
                Service
              </p>
              <h3 className="mt-2 text-lg font-bold text-slate-900">
                Professional Support
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Clear advice and practical drainage solutions.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#0f766e]">
                Coverage
              </p>
              <h3 className="mt-2 text-lg font-bold text-slate-900">
                Local Area Pages
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Current coverage across London and nearby counties.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#0f766e]">
                Properties
              </p>
              <h3 className="mt-2 text-lg font-bold text-slate-900">
                Domestic & Commercial
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Drainage support for homes and businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="font-semibold text-[#0f766e]">
                Complete Drainage Support
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Help With Everyday and Complex Drainage Problems
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                From a straightforward blocked drain to recurring drainage
                faults, damaged pipework and commercial drainage problems, UK
                Drain Response is built to help customers identify the right
                solution quickly.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                Our service pages explain each drainage option clearly, so you
                can understand what may be required before arranging the next
                step.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <p className="font-semibold text-[#0f766e]">
                Not Sure What You Need?
              </p>

              <h3 className="mt-2 text-2xl font-bold text-slate-900">
                Tell Us What Is Happening
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                If you are unsure whether you need drain unblocking, CCTV
                inspection, jetting or repairs, contact UK Drain Response and
                explain the problem.
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

      {/* SERVICES */}
      <section className="bg-white" id="services">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold text-[#0f766e]">
              Our Drainage Services
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Professional Drainage Solutions
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              Choose the service that best matches the drainage problem you are
              experiencing.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/drain-unblocking"
              className="rounded-2xl bg-slate-50 p-8 transition hover:shadow-md"
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
              href="/emergency-drainage"
              className="rounded-2xl bg-slate-50 p-8 transition hover:shadow-md"
            >
              <div className="mb-5 text-4xl">⚠️</div>
              <h3 className="text-xl font-bold text-slate-900">
                Emergency Drainage
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                Urgent drainage support for overflows and serious blockages.
              </p>
              <p className="mt-5 font-semibold text-[#0f766e]">
                Emergency Drainage →
              </p>
            </Link>

            <Link
              href="/cctv-drain-surveys"
              className="rounded-2xl bg-slate-50 p-8 transition hover:shadow-md"
            >
              <div className="mb-5 text-4xl">📹</div>
              <h3 className="text-xl font-bold text-slate-900">
                CCTV Drain Surveys
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                Camera inspections for recurring drainage faults and pipe
                damage.
              </p>
              <p className="mt-5 font-semibold text-[#0f766e]">
                CCTV Surveys →
              </p>
            </Link>

            <Link
              href="/drain-jetting"
              className="rounded-2xl bg-slate-50 p-8 transition hover:shadow-md"
            >
              <div className="mb-5 text-4xl">💧</div>
              <h3 className="text-xl font-bold text-slate-900">
                Drain Jetting
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                High-pressure jetting for grease, silt, debris and stubborn
                deposits.
              </p>
              <p className="mt-5 font-semibold text-[#0f766e]">
                Drain Jetting →
              </p>
            </Link>

            <Link
              href="/drain-repairs"
              className="rounded-2xl bg-slate-50 p-8 transition hover:shadow-md"
            >
              <div className="mb-5 text-4xl">🛠️</div>
              <h3 className="text-xl font-bold text-slate-900">
                Drain Repairs
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                Repair solutions for cracked, displaced and damaged drainage.
              </p>
              <p className="mt-5 font-semibold text-[#0f766e]">
                Drain Repairs →
              </p>
            </Link>

            <Link
              href="/commercial-drainage"
              className="rounded-2xl bg-slate-50 p-8 transition hover:shadow-md"
            >
              <div className="mb-5 text-4xl">🏢</div>
              <h3 className="text-xl font-bold text-slate-900">
                Commercial Drainage
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                Drainage support for businesses, landlords and commercial
                properties.
              </p>
              <p className="mt-5 font-semibold text-[#0f766e]">
                Commercial Drainage →
              </p>
            </Link>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-block rounded-lg bg-orange-500 px-7 py-3 font-bold text-white transition hover:bg-orange-600"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold text-[#0f766e]">
              Why UK Drain Response
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              A Straightforward Approach to Drainage
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              Clear information, practical solutions and a simple process from
              enquiry to resolution.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-5 text-4xl">⚡</div>
              <h3 className="text-xl font-bold text-slate-900">
                Fast Response
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                Drainage problems can quickly become disruptive, so speed
                matters.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-5 text-4xl">✓</div>
              <h3 className="text-xl font-bold text-slate-900">
                Clear Information
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                Understand which drainage service is likely to be required.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-5 text-4xl">🔎</div>
              <h3 className="text-xl font-bold text-slate-900">
                Proper Investigation
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                CCTV and specialist equipment can help identify the actual
                cause of a problem.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-5 text-4xl">🏠</div>
              <h3 className="text-xl font-bold text-slate-900">
                Homes & Businesses
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                Drainage support for domestic and commercial properties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold text-[#0f766e]">
              How It Works
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Three Simple Steps
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-8">
              <p className="text-sm font-bold text-[#0f766e]">01</p>
              <h3 className="mt-3 text-xl font-bold text-slate-900">
                Tell Us the Problem
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                Contact us and explain what is happening at the property.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-8">
              <p className="text-sm font-bold text-[#0f766e]">02</p>
              <h3 className="mt-3 text-xl font-bold text-slate-900">
                Investigate
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                Where required, the drainage system can be investigated to
                identify the cause.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-8">
              <p className="text-sm font-bold text-[#0f766e]">03</p>
              <h3 className="mt-3 text-xl font-bold text-slate-900">
                Solve the Problem
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                The appropriate drainage solution can then be carried out.
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
              Select your area to view local drainage information.
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
            Contact UK Drain Response and tell us what problem you are
            experiencing.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="tel:08000000000"
              className="rounded-lg bg-orange-500 px-7 py-3 font-bold text-white transition hover:bg-orange-600"
            >
              Call for Help
            </a>

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