"use client";

import React, { useMemo, useState } from "react";

const BRAND = { blue: "#2E3E6B", orange: "#ED702C" };

export default function Contact() {
  // Coordonnées du cabinet
  const address = "82 RUE DE LA FAISANDERIE, 75016 PARIS";
  const phoneDisplay = "06 58 10 06 08";
  const phoneHref = "+33658100608";
  const email = "contact@expert-up.fr";

  // Google Maps embed
  const mapsSrc = useMemo(() => {
    return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463.9584710177052!2d2.2741908082887017!3d48.86687969702178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66557651a8929%3A0x1097fd16e97a2768!2s82%20Rue%20de%20la%20Faisanderie%2C%2075116%20Paris%2C%20France!5e0!3m2!1sfr!2stn!4v1770389297902!5m2!1sfr!2stn`;
  }, []);

  // État du formulaire
  const [status, setStatus] = useState({ state: "idle", msg: "" });
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  // Gestionnaire de changement des champs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Gestionnaire de soumission du formulaire
 // Dans Contact.jsx, remplacez votre handleSubmit par :
const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus({ state: "loading", msg: "Envoi en cours..." });

  try {
    console.log('Données envoyées:', formData);
    
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    // Lire la réponse même en cas d'erreur
    const data = await response.json();
    console.log('Réponse du serveur (statut):', response.status);
    console.log('Réponse du serveur (données):', data);

    if (response.ok) {
      setStatus({
        state: "success",
        msg: data.message || "Merci ! Votre message a bien été envoyé. Nous vous répondrons sous 24h.",
      });
      
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Afficher les erreurs de validation détaillées
      let errorMessage = data.message || "Une erreur est survenue. Veuillez réessayer.";
      
      // Si nous avons des erreurs de validation détaillées
      if (data.errors && data.errors.length > 0) {
        errorMessage = data.errors.map(err => err.msg).join(', ');
      }
      
      setStatus({
        state: "error",
        msg: errorMessage,
      });
      
      console.error('Erreurs détaillées:', data.errors);
    }
  } catch (error) {
    console.error('Erreur de connexion:', error);
    setStatus({
      state: "error",
      msg: "Erreur de connexion au serveur. Veuillez vérifier votre réseau et réessayer.",
    });
  }
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
                  <Field 
                    label="Prénom" 
                    name="firstName" 
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Ex: Julien" 
                    required 
                  />
                  <Field 
                    label="Nom" 
                    name="lastName" 
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Ex: Martin" 
                    required 
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Field 
                    label="Email" 
                    name="email" 
                    type="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="vous@entreprise.fr" 
                    required 
                  />
                  <Field 
                    label="Téléphone" 
                    name="phone" 
                    type="tel" 
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Ex: 06 00 00 00 00" 
                  />
                </div>

                <Field
                  label="Objet"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Ex: Demande de devis / création société / optimisation fiscale…"
                  required
                />

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-900">
                    Message <span className="text-slate-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
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
                    className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-95 disabled:opacity-70 disabled:cursor-not-allowed"
                    style={{ backgroundColor: BRAND.blue }}
                  >
                    {status.state === "loading" ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Envoi en cours...
                      </>
                    ) : "Envoyer le message"}
                  </button>

                  <p className="text-xs text-slate-500">
                    En envoyant ce formulaire, vous acceptez d'être recontacté.
                  </p>
                </div>

                {/* Message de statut */}
                {status.state !== "idle" && (
                  <div
                    className={`mt-4 rounded-2xl border p-4 text-sm ${
                      status.state === "success"
                        ? "border-emerald-200 bg-emerald-50 text-emerald-900"
                        : status.state === "error"
                        ? "border-rose-200 bg-rose-50 text-rose-900"
                        : "border-blue-200 bg-blue-50 text-blue-900"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {status.state === "success" && (
                        <svg className="h-5 w-5 text-emerald-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                      {status.state === "error" && (
                        <svg className="h-5 w-5 text-rose-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                      {status.state === "loading" && (
                        <svg className="animate-spin h-5 w-5 text-blue-600 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      )}
                      <p className="flex-1">{status.msg}</p>
                    </div>
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
                  className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold whitespace-nowrap"
                  style={{ backgroundColor: "rgba(237,112,44,0.12)", color: BRAND.orange }}
                >
                  Réponse sous 24h
                </span>
              </div>

              <div className="mt-6 space-y-4">
                <InfoRow
                  icon={
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  }
                  title="Téléphone"
                  value={
                    <a 
                      className="hover:text-[#2E3E6B] transition-colors font-medium" 
                      href={`tel:${phoneHref}`}
                    >
                      {phoneDisplay}
                    </a>
                  }
                />
                <InfoRow
                  icon={
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  }
                  title="Email"
                  value={
                    <a 
                      className="hover:text-[#2E3E6B] transition-colors font-medium" 
                      href={`mailto:${email}`}
                    >
                      {email}
                    </a>
                  }
                />
                <InfoRow
                  icon={
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  }
                  title="Adresse"
                  value={
                    <a 
                      className="hover:text-[#2E3E6B] transition-colors font-medium"
                      href={`https://maps.google.com/?q=${encodeURIComponent(address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {address}
                    </a>
                  }
                />
              </div>

              <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                  Horaires d'ouverture
                </p>
                <div className="mt-3 space-y-2 text-sm text-slate-700">
                  <div className="flex justify-between gap-4">
                    <span>Lundi – Vendredi</span>
                    <span className="font-semibold">09:00 – 18:00</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span>Samedi</span>
                    <span className="font-semibold text-slate-400">Fermé</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span>Dimanche</span>
                    <span className="font-semibold text-slate-400">Fermé</span>
                  </div>
                </div>

                <div className="mt-5 rounded-2xl p-4" style={{ backgroundColor: "rgba(46,62,107,0.06)" }}>
                  <p className="text-sm font-semibold" style={{ color: BRAND.blue }}>
                    💡 Astuce
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
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:brightness-95 hover:shadow-md"
                  style={{ backgroundColor: BRAND.blue }}
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Appeler
                </a>

                <a
                  href={`mailto:${email}`}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-all hover:bg-slate-50 hover:shadow-md"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email
                </a>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

// Composant Field réutilisable
function Field({ label, name, type = "text", value, onChange, placeholder, required = false }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-semibold text-slate-900">
        {label} {required && <span className="text-slate-400">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:border-slate-300 focus:ring-4 focus:ring-slate-100 hover:border-slate-300"
      />
    </div>
  );
}

// Composant InfoRow réutilisable
function InfoRow({ icon, title, value }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 transition-all hover:shadow-md">
      <div className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-50 text-[#2E3E6B]" aria-hidden="true">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">{title}</p>
        <div className="mt-1 text-sm font-semibold text-slate-800 break-words">{value}</div>
      </div>
    </div>
  );
}