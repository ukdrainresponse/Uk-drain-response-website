import Link from "next/link";

export const metadata = {
  title: "Drain Jetting | UK Drain Response",
  description:
    "Professional high-pressure drain jetting from UK Drain Response for stubborn blockages, grease, silt and debris.",
};

export default function DrainJettingPage() {
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
              High-Pressure Drain Jetting
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Powerful drain jetting for stubborn blockages, grease, silt and
              debris that ordinary drain clearing methods may not remove.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-lg bg-orange-500 px-6 py-3 text-center font-bold text-white transition hover:bg-orange-600"
              >
                Request Drain Jetting
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
                Powerful Drain Cleaning
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Clear Stubborn Build-Up From Drainage Pipes
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                High-pressure drain jetting uses powerful water pressure to help
                remove stubborn deposits from inside drainage pipes.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                It can be particularly effective where drains are affected by
                grease, silt, sludge, scale and other debris that has built up
                over time.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-100 p-8">
              <h3 className="text-2xl font-bold text-slate-900">
                Drain Jetting Can Help With
              </h3>

              <ul className="mt-6 space-y-4 text-slate-700">
                <li className="flex gap-3">
                  <span className="font-bold text-[#14b8a6]">✓</span>
                  Stubborn drain blockages
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#14b8a6]">✓</span>
                  Grease and fat deposits
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#14b8a6]">✓</span>
                  Silt and sludge build-up
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#14b8a6]">✓</span>
                  Debris inside drainage pipes
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#14b8a6]">✓</span>
                  Poor drainage flow
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#14b8a6]">✓</span>
                  Recurring drainage problems
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold text-[#0f766e]">
              Why Use Drain Jetting?
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              More Than Simply Breaking Through a Blockage
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              Jetting can help clean the internal walls of drainage pipes while
              removing deposits that restrict water flow.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-5 text-4xl">💧</div>
              <h3 className="text-xl font-bold text-slate-900">
                Powerful Cleaning
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                High-pressure water can remove stubborn material from inside
                drainage pipes.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-5 text-4xl">⚙️</div>
              <h3 className="text-xl font-bold text-slate-900">
                Improved Drain Flow
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                Removing built-up deposits can help restore better flow through
                the drainage system.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-5 text-4xl">🔍</div>
              <h3 className="text-xl font-bold text-slate-900">
                Further Investigation
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                If a blockage keeps returning after cleaning, a CCTV survey can
                help identify an underlying defect.
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
              Our Drain Jetting Process
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
                We establish the likely location and nature of the drainage
                problem.
              </p>
            </div>

            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#082f49] text-xl font-bold text-white">
                2
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">
                Access
              </h3>
              <p className="mt-2 text-slate-600">
                Suitable access is identified so the jetting equipment can be
                introduced safely.
              </p>
            </div>

            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#082f49] text-xl font-bold text-white">
                3
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">
                Jet the Drain
              </h3>
              <p className="mt-2 text-slate-600">
                High-pressure water is used to clear the obstruction and clean
                the pipework.
              </p>
            </div>

            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#082f49] text-xl font-bold text-white">
                4
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">
                Check Flow
              </h3>
              <p className="mt-2 text-slate-600">
                The drain is checked afterwards to make sure water is flowing
                correctly.
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
                  Does the Blockage Keep Coming Back?
                </h2>

                <p className="mt-4 max-w-3xl text-slate-600">
                  Repeated drainage problems may indicate damaged pipework,
                  displaced joints, root intrusion or another issue that needs
                  further investigation.
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
            Need Your Drains Jetted?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200">
            Contact UK Drain Response for help with stubborn blockages and
            heavily restricted drainage.
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