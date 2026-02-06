import React from "react";
import Image from "next/image";
import Link from "next/link";

const BRAND = { blue: "#2E3E6B", orange: "#ED702C" };

export default function OurCabinet() {
  return (
    <section className="relative overflow-hidden">
      {/* Global background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1000px 520px at 12% 10%, rgba(46,62,107,0.18), transparent 60%), radial-gradient(900px 480px at 88% 18%, rgba(237,112,44,0.14), transparent 55%), linear-gradient(180deg, #FFFFFF 0%, #F6F8FF 45%, #FFFFFF 100%)",
        }}
      />
      <div className="absolute inset-0 opacity-[0.18] [background-image:radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:18px_18px]" />

      <div className="relative">
        <HeroPremium />
        <PresentationPremium />
        <HistoireTimeline />
        <ChiffresPremium />
        <FondatricePremium />
      </div>
    </section>
  );
}

/* ----------------------------- 1) HERO PREMIUM ----------------------------- */

function HeroPremium() {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-10 pb-10 md:pt-12 md:pb-14">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Left */}
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-1 text-xs font-semibold"
              style={{ backgroundColor: "rgba(46,62,107,0.10)", color: BRAND.blue }}
            >
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: BRAND.orange }} />
              Présentation du cabinet
            </span>

            <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-1 text-xs font-semibold text-slate-700">
              Certifiés Pennylane
            </span>
          </div>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-[#1d428a] md:text-5xl">
            Un cabinet moderne pour
            <span className="block text-[#EE7803]" >
              piloter, décider et grandir.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-700">
            Nous accompagnons les dirigeants à chaque étape : structuration, fiscalité, organisation financière,
            suivi de la performance — avec une approche digitale, pédagogique et proactive.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-95"
              style={{ backgroundColor: BRAND.blue }}
            >
              Échanger avec un expert
            </Link>

            <Link
              href="/services/pilotage-entreprise"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
            >
              Voir notre approche
            </Link>
          </div>

         
        </div>

        {/* Right visual */}
         <div className="relative">
          <div
            className="absolute -inset-6 rounded-[44px] blur-2xl opacity-60"
            style={{
              background:
                "radial-gradient(closest-side, rgba(46,62,107,0.28), transparent 70%), radial-gradient(closest-side, rgba(237,112,44,0.22), transparent 70%)",
            }}
          />
          <div className="relative overflow-hidden mt-[-30px]"> {/* Ajout de mt-[-30px] */}
            
            <Image
              src="/Images/Logiciel-de-Comptabilité.png"
              alt="Cabinet Expert-UP"
              width={1100}
              height={800}
              className="h-[420px] w-full object-cover md:h-[520px] object-top" /* Ajout de object-top */
              priority
            />

            {/* Floating metrics */}
            <div className="absolute bottom-6 left-6 right-6 grid gap-3 sm:grid-cols-3">
              <FloatCard kpi="Vision" sub="KPIs & trésorerie" />
              <FloatCard kpi="Sécurité" sub="Conformité & délais" />
              <FloatCard kpi="Impact" sub="Conseil actionnable" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrustChip({ title, text }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur">
      <p className="text-sm font-extrabold text-slate-900">{title}</p>
      <p className="mt-1 text-sm text-slate-600">{text}</p>
    </div>
  );
}

function FloatCard({ kpi, sub }) {
  return (
    <div className="rounded-2xl border border-white/60 bg-white/85 p-4 shadow-sm backdrop-blur">
      <p className="text-sm font-extrabold" style={{ color: BRAND.blue }}>
        {kpi}
      </p>
      <p className="mt-1 text-xs font-semibold text-slate-600">{sub}</p>
    </div>
  );
}

/* ---------------------- 2) PRESENTATION PREMIUM ---------------------- */

function PresentationPremium() {
  const bullets = [
    "Un cabinet à taille humaine, avec une expérience éprouvée auprès de centaines d’entrepreneurs partout en France",
    "Des experts certifiés Pennylane, formés en continu aux dernières évolutions et innovations de la plateforme",
    "Une réactivité garantie",
    "Un accompagnement sur mesure, adapté à l’organisation, aux enjeux et au stade de développement",
    "Une politique tarifaire claire et transparente",
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        {/* Left editorial */}
        <div className="rounded-[36px] border border-slate-200 bg-white/85 p-8 shadow-sm backdrop-blur">
          <div
            className="h-1 w-full rounded-full"
            style={{
              background: `linear-gradient(90deg, ${BRAND.blue} 0%, ${BRAND.orange} 60%, ${BRAND.blue} 100%)`,
            }}
          />

          <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-slate-500">
            Notre approche
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
            La comptabilité comme levier de pilotage.
          </h2>

          <p className="mt-5 text-slate-700 leading-relaxed">
            Nous accompagnons des TPE, PME, holdings, groupes et investisseurs, notamment dans les secteurs du conseil,
            des services et de l’immobilier. Notre expertise couvre l’ensemble des problématiques comptables, fiscales
            et financières, avec une attention particulière portée à la structuration, à l’optimisation de la
            rémunération, à l’organisation financière et au suivi de la performance.
          </p>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Nous automatisons ce qui peut l’être pour concentrer notre valeur sur l’analyse, l’anticipation et le
            conseil stratégique.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Tag text="Structuration" />
            <Tag text="Optimisation" />
            <Tag text="Trésorerie" />
            <Tag text="Fiscalité" />
            <Tag text="Reporting" />
          </div>
        </div>

        {/* Right bullet board */}
        <div className="relative">
          <div
            className="absolute -inset-6 rounded-[44px] blur-2xl opacity-45"
            style={{
              background:
                "radial-gradient(closest-side, rgba(46,62,107,0.18), transparent 70%), radial-gradient(closest-side, rgba(237,112,44,0.14), transparent 70%)",
            }}
          />
          <div className="relative rounded-[36px] border border-slate-200 bg-white/85 p-8 shadow-sm backdrop-blur">
            <h3 className="text-lg font-extrabold text-slate-900">
              Ce qui fait la différence
            </h3>

            <ul className="mt-6 space-y-4">
              {bullets.map((b) => (
                <li key={b} className="group flex gap-3 rounded-2xl border border-slate-200 bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-sm">
                  <span
                    className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-2xl font-extrabold"
                    style={{ backgroundColor: "rgba(237,112,44,0.12)", color: BRAND.orange }}
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <p className="text-sm leading-relaxed text-slate-700">{b}</p>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="mt-7 inline-flex w-full items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-95"
              style={{ backgroundColor: BRAND.blue }}
            >
              Demander un premier échange
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Tag({ text }) {
  return (
    <span
      className="inline-flex items-center rounded-full px-4 py-2 text-xs font-semibold"
      style={{ backgroundColor: "rgba(46,62,107,0.08)", color: BRAND.blue }}
    >
      {text}
    </span>
  );
}

/* --------------------------- 3) HISTOIRE TIMELINE --------------------------- */

function HistoireTimeline() {
  const timeline = [
    {
      title: "Déclic : simplifier la vie des dirigeants",
      text: "Créer un cabinet qui transforme la comptabilité en outil de décision, avec une méthode claire et pédagogique.",
    },
    {
      title: "Digitalisation : automatiser, puis analyser",
      text: "Mettre en place des outils collaboratifs pour réduire les tâches répétitives et gagner en qualité et en vitesse.",
    },
    {
      title: "Conseil : anticiper et sécuriser",
      text: "Concentrer l’énergie sur l’anticipation, la structuration et des recommandations actionnables.",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="mx-auto max-w-3xl text-center">
                    <div className="mb-4 inline-flex items-center justify-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 ">
            <svg className="h-4 w-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-semibold text-orange-900">Chiffres clés</span>
          </div>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#1d428a] md:text-4xl">
          Une trajectoire construite autour de l’impact.
        </h2>
        <p className="mt-4 text-lg text-slate-700">
          Une évolution guidée par une idée simple : rendre les chiffres utiles, et la décision plus sereine.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {timeline.map((t, i) => (
          <div key={t.title} className="group relative rounded-[32px] border border-slate-200 bg-white/85 p-7 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg">
            <div
              className="absolute left-0 top-0 h-1 w-full rounded-t-[32px]"
              style={{ background: `linear-gradient(90deg, ${BRAND.blue}, ${BRAND.orange})` }}
            />
            <div className="flex items-start justify-between gap-4">
              <span
                className="grid h-11 w-11 place-items-center rounded-2xl text-sm font-extrabold"
                style={{ backgroundColor: "rgba(46,62,107,0.10)", color: BRAND.blue }}
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <span className="text-xs font-semibold text-slate-500">Étape</span>
            </div>
            <h3 className="mt-4 text-lg font-extrabold text-slate-900">{t.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">{t.text}</p>
            <div
              className="mt-6 h-1 w-16 rounded-full transition group-hover:w-24"
              style={{ backgroundColor: "rgba(237,112,44,0.25)" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

/* --------------------------- 4) CHIFFRES PREMIUM --------------------------- */

function ChiffresPremium() {
  const stats = [
    { value: "24h", label: "Délai de réponse (jours ouvrés)" },
    { value: "100%", label: "Process digital & sécurisé" },
    { value: "360°", label: "Compta • Fiscalité • Pilotage" },
    { value: "France", label: "Accompagnement partout" },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="relative overflow-hidden p-10 ">
        <div
          className="absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(46,62,107,0.16)" }}
        />
        <div
          className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(237,112,44,0.12)" }}
        />

        <div className="relative flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-4 inline-flex items-center justify-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 ">
            <svg className="h-4 w-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-semibold text-orange-900">Chiffres clés</span>
          </div>
          
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#1d428a]">
              Une expérience orientée clarté.
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-95"
            style={{ backgroundColor: BRAND.blue }}
          >
            Démarrer un échange
          </Link>
        </div>

        <div className="relative mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="group rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-4xl font-extrabold tracking-tight" style={{ color: BRAND.blue }}>
                {s.value}
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-700">{s.label}</p>
              <div
                className="mx-auto mt-5 h-1 w-16 rounded-full transition group-hover:w-24"
                style={{ backgroundColor: "rgba(237,112,44,0.35)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* --------------------------- 5) FONDATRICE PREMIUM --------------------------- */

function FondatricePremium() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-20 pt-10">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        {/* Editorial card */}
        <div className="relative overflow-hidden   p-10 r">
          <div
            className="absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl"
            style={{ backgroundColor: "rgba(237,112,44,0.12)" }}
          />
          <div
            className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full blur-3xl"
            style={{ backgroundColor: "rgba(46,62,107,0.16)" }}
          />

          <div className="relative p-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#1d428a]">Fondatrice</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#1d428a]">
              Margaux Zenou
            </h2>
            <p className="mt-2 text-sm font-semibold text-[#EE7803]" >
              Fondatrice de EXPERT-UP
            </p>

            <div className="mt-7 space-y-4 text-slate-700 leading-relaxed">
              <p className="text-lg font-semibold text-slate-900">
                “Mon défi : créer un cabinet qui parle le langage des dirigeants.”
              </p>
              <p>
                “Au départ, je voyais trop d’entrepreneurs subir leur comptabilité. J’ai donc construit EXPERT-UP
                avec une méthode simple : automatiser le répétitif, rendre les chiffres lisibles, et transformer
                les données en décisions.”
              </p>
              <p>
                “La réussite d’EXPERT-UP, c’est d’avoir prouvé qu’un cabinet peut être à la fois exigeant, digital
                et profondément humain. Aujourd’hui, nous accompagnons des dirigeants partout en France avec un même
                objectif : donner de la visibilité, sécuriser les choix et aider à piloter avec sérénité.”
              </p>
            </div>

            {/* “Défi / Réussite” cards */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <MiniBox title="Défi" text="Sortir du modèle “administratif” et rendre la compta utile." />
              <MiniBox title="Réussite" text="Une méthode digitale + conseil proactif, adoptée par des dirigeants." />
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-95"
                style={{ backgroundColor: BRAND.blue }}
              >
                Échanger avec Margaux
              </Link>

              <span
                className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"
                style={{ backgroundColor: "rgba(237,112,44,0.12)", color: BRAND.orange }}
              >
                Certifié Pennylane
              </span>
            </div>
          </div>
        </div>

        {/* Image / portrait */}
        <div className="relative">
          <div
            className="absolute -inset-6 rounded-[44px] blur-2xl opacity-55"
            style={{
              background:
                "radial-gradient(closest-side, rgba(46,62,107,0.22), transparent 70%), radial-gradient(closest-side, rgba(237,112,44,0.18), transparent 70%)",
            }}
          />
          <div className="relative overflow-hidden ">
            {/* Mets la vraie photo dans public/Images/fondatrice.jpg */}
            <Image
              src="/Images/Margaux.png"
              alt="Margaux Zenou - Fondatrice Expert-UP"
              width={1100}
              height={900}
              className="h-[520px] w-full object-cover md:h-[640px]"
            />

            <div className="border-t border-slate-200 bg-white p-6">
              <p className="text-sm font-extrabold text-slate-900">“Une méthode claire. Un suivi humain. Des décisions plus sûres.”</p>
              <p className="mt-1 text-sm text-slate-600">
                EXPERT-UP — Pilotage • Fiscalité • Conseil
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniBox({ title, text }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-extrabold" style={{ color: BRAND.blue }}>
        {title}
      </p>
      <p className="mt-2 text-sm text-slate-700 leading-relaxed">{text}</p>
      <div
        className="mt-4 h-1 w-14 rounded-full"
        style={{ backgroundColor: "rgba(237,112,44,0.35)" }}
      />
    </div>
  );
}
