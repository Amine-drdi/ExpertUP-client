import Image from "next/image";
import Link from "next/link";

export default function InsightSection() {
  return (
    <section className="bg-[#F8F9FA]">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          
          {/* LEFT IMAGE */}
          <div className="relative">
            <div className="overflow-hidden ">
              <Image
                src="/Images/comptables.png"
                alt="Experts en conseil et transformation"
                width={560}
                height={420}
                className="h-full w-full object-cover "
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1d428a] md:text-4xl">
              Besoin d’un nouveau regard sur vos enjeux ?
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-slate-700">
              Nos experts sont à votre écoute pour comprendre vos défis,
              clarifier vos priorités et définir avec vous les prochaines
              étapes de votre transformation.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-slate-700">
              Parlons de vos ambitions et identifions ensemble les leviers
              qui créeront le plus d’impact pour votre organisation.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl bg-[#1d428a] px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Échanger avec un expert
              </Link>

          
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
