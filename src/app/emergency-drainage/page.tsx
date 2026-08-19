import Link from "next/link";

export const metadata = {
  title: "Emergency Drainage | UK Drain Response",
  description:
    "Fast emergency drainage response from UK Drain Response for blocked, overflowing and urgent drainage problems.",
};

export default function EmergencyDrainagePage() {
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
              Emergency Drainage
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Urgent drainage problem? Get help with blocked, overflowing or
              backed-up drains when the problem cannot wait.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-lg bg-orange-500 px-6 py-3 text-center font-bold text-white transition hover:bg-orange-600"
              >
                Request Emergency Help
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
                Urgent Drainage Support
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                When a Drainage Problem Cannot Wait
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Some drainage problems need dealing with quickly. An overflowing
                drain, blocked toilet or backed-up drainage system can cause
                disruption and potentially damage the surrounding property.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                UK Drain Response can help diagnose urgent drainage problems,
                clear blockages and identify whether further investigation or
                repair work is required.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-100 p-8">
              <h3 className="text-2xl font-bold text-slate-900">
                Emergency Problems We Can Help With
              </h3>

              <ul className="mt-6 space-y-4 text-slate-700">
                <li className="flex gap-3">
                  <span className="font-bold text-[#14b8a6]">✓</span>
                  Overflowing drains
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#14b8a6]">✓</span>
                  Severely blocked toilets
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#14b8a6]">✓</span>
                  Backed-up drainage
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#14b8a6]">✓</span>
                  Blocked outside gullies
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#14b8a6]">✓</span>
                  Waste water not draining away
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#14b8a6]">✓</span>
                  Sudden or serious drainage problems
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* RESPONSE */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold text-[#0f766e]">
              Emergency Drainage Response
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Diagnose. Clear. Get Things Flowing Again.
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              The priority with an urgent drainage problem is to establish what
              has happened and take the appropriate action.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-5 text-4xl">⚡</div>

              <h3 className="text-xl font-bold text-slate-900">
                Urgent Response
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Help for drainage problems that require prompt attention rather
                than waiting for a routine appointment.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-5 text-4xl">💧</div>

              <h3 className="text-xl font-bold text-slate-900">
                Blockage Clearance
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Appropriate drain clearing methods can be used to remove the
                obstruction and restore drainage flow.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-5 text-4xl">🔍</div>

              <h3 className="text-xl font-bold text-slate-900">
                Further Investigation
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                If the problem indicates damaged drainage, further investigation
                can identify what repair work may be needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-semibold text-[#0f766e]">How It Works</p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
              From Emergency Call to Solution
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#082f49] text-xl font-bold text-white">
                1
              </div>

              <h3 className="mt-5 text-lg font-bold text-slate-900">
                Tell Us the Problem
              </h3>

              <p className="mt-2 text-slate-600">
                Let us know what is happening and where the drainage problem is
                located.
              </p>
            </div>

            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#082f49] text-xl font-bold text-white">
                2
              </div>

              <h3 className="mt-5 text-lg font-bold text-slate-900">
                Assess
              </h3>

              <p className="mt-2 text-slate-600">
                The drainage problem is assessed to determine the likely cause
                and appropriate equipment.
              </p>
            </div>

            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#082f49] text-xl font-bold text-white">
                3
              </div>

              <h3 className="mt-5 text-lg font-bold text-slate-900">
                Clear the Problem
              </h3>

              <p className="mt-2 text-slate-600">
                Where possible, the blockage or obstruction is cleared and
                drainage flow restored.
              </p>
            </div>

            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#082f49] text-xl font-bold text-white">
                4
              </div>

              <h3 className="mt-5 text-lg font-bold text-slate-900">
                Check & Advise
              </h3>

              <p className="mt-2 text-slate-600">
                The drainage is checked and any further investigation or repair
                requirements can be explained.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED SERVICE */}
      <section className="bg-slate-100">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <div className="rounded-2xl bg-white p-8 shadow-sm md:p-10">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                  Is Your Drain Completely Blocked?
                </h2>

                <p className="mt-4 max-w-3xl text-slate-600">
                  Our drain unblocking service covers blocked toilets, gullies
                  and underground drainage systems.
                </p>
              </div>

              <Link
                href="/drain-unblocking"
                className="rounded-lg bg-[#0f766e] px-6 py-3 text-center font-bold text-white transition hover:bg-[#115e59]"
              >
                Drain Unblocking
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#082f49]">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Need Emergency Drainage Help?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200">
            Contact UK Drain Response if you have an urgent blocked,
            overflowing or backed-up drainage problem.
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