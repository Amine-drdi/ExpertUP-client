"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const services = [
  { label: "Missions légales et fiscales", href: "/services/missions-legales-fiscales" },
  { label: "Pilotage d’entreprise", href: "/services/pilotage-entreprise" },
  { label: "Accompagnement 360", href: "/services/accompagnement-360" },
  { label: "Gestion de patrimoine", href: "/services/gestion-patrimoine" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="w-full bg-[#F8F9FA] border-b border-slate-200 shadow-sm sticky top-0 z-50">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-20">
        {/* Logo */}
        <Link href="/" className="flex items-center transition-transform hover:scale-105">
          <Image
            src="/Logo-EXPERT-UP-Carre.png"
            alt="Expert UP - Cabinet de comptabilité"
            width={120}
            height={90}
            priority
            className="object-contain w-auto h-14 md:h-16"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          {/* ... (menu desktop existant) */}
          <Link href="/" className="text-base font-semibold text-[#142c5d] hover:text-[#21499a] transition-colors px-2 py-1">
            Accueil
          </Link>

          {/* Services dropdown */}
          <div className="group relative">
            <button className="inline-flex items-center gap-2 text-base font-semibold text-[#142c5d] hover:text-[#21499a] transition-colors px-2 py-1">
              Services
              <svg className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.94a.75.75 0 111.08 1.04l-4.24 4.5a.75.75 0 01-1.08 0l-4.24-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>
            <div className="invisible absolute left-0 top-full z-50 mt-2 w-80 rounded-xl border border-slate-100 bg-white py-2 shadow-xl opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
              {/* ... dropdown content ... */}
              <div className="px-4 pb-2 pt-1">
                <p className="text-xs font-bold uppercase tracking-wider text-[#1D428A]">Nos services</p>
              </div>
              <div className="h-px bg-slate-100 mx-2 mb-2"></div>
              <ul className="space-y-1 px-2">
                {services.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className="block rounded-lg px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-[#1D428A] transition-colors">
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <a href="https://www.pennylane.com/fr" target="_blank" rel="noreferrer" className="text-base font-semibold text-[#142c5d] hover:text-[#21499a] transition-colors px-2 py-1">
            Pennylane
          </a>
          <Link href="/Notre-cabinet" className="text-base font-semibold text-[#142c5d] hover:text-[#21499a] transition-colors px-2 py-1">
            Notre cabinet
          </Link>
          <Link href="/blog" className="text-base font-semibold text-[#142c5d] hover:text-[#21499a] transition-colors px-2 py-1">
            Ressources / Blog
          </Link>
        </nav>

        {/* Desktop Contact Button */}
        <a href="/contact" className="hidden md:inline-flex items-center gap-2 rounded-lg bg-[#1D428A] px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-[#0f2a5a] hover:shadow-lg transition-all duration-200">
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.59a1 1 0 01-.25 1.01l-2.2 2.19z" />
          </svg>
          Contactez-nous
        </a>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          {/* Mobile Contact Icon */}
          <a href="/contact" className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1D428A] text-white shadow-md">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.59a1 1 0 01-.25 1.01l-2.2 2.19z" />
            </svg>
          </a>
          
          {/* Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 flex-col items-center justify-center rounded-lg bg-slate-100"
            aria-label="Menu"
          >
            <span className={`block h-0.5 w-5 bg-slate-800 transition-transform duration-300 ${isMobileMenuOpen ? 'translate-y-1.5 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-5 bg-slate-800 my-1 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-5 bg-slate-800 transition-transform duration-300 ${isMobileMenuOpen ? '-translate-y-1.5 -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`absolute left-0 right-0 top-20 z-50 bg-white shadow-xl transition-all duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible'
        } overflow-hidden`}
      >
        <div className="border-t border-slate-100 px-4 py-6">
          <nav className="flex flex-col space-y-4">
            {/* Mobile Navigation Links */}
            <Link
              href="/"
              className="text-base font-semibold text-slate-800 hover:text-[#1D428A] px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Accueil
            </Link>

            {/* Mobile Services Dropdown */}
            <div className="space-y-2">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex w-full items-center justify-between px-4 py-2 text-base font-semibold text-slate-800 rounded-lg hover:bg-slate-50"
              >
                Services
                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.94a.75.75 0 111.08 1.04l-4.24 4.5a.75.75 0 01-1.08 0l-4.24-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>
              
              {/* Mobile Services Submenu */}
              <div className={`pl-4 space-y-2 transition-all duration-200 ${isServicesOpen ? 'block' : 'hidden'}`}>
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block px-4 py-2.5 text-sm font-medium text-slate-600 rounded-lg hover:bg-slate-50 hover:text-[#1D428A]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>

            <a
              href="https://www.pennylane.com/fr"
              target="_blank"
              rel="noreferrer"
              className="text-base font-semibold text-slate-800 hover:text-[#1D428A] px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pennylane
            </a>

            <Link
              href="/Notre-cabinet"
              className="text-base font-semibold text-slate-800 hover:text-[#1D428A] px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Notre cabinet
            </Link>

            <Link
              href="/blog"
              className="text-base font-semibold text-slate-800 hover:text-[#1D428A] px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Ressources / Blog
            </Link>

            {/* Mobile Contact Button (full width) */}
            <div className="pt-4 mt-2 border-t border-slate-100">
              <a
                href="/contact"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#1D428A] px-5 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#0f2a5a] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.59a1 1 0 01-.25 1.01l-2.2 2.19z" />
                </svg>
                Contactez-nous
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}