import { useNavigate } from "react-router-dom";

export default function ProcedimientosComponent() {
  const navigate = useNavigate();

  const irATrayectoria = () => {
    document
      .getElementById("trayectoria")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="font-body-md text-on-background selection:bg-secondary selection:text-on-secondary overflow-x-hidden">
      <main className="pt-16 md:pt-20">
        {/* HERO */}
        <section className="relative min-h-[720px] md:min-h-[921px] flex items-center overflow-hidden px-6 md:px-margin-desktop py-16 md:py-20">
          <div className="absolute inset-0 z-0">
            <img
              alt="Dr. David Favela, Cirujano Dentista"
              src="/david1.jpeg"
              className="
                w-full
                h-full
                object-cover
                object-center
                md:object-[65%_20%]
                opacity-80
                brightness-[0.7]
                saturate-105
                scale-100
              "
            />

            <div className="absolute inset-0 bg-black/45" />
          </div>

          <div className="relative z-10 w-full max-w-container-max-width mx-auto flex flex-col md:flex-row items-center md:items-end justify-between gap-10">
            <div className="w-full max-w-xl lg:max-w-2xl text-center md:text-left mb-0 md:mb-12">
              <span className="font-label-md text-xs sm:text-sm md:text-label-md text-secondary tracking-[0.22em] sm:tracking-[0.3em] uppercase mb-4 block">
                Cirujano Dentista
              </span>

              <h1 className="font-display-lg text-[38px] sm:text-[56px] md:text-[80px] leading-[0.95] md:leading-tight text-white mb-6 break-words">
                Precisión y confianza
                <br />

                <span className="text-secondary italic">
                  en cada sonrisa
                </span>
              </h1>

              <p className="font-body-lg text-base sm:text-lg md:text-body-lg text-white/80 max-w-xl mx-auto md:mx-0 mb-10 md:mb-12 leading-relaxed">
                Atención odontológica personalizada con enfoque en
                implantología, cirugía bucal, endodoncia y estética dental,
                combinando experiencia clínica, actualización constante y un
                trato cercano con cada paciente.
              </p>

              <div className="flex flex-col md:flex-row gap-3 md:gap-6 w-full md:w-auto">
                <button
                  type="button"
                  onClick={irATrayectoria}
                  className="w-full md:w-auto bg-secondary text-on-secondary px-6 sm:px-10 py-4 font-label-md text-sm md:text-label-md uppercase tracking-widest hover:brightness-110 active:scale-[0.98] transition-all"
                >
                  Conocer trayectoria
                </button>

                <button
                  type="button"
                  onClick={() => navigate("/especialidades")}
                  className="w-full md:w-auto border border-secondary/50 text-secondary px-6 sm:px-10 py-4 font-label-md text-sm md:text-label-md uppercase tracking-widest hover:bg-secondary/10 active:scale-[0.98] transition-all"
                >
                  Especialidades
                </button>
              </div>
            </div>

            <div className="hidden lg:block pb-12">
              <div className="border-l border-secondary/30 pl-8 space-y-8">
                <div>
                  <span className="block font-display-lg text-headline-md text-secondary">
                    +5
                  </span>

                  <span className="block font-label-md text-label-md uppercase tracking-tighter text-white/70">
                    Años de experiencia
                  </span>
                </div>

                <div>
                  <span className="block font-display-lg text-headline-md text-secondary">
                    2024
                  </span>

                  <span className="block font-label-md text-label-md uppercase tracking-tighter text-white/70">
                    Actualización profesional
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:block absolute top-1/4 -right-20 w-96 h-96 bg-secondary floating-accent rounded-full" />

          <div className="hidden md:block absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-secondary-container floating-accent rounded-full" />
        </section>

        {/* TRAYECTORIA */}
        <section
          id="trayectoria"
          className="scroll-mt-20 py-16 md:py-24 bg-surface px-6 md:px-margin-desktop"
        >
          <div className="max-w-container-max-width mx-auto">
            <div className="flex flex-col items-center mb-12 md:mb-20 text-center">
              <span className="font-label-md text-xs sm:text-sm md:text-label-md text-secondary uppercase tracking-[0.3em] md:tracking-[0.4em] mb-4">
                Trayectoria profesional
              </span>

              <h2 className="font-display-lg text-4xl sm:text-headline-lg md:text-display-lg text-on-surface leading-tight">
                Formación &amp; Experiencia
              </h2>

              <div className="relative w-32 md:w-48 h-[1px] bg-secondary/30 my-8 diamond-divider" />

              <p className="font-body-lg text-base md:text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                Preparación clínica, actualización constante y atención
                personalizada para brindar tratamientos odontológicos
                responsables y enfocados en cada paciente.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-gutter">
              {/* COLUMNA PRINCIPAL */}
              <div className="md:col-span-8 space-y-6 md:space-y-gutter">
                {/* PERFIL PROFESIONAL */}
                <div className="bg-surface-container p-6 sm:p-8 md:p-12 border border-outline-variant/20 relative group hover:border-secondary/30 transition-all">
                  <div className="absolute top-0 left-0 w-1 h-0 bg-secondary group-hover:h-full transition-all duration-500" />

                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
                    <div>
                      <span className="font-label-md text-xs md:text-label-md text-secondary uppercase tracking-widest mb-2 block">
                        Sobre mí
                      </span>

                      <h3 className="font-headline-md text-2xl md:text-headline-md text-on-surface leading-tight">
                        Dr. David Alonso Favela
                      </h3>
                    </div>

                    <span className="font-body-md text-sm md:text-body-md text-on-surface-variant italic shrink-0">
                      Cirujano Dentista
                    </span>
                  </div>

                  <p className="font-body-md text-base md:text-body-md text-on-surface-variant leading-relaxed">
                    Cirujano Dentista con más de cinco años de experiencia en
                    atención odontológica general, con mayor enfoque en
                    implantología y cirugía bucal. Comprometido con la salud
                    bucal de sus pacientes y con amplia disposición para brindar
                    una atención clínica cercana, responsable y personalizada.
                  </p>

                  <p className="font-body-md text-base md:text-body-md text-on-surface-variant leading-relaxed mt-5">
                    Su práctica se distingue por la capacidad diagnóstica, la
                    versatilidad en el manejo directo con el paciente y una
                    atención orientada a resultados, ética profesional, mejora
                    continua y crecimiento personal.
                  </p>

                  <div className="mt-8 border-l-2 border-secondary/50 pl-5">
                    <p className="font-display-lg text-xl md:text-2xl italic text-on-surface leading-relaxed">
                      “Mi compromiso es ofrecer tratamientos seguros,
                      personalizados y de alta calidad para cuidar la salud y
                      confianza de cada paciente.”
                    </p>
                  </div>
                </div>

                {/* DIPLOMADOS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-gutter">
                  <div className="bg-surface-container-high p-6 sm:p-8 border border-outline-variant/10 hover:border-secondary/30 transition-colors">
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <span
                        className="material-symbols-outlined text-secondary text-4xl"
                        style={{ fontVariationSettings: "'FILL' 0" }}
                      >
                        dentistry
                      </span>

                      <span className="font-label-md text-xs uppercase tracking-widest text-secondary border border-secondary/30 px-3 py-1">
                        2024
                      </span>
                    </div>

                    <span className="font-label-md text-xs text-secondary uppercase tracking-widest mb-2 block">
                      Formación especializada
                    </span>

                    <h4 className="font-headline-sm text-xl md:text-headline-sm text-on-surface mb-3">
                      Diplomado en Endodoncia
                    </h4>

                    <p className="font-body-md text-base md:text-body-md text-on-surface-variant leading-relaxed">
                      Formación enfocada en el diagnóstico y tratamiento
                      endodóntico para preservar la salud dental mediante
                      procedimientos clínicos precisos.
                    </p>
                  </div>

                  <div className="bg-surface-container-high p-6 sm:p-8 border border-outline-variant/10 hover:border-secondary/30 transition-colors">
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <span
                        className="material-symbols-outlined text-secondary text-4xl"
                        style={{ fontVariationSettings: "'FILL' 0" }}
                      >
                        workspace_premium
                      </span>

                      <span className="font-label-md text-xs uppercase tracking-widest text-secondary border border-secondary/30 px-3 py-1">
                        2024
                      </span>
                    </div>

                    <span className="font-label-md text-xs text-secondary uppercase tracking-widest mb-2 block">
                      Actualización profesional
                    </span>

                    <h4 className="font-headline-sm text-xl md:text-headline-sm text-on-surface mb-3">
                      Cirugía Estética y Carillas
                    </h4>

                    <p className="font-body-md text-base md:text-body-md text-on-surface-variant leading-relaxed">
                      Diplomado y actualización profesional en cirugía estética
                      y carillas, orientados a mejorar la función, proporción y
                      apariencia natural de la sonrisa.
                    </p>
                  </div>
                </div>
              </div>

              {/* PANEL LATERAL */}
              <div className="md:col-span-4 space-y-6 md:space-y-gutter">
                <div className="bg-surface-container-lowest p-6 sm:p-8 border border-secondary/40 h-full flex flex-col justify-between">
                  <div>
                    <span className="font-label-md text-xs text-on-surface-variant uppercase tracking-[0.25em] mb-3 block">
                      Atención odontológica
                    </span>

                    <h3 className="font-headline-md text-2xl md:text-headline-md text-secondary mb-8">
                      Enfoque Profesional
                    </h3>

                    <ul className="space-y-6">
                      <li className="flex gap-4">
                        <span className="font-display-lg text-2xl md:text-headline-md text-secondary/30 shrink-0">
                          01
                        </span>

                        <div>
                          <span className="font-label-md text-sm md:text-label-md uppercase text-on-surface">
                            Tratamientos personalizados
                          </span>

                          <p className="mt-2 text-base md:text-body-md text-on-surface-variant leading-relaxed">
                            Cada plan se adapta a las necesidades clínicas y
                            objetivos particulares de cada paciente.
                          </p>
                        </div>
                      </li>

                      <li className="flex gap-4 border-t border-outline-variant/10 pt-6">
                        <span className="font-display-lg text-2xl md:text-headline-md text-secondary/30 shrink-0">
                          02
                        </span>

                        <div>
                          <span className="font-label-md text-sm md:text-label-md uppercase text-on-surface">
                            Actualización continua
                          </span>

                          <p className="mt-2 text-base md:text-body-md text-on-surface-variant leading-relaxed">
                            Capacitación constante y aplicación de técnicas
                            actuales para brindar una atención responsable.
                          </p>
                        </div>
                      </li>

                      <li className="flex gap-4 border-t border-outline-variant/10 pt-6">
                        <span className="font-display-lg text-2xl md:text-headline-md text-secondary/30 shrink-0">
                          03
                        </span>

                        <div>
                          <span className="font-label-md text-sm md:text-label-md uppercase text-on-surface">
                            Confianza y cercanía
                          </span>

                          <p className="mt-2 text-base md:text-body-md text-on-surface-variant leading-relaxed">
                            Comunicación clara, trato humano y acompañamiento
                            durante cada etapa del tratamiento.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* IDIOMAS */}
                  <div className="pt-8 mt-8">
                    <div className="border border-secondary/20 bg-surface-container-high p-6">
                      <div className="flex items-center gap-4 mb-5">
                        <span className="material-symbols-outlined text-secondary text-4xl">
                          translate
                        </span>

                        <div>
                          <span className="font-label-md text-xs text-secondary uppercase tracking-widest block">
                            Comunicación
                          </span>

                          <h4 className="font-headline-sm text-xl text-on-surface">
                            Idiomas
                          </h4>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center justify-between gap-4 border-b border-outline-variant/10 pb-3">
                          <span className="font-body-md text-on-surface">
                            Español
                          </span>

                          <span className="font-label-md text-xs uppercase tracking-widest text-on-surface-variant">
                            Nativo
                          </span>
                        </div>

                        <div className="flex items-center justify-between gap-4">
                          <span className="font-body-md text-on-surface">
                            Inglés
                          </span>

                          <span className="font-label-md text-xs uppercase tracking-widest text-on-surface-variant">
                            Atención bilingüe
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LLAMADA A LA ACCIÓN */}
        <section className="py-16 md:py-24 relative overflow-hidden px-6 md:px-margin-desktop">
          <div className="absolute inset-0 bg-secondary/5" />

          <div className="max-w-container-max-width mx-auto relative z-10 flex flex-col items-center text-center">
            <div className="mb-10">
              <span className="material-symbols-outlined text-secondary text-5xl mb-6">
                medical_services
              </span>

              <span className="font-label-md text-xs md:text-label-md uppercase tracking-[0.3em] text-secondary mb-4 block">
                Atención personalizada
              </span>

              <h2 className="font-display-lg text-4xl sm:text-headline-lg-mobile md:text-headline-lg text-on-surface mb-6 leading-tight">
                ¿Desea programar una consulta de valoración?
              </h2>

              <p className="font-body-lg text-base sm:text-lg md:text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
                Dé el primer paso hacia una sonrisa saludable. Comuníquese con
                nosotros para coordinar una consulta con el Dr. David Alonso
                Favela.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
              <a
                href="tel:+526647544279"
                className="w-full sm:w-auto bg-secondary text-on-secondary px-8 sm:px-12 py-5 font-label-md text-sm md:text-label-md uppercase tracking-widest hover:brightness-110 active:scale-[0.98] transition-all text-center inline-flex items-center justify-center gap-3"
              >
                <span className="material-symbols-outlined text-xl">
                  call
                </span>

                Llamar ahora
              </a>

              <a
                href="https://wa.me/526647544279?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta%20de%20valoraci%C3%B3n%20con%20el%20Dr.%20David%20Favela."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto border border-outline-variant text-on-surface px-8 sm:px-12 py-5 font-label-md text-sm md:text-label-md uppercase tracking-widest hover:border-secondary hover:text-secondary active:scale-[0.98] transition-all text-center inline-flex items-center justify-center gap-3"
              >
                <span className="material-symbols-outlined text-xl">
                  chat
                </span>

                Enviar WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}