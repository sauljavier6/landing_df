import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export default function TopNavbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `font-headline-sm text-headline-sm uppercase tracking-widest transition-colors duration-300 pb-1 ${
      isActive
        ? "text-secondary border-b border-secondary"
        : "text-on-surface-variant hover:text-secondary-fixed-dim"
    }`;

  const mobileLinkClass =
    "block font-headline-sm text-headline-sm uppercase tracking-widest text-on-surface-variant hover:text-secondary py-3";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b border-outline-variant/30 transition-colors duration-300 ${
        scrolled ? "bg-background/90" : "bg-background/70"
      }`}
    >
      <div className="h-16 md:h-20 max-w-container-max-width mx-auto px-4 sm:px-6 lg:px-0 flex justify-between items-center gap-5">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="font-display-lg text-lg sm:text-xl lg:text-2xl text-secondary tracking-tighter cursor-pointer whitespace-nowrap"
        >
          DR. DAVID FAVELA
        </Link>

        <div className="hidden md:flex gap-10 items-center">
          <NavLink to="/" className={navLinkClass}>
            Inicio
          </NavLink>
          <NavLink to="/especialidades" className={navLinkClass}>
            Especialidades
          </NavLink>
          <NavLink to="/tratamientos" className={navLinkClass}>
            Tratamientos
          </NavLink>
          <NavLink to="/contacto" className={navLinkClass}>
            Contacto
          </NavLink>

          <NavLink
            to="/contacto"
            className="bg-secondary text-on-secondary px-8 py-2 font-label-md text-label-md uppercase active:scale-95 duration-200 transition-all hover:bg-secondary-fixed"
          >
            Agendar Cita
          </NavLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden text-secondary"
        >
          <span className="material-symbols-outlined">
            {open ? "close" : "menu"}
          </span>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-outline-variant/30 px-margin-desktop py-4">
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className={mobileLinkClass}
          >
            Inicio
          </NavLink>

          <NavLink
            to="/especialidades"
            onClick={() => setOpen(false)}
            className={mobileLinkClass}
          >
            Especialidades
          </NavLink>

          <NavLink
            to="/tratamientos"
            onClick={() => setOpen(false)}
            className={mobileLinkClass}
          >
            Tratamientos
          </NavLink>

          <NavLink
            to="/contacto"
            onClick={() => setOpen(false)}
            className={mobileLinkClass}
          >
            Contacto
          </NavLink>

          <NavLink
            to="/contacto"
            onClick={() => setOpen(false)}
            className="block text-center mt-4 bg-secondary text-on-secondary px-8 py-3 font-label-md text-label-md uppercase"
          >
            Agendar Cita
          </NavLink>
        </div>
      )}
    </nav>
  );
}
