import Link from "next/link";

export const metadata = {
  title: "Drainage Services Bedfordshire | UK Drain Response",
  description:
    "Professional drainage services across Bedfordshire including drain unblocking, CCTV surveys, drain jetting, drain repairs, relining and emergency drainage.",
};

export default function BedfordshireDrainagePage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-[#082f49] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="mb-3 font-semibold uppercase tracking-wider text-[#14b8a6]">
              Bedfordshire Drainage Specialists
            </p>

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              Drainage Services Across Bedfordshire
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              UK Drain Response provides professional drainage services across
              Bedfordshire. From blocked drains and overflowing gullies to CCTV
              surveys, drain jetting and repairs, we can help identify and
              resolve a wide range of drainage problems.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-lg bg-orange-500 px-6 py-3 text-center font-bold text-white transition hover:bg-orange-600"
              >
                Request Drainage Help
              </Link>

              <a
                href="tel:08000029910"
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
                Local Drainage Support
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Professional Drainage Help in Bedfordshire
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                A drainage problem can quickly become disruptive, particularly
                when water stops draining properly or a blockage begins to
                overflow. UK Drain Response provides drainage support for homes,
                landlords and businesses throughout Bedfordshire.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                Whether the problem requires straightforward drain unblocking,
                high-pressure jetting, a CCTV investigation or repair work, the
                aim is to establish the cause and provide the appropriate
                solution.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-100 p-8">
              <h3 className="text-2xl font-bold text-slate-900">
                Drainage Problems We Can Help With
              </h3>

              <ul className="mt-6 space-y-4 text-slate-700">
                <li className="flex gap-3">
                  <span className="font-bold text-[#14b8a6]">✓</span>
                  Blocked drains and toilets
                </li>

                <li className="flex gap-3">
                  <span className="font-bold text-[#14b8a6]">✓</span>
                  Overflowing outside drains and gullies
                </li>

                <li className="flex gap-3">
                  <span className="font-bold text-[#14b8a6]">✓</span>
                  Slow or recurring drainage problems
                </li>

                <li className="flex gap-3">
                  <span className="font-bold text-[#14b8a6]">✓</span>
                  Cracked or damaged drainage pipes
                </li>

                <li className="flex gap-3">
                  <span className="font-bold text-[#14b8a6]">✓</span>
                  Drainage investigations and CCTV surveys
                </li>

                <li className="flex gap-3">
                  <span className="font-bold text-[#14b8a6]">✓</span>
                  Urgent drainage problems
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold text-[#0f766e]">
              Bedfordshire Drainage Services
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Drainage Services for Homes and Businesses
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              The right solution depends on the cause of the drainage problem.
              Explore our main services available across Bedfordshire.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Link
              href="/drain-unblocking"
              className="rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-5 text-4xl">🔧</div>
              <h3 className="text-xl font-bold text-slate-900">
                Drain Unblocking
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                Clear blocked toilets, gullies, sinks and underground drainage
                and restore normal drainage flow.
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
                High-pressure water jetting can remove stubborn deposits,
                grease, silt and debris from drainage pipes.
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
                Inspect underground drainage to help locate damage, recurring
                blockages and other hidden problems.
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
                Repair solutions for cracked, displaced, damaged or collapsed
                sections of drainage.
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
                Where suitable, damaged drainage can be repaired internally
                without excavating the entire length of pipe.
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
                Drainage support for Bedfordshire businesses, landlords and
                commercial properties.
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
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="font-semibold text-[#0f766e]">
                Bedfordshire Coverage
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Areas We Cover in Bedfordshire
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                UK Drain Response provides drainage services throughout
                Bedfordshire, covering the county's major towns as well as
                surrounding communities.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                If your area is not listed, contact us to check coverage for
                your location.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-100 p-8">
              <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-slate-700">
                <span>✓ Bedford</span>
                <span>✓ Luton</span>
                <span>✓ Dunstable</span>
                <span>✓ Leighton Buzzard</span>
                <span>✓ Biggleswade</span>
                <span>✓ Sandy</span>
                <span>✓ Flitwick</span>
                <span>✓ Ampthill</span>
                <span>✓ Kempston</span>
                <span>✓ Shefford</span>
                <span>✓ Potton</span>
                <span>✓ Arlesey</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EMERGENCY CTA */}
      <section className="bg-slate-100">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <div className="rounded-2xl bg-white p-8 shadow-sm md:p-10">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                  Need Urgent Drainage Help in Bedfordshire?
                </h2>

                <p className="mt-4 max-w-3xl text-slate-600">
                  Overflowing drains, severely blocked toilets and backed-up
                  drainage systems may require prompt attention.
                </p>
              </div>

              <Link
                href="/emergency-drainage"
                className="rounded-lg bg-[#0f766e] px-6 py-3 text-center font-bold text-white transition hover:bg-[#115e59]"
              >
                Emergency Drainage
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#082f49]">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Need a Drainage Engineer in Bedfordshire?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200">
            Contact UK Drain Response for help with drainage problems across
            Bedfordshire.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-lg bg-orange-500 px-7 py-3 font-bold text-white transition hover:bg-orange-600"
            >
              Contact Us
            </Link>

            <a
              href="tel:08000029910"
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