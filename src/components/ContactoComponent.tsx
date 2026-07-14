export default function ContactoComponent() {
  const whatsappUrl =
    "https://wa.me/526647544279?text=Hola%20Dr.%20David%20Favela,%20me%20gustaría%20agendar%20una%20consulta.";

  const emailUrl =
    "mailto:davidfavela509@gmail.com?subject=Solicitud%20de%20consulta&body=Hola%20Dr.%20David%20Favela,%0D%0A%0D%0AMe%20gustaría%20recibir%20información%20para%20agendar%20una%20consulta.%0D%0A%0D%0ANombre:%0D%0ATeléfono:%0D%0AMotivo%20de%20consulta:";

  return (
    <div className="bg-background text-on-background selection:bg-secondary selection:text-on-secondary overflow-x-hidden font-body-md">
      <main className="pt-16 md:pt-20">
        <section className="relative py-16 md:py-24 px-6 md:px-margin-desktop overflow-hidden">
          {/* Elementos decorativos */}
          <div className="pointer-events-none absolute top-10 -left-32 w-80 h-80 rounded-full bg-secondary/5 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 -right-32 w-96 h-96 rounded-full bg-secondary/5 blur-3xl" />

          <div className="relative z-10 max-w-container-max-width mx-auto">
            {/* Encabezado */}
            <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
              <span className="font-label-md text-xs md:text-label-md text-secondary uppercase tracking-[0.3em] mb-5 block">
                Contacto
              </span>

              <h1 className="font-display-lg text-[42px] sm:text-[54px] md:text-[68px] lg:text-[76px] leading-[0.98] text-on-surface tracking-tight mb-6">
                Excelencia médica
                <span className="block italic text-secondary">
                  a su alcance
                </span>
              </h1>

              <p className="font-body-lg text-base sm:text-lg md:text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
                Inicie su camino hacia un bienestar superior. Nuestra práctica
                boutique combina la precisión quirúrgica con una atención
                profundamente personalizada.
              </p>

              <div className="flex items-center justify-center gap-3 mt-9">
                <span className="w-12 md:w-20 h-px bg-secondary/30" />
                <span className="w-2 h-2 rotate-45 border border-secondary" />
                <span className="w-12 md:w-20 h-px bg-secondary/30" />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-stretch">
              {/* Información de contacto */}
              <div className="lg:col-span-7">
                <div className="h-full bg-surface-container border border-secondary/15 p-6 sm:p-8 md:p-10 lg:p-12">
                  <div className="mb-8 md:mb-10">
                    <span className="font-label-md text-xs md:text-label-md text-secondary uppercase tracking-[0.25em] block mb-3">
                      Datos de contacto
                    </span>

                    <h2 className="font-headline-lg text-3xl sm:text-4xl md:text-headline-lg text-on-surface leading-tight">
                      Estamos para atenderle
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {/* Teléfono */}
                    <a
                      href="tel:+526647544279"
                      className="group flex items-center gap-4 sm:gap-5 p-4 sm:p-5 border border-outline-variant/10 bg-surface-container-low hover:border-secondary/40 hover:bg-secondary/5 transition-all duration-300"
                    >
                      <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center border border-secondary/30 rounded-full bg-secondary/5 group-hover:bg-secondary group-hover:text-on-secondary transition-all shrink-0">
                        <span className="material-symbols-outlined text-secondary group-hover:text-on-secondary transition-colors">
                          call
                        </span>
                      </div>

                      <div className="min-w-0">
                        <p className="font-label-md text-[11px] md:text-xs text-on-surface-variant uppercase tracking-[0.18em] mb-1">
                          Teléfono directo
                        </p>

                        <p className="font-headline-sm text-xl md:text-2xl text-secondary">
                          (664) 754 4279
                        </p>
                      </div>

                      <span className="material-symbols-outlined text-secondary/40 ml-auto hidden sm:block group-hover:text-secondary group-hover:translate-x-1 transition-all">
                        arrow_outward
                      </span>
                    </a>

                    {/* WhatsApp */}
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 sm:gap-5 p-4 sm:p-5 border border-outline-variant/10 bg-surface-container-low hover:border-secondary/40 hover:bg-secondary/5 transition-all duration-300"
                    >
                      <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center border border-secondary/30 rounded-full bg-secondary/5 group-hover:bg-secondary group-hover:text-on-secondary transition-all shrink-0">
                        <span className="material-symbols-outlined text-secondary group-hover:text-on-secondary transition-colors">
                          chat
                        </span>
                      </div>

                      <div className="min-w-0">
                        <p className="font-label-md text-[11px] md:text-xs text-on-surface-variant uppercase tracking-[0.18em] mb-1">
                          WhatsApp
                        </p>

                        <p className="font-headline-sm text-xl md:text-2xl text-secondary">
                          Enviar mensaje
                        </p>
                      </div>

                      <span className="material-symbols-outlined text-secondary/40 ml-auto hidden sm:block group-hover:text-secondary group-hover:translate-x-1 transition-all">
                        arrow_outward
                      </span>
                    </a>

                    {/* Correo */}
                    <a
                      href={emailUrl}
                      className="group flex items-center gap-4 sm:gap-5 p-4 sm:p-5 border border-outline-variant/10 bg-surface-container-low hover:border-secondary/40 hover:bg-secondary/5 transition-all duration-300"
                    >
                      <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center border border-secondary/30 rounded-full bg-secondary/5 group-hover:bg-secondary group-hover:text-on-secondary transition-all shrink-0">
                        <span className="material-symbols-outlined text-secondary group-hover:text-on-secondary transition-colors">
                          mail
                        </span>
                      </div>

                      <div className="min-w-0">
                        <p className="font-label-md text-[11px] md:text-xs text-on-surface-variant uppercase tracking-[0.18em] mb-1">
                          Email profesional
                        </p>

                        <p className="font-headline-sm text-base sm:text-lg md:text-xl text-secondary break-all">
                          davidfavela509@gmail.com
                        </p>
                      </div>

                      <span className="material-symbols-outlined text-secondary/40 ml-auto hidden sm:block group-hover:text-secondary group-hover:translate-x-1 transition-all">
                        arrow_outward
                      </span>
                    </a>

                    {/* Ubicación */}
                    <div className="flex items-start gap-4 sm:gap-5 p-4 sm:p-5 border border-outline-variant/10 bg-surface-container-low">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center border border-secondary/30 rounded-full bg-secondary/5 shrink-0">
                        <span className="material-symbols-outlined text-secondary">
                          location_on
                        </span>
                      </div>

                      <div className="min-w-0">
                        <p className="font-label-md text-[11px] md:text-xs text-on-surface-variant uppercase tracking-[0.18em] mb-1">
                          Ubicación
                        </p>

                        <p className="font-headline-sm text-xl md:text-2xl text-secondary">
                          New City Medical Plaza
                        </p>

                        <p className="font-body-md text-sm md:text-base text-on-surface-variant mt-2 leading-relaxed">
                          Piso 15, Oficina 1503
                          <br />
                          P.º del Centenario 9580
                          <br />
                          Zona Urbana Río Tijuana, C.P. 22010
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tarjeta para agendar */}
              <div className="lg:col-span-5 relative">
                <div className="absolute -inset-4 md:-inset-6 border border-secondary/10 pointer-events-none" />

                <div className="relative h-full bg-surface-container-lowest border border-secondary/40 p-6 sm:p-8 md:p-10 flex flex-col overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/70 to-transparent" />

                  <div className="w-14 h-14 mb-8 border border-secondary/30 bg-secondary/5 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary text-3xl">
                      calendar_month
                    </span>
                  </div>

                  <span className="font-label-md text-xs md:text-label-md text-secondary uppercase tracking-[0.25em] block mb-4">
                    Agenda tu consulta
                  </span>

                  <h2 className="font-headline-lg text-3xl sm:text-4xl md:text-[46px] leading-tight text-on-surface mb-5">
                    Elige tu método de contacto
                  </h2>

                  <p className="font-body-md text-base md:text-body-md text-on-surface-variant leading-relaxed mb-8">
                    Comunícate directamente con nuestro equipo para coordinar tu
                    consulta de valoración.
                  </p>

                  <div className="grid grid-cols-1 gap-4 mt-auto">
                    <a
                      href="tel:+526647544279"
                      className="group w-full bg-secondary text-on-secondary px-6 sm:px-8 py-4 sm:py-5 font-label-md text-xs sm:text-sm md:text-label-md uppercase tracking-widest active:scale-[0.98] transition-all text-center hover:brightness-110 flex items-center justify-center gap-3"
                    >
                      <span className="material-symbols-outlined">
                        call
                      </span>

                      Llamar ahora
                    </a>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-full border border-secondary/50 text-secondary px-6 sm:px-8 py-4 sm:py-5 font-label-md text-xs sm:text-sm md:text-label-md uppercase tracking-widest active:scale-[0.98] transition-all text-center hover:bg-secondary hover:text-on-secondary flex items-center justify-center gap-3"
                    >
                      <span className="material-symbols-outlined">
                        chat
                      </span>

                      WhatsApp
                    </a>

                    <a
                      href={emailUrl}
                      className="group w-full border border-outline-variant text-on-surface px-6 sm:px-8 py-4 sm:py-5 font-label-md text-xs sm:text-sm md:text-label-md uppercase tracking-widest active:scale-[0.98] transition-all text-center hover:border-secondary hover:text-secondary flex items-center justify-center gap-3"
                    >
                      <span className="material-symbols-outlined">
                        mail
                      </span>

                      Enviar correo
                    </a>
                  </div>

                  <div className="mt-9 pt-7 border-t border-secondary/20 text-center">
                    <p className="font-display-lg text-lg md:text-xl italic text-on-surface-variant leading-relaxed">
                      Atención personalizada para cada paciente.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}