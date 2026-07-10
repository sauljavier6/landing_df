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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `
      relative pb-2
      font-headline-sm text-sm lg:text-base
      uppercase tracking-[0.12em]
      transition-colors duration-300
      after:absolute after:left-0 after:bottom-0
      after:h-px after:bg-secondary
      after:transition-all after:duration-300
      ${
        isActive
          ? "text-secondary after:w-full"
          : "text-on-surface-variant hover:text-secondary after:w-0 hover:after:w-full"
      }
    `;

  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    `
      flex items-center justify-between
      py-4 border-b border-outline-variant/20
      font-headline-sm text-base
      uppercase tracking-[0.14em]
      transition-colors
      ${
        isActive
          ? "text-secondary"
          : "text-on-surface-variant hover:text-secondary"
      }
    `;

  const closeMenu = () => setOpen(false);

  return (
    <nav
      className={`
        fixed top-0 left-0 z-50 w-full
        border-b border-outline-variant/30
        backdrop-blur-xl
        transition-all duration-300
        ${
          scrolled
            ? "bg-background/95 shadow-[0_10px_35px_rgba(0,0,0,0.18)]"
            : "bg-background/80"
        }
      `}
    >
      <div className="h-16 md:h-20 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
        {/* LOGO */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-3 min-w-0 shrink-0"
        >
          <img
            src="/logo.jpeg"
            alt="Dr. David Favela"
            className="h-11 w-11 md:h-12 md:w-12 rounded-full object-cover border border-secondary/20"
          />

          <div className="flex flex-col leading-none min-w-0">
            <span className="font-display-lg text-lg md:text-xl lg:text-[22px] text-secondary tracking-tight whitespace-nowrap">
              DR. DAVID FAVELA
            </span>

            <span className="mt-1 text-[9px] md:text-[10px] uppercase tracking-[0.28em] text-on-surface-variant">
              Odontólogo
            </span>
          </div>
        </Link>

        {/* DESKTOP */}
        <div className="hidden md:flex items-center gap-6 lg:gap-9">
          <NavLink to="/" className={navLinkClass}>
            Inicio
          </NavLink>

          <NavLink to="/especialidades" className={navLinkClass}>
            Especialidades
          </NavLink>

          <NavLink to="/tratamientos" className={navLinkClass}>
            Conócenos
          </NavLink>

          <NavLink to="/contacto" className={navLinkClass}>
            Contacto
          </NavLink>

          <NavLink
            to="/contacto"
            className="
              ml-1
              bg-secondary text-on-secondary
              px-6 lg:px-8 py-3
              font-label-md text-sm
              uppercase tracking-[0.08em]
              hover:bg-secondary-fixed
              active:scale-95
              transition-all duration-200
              whitespace-nowrap
            "
          >
            Agendar cita
          </NavLink>
        </div>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="
            md:hidden
            h-11 w-11
            flex items-center justify-center
            border border-secondary/30
            text-secondary
            hover:bg-secondary/10
            transition-colors
          "
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
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
            Conócenos
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
