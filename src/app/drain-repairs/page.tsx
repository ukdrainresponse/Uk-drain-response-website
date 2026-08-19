import Link from "next/link";

export const metadata = {
  title: "Drain Repairs | UK Drain Response",
  description:
    "Professional drain repair services from UK Drain Response. We diagnose and repair cracked, damaged and collapsed drains with fast, reliable service.",
};

export default function DrainRepairsPage() {
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
              Professional Drain Repairs
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Cracked, damaged or collapsed drain? Our drainage specialists can
              identify the problem and provide the right repair to get your
              drainage system working properly again.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-lg bg-orange-500 px-6 py-3 text-center font-bold text-white transition hover:bg-orange-600"
              >
                Request a Drain Repair
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
              <p className="font-semibold text-[#0f766e]">Drain Repair Experts</p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Reliable Repairs for Damaged Drains
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Damaged underground drainage can cause repeated blockages,
                unpleasant smells, slow drainage, leaks and even structural
                problems if left untreated.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                UK Drain Response can investigate the cause of the problem and
                recommend the most suitable repair. Depending on the condition
                of the pipework, this may include a localised repair, drain
                relining or excavation and replacement.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-100 p-8">
              <h3 className="text-2xl font-bold text-slate-900">
                Signs You May Need a Drain Repair
              </h3>

              <ul className="mt-6 space-y-4 text-slate-700">
                <li className="flex gap-3">
                  <span className="font-bold text-[#14b8a6]">✓</span>
                  Repeated drain blockages
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#14b8a6]">✓</span>
                  Cracked or damaged pipework
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#14b8a6]">✓</span>
                  Drainage smells around the property
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#14b8a6]">✓</span>
                  Slow-draining sinks, toilets or gullies
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#14b8a6]">✓</span>
                  Subsidence or sinking ground near drains
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#14b8a6]">✓</span>
                  CCTV survey showing displaced or collapsed pipes
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* REPAIR TYPES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold text-[#0f766e]">Our Services</p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Drain Repair Solutions
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              The correct repair depends on the location and severity of the
              damage. We assess the drain before recommending the best option.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-5 text-4xl">🔧</div>
              <h3 className="text-xl font-bold text-slate-900">
                Localised Drain Repairs
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                Targeted repairs for isolated areas of damaged pipework where
                replacing the entire drainage run is unnecessary.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-5 text-4xl">🛠️</div>
              <h3 className="text-xl font-bold text-slate-900">
                Drain Excavation
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                Where a drain has severely collapsed or cannot be repaired from
                inside the pipe, excavation may be required to replace the
                damaged section.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-5 text-4xl">🧱</div>
              <h3 className="text-xl font-bold text-slate-900">
                Drain Relining
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                In suitable situations, damaged pipes can be repaired internally
                using a new lining, reducing the need for disruptive excavation.
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
              From Diagnosis to Repair
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#082f49] text-xl font-bold text-white">
                1
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">
                Investigate
              </h3>
              <p className="mt-2 text-slate-600">
                We assess the symptoms and locate the affected drainage.
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
                Where required, a CCTV drain survey can identify the exact
                damage.
              </p>
            </div>

            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#082f49] text-xl font-bold text-white">
                3
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">
                Recommend
              </h3>
              <p className="mt-2 text-slate-600">
                We explain the repair options and recommend an appropriate
                solution.
              </p>
            </div>

            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#082f49] text-xl font-bold text-white">
                4
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">Repair</h3>
              <p className="mt-2 text-slate-600">
                The damaged drainage is repaired and checked before completion.
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
                  Not Sure What Is Wrong With Your Drain?
                </h2>

                <p className="mt-4 max-w-3xl text-slate-600">
                  A CCTV drain survey can help identify cracks, displaced
                  joints, root intrusion and collapsed pipework without
                  unnecessary excavation.
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
            Need a Drain Repair?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200">
            Contact UK Drain Response to arrange an inspection and get your
            drainage problem properly diagnosed.
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