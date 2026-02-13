import Image from "next/image";

export default function PennylanePlatform() {
  return (
    <main className="bg-[#F8F9FA] text-slate-900">

      {/* — Hero — */}
      <section className="bg-[#F8F9FA] py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1d428a]">
              Pennylane : la plateforme de gestion des finances d'entreprise
            </h1>

            <p className="mt-6 text-lg text-slate-700 leading-relaxed">
              Pennylane est une solution digitale destinée à centraliser
              comptabilité, trésorerie, facturation et pilotage financier en
              un seul endroit. Elle transforme les chiffres en décisions
              stratégiques pour les dirigeants.
            </p>

            <a
              href="https://www.pennylane.com/fr"
              target="_blank"
              className="inline-flex items-center justify-center rounded-2xl bg-[#1d428a] px-6 py-3 text-sm font-semibold text-white hover:bg-[#042f84] mt-6"
            >
              Découvrir Pennylane
            </a>
          </div>

          <div className="relative h-[350px] md:h-[500px]">
            <Image
              src="/Images/pennylane-dashboard.webp"
              alt="Pennylane Dashboard"
              fill
              className="object-cover "
            />
          </div>
        </div>
      </section>

      {/* — Section pourquoi — */}
      <section className="py-8 max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-[#1d428a]">
          Pourquoi choisir Pennylane ?
        </h2>
        <p className="mt-6 text-slate-700 text-lg leading-relaxed">
          Pennylane combine outils de comptabilité, facturation et indicateurs
          financiers pour donner une vision claire de l'activité de votre
          entreprise, en temps réel.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Tableaux de bord interactifs",
              icon: "📊",
            },
            {
              title: "Suivi de trésorerie en temps réel",
              icon: "💧",
            },
            {
              title: "Facturation automatisée",
              icon: "⚡",
            },
            {
              title: "Partage sécurisé avec votre expert-comptable",
              icon: "🔒",
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 text-center hover:shadow-md transition"
            >
              <div className="text-4xl">{card.icon}</div>
              <h3 className="mt-4 font-semibold text-lg">{card.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* — Section contenu textuel détaillé — MODERNISÉE */}
      <section className="py-10 max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-orange-50 text-orange-500 rounded-full text-sm font-semibold mb-4">
            Conçu pour les dirigeants modernes
          </span>
          <h2 className="text-4xl font-bold text-[#1d428a] mb-4">
            Une plateforme qui s'adapte à votre façon de travailler
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Centralisez, automatisez et pilotez vos finances en toute simplicité
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Colonne gauche - Features avec icônes */}
          <div className="space-y-6">
            <div className="flex gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🔄</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  Automatisation intelligente
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Synchronisation bancaire automatique, création d'écritures comptables 
                  sans intervention. Chaque vente, dépense et mouvement est consolidé instantanément.
                </p>
              </div>
            </div>

            <div className="flex gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300">
              <div className="flex-shrink-0 w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  Visibilité en temps réel
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Accès instantané aux chiffres clés de votre entreprise. 
                  Plus d'attente : vos indicateurs financiers sont toujours à jour.
                </p>
              </div>
            </div>

            <div className="flex gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🤝</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  Collaboration simplifiée
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Partage de documents, accès clients et recommandations partagées 
                  avec votre expert-comptable de manière fluide et transparente.
                </p>
              </div>
            </div>
          </div>
          
          {/* Colonne droite - Image */}
          <div className="relative h-[500px]  ">
            <Image
              src="/Images/pennylane-card.png"
              alt="Plateforme Pennylane - Vue d'ensemble"
              fill
              className="object-cover"
            />

          </div>
        </div>
      </section>

      {/* — Section Avantages détaillés — */}
      <section className="bg-slate-50 py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-[#1d428a]">
            Les bénéfices concrets pour votre entreprise
          </h2>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Gain de temps",
                text: "Automatisation des écritures, synchronisation bancaire et optimisation des tâches répétitives.",
              },
              {
                title: "Vision financière claire",
                text: "Indicateurs temps réel, graphiques, analyses et tableaux de bord.",
              },
              {
                title: "Collaboration facilitée",
                text: "Partage sécurisé avec votre expert-comptable et échanges fluidifiés.",
              },
              {
                title: "Conformité & sécurité",
                text: "Respect des normes fiscales et sécurité des données.",
              },
              {
                title: "Intégration des outils",
                text: "Connexion avec la facturation, la trésorerie et les outils de paie.",
              },
              {
                title: "Support & formation",
                text: "Accompagnement personnalisé pour bien utiliser la plateforme.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-semibold text-lg text-[#1d428a]">
                  {item.title}
                </h3>
                <p className="mt-2 text-slate-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* — Section CTA final — */}
      <section className="py-20 text-center bg-[#1d428a] text-white">
        <h2 className="text-3xl font-bold">
          Expertise comptable & pilotage connecté
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg">
          En combinant Pennylane et l'accompagnement Expert-UP, vous gagnez
          en clarté, réactivité et performance.
        </p>

        <a
          href="/contact"
          className="mt-8 inline-block bg-white text-[#1d428a] px-8 py-3 rounded-xl font-semibold hover:text-[#0d2d6e] transition"
        >
          Échanger avec un expert
        </a>
      </section>

    </main>
  );
}