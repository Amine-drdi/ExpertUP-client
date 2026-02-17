"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import FaqSection from "./FaqSection";

export default function OurServices() {
  const [activeTab, setActiveTab] = useState("accompagnement");

  const services = {
    accompagnement: {
      title: "Accompagnement 360°",
      slug: "accompagnement360", // Ajout du slug
      subtitle: "Un partenaire unique pour tous vos enjeux",
      description: "Comptabilité, fiscalité, juridique, social, pilotage, stratégie... Nous coordonnons l'ensemble des expertises pour vous offrir une solution intégrée et sans couture.",
      icon: "🔄",
      image: "/Images/Accompagnement.png",
      color: "from-blue-600 to-indigo-700",
      features: [
        { icon: "📊", title: "Comptabilité & fiscalité", text: "Tenue comptable, déclarations fiscales et optimisation" },
        { icon: "⚖️", title: "Conseil juridique", text: "Statuts, contrats et structuration juridique" },
        { icon: "👥", title: "Gestion sociale & RH", text: "Paie, déclarations sociales et conseil en rémunération" }
      ]
    },
    missionsLegales: {
      title: "Missions légales & fiscales",
      slug: "missions-legales-fiscales", // Ajout du slug
      subtitle: "Sécuriser aujourd'hui. Optimiser demain.",
      description: "Nous accompagnons les dirigeants dans la gestion et la sécurisation de leurs obligations comptables et fiscales. Transformez vos contraintes en leviers de performance.",
      icon: "⚖️",
      image: "/Images/missions-legales-fiscales.png",
      color: "from-indigo-600 to-blue-700",
      features: [
        { icon: "📊", title: "Tenue & révision comptable", text: "Fiabilisation des comptes et transparence financière" },
        { icon: "📑", title: "Bilans & liasses fiscales", text: "Comptes annuels et déclarations fiscales" },
        { icon: "💶", title: "Optimisation fiscale", text: "Réduction maîtrisée de la charge fiscale" }
      ]
    },
    pilotage: {
      title: "Pilotage d'entreprise",
      slug: "pilotage-entreprise", // Ajout du slug
      subtitle: "Piloter. Anticiper. Transformer.",
      description: "Nous vous apportons les outils, les méthodes et le recul nécessaires pour piloter votre entreprise avec agilité. Transformez vos données en décisions stratégiques.",
      icon: "📈",
      image: "/Images/pilotageentreprises.png",
      color: "from-emerald-600 to-teal-700",
      features: [
        { icon: "📊", title: "Tableaux de bord stratégiques", text: "Indicateurs de performance sur mesure" },
        { icon: "📈", title: "Analyse financière & reporting", text: "Ratios de gestion et reporting adaptés" },
        { icon: "🎯", title: "Budget & prévisionnel", text: "Construction de budgets et suivi des écarts" }
      ]
    },
    patrimoine: {
      title: "Gestion de patrimoine",
      slug: "gestion-patrimoine", // Ajout du slug
      subtitle: "Bâtir, protéger, transmettre",
      description: "Nous accompagnons les dirigeants dans la construction, la protection et la transmission de leur patrimoine professionnel et personnel.",
      icon: "🏦",
      image: "/Images/Gestionpatrimoine.png",
      color: "from-amber-600 to-orange-700",
      features: [
        { icon: "🏦", title: "Stratégie patrimoniale globale", text: "Analyse et construction d'une stratégie sur mesure" },
        { icon: "💼", title: "Optimisation fiscale", text: "Réduction de l'impact fiscal sur votre patrimoine" },
        { icon: "🏠", title: "Transmission & succession", text: "Anticipation et organisation de la transmission" }
      ]
    }
  };

  const currentService = services[activeTab];

  return (
    <main className="bg-[#F8F9FA]">
      
      {/* ================= HEADER ================= */}
      <div className="relative overflow-hidden bg-[#1D428A] py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Nos Services
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Une gamme complète de solutions pour accompagner les dirigeants 
            à chaque étape de leur parcours entrepreneurial
          </p>
        </div>
      </div>

      {/* ================= TABS NAVIGATION ================= */}
      <section className="max-w-6xl mx-auto px-4 -mt-8">
        <div className="bg-white rounded-2xl shadow-xl p-2 grid grid-cols-2 lg:grid-cols-4 gap-2">
          {Object.entries(services).map(([key, service]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`relative group p-4 rounded-xl transition-all duration-300 ${
                activeTab === key
                  ? `bg-gradient-to-r ${service.color} text-white shadow-lg`
                  : 'hover:bg-slate-50 text-slate-600'
              }`}
            >
              <div className="flex flex-col items-center">
                <span className="text-2xl mb-2">{service.icon}</span>
                <span className="font-semibold text-sm md:text-base">{service.title}</span>
                {activeTab === key && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="w-2 h-2 bg-white rotate-45"></div>
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* ================= SERVICE DETAIL ================= */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          
          {/* Hero Section */}
          <div className={`relative rounded-3xl bg-gradient-to-r ${currentService.color} overflow-hidden`}>
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-white rounded-full blur-3xl opacity-20"></div>
            
            <div className="relative grid md:grid-cols-2 gap-8 p-8 md:p-12">
              <div className="text-white">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-5xl">{currentService.icon}</span>
                  <h2 className="text-3xl md:text-4xl font-bold">{currentService.title}</h2>
                </div>
                <h3 className="text-xl md:text-2xl font-light mb-4 text-white/90">
                  {currentService.subtitle}
                </h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  {currentService.description}
                </p>
                
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 bg-white text-slate-900 rounded-xl font-semibold hover:bg-slate-100 transition-all transform hover:scale-105 shadow-lg"
                  >
                    Demander un accompagnement
                  </Link>
                  <Link
                    href="https://calendly.com/margaux-expert-up/30min?month=2026-02"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg"
                  >
                    Prendre un rendez-vous
                  </Link>
                </div>
              </div>
              
              <div className="relative h-[300px] md:h-auto">
                <Image
                  src={currentService.image}
                  alt={currentService.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-center mb-12 text-[#1D428A]">
              Nos expertises en {currentService.title.toLowerCase()}
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentService.features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br from-${currentService.color.split(' ')[0].replace('from-', '')}/5 to-${currentService.color.split(' ')[1].replace('to-', '')}/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-500">
                      {feature.icon}
                    </div>
                    <h4 className="text-xl font-bold text-[#1D428A] mb-3">
                      {feature.title}
                    </h4>
                    <p className="text-slate-600 leading-relaxed">
                      {feature.text}
                    </p>
                    
                    <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Link href="/contact" className="inline-flex items-center text-blue-600 text-sm font-medium">
                        En savoir plus
                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= ALL SERVICES OVERVIEW ================= */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-[#1D428A]">
            L'ensemble de nos services
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(services).map(([key, service], index) => (
              <div
                key={key}
                onClick={() => setActiveTab(key)}
                className={`group cursor-pointer bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 ${
                  activeTab === key ? `border-${service.color.split(' ')[0].replace('from-', '')}` : 'border-transparent'
                }`}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white text-3xl mb-4 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1D428A] mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm line-clamp-3">{service.description}</p>
                
                {/* MODIFICATION ICI : Lien "Découvrir" avec redirection vers la page de service spécifique */}
                <Link 
                  href={`/services/${service.slug}`}
                  className="mt-4 inline-flex items-center text-blue-600 text-sm font-medium group/link"
                  onClick={(e) => e.stopPropagation()} // Empêche le déclenchement du onClick du parent
                >
                  <span>Découvrir</span>
                  <svg className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA FINAL ================= */}
      <section className="relative bg-[#1D428A] py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-400 rounded-full blur-3xl opacity-20"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à transformer votre entreprise ?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Nos experts sont à votre écoute pour construire ensemble une solution 
            sur mesure adaptée à vos besoins spécifiques.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-[#1D428A] rounded-xl font-semibold hover:bg-slate-100 transition-all transform hover:scale-105 shadow-xl"
            >
              Contactez-nous
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="https://calendly.com/margaux-expert-up/30min?month=2026-02"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-6 py-3 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg"
            >
              Prendre un rendez-vous
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-8">
       <FaqSection/>
      </section>
    </main>
  );
}