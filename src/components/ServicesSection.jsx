import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Missions légales et fiscales",
    desc: "Tenue comptable, déclarations fiscales, bilans et conformité réglementaire.",
    image: "/services/legalesFiscales.png",
    bg: "bg-rose-50",
    href: "/services/sante",
  },
  {
    title: "Pilotage d’entreprise",
    desc: "Tableaux de bord, suivi de trésorerie, indicateurs de performance.",
    image: "/services/comptabilité.png",
    bg: "bg-orange-50",
    href: "/services/epargne",
  },
  {
    title: "Accompagnement 360",
    desc: "Un suivi global : organisation, outils, structuration et conseil continu.",
    image: "/services/accompagnement.png",
    bg: "bg-violet-50",
    href: "/services/retraite",
  },
  {
    title: "Gestion de patrimoine",
    desc: "Optimisation, stratégie patrimoniale et vision long terme.",
    image: "/services/patrimoine.png",
    bg: "bg-emerald-50",
    href: "/services/emprunteur",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#F8F9FA]">
      <div className="mx-auto max-w-6xl px-4 py-16">
        {/* Title */}
          {/* En-tête de section */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-[#1d428a] md:text-5xl">
            Nos services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Des solutions pensées pour chaque profil, avec un accompagnement humain et moderne.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <Link key={service.title} href={service.href} className="group">
              <div
                className={`relative overflow-visible rounded-3xl border border-slate-200 ${service.bg}
                shadow-sm transition-transform duration-200 group-hover:-translate-y-1`}
              >
                {/* IMAGE (fond transparent, 20px overflow) */}
                <div className="-mt-[20px] flex justify-center px-6">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={180}
                    height={180}
                    className="object-contain"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6 pt-2">
                  <h3 className="text-lg font-bold text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-700">
                    {service.desc}
                  </p>

                  <div className="mt-5 inline-flex items-center text-sm font-semibold text-slate-900">
                    Découvrir
                    <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
