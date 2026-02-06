"use client";

import React, { useMemo, useState } from "react";

const BRAND = { blue: "#2E3E6B", orange: "#ED702C" };

export default function Contact() {
  // ⚠️ Remplace par l’adresse exacte du cabinet (utile pour Maps)
  const address = "82 RUE DE LA FAISANDERIE, 75016 PARIS";
  const phoneDisplay = "06 58 10 06 08";
  const phoneHref = "+33658100608";
  const email = "contact@expert-up.fr";

  // Google Maps embed (tu peux remplacer par ton lien embed exact)
  const mapsSrc = useMemo(() => {
    const q = encodeURIComponent(address);
    return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463.9584710177052!2d2.2741908082887017!3d48.86687969702178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66557651a8929%3A0x1097fd16e97a2768!2s82%20Rue%20de%20la%20Faisanderie%2C%2075116%20Paris%2C%20France!5e0!3m2!1sfr!2stn!4v1770389297902!5m2!1sfr!2stn`;
  }, [address]);
  // Form state (UI only — à connecter à ton backend / API route ensuite)
  const [status, setStatus] = useState({ state: "idle", msg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "loading", msg: "" });

    // 🔧 Ici tu connectes à ton endpoint (ex: /api/contact)
    // const res = await fetch("/api/contact", { method:"POST", body: ... });

    // Demo success
    setTimeout(() => {
      setStatus({
        state: "success",
        msg: "Merci ! Votre message a bien été envoyé. Nous vous répondrons sous 24h.",
      });
      e.target.reset();
    }, 700);
  };

  return (
    <section className="relative overflow-hidden">
      {/* MAP full width */}
      <div className="relative w-full">
        <div className="h-[320px] w-full md:h-[420px]">
          <iframe
            title="Localisation du cabinet"
            src={mapsSrc}
            className="h-full w-full"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        {/* subtle top overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-transparent" />
      </div>

      {/* CONTENT */}
      <div
        className="relative"
        style={{
          background:
            "radial-gradient(900px 480px at 15% 15%, rgba(46,62,107,0.10), transparent 60%), radial-gradient(780px 420px at 85% 45%, rgba(237,112,44,0.08), transparent 60%), linear-gradient(180deg, #FFFFFF 0%, #F7F9FF 50%, #FFFFFF 100%)",
        }}
      >
        <div className="mx-auto max-w-6xl px-4 py-16">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center justify-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2">
  <svg 
    className="h-4 w-4 text-orange-600" 
    fill="currentColor" 
    viewBox="0 0 20 20"
  >
    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
  </svg>
            <span className="text-sm font-semibold text-orange-900">Contactez-nous</span>
          </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-[#1d428a] leading-tight">
              Parlons de votre projet
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-700">
              Nous répondons rapidement, avec une approche claire et orientée résultats.
            </p>
          </div>

          {/* Grid */}
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* FORM (left) */}
            <div className="rounded-3xl border border-slate-200 bg-white/85 p-7 shadow-sm backdrop-blur">
              <div
                className="mb-6 h-1 w-full rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${BRAND.blue} 0%, ${BRAND.orange} 60%, ${BRAND.blue} 100%)`,
                }}
              />

              <h3 className="text-lg font-extrabold text-slate-900">
                Envoyez-nous un message
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Réponse sous 24h (jours ouvrés).
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Prénom" name="firstName" placeholder="Ex: Julien" required />
                  <Field label="Nom" name="lastName" placeholder="Ex: Martin" required />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Email" name="email" type="email" placeholder="vous@entreprise.fr" required />
                  <Field label="Téléphone" name="phone" type="tel" placeholder="Ex: 06 00 00 00 00" />
                </div>

                <Field
                  label="Objet"
                  name="subject"
                  placeholder="Ex: Demande de devis / création société / optimisation fiscale…"
                  required
                />

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-900">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    placeholder="Décrivez votre besoin (activité, forme juridique, volume, objectifs…)…"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-300 focus:ring-4 focus:ring-slate-100"
                  />
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    disabled={status.state === "loading"}
                    className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-95 disabled:opacity-70"
                    style={{ backgroundColor: BRAND.blue }}
                  >
                    {status.state === "loading" ? "Envoi..." : "Envoyer"}
                  </button>

                  <p className="text-xs text-slate-500">
                    En envoyant ce formulaire, vous acceptez d’être recontacté.
                  </p>
                </div>

                {status.state !== "idle" && (
                  <div
                    className={`mt-3 rounded-2xl border p-4 text-sm ${
                      status.state === "success"
                        ? "border-emerald-200 bg-emerald-50 text-emerald-900"
                        : status.state === "error"
                        ? "border-rose-200 bg-rose-50 text-rose-900"
                        : "border-slate-200 bg-slate-50 text-slate-700"
                    }`}
                  >
                    {status.msg || "Traitement en cours..."}
                  </div>
                )}
              </form>
            </div>

            {/* CONTACT INFO (right) */}
            <aside className="rounded-3xl border border-slate-200 bg-white/85 p-7 shadow-sm backdrop-blur">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-extrabold text-slate-900">
                    Nos coordonnées
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Un interlocuteur clair, un suivi réactif.
                  </p>
                </div>

                <span
                  className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"
                  style={{ backgroundColor: "rgba(237,112,44,0.12)", color: BRAND.orange }}
                >
                  Réponse sous 24h
                </span>
              </div>

              <div className="mt-6 space-y-4">
                <InfoRow
                  icon="📞"
                  title="Téléphone"
                  value={<a className="hover:text-slate-900" href={`tel:${phoneHref}`}>{phoneDisplay}</a>}
                />
                <InfoRow
                  icon="✉️"
                  title="Email"
                  value={<a className="hover:text-slate-900" href={`mailto:${email}`}>{email}</a>}
                />
                <InfoRow
                  icon="📍"
                  title="Adresse"
                  value={<span>{address}</span>}
                />
              </div>

              <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                  Horaires
                </p>
                <div className="mt-3 space-y-2 text-sm text-slate-700">
                  <div className="flex justify-between gap-4">
                    <span>Lundi – Vendredi</span>
                    <span className="font-semibold">09:00 – 18:00</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span>Samedi</span>
                    <span className="font-semibold">Fermé</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span>Dimanche</span>
                    <span className="font-semibold">Fermé</span>
                  </div>
                </div>

                <div className="mt-5 rounded-2xl p-4" style={{ backgroundColor: "rgba(46,62,107,0.06)" }}>
                  <p className="text-sm font-semibold" style={{ color: BRAND.blue }}>
                    Astuce
                  </p>
                  <p className="mt-1 text-sm text-slate-700">
                    Pour accélérer le traitement, indiquez votre activité, forme juridique
                    et volume de factures mensuel.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`tel:${phoneHref}`}
                  className="inline-flex flex-1 items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-95"
                  style={{ backgroundColor: BRAND.blue }}
                >
                  Appeler
                </a>

                <a
                  href={`mailto:${email}`}
                  className="inline-flex flex-1 items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
                >
                  Envoyer un email
                </a>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder, required = false }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-slate-900">
        {label} {required && <span className="text-slate-400">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-300 focus:ring-4 focus:ring-slate-100"
      />
    </div>
  );
}

function InfoRow({ icon, title, value }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4">
      <div className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-50 text-lg" aria-hidden="true">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">{title}</p>
        <div className="mt-1 text-sm font-semibold text-slate-800">{value}</div>
      </div>
    </div>
  );
}
