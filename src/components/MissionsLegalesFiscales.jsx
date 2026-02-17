import Image from "next/image";
import FaqSection from "./FaqSection";

export default function MissionsLegalesFiscales() {
  return (
    <main className="bg-[#F8F9FA] text-slate-900">

      {/* ================= HERO ================= */}
      <section className="bg-[#F8F9FA] py-10">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#1d428a]">
              Missions légales & fiscales
            </h1>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Nous accompagnons les dirigeants dans la gestion et la sécurisation
              de leurs obligations comptables et fiscales.
              Notre objectif : transformer vos contraintes réglementaires
              en leviers de performance.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="/contact"
                className="inline-block bg-[#1D428A]  text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#0f2a5a] transition"
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

          <div className="relative h-[350px] md:h-[550px]">
            <Image
              src="/Images/missions-legales-fiscales.png"
              alt="Expertise comptable et fiscale"
              fill
               sizes="(max-width: 768px) 100vw, 50vw"
    priority
    className="object-cover"
    
            />
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-12 max-w-4xl mx-auto px-4 text-center bg-[#F8F9FA]">
        <h2 className="text-3xl font-bold text-[#1d428a]">
          Sécuriser aujourd’hui. Optimiser demain.
        </h2>

        <p className="mt-6 text-slate-600 text-lg leading-relaxed">
          Les obligations légales constituent le socle de toute entreprise.
          Tenue comptable, déclarations fiscales, établissement des comptes,
          conformité réglementaire… Ces missions sont indispensables,
          mais elles peuvent également devenir un outil stratégique.
          <br /><br />
          Chez Expert-UP, nous allons au-delà de la conformité.
          Nous analysons votre structure, anticipons les risques et optimisons
          votre organisation fiscale pour renforcer votre rentabilité.
        </p>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="bg-[#F8F9FA] py-20">
        <div className="max-w-6xl mx-auto px-4">

          <h2 className="text-3xl font-bold text-center mb-14 text-[#1d428a]">
            Nos expertises
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: "📊",
                title: "Tenue & révision comptable",
                text: "Organisation, supervision et fiabilisation des comptes afin de garantir conformité et transparence financière.",
                color: "from-blue-50 to-indigo-50"
              },
              {
                icon: "📑",
                title: "Bilans & liasses fiscales",
                text: "Établissement des comptes annuels et déclarations fiscales avec analyse approfondie des résultats.",
                color: "from-indigo-50 to-blue-50"
              },
              {
                icon: "💶",
                title: "Déclarations fiscales",
                text: "TVA, IS, IR, taxes spécifiques : nous sécurisons vos obligations déclaratives.",
                color: "from-blue-50 to-cyan-50"
              },
              {
                icon: "⚡",
                title: "Optimisation fiscale",
                text: "Structuration juridique, arbitrage rémunération/dividendes et réduction maîtrisée de la charge fiscale.",
                color: "from-cyan-50 to-blue-50"
              },
              {
                icon: "🛡️",
                title: "Audit & sécurisation",
                text: "Identification des risques fiscaux et mise en conformité proactive.",
                color: "from-blue-50 to-indigo-50"
              },
              {
                icon: "🎯",
                title: "Pilotage & conseil stratégique",
                text: "Tableaux de bord, indicateurs clés et accompagnement à la décision.",
                color: "from-indigo-50 to-blue-50"
              },
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
          Un accompagnement rigoureux et stratégique
        </h2>

        <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
          Nous construisons avec vous une organisation comptable et fiscale
          solide, conforme et optimisée pour soutenir votre croissance.
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
