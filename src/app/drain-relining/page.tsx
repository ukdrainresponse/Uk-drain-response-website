import Link from "next/link";

export const metadata = {
  title: "Drain Relining | UK Drain Response",
  description:
    "Professional drain relining services from UK Drain Response. Repair cracked and damaged drains from inside the pipe with minimal disruption.",
};

export default function DrainReliningPage() {
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
              Professional Drain Relining
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Drain relining can repair cracked or damaged pipework from inside
              the drain, often avoiding the need for disruptive excavation.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-lg bg-orange-500 px-6 py-3 text-center font-bold text-white transition hover:bg-orange-600"
              >
                Request Drain Relining
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
                No-Dig Drain Repair
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Repair Damaged Drains With Less Disruption
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Traditional drain repairs can sometimes require excavation of
                driveways, gardens, paths or other surfaces. Where suitable,
                drain relining provides an alternative by repairing the pipe
                internally.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                A specialist liner is inserted into the damaged drain and cured
                in position, creating a strong new internal surface within the
                existing pipe.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-100 p-8">
              <h3 className="text-2xl font-bold text-slate-900">
                Drain Relining Can Help With
              </h3>

              <ul className="mt-6 space-y-4 text-slate-700">
                <li className="flex gap-3">
                  <span className="font-bold text-[#14b8a6]">✓</span>
                  Cracked drainage pipes
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#14b8a6]">✓</span>
                  Minor fractures in pipework
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#14b8a6]">✓</span>
                  Leaking drain joints
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#14b8a6]">✓</span>
                  Root-damaged drains
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#14b8a6]">✓</span>
                  Ageing underground drainage
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#14b8a6]">✓</span>
                  Pipes beneath difficult-to-excavate areas
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
              Why Choose Drain Relining?
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              A Practical Alternative to Excavation
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-5 text-4xl">🛠️</div>
              <h3 className="text-xl font-bold text-slate-900">
                Less Excavation
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                Suitable drains can be repaired internally without digging up
                large areas of the property.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-5 text-4xl">⏱️</div>
              <h3 className="text-xl font-bold text-slate-900">
                Reduced Disruption
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                Relining can often be completed with less disruption to
                driveways, gardens, paths and commercial premises.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-5 text-4xl">✓</div>
              <h3 className="text-xl font-bold text-slate-900">
                Strong Internal Repair
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                The liner creates a new internal pipe surface designed to seal
                damaged sections and improve drainage performance.
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
              Our Drain Relining Process
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#082f49] text-xl font-bold text-white">
                1
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">
                CCTV Survey
              </h3>
              <p className="mt-2 text-slate-600">
                We inspect the drain to identify the location and extent of the
                damage.
              </p>
            </div>

            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#082f49] text-xl font-bold text-white">
                2
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">
                Prepare the Pipe
              </h3>
              <p className="mt-2 text-slate-600">
                The drain is cleaned and prepared so the liner can be installed
                correctly.
              </p>
            </div>

            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#082f49] text-xl font-bold text-white">
                3
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">
                Install the Liner
              </h3>
              <p className="mt-2 text-slate-600">
                The liner is positioned inside the damaged section of the
                drainage pipe.
              </p>
            </div>

            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#082f49] text-xl font-bold text-white">
                4
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">
                Final Inspection
              </h3>
              <p className="mt-2 text-slate-600">
                The completed repair is checked to confirm the drain is clear
                and functioning correctly.
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
                  Need the Damage Diagnosed First?
                </h2>

                <p className="mt-4 max-w-3xl text-slate-600">
                  A CCTV drain survey can determine whether relining is suitable
                  or whether another repair method is required.
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
            Need Drain Relining?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200">
            Contact UK Drain Response to arrange an inspection and find out
            whether drain relining is suitable for your property.
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