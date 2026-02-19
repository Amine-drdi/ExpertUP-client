"use client";

import React, { useMemo, useState, useEffect } from "react";
import emailjs from '@emailjs/browser';

// Initialiser EmailJS avec votre clé publique
emailjs.init("Ur5wzyUyUEsWCkzY_");

const BRAND = { blue: "#1a2b4c", orange: "#f45b2c" };

export default function Contact() {
  // Coordonnées du cabinet
  const address = "82 RUE DE LA FAISANDERIE, 75016 PARIS";
  const phoneDisplay = "06 58 10 06 08";
  const phoneHref = "+33658100608";
  const email = "contact@expert-up.fr";

  // Google Maps embed avec paramètres améliorés
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

  // Animation de scroll pour les messages de statut
  useEffect(() => {
    if (status.state === "success" || status.state === "error") {
      const timer = setTimeout(() => {
        const element = document.getElementById('form-status');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [status.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "loading", msg: "Envoi en cours..." });

    try {
      const templateParams = {
        to_email: "dridiimedamine@gmail.com",
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        from_phone: formData.phone || "Non renseigné",
        subject: formData.subject,
        message: formData.message,
        reply_to: formData.email
      };

      await emailjs.send(
        "service_gg0lle3",
        "template_kcmfzid",
        templateParams
      );

      const dbResponse = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const dbData = await dbResponse.json();

      if (!dbResponse.ok) {
        throw new Error(dbData.message || "Erreur lors de la sauvegarde");
      }

      setStatus({
        state: "success",
        msg: "Merci ! Votre message a bien été envoyé. Nous vous répondrons sous 24h.",
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
      
    } catch (error) {
      console.error("Erreur:", error);
      setStatus({
        state: "error",
        msg: "Une erreur est survenue. Veuillez réessayer ou nous contacter par téléphone.",
      });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      {/* Bannerre de contact rapide */}
      <div className="bg-[#1D428A] text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Lun-Ven: 9h-18h
            </span>
            <span className="hidden md:inline">•</span>
            <a href={`tel:${phoneHref}`} className="flex items-center gap-1 hover:text-orange-300 transition">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {phoneDisplay}
            </a>
            <span className="hidden md:inline">•</span>
            <a href={`mailto:${email}`} className="flex items-center gap-1 hover:text-orange-300 transition">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {email}
            </a>
          </div>
        </div>
      </div>

      {/* Map avec overlay moderne */}
      <div className="relative w-full h-[300px] md:h-[400px] group">
        <iframe
          title="Localisation du cabinet"
          src={mapsSrc}
          className="h-full w-full filter grayscale-[20%] transition-all duration-700 group-hover:grayscale-0"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
          <span className="text-sm font-medium text-[#1a2b4c]">📍 82 RUE DE LA FAISANDERIE, 75016 PARIS</span>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="container mx-auto px-4 py-16 md:py-24 max-w-7xl">
        {/* En-tête */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            <span className="text-orange-700 font-semibold text-sm tracking-wide">CONTACTEZ-NOUS</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1D428A] mb-6 leading-tight">
            Parlons de votre
            <span className="text-orange-500 block md:inline ml-2">projet</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Notre équipe est à votre écoute pour vous accompagner dans vos projets. 
            Réponse garantie sous 24h ouvrées.
          </p>
        </div>

        {/* Grille principale */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Formulaire */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-slate-100 hover:shadow-2xl transition-shadow duration-300">
            {/* Barre de progression */}
            <div className="h-1.5 w-full bg-slate-100 rounded-full mb-8 overflow-hidden">
              <div 
                className="h-full rounded-full transition-all duration-500"
                style={{ 
                  width: formData.message ? '100%' : '33%',
                  background: `linear-gradient(90deg, ${BRAND.blue} 0%, ${BRAND.orange} 100%)`
                }}
              />
            </div>

            <h3 className="text-2xl font-bold text-[#1a2b4c] mb-2">
              Envoyez-nous un message
            </h3>
            <p className="text-slate-600 mb-8">
              Tous les champs marqués d'un <span className="text-orange-500">*</span> sont obligatoires
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Field 
                  label="Prénom" 
                  name="firstName" 
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Jean" 
                  required 
                  icon={
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  }
                />
                <Field 
                  label="Nom" 
                  name="lastName" 
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Dupont" 
                  required 
                  icon={
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  }
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Field 
                  label="Email" 
                  name="email" 
                  type="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jean.dupont@exemple.fr" 
                  required 
                  icon={
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  }
                />
                <Field 
                  label="Téléphone" 
                  name="phone" 
                  type="tel" 
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="06 12 34 56 78" 
                  icon={
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  }
                />
              </div>

              <Field
                label="Objet"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Demande de devis - Création d'entreprise"
                required
                icon={
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l5 5a2 2 0 01.586 1.414V19a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z" />
                  </svg>
                }
              />

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Message <span className="text-orange-500">*</span>
                </label>
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Décrivez votre projet ou votre demande en quelques lignes..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#1a2b4c] focus:ring-4 focus:ring-[#1a2b4c]/10 transition-all duration-200 resize-none"
                  />
                  <div className="absolute bottom-3 right-3 text-xs text-slate-400">
                    {formData.message.length}/1000
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  type="submit"
                  disabled={status.state === "loading"}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#1a2b4c] text-white px-6 py-4 rounded-xl font-semibold hover:bg-[#2a3b5c] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#1a2b4c]/20"
                >
                  {status.state === "loading" ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      Envoyer le message
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </div>

              {/* Message de statut */}
              {status.state !== "idle" && (
                <div
                  id="form-status"
                  className={`mt-6 p-4 rounded-xl ${
                    status.state === "success"
                      ? "bg-emerald-50 border border-emerald-200 text-emerald-800"
                      : status.state === "error"
                      ? "bg-rose-50 border border-rose-200 text-rose-800"
                      : "bg-blue-50 border border-blue-200 text-blue-800"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {status.state === "success" && (
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                    {status.state === "error" && (
                      <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                    )}
                    {status.state === "loading" && (
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg className="animate-spin w-5 h-5 text-blue-600" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                      </div>
                    )}
                    <p className="flex-1 text-sm font-medium">{status.msg}</p>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Informations de contact */}
          <div className="space-y-6">
            {/* Carte des coordonnées */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-100">
              <h3 className="text-2xl font-bold text-[#1a2b4c] mb-6">
                Nos coordonnées
              </h3>
              
              <div className="space-y-4">
                <ContactCard
                  icon={
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  }
                  title="Téléphone"
                  value={
                    <a href={`tel:${phoneHref}`} className="text-lg font-semibold text-[#1a2b4c] hover:text-orange-500 transition">
                      {phoneDisplay}
                    </a>
                  }
                  action="Appeler maintenant"
                />
                
                <ContactCard
                  icon={
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  }
                  title="Email"
                  value={
                    <a href={`mailto:${email}`} className="text-lg font-semibold text-[#1a2b4c] hover:text-orange-500 transition break-all">
                      {email}
                    </a>
                  }
                  action="Envoyer un email"
                />
                
                <ContactCard
                  icon={
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  }
                  title="Adresse"
                  value={
                    <a 
                      href={`https://maps.google.com/?q=${encodeURIComponent(address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-semibold text-[#1a2b4c] hover:text-orange-500 transition"
                    >
                      {address}
                    </a>
                  }
                  action="Voir sur Google Maps"
                />
              </div>
            </div>

            {/* Horaires et astuces */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#1a2b4c]">Horaires d'ouverture</h4>
                  <p className="text-sm text-slate-600">Notre équipe est disponible aux horaires suivants</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center p-3 bg-slate-50 rounded-xl">
                  <span className="font-medium text-slate-700">Lundi - Vendredi</span>
                  <span className="font-bold text-[#1a2b4c]">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-50 rounded-xl opacity-50">
                  <span className="font-medium text-slate-700">Samedi - Dimanche</span>
                  <span className="font-bold text-slate-400">Fermé</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center text-orange-600 flex-shrink-0">
                    💡
                  </div>
                  <div>
                    <h5 className="font-bold text-orange-800 mb-1">Conseil d'expert</h5>
                    <p className="text-sm text-orange-700">
                      Pour un traitement plus rapide, précisez votre activité, 
                      le type de structure souhaitée et votre chiffre d'affaires prévisionnel.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Badge de confiance */}
            <div className="bg-[#1a2b4c] text-white rounded-3xl shadow-xl p-6 text-center">
              <div className="flex justify-center gap-2 mb-3">
                {[1,2,3,4,5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm opacity-90">Note de confiance 5/5 - 150+ clients satisfaits</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Composant Field amélioré
function Field({ label, name, type = "text", value, onChange, placeholder, required = false, icon }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm font-semibold text-slate-700">
        {label} {required && <span className="text-orange-500">*</span>}
      </label>
      <div className={`relative transition-all duration-200 ${isFocused ? 'scale-[1.02]' : ''}`}>
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
            {icon}
          </div>
        )}
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          required={required}
          placeholder={placeholder}
          className={`w-full ${icon ? 'pl-10' : 'pl-4'} pr-4 py-3 rounded-xl border ${
            isFocused ? 'border-[#1a2b4c] ring-4 ring-[#1a2b4c]/10' : 'border-slate-200'
          } focus:outline-none transition-all duration-200`}
        />
      </div>
    </div>
  );
}

// Composant ContactCard amélioré
function ContactCard({ icon, title, value, action }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative p-4 rounded-2xl bg-slate-50 hover:bg-white transition-all duration-300 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start gap-4">
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
          isHovered ? 'bg-[#1a2b4c] text-white' : 'bg-white text-[#1a2b4c]'
        }`}>
          {icon}
        </div>
        <div className="flex-1">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">{title}</p>
          {value}
          {action && (
            <p className="text-xs text-orange-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
              {action} →
            </p>
          )}
        </div>
      </div>
    </div>
  );
}