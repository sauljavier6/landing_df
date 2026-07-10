export default function Footer() {
  return (
    <footer className="w-full py-12 px-margin-desktop flex flex-col items-center gap-base border-t border-secondary bg-surface-container-lowest">
      <div className="font-headline-md text-headline-md text-secondary mb-4">
        DR. DAVID FAVELA
      </div>
      <div className="flex flex-wrap justify-center gap-8 mb-8">
        <a
          className="font-body-md text-body-md text-on-surface-variant hover:text-secondary-fixed transition-colors"
          
        >
          Aviso de Privacidad
        </a>
        <a
          className="font-body-md text-body-md text-on-surface-variant hover:text-secondary-fixed transition-colors"
          
        >
          Términos de Servicio
        </a>
        <a
          className="font-body-md text-body-md text-on-surface-variant hover:text-secondary-fixed transition-colors"
          
        >
          Ubicación
        </a>
        <a
          className="font-body-md text-body-md text-on-surface-variant hover:text-secondary-fixed transition-colors"
          
        >
          Redes Sociales
        </a>
      </div>
      <div className="font-body-md text-body-md text-on-surface-variant opacity-60">
        © 2024 Dr. David Favela. Excelencia Médica Contemporánea.
      </div>
      <div className="flex gap-4 mt-6">
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

        <a
          href="mailto:contacto@drdavidfavela.com"
          className="p-2 border border-secondary/20 rounded-full hover:bg-secondary/10 transition-colors"
        >
          <span className="material-symbols-outlined text-secondary text-sm">
            mail
          </span>
        </a>

        <a
          href="tel:+526647544279"
          className="p-2 border border-secondary/20 rounded-full hover:bg-secondary/10 transition-colors"
        >
          <span className="material-symbols-outlined text-secondary text-sm">
            call
          </span>
        </a>
      </div>
    </footer>
  );
}
