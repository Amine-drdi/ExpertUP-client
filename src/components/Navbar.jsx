import Link from "next/link";
import Image from "next/image";
const services = [
  { label: "Missions légales et fiscales", href: "/services/missions-legales-fiscales" },
  { label: "Pilotage d’entreprise", href: "/services/pilotage-entreprise" },
  { label: "Accompagnement 360", href: "/services/accompagnement-360" },
  { label: "Gestion de patrimoine", href: "/services/gestion-patrimoine" },
];

export default function Navbar() {
  return (
    <header className="w-full h-24 border-b border-slate-200 bg-[#F8F9FA]">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
         {/* Logo */}
        <Link href="/" className="flex items-center gap-3 transition-transform hover:scale-105">
  <Image
    src="/Logo-EXPERT-UP-Carre.png"
    alt="Expert UP - Cabinet de comptabilité"
    width={80}
    height={60}
    priority
    className="object-contain mx-4 mt-7"
  />
</Link>
        {/* Menu desktop */}
        <nav className="hidden items-center gap-6 md:flex mt-4">
          <Link href="/" className="text- font-medium text-slate-700 hover:text-slate-900">
            Accueil
          </Link>

          {/* Services dropdown (hover) */}
          <div className="group relative">
            <button
              type="button"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-slate-900"
              aria-haspopup="true"
            >
              Service
              <svg
                className="h-4 w-4 transition-transform group-hover:rotate-180"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.94a.75.75 0 111.08 1.04l-4.24 4.5a.75.75 0 01-1.08 0l-4.24-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Dropdown panel */}
            <div className="invisible absolute left-0 top-full z-50 mt-3 w-72 rounded-2xl border border-slate-200 bg-white p-2 shadow-lg opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
              <div className="px-2 pb-2 pt-1">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Nos services
                </p>
              </div>

              <ul className="space-y-1">
                {services.map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      className="block rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                    >
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Pennylane external */}
          <a
            href="https://www.pennylane.com/fr"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-slate-700 hover:text-slate-900"
          >
            Pennylane
          </a>

          <Link href="/notre-cabinet" className="text-sm font-medium text-slate-700 hover:text-slate-900">
            Notre cabinet
          </Link>

          <Link href="/blog" className="text-sm font-medium text-slate-700 hover:text-slate-900">
            Ressources / Blog
          </Link>

          <Link href="/contact" className="text-sm font-medium text-slate-700 hover:text-slate-900">
            Contact
          </Link>
        </nav> 
        {/* Bouton téléphone */}
        <a
          href="tel:+33658100608"
          className="inline-flex items-center gap-2 rounded-xl bg-[#1D428A] px-4 py-2 text-sm font-semibold text-white hover:bg-[#042f84] mt-4"
          aria-label="Appeler le 06 58 10 06 08"
        >
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.59a1 1 0 01-.25 1.01l-2.2 2.19z" />
          </svg>
          06 58 10 06 08
        </a>
      </div>
    </header>
  );
}
