import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#F8F9FA]">
      <div className="mx-auto max-w-6xl px-4 py-3 md:py-10">
        <div className="grid items-center gap-12 md:grid-cols-2">
          
          {/* LEFT CONTENT */}
          <div>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
              Expert-comptable digital,
              <span className="block">proche et réactif.</span>
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-700">
              EXPERT-UP accompagne les <strong>start-up</strong>,{" "}
              <strong>sociétés immobilières</strong> et{" "}
              <strong>cabinets de conseil</strong> en simplifiant la gestion
              comptable, fiscale et financière — pour que vous puissiez vous
              concentrer sur votre développement.
            </p>

            {/* Certification */}
            <div className="mt-6 flex items-center gap-3 text-sm text-slate-700">
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1 font-semibold">
                Certifié Pennylane
              </span>
              <span className="text-slate-500">
                Outils collaboratifs modernes
              </span>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Parler à un expert
              </Link>

              <a
                href="tel:+33658100608"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                06 58 10 06 08
              </a>
            </div>


          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="overflow-hidden ">
              <Image
                src="/Images/expert-up-hero.png"
                alt="Cabinet d’expertise comptable digital Expert UP"
                width={600}
                height={520}
                priority
                className="h-full w-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
