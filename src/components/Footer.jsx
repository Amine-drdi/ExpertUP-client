import Link from "next/link";
import Image from "next/image";

const BRAND = { blue: "#2E3E6B", orange: "#ED702C" };

const services = [
  { label: "Missions légales et fiscales", href: "/services/missions-legales-fiscales" },
  { label: "Pilotage d’entreprise", href: "/services/pilotage-entreprise" },
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
    <footer className="relative overflow-hidden border-t border-slate-200 bg-[#e0edf5]">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.25] [background-image:radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:18px_18px]" />

      <div className="relative mx-auto max-w-6xl px-4 py-14">
        {/* Top */}
        <div className="grid gap-10 md:grid-cols-4">
          
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-4">
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl ">
                <Image
                  src="/Logo-EXPERT-UP-Carre.png"
                  alt="Expert UP"
                  width={56}
                  height={56}
                  className="object-contain"
                />
               
              </div>

              <div className="leading-tight">
                
                <p className="text-xs text-slate-500">
                  Expertise comptable • Fiscalité • Conseil
                </p>
              </div>
            </Link>

            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Cabinet d’expertise comptable moderne et digital, dédié à la
              performance et à la sérénité des dirigeants.
            </p>

            <div className="mt-5 flex items-center gap-2">
              <a
                href="#"
                className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a
                href="#"
                className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50"
                aria-label="Facebook"
              >
                f
              </a>
             
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-sm font-extrabold text-slate-900">Services</p>
            <ul className="mt-4 space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-slate-600 transition hover:text-slate-900"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Liens utiles */}
          <div>
            <p className="text-sm font-extrabold text-slate-900">Liens utiles</p>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-600 transition hover:text-slate-900"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-extrabold text-slate-900">Contact</p>

            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <a href="tel:+33658100608" className="block hover:text-slate-900">
                📞 06 58 10 06 08
              </a>

              <a
                href="mailto:contact@expert-up.fr"
                className="block hover:text-slate-900"
              >
                ✉️ contact@expert-up.fr
              </a>

              <p>
                📍 Paris & Île-de-France <br />
                Accompagnement à distance possible
              </p>

              <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                  Horaires
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Lun – Ven : 9h – 18h <br />
                  Réponse sous 24h
                </p>

                <Link
                  href="/contact"
                  className="mt-4 inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold text-white transition hover:brightness-95"
                  style={{ backgroundColor: BRAND.blue }}
                >
                  Prendre rendez-vous
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px w-full bg-slate-200" />

        {/* Bottom */}
        <div className="flex flex-col gap-4 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© {year} EXPERT-UP — Tous droits réservés.</p>

          <div className="flex flex-wrap items-center gap-4">
            <Link href="/mentions-legales" className="hover:text-slate-900">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="hover:text-slate-900">
              Confidentialité
            </Link>
            <Link href="/cookies" className="hover:text-slate-900">
              Cookies
            </Link>
          </div>
        </div>
      </div>

      {/* Accent bottom line */}
      <div
        className="h-[3px] w-full"
        style={{
          background: `linear-gradient(90deg, ${BRAND.blue} 0%, ${BRAND.orange} 55%, ${BRAND.blue} 100%)`,
        }}
      />
    </footer>
  );
}
