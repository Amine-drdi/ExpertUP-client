"use client";

import React, { useMemo, useRef, useEffect, useState } from "react";

const BRAND = { blue: "#2E3E6B", orange: "#ED702C" };

const testimonialsData = [
  {
    name: "Jean Dupont",
    role: "Dirigeant • Startup digitale",
    rating: 5,
    quote:
      "Un accompagnement clair et structuré. Nous avons gagné en visibilité sur notre trésorerie et nos obligations fiscales.",
    highlight: "Pilotage & trésorerie",
  },
  {
    name: "Sophie Martin",
    role: "Gérante • Société immobilière",
    rating: 5,
    quote:
      "Une équipe réactive et professionnelle. Les échanges sont simples, les conseils concrets et toujours pertinents.",
    highlight: "Fiscalité & conformité",
  },
  {
    name: "Pierre Lefèvre",
    role: "Fondateur • Cabinet de conseil",
    rating: 5,
    quote:
      "Process digital fluide, signature électronique rapide et suivi rigoureux. Un vrai partenaire de confiance.",
    highlight: "Onboarding digital",
  },
  {
    name: "Claire Bernard",
    role: "DAF • PME",
    rating: 5,
    quote:
      "Grâce à leur accompagnement, nous avons sécurisé nos obligations et amélioré notre pilotage financier.",
    highlight: "Conseil & optimisation",
  },
  {
    name: "Thomas Moreau",
    role: "Entrepreneur • E-commerce",
    rating: 5,
    quote:
      "Des outils modernes, une excellente disponibilité et des recommandations actionnables. Je recommande vivement.",
    highlight: "Suivi continu",
  },
  {
    name: "Élodie Rousseau",
    role: "Profession libérale",
    rating: 5,
    quote:
      "Un cabinet sérieux qui prend le temps d'expliquer. Je me sens accompagnée et en confiance au quotidien.",
    highlight: "Accompagnement humain",
  },
  {
    name: "Marc Dubois",
    role: "CEO • Agence marketing",
    rating: 5,
    quote:
      "Réactivité exceptionnelle et expertise pointue. Ils ont optimisé notre structure fiscale avec brio.",
    highlight: "Optimisation fiscale",
  },
  {
    name: "Nathalie Blanc",
    role: "Co-fondatrice • Tech startup",
    rating: 5,
    quote:
      "Interface intuitive et suivi personnalisé. Enfin un cabinet qui comprend les enjeux des entreprises digitales.",
    highlight: "Expertise digitale",
  },
  {
    name: "Laurent Petit",
    role: "Directeur • Restaurant",
    rating: 5,
    quote:
      "Conseils pratiques et adaptés à mon secteur. J'ai pu me concentrer sur mon métier en toute sérénité.",
    highlight: "Secteur restauration",
  },
  {
    name: "Isabelle Garnier",
    role: "Artisan • BTP",
    rating: 5,
    quote:
      "Un accompagnement sur-mesure qui a vraiment fait la différence. Je recommande sans hésitation.",
    highlight: "Artisans & TPE",
  },
];

function Stars({ count = 5 }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${count} sur 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className="h-4 w-4"
          fill={i < count ? BRAND.orange : "#E2E8F0"}
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.2 3.674a1 1 0 00.95.69h3.862c.969 0 1.371 1.24.588 1.81l-3.124 2.27a1 1 0 00-.364 1.118l1.193 3.67c.3.922-.755 1.688-1.539 1.118l-3.124-2.27a1 1 0 00-1.176 0l-3.124 2.27c-.783.57-1.838-.196-1.539-1.118l1.193-3.67a1 1 0 00-.364-1.118L2.35 9.1c-.783-.57-.38-1.81.588-1.81H6.8a1 1 0 00.95-.69l1.3-3.674z" />
        </svg>
      ))}
    </div>
  );
}

function InitialAvatar({ name }) {
  const initials = useMemo(() => {
    const parts = name.split(" ").filter(Boolean);
    const a = parts[0]?.[0] ?? "C";
    const b = parts[1]?.[0] ?? "";
    return (a + b).toUpperCase();
  }, [name]);

  return (
    <div
      className="grid h-12 w-12 place-items-center rounded-2xl text-sm font-extrabold text-white shadow-sm"
      style={{
        background: `linear-gradient(135deg, ${BRAND.blue} 0%, ${BRAND.orange} 100%)`,
      }}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}

export default function TestimonialsSection() {
  const scrollerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollByCards = (dir = 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]");
    const delta = card ? card.getBoundingClientRect().width + 16 : 360;
    el.scrollBy({ left: dir * delta, behavior: "smooth" });
  };

  // Auto-scroll effect
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      const el = scrollerRef.current;
      if (!el) return;

      const card = el.querySelector("[data-card]");
      const cardWidth = card ? card.getBoundingClientRect().width + 16 : 360;
      const maxScroll = el.scrollWidth - el.clientWidth;
      const nextScroll = el.scrollLeft + cardWidth;

      if (nextScroll >= maxScroll) {
        // Reset to start
        el.scrollTo({ left: 0, behavior: "smooth" });
        setCurrentIndex(0);
      } else {
        el.scrollBy({ left: cardWidth, behavior: "smooth" });
        setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
      }
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="relative overflow-hidden py-8 bg-[#F8F9FA]">
      {/* Premium background */}
      
      <div className="absolute inset-0 opacity-[0.25] [background-image:radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:18px_18px]" />

      <div className="relative mx-auto max-w-6xl px-4">
        {/* Header - Centré */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center justify-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2">
            <svg className="h-4 w-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-semibold text-orange-900">Ils nous font confiance</span>
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#1d428a] md:text-4xl">
            Témoignages de nos clients
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-700">
            Une relation claire, des outils modernes, et un accompagnement orienté résultats.
          </p>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => {
                scrollByCards(-1);
                setIsPaused(true);
                setTimeout(() => setIsPaused(false), 5000);
              }}
              className="grid h-11 w-11 place-items-center rounded-2xl border border-slate-200 bg-white/80 shadow-sm backdrop-blur transition hover:bg-white hover:shadow-md"
              aria-label="Précédent"
            >
              <span className="text-lg font-extrabold" style={{ color: BRAND.blue }}>
                ←
              </span>
            </button>
            <button
              type="button"
              onClick={() => {
                scrollByCards(1);
                setIsPaused(true);
                setTimeout(() => setIsPaused(false), 5000);
              }}
              className="grid h-11 w-11 place-items-center rounded-2xl border border-slate-200 bg-white/80 shadow-sm backdrop-blur transition hover:bg-white hover:shadow-md"
              aria-label="Suivant"
            >
              <span className="text-lg font-extrabold" style={{ color: BRAND.blue }}>
                →
              </span>
            </button>
          </div>
        </div>

        {/* Slider */}
        <div
          ref={scrollerRef}
          className="mt-10 flex gap-4 overflow-x-auto pb-3 [scrollbar-width:none] [-ms-overflow-style:none]"
          style={{ scrollSnapType: "x mandatory" }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {testimonialsData.map((t, index) => (
            <article
              key={t.name}
              data-card
              className="group relative min-w-[320px] max-w-[420px] flex-1 scroll-mx-4 snap-start overflow-hidden rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg md:min-w-[380px]"
            >
              {/* Accent bar */}
              <div
                className="absolute left-0 top-0 h-1 w-full"
                style={{
                  background: `linear-gradient(90deg, ${BRAND.blue} 0%, ${BRAND.orange} 60%, ${BRAND.blue} 100%)`,
                }}
              />

              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <InitialAvatar name={t.name} />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-extrabold text-slate-900">{t.name}</p>
                    <p className="truncate text-xs font-semibold text-slate-500">{t.role}</p>
                  </div>
                </div>

                <span
                  className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"
                  style={{ backgroundColor: "rgba(237,112,44,0.12)", color: BRAND.orange }}
                >
                  {t.highlight}
                </span>
              </div>

              <div className="mt-4">
                <Stars count={t.rating} />
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slate-700">
                "{t.quote}"
              </p>

              {/* Subtle shine */}
              <div className="pointer-events-none absolute -left-24 top-0 h-full w-24 rotate-12 bg-gradient-to-r from-transparent via-white/45 to-transparent opacity-0 transition duration-300 group-hover:translate-x-[540px] group-hover:opacity-100" />
            </article>
          ))}
        </div>

        {/* Indicateurs de pagination */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                const el = scrollerRef.current;
                if (!el) return;
                const card = el.querySelector("[data-card]");
                const cardWidth = card ? card.getBoundingClientRect().width + 16 : 360;
                el.scrollTo({ left: index * cardWidth, behavior: "smooth" });
                setCurrentIndex(index);
                setIsPaused(true);
                setTimeout(() => setIsPaused(false), 5000);
              }}
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: currentIndex === index ? "32px" : "8px",
                backgroundColor: currentIndex === index ? BRAND.orange : "#CBD5E1",
              }}
              aria-label={`Aller au témoignage ${index + 1}`}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-sm backdrop-blur">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold" style={{ color: BRAND.blue }}>
                Vous avez un projet ?
              </p>
              <p className="mt-1 text-slate-700">
                Parlons de vos objectifs et identifions les leviers à plus fort impact.
              </p>
            </div>

            <a
              target="_blank"
            rel="noreferrer"
                href="https://calendly.com/margaux-expert-up/30min"
              className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-95"
              style={{ backgroundColor: BRAND.blue }}
            >
              Demander un rendez-vous
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}