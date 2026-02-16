import Image from "next/image";
import FaqSection from "./FaqSection";

export default function GestionPatrimoine() {
  return (
    <main className="bg-[#F8F9FA] text-slate-900">

      {/* ================= HERO ================= */}
      <section className="bg-[#F8F9FA] py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#1d428a]">
              Gestion de patrimoine
            </h1>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Nous accompagnons les dirigeants et entrepreneurs dans la construction, 
              la protection et la transmission de leur patrimoine professionnel et personnel. 
              Une approche globale pour sécuriser votre avenir et celui de vos proches.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="/contact"
                className="inline-block bg-[#1D428A] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#0f2a5a] transition"
              >
                Demander un accompagnement
              </a>

               <a
                href="/contact"
                className="inline-block bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition"
              >
                Prendre un rendez-vous
              </a>
            </div>
          </div>

          <div className="relative h-[350px] md:h-[450px]">
            <Image
              src="/Images/Gestionpatrimoine.png"
              alt="Gestion de patrimoine pour dirigeants"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-20 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold">
          Bâtir, protéger, transmettre
        </h2>

        <p className="mt-6 text-slate-600 text-lg leading-relaxed">
          Votre patrimoine est le fruit de votre travail et de votre réussite. 
          Il mérite une attention particulière et une stratégie sur mesure pour 
          le préserver et le faire fructifier dans la durée.
          <br /><br />
          Chez Expert-UP, nous vous accompagnons dans une vision globale de votre 
          patrimoine. Nous prenons en compte l'ensemble de ses composantes : 
          professionnelles, immobilières, financières, pour construire avec vous 
          une stratégie patrimoniale cohérente, sécurisée et performante, 
          adaptée à vos objectifs de vie.
        </p>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-4">

          <h2 className="text-3xl font-bold text-center mb-14">
            Notre expertise patrimoniale
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: "🏦",
                title: "Stratégie patrimoniale globale",
                text: "Analyse de votre situation, définition de vos objectifs et construction d'une stratégie patrimoniale sur mesure.",
                color: "from-blue-50 to-indigo-50"
              },
              {
                icon: "💼",
                title: "Optimisation fiscale du patrimoine",
                text: "Structuration juridique et fiscale pour réduire l'impact de l'impôt sur votre patrimoine (IFI, plus-values, revenus).",
                color: "from-indigo-50 to-blue-50"
              },
              {
                icon: "🏠",
                title: "Patrimoine immobilier",
                text: "Conseil en investissement locatif, gestion immobilière, arbitrage et optimisation de votre patrimoine pierre.",
                color: "from-blue-50 to-cyan-50"
              },
              {
                icon: "📈",
                title: "Placements financiers",
                text: "Allocation d'actifs, diversification, assurance vie, PER : des solutions adaptées à votre profil et vos objectifs.",
                color: "from-cyan-50 to-blue-50"
              },
              {
                icon: "🛡️",
                title: "Protection du patrimoine",
                text: "Stratégies de protection contre les aléas de la vie et les risques professionnels (assurances, structuration).",
                color: "from-blue-50 to-indigo-50"
              },
              {
                icon: "👨‍👩‍👧",
                title: "Transmission & succession",
                text: "Anticipation et organisation de la transmission de votre patrimoine dans les meilleures conditions fiscales et familiales.",
                color: "from-indigo-50 to-blue-50"
              },
              {
                icon: "🏢",
                title: "Patrimoine professionnel",
                text: "Valorisation de votre entreprise, optimisation de sa détention et articulation avec votre patrimoine privé.",
                color: "from-blue-50 to-indigo-50"
              },
              {
                icon: "👴",
                title: "Préparation de la retraite",
                text: "Stratégies d'épargne et de placement pour préparer sereinement votre retraite (PER, contrats, immobilier).",
                color: "from-indigo-50 to-blue-50"
              },
              {
                icon: "🤝",
                title: "Ingénierie patrimoniale",
                text: "Montages complexes, démembrement de propriété, sociétés civiles : des solutions sur mesure pour les grands patrimoines.",
                color: "from-blue-50 to-cyan-50"
              }
           ].map((service, index) => (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-[#1d428a] mb-3 group-hover:text-[#0f2a5a] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {service.text}
                  </p>
                  
                  {/* Lien d'apprentissage */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="inline-flex items-center text-blue-600 text-sm font-medium">
                      En savoir plus
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#1D428A] py-20 text-center text-white">
        <h2 className="text-3xl font-bold">
          Votre patrimoine mérite une stratégie d'exception
        </h2>

        <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
          Bénéficiez d'une approche globale et personnalisée pour construire, 
          protéger et transmettre votre patrimoine dans les meilleures conditions. 
          Nos experts vous accompagnent à chaque étape de votre vie.
        </p>

        <a
          href="/contact"
          className="mt-8 inline-block bg-white text-[#142c5d] px-8 py-3 rounded-xl font-semibold hover:bg-slate-100 transition"
        >
          Échanger avec un expert
        </a>
      </section>

      <FaqSection/>

    </main>
  );
}