"use client"
import Link from "next/link";
import Image from "next/image";

const BRAND = { blue: "#2E3E6B", orange: "#ED702C" };

const services = [
  { label: "Missions légales et fiscales", href: "/services/missions-legales-fiscales" },
  { label: "Pilotage d'entreprise", href: "/services/pilotage-entreprise" },
  { label: "Accompagnement 360", href: "/services/accompagnement-360" },
  { label: "Gestion de patrimoine", href: "/services/gestion-patrimoine" },
];

const companyLinks = [
  { label: "Le cabinet", href: "/notre-cabinet" },
  { label: "Ressources / Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-gradient-to-br from-[#e0edf5] via-[#e8f2f7] to-[#e0edf5]">
      {/* Enhanced background texture with multiple layers */}
      <div className="absolute inset-0 opacity-[0.15] [background-image:radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:18px_18px]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] [background-size:64px_64px]" />
      
      {/* Animated gradient orb */}
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gradient-to-br from-blue-200/30 to-orange-200/30 blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute -left-32 -bottom-32 h-96 w-96 rounded-full bg-gradient-to-tr from-orange-200/20 to-blue-200/20 blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />

      <div className="relative mx-auto max-w-6xl px-4 py-14">
        {/* Top */}
        <div className="grid gap-10 md:grid-cols-4">
          
          {/* Brand */}
          <div className="group">
            <Link href="/" className="flex items-center gap-4">
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
                <Image
                  src="/Logo-EXPERT-UP-Carre.png"
                  alt="Expert UP"
                  width={56}
                  height={56}
                  className="object-contain transition-transform duration-300 group-hover:rotate-3"
                />
              </div>

              <div className="leading-tight">
                <p className="text-xs text-slate-500 transition-colors duration-300 group-hover:text-slate-700">
                  Expertise comptable • Fiscalité • Conseil
                </p>
              </div>
            </Link>

            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Cabinet d'expertise comptable moderne et digital, dédié à la
              performance et à la sérénité des dirigeants.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/expert-up/"
                className="group/social relative grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition-all duration-300 hover:border-[#0077B5] hover:bg-[#0077B5] hover:text-white hover:shadow-lg hover:-translate-y-0.5"
                aria-label="LinkedIn"
                target="_blank"
            rel="noreferrer"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-slate-900 px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-200 group-hover/social:opacity-100">
                  LinkedIn
                </span>
              </a>
              <a
                href="#"
                className="group/social relative grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition-all duration-300 hover:border-[#1877F2] hover:bg-[#1877F2] hover:text-white hover:shadow-lg hover:-translate-y-0.5"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-slate-900 px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-200 group-hover/social:opacity-100">
                  Facebook
                </span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-sm font-extrabold text-slate-900 mb-1">Services</p>
            <div className="h-1 w-12 bg-gradient-to-r from-[#2E3E6B] to-[#ED702C] rounded-full mb-4"></div>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href} className="group/link flex items-center">
                  <span className="mr-2 h-1.5 w-1.5 rounded-full bg-slate-300 transition-all duration-300 group-hover/link:w-6 group-hover/link:bg-[#ED702C]"></span>
                  <Link
                    href={s.href}
                    className="text-sm text-slate-600 transition-all duration-300 group-hover/link:text-slate-900 group-hover/link:translate-x-1"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Liens utiles */}
          <div>
            <p className="text-sm font-extrabold text-slate-900 mb-1">Liens utiles</p>
            <div className="h-1 w-12 bg-gradient-to-r from-[#2E3E6B] to-[#ED702C] rounded-full mb-4"></div>
            <ul className="space-y-3">
              {companyLinks.map((l) => (
                <li key={l.href} className="group/link flex items-center">
                  <span className="mr-2 h-1.5 w-1.5 rounded-full bg-slate-300 transition-all duration-300 group-hover/link:w-6 group-hover/link:bg-[#ED702C]"></span>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-600 transition-all duration-300 group-hover/link:text-slate-900 group-hover/link:translate-x-1"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-extrabold text-slate-900 mb-1">Contact</p>
            <div className="h-1 w-12 bg-gradient-to-r from-[#2E3E6B] to-[#ED702C] rounded-full mb-4"></div>

            <div className="space-y-3 text-sm text-slate-600">
              <a href="tel:+33658100608" className="group/contact flex items-center gap-2 hover:text-slate-900 transition-colors duration-300">
                <svg className="h-4 w-4 text-[#ED702C] transition-transform duration-300 group-hover/contact:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>06 58 10 06 08</span>
              </a>

              <a
                href="mailto:contact@expert-up.fr"
                className="group/contact flex items-center gap-2 hover:text-slate-900 transition-colors duration-300"
              >
                <svg className="h-4 w-4 text-[#ED702C] transition-transform duration-300 group-hover/contact:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>contact@expert-up.fr</span>
              </a>

              <div className="flex items-start gap-2">
                <svg className="h-4 w-4 text-[#ED702C] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>82 RUE DE LA FAISANDERIE, 75016 PARIS</span>
              </div>

              <div className="mt-4 rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-sm p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-300">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="h-4 w-4 text-[#2E3E6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                    Horaires
                  </p>
                </div>
                <p className="text-sm text-slate-600">
                  Lun — Ven : 9h — 18h <br />
                  Réponse sous 24h
                </p>

                <Link
                  target="_blank"
            rel="noreferrer"
                href="https://calendly.com/margaux-expert-up/30min"
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group/btn"
                  style={{ backgroundColor: BRAND.blue }}
                >
                  <span>Prendre rendez-vous</span>
                  <svg className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Divider with gradient */}
        <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

        {/* Bottom */}
        <div className="flex flex-col gap-4 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p className="flex items-center gap-2">
            <svg className="h-4 w-4 text-[#ED702C]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <span>© {year} EXPERT-UP — Tous droits réservés.</span>
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link href="/mentions-legales" className="hover:text-slate-900 transition-colors duration-300 relative group/legal">
              Mentions légales
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ED702C] transition-all duration-300 group-hover/legal:w-full"></span>
            </Link>
            <Link href="/politique-confidentialite" className="hover:text-slate-900 transition-colors duration-300 relative group/legal">
              Confidentialité
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ED702C] transition-all duration-300 group-hover/legal:w-full"></span>
            </Link>
            <Link href="/cookies" className="hover:text-slate-900 transition-colors duration-300 relative group/legal">
              Cookies
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ED702C] transition-all duration-300 group-hover/legal:w-full"></span>
            </Link>
          </div>
        </div>
      </div>

      {/* Enhanced animated accent bottom line */}
      <div className="relative h-[3px] w-full overflow-hidden">
        <div
          className="absolute inset-0 animate-gradient"
          style={{
            background: `linear-gradient(90deg, ${BRAND.blue} 0%, ${BRAND.orange} 55%, ${BRAND.blue} 100%)`,
            backgroundSize: '200% 100%',
          }}
        />
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          animation: gradient 8s ease infinite;
        }
      `}</style>
    </footer>
  );
}