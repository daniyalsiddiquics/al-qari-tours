import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../routes/paths.js";
import logo from "../assets/images/logo.png";

const NAV_LINKS = [
  { label: "Home", path: ROUTES.HOME },
  { label: "Packages", path: ROUTES.PACKAGES },
  { label: "Hotels", path: ROUTES.HOTELS },
  { label: "Gallery", path: ROUTES.GALLERY },
  { label: "Contact", path: ROUTES.CONTACT },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-gold/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
       <div className="flex items-center justify-between h-20">
          <NavLink
            to={ROUTES.HOME}
            onClick={closeMobileMenu}
            className="flex items-center gap-3 shrink-0"
          >
            <img
              src={logo}
              alt="Al Qari Tours"
              className="h-12 sm:h-14 w-auto object-contain"
            />

            <div className="leading-tight">
              <h2 className="font-display text-lg font-semibold text-emerald-deep">
                AL QARI
              </h2>
              <p className="text-xs tracking-[0.2em] text-gold font-semibold">
                Tours Travel (Pvt.) Ltd.
              </p>
            </div>
          </NavLink>

          <ul className="hidden md:flex flex-1 justify-center items-center gap-8 -ml-[80px]">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    [
                      "relative py-2 text-sm font-medium tracking-wide transition-colors",
                      isActive
                        ? "text-emerald-deep"
                        : "text-ink/70 hover:text-emerald-deep",
                    ].join(" ")
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <span className="absolute -bottom-px left-0 right-0 h-[2px] bg-gold" />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* HAMBURGER TOGGLE BUTTON (mobile only) */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="md:hidden ml-auto inline-flex items-center justify-center rounded-md p-2 text-emerald-deep"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <CloseIcon className="h-6 w-6" />
            ) : (
              <HamburgerIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU PANEL */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gold/30 bg-cream px-4 pb-4">
          <ul className="flex flex-col gap-1 pt-2">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    [
                      "block rounded-md px-3 py-2 text-base font-medium",
                      isActive
                        ? "bg-emerald-deep/10 text-emerald-deep"
                        : "text-ink/70 hover:bg-emerald-deep/5",
                    ].join(" ")
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

function HamburgerIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}