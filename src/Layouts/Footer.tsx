export default function Footer() {
  return (
    <footer className="w-full py-12 px-margin-desktop flex flex-col items-center gap-base border-t border-secondary bg-surface-container-lowest">
      <div className="font-headline-md text-headline-md text-secondary mb-4">
        DR. DAVID FAVELA
      </div>

      <div className="flex flex-wrap justify-center gap-8 mb-8">
        <a
          href="/aviso-privacidad"
          className="font-body-md text-body-md text-on-surface-variant hover:text-secondary-fixed transition-colors"
        >
          Aviso de Privacidad
        </a>

        <a
          href="/terminos"
          className="font-body-md text-body-md text-on-surface-variant hover:text-secondary-fixed transition-colors"
        >
          Términos de Servicio
        </a>

        <a
          href="https://maps.google.com/?q=Paseo+del+Centenario+9580,+New+City+Medical+Plaza,+Tijuana"
          target="_blank"
          rel="noopener noreferrer"
          className="font-body-md text-body-md text-on-surface-variant hover:text-secondary-fixed transition-colors"
        >
          Ubicación
        </a>

        <a
          href="https://www.instagram.com/dr.davidalonso.rf/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-body-md text-body-md text-on-surface-variant hover:text-secondary-fixed transition-colors"
        >
          Instagram
        </a>
      </div>

      <div className="font-body-md text-body-md text-on-surface-variant opacity-60">
        © 2026 Dr. David Favela. Excelencia Médica Contemporánea.
      </div>

      <div className="flex gap-4 mt-6">
        {/* Sitio */}
        <a
          href="https://drdavidfavela.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 border border-secondary/20 rounded-full hover:bg-secondary/10 transition-colors"
        >
          <span className="material-symbols-outlined text-secondary text-sm">
            public
          </span>
        </a>

        {/* Correo */}
        <a
          href="mailto:davidfavela509@gmail.com"
          className="p-2 border border-secondary/20 rounded-full hover:bg-secondary/10 transition-colors"
        >
          <span className="material-symbols-outlined text-secondary text-sm">
            mail
          </span>
        </a>

        {/* Teléfono */}
        <a
          href="tel:+526647544279"
          className="p-2 border border-secondary/20 rounded-full hover:bg-secondary/10 transition-colors"
        >
          <span className="material-symbols-outlined text-secondary text-sm">
            call
          </span>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/dr.davidalonso.rf/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 border border-secondary/20 rounded-full hover:bg-secondary/10 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-5 h-5 text-secondary"
            fill="currentColor"
          >
            <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0120 7.75v8.5A3.75 3.75 0 0116.25 20h-8.5A3.75 3.75 0 014 16.25v-8.5A3.75 3.75 0 017.75 4zm9.5 1a.75.75 0 100 1.5.75.75 0 000-1.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
