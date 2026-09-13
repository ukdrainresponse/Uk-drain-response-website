import Link from "next/link";

export const metadata = {
  title: "Drain Unblocking | UK Drain Response",
  description:
    "Fast, reliable drain unblocking from UK Drain Response for blocked toilets, sinks, gullies and underground drains.",
      alternates: {
    canonical: "/drain-unblocking",
  },
};

export default function DrainUnblockingPage() {
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
              Fast Drain Unblocking
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Blocked drain, toilet, sink or gully? UK Drain Response can help
              diagnose the problem, clear the blockage and get your drainage
              flowing properly again.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-lg bg-orange-500 px-6 py-3 text-center font-bold text-white transition hover:bg-orange-600"
              >
                Request Drain Unblocking
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
                Drain Unblocking Specialists
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Clear Blocked Drains Quickly and Properly
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                A blocked drain can cause slow drainage, unpleasant smells,
                overflowing water and disruption around your property.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                UK Drain Response can identify the likely cause of the blockage
                and use the appropriate method to clear it. Where needed, we can
                also recommend further investigation if the blockage keeps
                returning.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-100 p-8">
              <h3 className="text-2xl font-bold text-slate-900">
                Common Blockage Problems
              </h3>

              <ul className="mt-6 space-y-4 text-slate-700">
                <li className="flex gap-3">
                  <span className="font-bold text-[#14b8a6]">✓</span>
                  Blocked toilets
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#14b8a6]">✓</span>
                  Slow-draining sinks and basins
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#14b8a6]">✓</span>
                  Blocked outside gullies
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#14b8a6]">✓</span>
                  Overflowing drains
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#14b8a6]">✓</span>
                  Grease, silt and debris build-up
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#14b8a6]">✓</span>
                  Repeated or recurring blockages
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
              Drain Clearing Services
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              The Right Method for the Blockage
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              Different drainage problems require different solutions, so we
              assess the issue before deciding how best to clear it.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-5 text-4xl">🔧</div>
              <h3 className="text-xl font-bold text-slate-900">
                Drain Unblocking
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                Clearing everyday blockages affecting toilets, sinks, gullies
                and underground drainage.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-5 text-4xl">💧</div>
              <h3 className="text-xl font-bold text-slate-900">
                High-Pressure Jetting
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                Powerful water jetting can remove stubborn deposits, grease,
                silt and debris from drainage pipes.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-5 text-4xl">📹</div>
              <h3 className="text-xl font-bold text-slate-900">
                CCTV Investigation
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                Recurring blockages may require a CCTV survey to identify
                damaged pipework or another underlying problem.
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
              From Blockage to Clear Drain
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#082f49] text-xl font-bold text-white">
                1
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">
                Assess
              </h3>
              <p className="mt-2 text-slate-600">
                We establish where the blockage is and what symptoms you are
                experiencing.
              </p>
            </div>

            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#082f49] text-xl font-bold text-white">
                2
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">
                Clear
              </h3>
              <p className="mt-2 text-slate-600">
                The appropriate equipment is used to remove the blockage.
              </p>
            </div>

            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#082f49] text-xl font-bold text-white">
                3
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">
                Check
              </h3>
              <p className="mt-2 text-slate-600">
                We check that the drainage is flowing correctly after clearing.
              </p>
            </div>

            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#082f49] text-xl font-bold text-white">
                4
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">
                Investigate if Needed
              </h3>
              <p className="mt-2 text-slate-600">
                If the blockage is recurring, further investigation may be
                recommended.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CCTV CTA */}
      <section className="bg-slate-100">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <div className="rounded-2xl bg-white p-8 shadow-sm md:p-10">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                  Does Your Drain Keep Blocking?
                </h2>

                <p className="mt-4 max-w-3xl text-slate-600">
                  Repeated blockages can sometimes indicate damaged pipework,
                  displaced joints, root intrusion or another issue inside the
                  drain.
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
            Got a Blocked Drain?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200">
            Contact UK Drain Response for fast help with blocked drains,
            toilets, sinks and gullies.
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