import Image from "next/image";
import FaqSection from "./FaqSection";

export default function Accompagnement360() {
  return (
    <main className="bg-[#F8F9FA] py-10">

      {/* ================= HERO ================= */}
      <section className="bg-slate-50 py-10">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#1d428a]">
              Accompagnement 360°
            </h1>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Un accompagnement global et sur mesure pour couvrir l'ensemble 
              des besoins de votre entreprise. De la stratégie à l'opérationnel, 
              nous sommes votre partenaire de confiance à chaque étape.
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

          <div className="relative h-[350px] md:h-[500px]">
            <Image
              src="/Images/Accompagnement.png"
              alt="Accompagnement global d'entreprise"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-20 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold">
          Un partenaire unique pour tous vos enjeux
        </h2>

        <p className="mt-6 text-slate-600 text-lg leading-relaxed">
          Votre entreprise évolue, ses besoins aussi. Dans un environnement 
          complexe et mouvant, avoir un interlocuteur unique qui maîtrise 
          l'ensemble des dimensions de votre activité est un atout majeur.
          <br /><br />
          Avec l'Accompagnement 360° d'Expert-UP, bénéficiez d'une vision 
          globale et cohérente de votre entreprise. Comptabilité, fiscalité, 
          juridique, social, pilotage, stratégie... Nous coordonnons l'ensemble 
          des expertises pour vous offrir une solution intégrée et sans couture.
        </p>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-4">

          <h2 className="text-3xl font-bold text-center mb-14">
            Une expertise à 360°
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: "📊",
                title: "Comptabilité & fiscalité",
                text: "Tenue comptable, déclarations fiscales, optimisation et sécurisation de vos obligations légales.",
                color: "from-blue-50 to-indigo-50"
              },
              {
                icon: "⚖️",
                title: "Conseil juridique",
                text: "Statuts, pactes d'actionnaires, contrats commerciaux et accompagnement dans vos choix de structuration.",
                color: "from-indigo-50 to-blue-50"
              },
              {
                icon: "👥",
                title: "Gestion sociale & RH",
                text: "Bulletins de paie, déclarations sociales, conseil en rémunération et optimisation de la masse salariale.",
                color: "from-blue-50 to-cyan-50"
              },
              {
                icon: "📈",
                title: "Pilotage & performance",
                text: "Tableaux de bord, analyse des écarts, reporting et accompagnement à la décision stratégique.",
                color: "from-cyan-50 to-blue-50"
              },
              {
                icon: "🚀",
                title: "Développement & croissance",
                text: "Plan de développement, recherche de financements, accompagnement à l'export et innovation.",
                color: "from-blue-50 to-indigo-50"
              },
              {
                icon: "🔄",
                title: "Transmission & cession",
                text: "Préparation à la transmission, évaluation de l'entreprise et accompagnement dans les processus de cession.",
                color: "from-indigo-50 to-blue-50"
              },
              {
                icon: "💡",
                title: "Stratégie & organisation",
                text: "Gouvernance, optimisation des process, alignment des équipes et déploiement de la stratégie.",
                color: "from-blue-50 to-indigo-50"
              },
              {
                icon: "🛡️",
                title: "Gestion des risques",
                text: "Audit interne, conformité, veille réglementaire et protection du patrimoine professionnel.",
                color: "from-indigo-50 to-blue-50"
              },
              {
                icon: "🌱",
                title: "RSE & impact",
                text: "Démarche RSE, reporting extra-financier et accompagnement dans votre transition durable.",
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
          L'expertise complète pour votre réussite
        </h2>

        <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
          Faites le choix d'un accompagnement intégré et cohérent. 
          Nos experts coordonnent l'ensemble des dimensions de votre 
          entreprise pour une stratégie globale et performante.
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