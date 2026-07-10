export default function ContactoComponent() {
  return (
    <div className="bg-background text-on-background selection:bg-secondary selection:text-on-secondary">
      <main className="pt-20">
        <section className="relative py-16 md:py-20 px-6 md:px-margin-desktop max-w-container-max-width mx-auto overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Información */}
            <div className="z-10">
              <span className="font-label-md text-sm md:text-label-md text-secondary uppercase tracking-[0.2em] mb-4 block">
                Contacto de Élite
              </span>

              <h1 className="font-display-lg text-4xl sm:text-5xl md:text-display-lg mb-6 leading-tight">
                Excelencia Médica a Su Alcance
              </h1>

              <p className="font-body-lg text-base md:text-body-lg text-on-surface-variant mb-10 md:mb-12 max-w-lg leading-relaxed">
                Inicie su camino hacia un bienestar superior. Nuestra práctica
                boutique combina la precisión quirúrgica con una atención
                profundamente personalizada.
              </p>

              <div className="space-y-6 md:space-y-8">
                <a
                  href="tel:+526647544279"
                  className="flex items-center gap-5 md:gap-6 group"
                >
                  <div className="w-12 h-12 flex items-center justify-center gold-border rounded-full group-hover:bg-secondary/10 transition-colors shrink-0">
                    <span className="material-symbols-outlined text-secondary">
                      call
                    </span>
                  </div>

                  <div>
                    <p className="font-label-md text-xs md:text-label-md text-on-surface-variant uppercase tracking-wider">
                      Teléfono Directo
                    </p>

                    <p className="font-headline-sm text-xl md:text-headline-sm text-secondary">
                      (664) 754 4279
                    </p>
                  </div>
                </a>

                <a
                  href="https://wa.me/526647544279?text=Hola%20Dr.%20David%20Favela,%20me%20gustaría%20agendar%20una%20consulta."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 md:gap-6 group"
                >
                  <div className="w-12 h-12 flex items-center justify-center gold-border rounded-full group-hover:bg-secondary/10 transition-colors shrink-0">
                    <span className="material-symbols-outlined text-secondary">
                      chat
                    </span>
                  </div>

                  <div>
                    <p className="font-label-md text-xs md:text-label-md text-on-surface-variant uppercase tracking-wider">
                      WhatsApp
                    </p>

                    <p className="font-headline-sm text-xl md:text-headline-sm text-secondary">
                      Enviar mensaje
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:contacto@drdavidfavela.com?subject=Solicitud%20de%20consulta&body=Hola%20Dr.%20David%20Favela,%0D%0A%0D%0AMe%20gustaría%20recibir%20información%20para%20agendar%20una%20consulta.%0D%0A%0D%0ANombre:%0D%0ATeléfono:%0D%0AMotivo%20de%20consulta:"
                  className="flex items-center gap-5 md:gap-6 group"
                >
                  <div className="w-12 h-12 flex items-center justify-center gold-border rounded-full group-hover:bg-secondary/10 transition-colors shrink-0">
                    <span className="material-symbols-outlined text-secondary">
                      mail
                    </span>
                  </div>

                  <div>
                    <p className="font-label-md text-xs md:text-label-md text-on-surface-variant uppercase tracking-wider">
                      Email Profesional
                    </p>

                    <p className="font-headline-sm text-xl md:text-headline-sm text-secondary break-all">
                      contacto@drdavidfavela.com
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-5 md:gap-6">
                  <div className="w-12 h-12 flex items-center justify-center gold-border rounded-full shrink-0">
                    <span className="material-symbols-outlined text-secondary">
                      location_on
                    </span>
                  </div>

                  <div>
                    <p className="font-label-md text-xs md:text-label-md text-on-surface-variant uppercase tracking-wider">
                      Ubicación
                    </p>

                    <p className="font-headline-sm text-xl md:text-headline-sm text-secondary">
                      Tijuana, Baja California
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tarjeta de contacto */}
            <div className="relative">
              <div className="absolute inset-0 bg-secondary/5 blur-3xl rounded-full"></div>

              <div className="relative matte-card gold-border p-6 sm:p-8 md:p-10 z-10 overflow-hidden">
                <div className="text-center mb-10">
                  <span className="font-label-md text-sm md:text-label-md text-secondary uppercase tracking-[0.2em]">
                    Agenda tu Consulta
                  </span>

                  <h2 className="font-headline-lg text-3xl md:text-headline-lg mt-3 mb-4">
                    Elige tu método de contacto
                  </h2>

                  <p className="font-body-md text-base md:text-body-md text-on-surface-variant max-w-md mx-auto leading-relaxed">
                    Comunícate directamente con nuestro equipo para coordinar
                    tu consulta de valoración.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <a
                    href="tel:+526647544279"
                    className="w-full bg-secondary text-on-secondary px-8 py-5 font-label-md text-sm md:text-label-md uppercase tracking-widest active:scale-[0.98] transition-all text-center hover:brightness-110 flex items-center justify-center gap-3"
                  >
                    <span className="material-symbols-outlined">call</span>
                    Llamar Ahora
                  </a>

                  <a
                    href="https://wa.me/526647544279?text=Hola%20Dr.%20David%20Favela,%20me%20gustaría%20agendar%20una%20consulta."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full border border-secondary/50 text-secondary px-8 py-5 font-label-md text-sm md:text-label-md uppercase tracking-widest active:scale-[0.98] transition-all text-center hover:bg-secondary/10 flex items-center justify-center gap-3"
                  >
                    <span className="material-symbols-outlined">chat</span>
                    WhatsApp
                  </a>

                  <a
                    href="mailto:davidfavela509@gmail.com?subject=Solicitud%20de%20consulta&body=Hola%20Dr.%20David%20Favela,%0D%0A%0D%0AMe%20gustaría%20recibir%20información%20para%20agendar%20una%20consulta.%0D%0A%0D%0ANombre:%0D%0ATeléfono:%0D%0AMotivo%20de%20consulta:"
                    className="w-full border border-outline-variant text-on-surface px-8 py-5 font-label-md text-sm md:text-label-md uppercase tracking-widest active:scale-[0.98] transition-all text-center hover:border-secondary flex items-center justify-center gap-3"
                  >
                    <span className="material-symbols-outlined">mail</span>
                    Enviar Correo
                  </a>
                </div>

                <div className="mt-10 pt-8 border-t border-secondary/20 text-center">
                  <p className="font-body-md text-sm md:text-body-md text-on-surface-variant italic">
                    Atención personalizada para cada paciente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}