import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#F8F9FA]">
      <div className="mx-auto max-w-6xl px-4 py-3 md:py-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          
          {/* LEFT CONTENT */}
          <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-[#1d428a] leading-tight">
              Expert-comptable digital,
              <span className="block nt bg-clip-text text-[#EE7803]">proche et réactif.</span>
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
                className="inline-flex items-center justify-center rounded-2xl bg-[#1d428a] px-6 py-3 text-sm font-semibold text-white hover:bg-[#042f84]"
              >
                Parler à un expert
              </Link>

              <a
              target="_blank"
            rel="noreferrer"
                href="https://calendly.com/expert-up"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-[#1d428a] hover:bg-slate-50"
              >
                Prendre un Rendez-vous
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
