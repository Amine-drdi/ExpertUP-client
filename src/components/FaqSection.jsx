"use client";

import React, { useMemo, useState } from "react";

const BRAND = { blue: "#2E3E6B", orange: "#ED702C" };

const faqs = [
  {
    q: "Quels types d’entreprises accompagnez-vous ?",
    a: "Nous accompagnons les start-up, PME, sociétés immobilières, cabinets de conseil et professions libérales. Notre méthode s’adapte à votre secteur, votre rythme et vos objectifs.",
  },
  {
    q: "Comment se déroule l’onboarding (mise en place) ?",
    a: "Après un échange de découverte, nous vous envoyons une proposition personnalisée. Une fois validée, signature électronique, formation en ligne, intégration des outils et suivi rapproché sur les premières semaines.",
  },
  {
    q: "Travaillez-vous 100% à distance ?",
    a: "Oui, l’ensemble du processus est digital (documents, échanges, signature). Si besoin, des rendez-vous peuvent être organisés selon votre disponibilité.",
  },
  {
    q: "Quels outils utilisez-vous ?",
    a: "Nous utilisons des outils modernes et collaboratifs (ex : Pennylane) pour centraliser vos flux, faciliter les échanges et améliorer le pilotage (reporting, trésorerie, KPIs).",
  },
  {
    q: "Puis-je changer de cabinet facilement ?",
    a: "Oui. Nous vous guidons dans la transition : récupération des éléments, coordination et continuité de la comptabilité. L’objectif est un changement fluide, sans rupture.",
  },
  {
    q: "Proposez-vous un accompagnement en conseil et optimisation fiscale ?",
    a: "Oui. Au-delà de la conformité, nous travaillons sur la structuration, l’optimisation fiscale, le pilotage et la prise de décision. Les recommandations sont actionnables et cadrées.",
  },
];

function Chevron({ open }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`}
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.94a.75.75 0 111.08 1.04l-4.24 4.5a.75.75 0 01-1.08 0l-4.24-4.5a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function FaqSection({
  mode = "single", // "single" = une seule ouverte, "multi" = plusieurs ouvertes
}) {
  const [openSet, setOpenSet] = useState(() => new Set());

  const toggle = (idx) => {
    setOpenSet((prev) => {
      const next = new Set(prev);

      if (mode === "single") {
        if (next.has(idx)) return new Set(); // ferme tout
        return new Set([idx]); // ouvre uniquement idx
      }

      // multi
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  const openIndexes = useMemo(() => openSet, [openSet]);

  return (
    <section className="relative overflow-hidden py-20 bg-[#F8F9FA]">
      {/* Background premium */}
      
      <div className="absolute inset-0 opacity-[0.22] [background-image:radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:18px_18px]" />

      <div className="relative mx-auto max-w-6xl px-4">
        {/* Header centered */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
            Questions fréquentes
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#1d428a] md:text-4xl">
            FAQ
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-700">
            Tout ce qu’il faut savoir avant de démarrer avec EXPERT-UP.
          </p>
        </div>

        {/* Accordion */}
        <div className="mx-auto mt-10 max-w-3xl space-y-4">
          {faqs.map((item, idx) => {
            const open = openIndexes.has(idx);

            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white/85 shadow-sm backdrop-blur"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={open}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-block h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: BRAND.orange }}
                      aria-hidden="true"
                    />
                    <span className="text-base font-extrabold text-slate-900">
                      {item.q}
                    </span>
                  </div>

                  <span
                    className="grid h-10 w-10 place-items-center rounded-2xl border border-slate-200 bg-white"
                    style={{ color: BRAND.blue }}
                    aria-hidden="true"
                  >
                    <Chevron open={open} />
                  </span>
                </button>

                {/* Animated panel */}
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pt-0">
                      <p className="text-sm leading-relaxed text-slate-700">
                        {item.a}
                      </p>

                      {/* Optional small CTA */}
                      <div className="mt-4">
                        <a
                          href="/contact"
                          className="inline-flex items-center gap-2 text-sm font-semibold"
                          style={{ color: BRAND.blue }}
                        >
                          Poser une question <span style={{ color: BRAND.orange }}>→</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom reassurance */}
        <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-slate-200 bg-white/85 p-6 text-center shadow-sm backdrop-blur">
          <p className="text-sm font-semibold text-slate-700">
            Vous ne trouvez pas votre réponse ?
          </p>
          <p className="mt-1 text-slate-600">
            Contactez-nous et nous vous répondrons rapidement.
          </p>

          <a
            href="/contact"
            className="mt-4 inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-95"
            style={{ backgroundColor: BRAND.blue }}
          >
            Contacter le cabinet
          </a>
        </div>
      </div>
    </section>
  );
}
