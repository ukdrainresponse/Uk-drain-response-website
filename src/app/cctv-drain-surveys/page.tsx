import Link from "next/link";

export const metadata = {
  title: "CCTV Drain Surveys | UK Drain Response",
  description:
    "Professional CCTV drain surveys from UK Drain Response. Inspect underground drainage, locate damage and identify recurring drainage problems.",
};

export default function CCTVDrainSurveysPage() {
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
              CCTV Drain Surveys
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              See exactly what is happening inside your drainage system with a
              professional CCTV drain inspection.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-lg bg-orange-500 px-6 py-3 text-center font-bold text-white transition hover:bg-orange-600"
              >
                Request a CCTV Survey
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
                Drain Inspection Specialists
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Find the Cause of Drainage Problems
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                When a drainage problem keeps returning, the cause may be hidden
                underground. A CCTV survey allows the inside of the drainage
                system to be inspected without unnecessary excavation.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                Specialist camera equipment can be passed through the drain to
                help identify blockages, damaged pipes, displaced joints, root
                intrusion and other defects.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-100 p-8">
              <h3 className="text-2xl font-bold text-slate-900">
                A CCTV Survey Can Identify
              </h3>

              <ul className="mt-6 space-y-4 text-slate-700">
                <li className="flex gap-3">
                  <span className="font-bold text-[#14b8a6]">✓</span>
                  Cracked or fractured drains
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#14b8a6]">✓</span>
                  Displaced pipe joints
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#14b8a6]">✓</span>
                  Root intrusion
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#14b8a6]">✓</span>
                  Collapsed drainage
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#14b8a6]">✓</span>
                  Heavy deposits and obstructions
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#14b8a6]">✓</span>
                  Causes of recurring blockages
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold text-[#0f766e]">
              When You May Need a Survey
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              More Than Just Finding Blockages
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              CCTV surveys can help diagnose existing drainage problems and
              provide useful information about the condition of underground
              pipework.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-5 text-4xl">🔍</div>
              <h3 className="text-xl font-bold text-slate-900">
                Recurring Blockages
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                If the same drain keeps blocking, a CCTV inspection can help
                identify the underlying cause.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-5 text-4xl">🏠</div>
              <h3 className="text-xl font-bold text-slate-900">
                Property Drainage Checks
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                Surveys can provide useful information about the condition of
                drainage around homes and other properties.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-5 text-4xl">🛠️</div>
              <h3 className="text-xl font-bold text-slate-900">
                Before Drain Repairs
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                Identifying the exact location and type of damage can help
                determine the most suitable repair method.
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
              Our CCTV Drain Survey Process
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#082f49] text-xl font-bold text-white">
                1
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">
                Access the Drain
              </h3>
              <p className="mt-2 text-slate-600">
                Suitable access is identified so the drainage camera can be
                introduced into the system.
              </p>
            </div>

            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#082f49] text-xl font-bold text-white">
                2
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">
                Inspect
              </h3>
              <p className="mt-2 text-slate-600">
                The camera is passed through the drainage system to inspect the
                internal condition of the pipework.
              </p>
            </div>

            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#082f49] text-xl font-bold text-white">
                3
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">
                Diagnose
              </h3>
              <p className="mt-2 text-slate-600">
                Any blockages, defects or damaged sections can be located and
                assessed.
              </p>
            </div>

            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#082f49] text-xl font-bold text-white">
                4
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">
                Recommend
              </h3>
              <p className="mt-2 text-slate-600">
                Where work is required, an appropriate next step can be
                recommended.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REPAIR CTA */}
      <section className="bg-slate-100">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <div className="rounded-2xl bg-white p-8 shadow-sm md:p-10">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                  Has Your Survey Found Damaged Pipework?
                </h2>

                <p className="mt-4 max-w-3xl text-slate-600">
                  UK Drain Response can also help with cracked, displaced or
                  collapsed drains once the problem has been identified.
                </p>
              </div>

              <Link
                href="/drain-repairs"
                className="rounded-lg bg-[#0f766e] px-6 py-3 text-center font-bold text-white transition hover:bg-[#115e59]"
              >
                Drain Repairs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#082f49]">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Need a CCTV Drain Survey?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200">
            Contact UK Drain Response to arrange a drainage inspection and find
            out what is happening below ground.
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