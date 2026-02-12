import Image from "next/image";
import FaqSection from "./FaqSection";

export default function PilotageEntreprise() {
  return (
    <main className="bg-[#F8F9FA] text-slate-900">

      {/* ================= HERO ================= */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#1d428a]">
              Pilotage d'entreprise
            </h1>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Nous accompagnons les dirigeants dans le pilotage stratégique et opérationnel 
              de leur entreprise. Notre approche vous donne les clés pour anticiper, 
              décider et performer dans un environnement en constante évolution.
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
              src="/Images/pilotageentreprises.png"
              alt="Pilotage et stratégie d'entreprise"
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
          Piloter. Anticiper. Transformer.
        </h2>

        <p className="mt-6 text-slate-600 text-lg leading-relaxed">
          Le pilotage d'entreprise ne se limite pas à la gestion quotidienne. 
          C'est un état d'esprit qui consiste à transformer les données en décisions 
          et les décisions en performances durables.
          <br /><br />
          Chez Expert-UP, nous vous apportons les outils, les méthodes et le recul 
          nécessaires pour piloter votre entreprise avec agilité. Tableaux de bord 
          dynamiques, indicateurs clés, analyse des écarts et accompagnement à la 
          décision : nous faisons de vos chiffres vos meilleurs alliés.
        </p>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-4">

          <h2 className="text-3xl font-bold text-center mb-14 text-[#1d428a]">
            Nos solutions de pilotage
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: "📊",
                title: "Tableaux de bord stratégiques",
                text: "Création d'indicateurs de performance sur mesure pour visualiser en temps réel la santé de votre entreprise.",
                color: "from-blue-50 to-indigo-50"
              },
              {
                icon: "📈",
                title: "Analyse financière & reporting",
                text: "Analyse approfondie des résultats, ratios de gestion et reporting adaptés à vos interlocuteurs.",
                color: "from-indigo-50 to-blue-50"
              },
              {
                icon: "🎯",
                title: "Budget & prévisionnel",
                text: "Construction de budgets cohérents et suivi des écarts pour ajuster votre trajectoire en continu.",
                color: "from-blue-50 to-cyan-50"
              },
              {
                icon: "⚡",
                title: "KPIs opérationnels",
                text: "Définition d'indicateurs métiers spécifiques à votre secteur d'activité et vos objectifs.",
                color: "from-cyan-50 to-blue-50"
              },
              {
                icon: "🔄",
                title: "Accompagnement à la décision",
                text: "Analyse de scénarios, études d'impact et aide aux arbitrages stratégiques.",
                color: "from-blue-50 to-indigo-50"
              },
              {
                icon: "🚀",
                title: "Plan de développement",
                text: "Structuration de votre croissance, optimisation des processus et alignement des équipes.",
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
          Reprenez le contrôle de votre pilotage
        </h2>

        <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
          Transformez vos données en décisions éclairées. Nos experts vous 
          accompagnent dans la mise en place d'un pilotage sur mesure, 
          adapté à vos enjeux et à votre taille.
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