import { useNavigate } from "react-router-dom";

export default function HomeComponent() {
  const navigate = useNavigate();

  return (
    <div className="font-body-md text-on-background selection:bg-secondary selection:text-on-secondary overflow-x-hidden">
      <main className="pt-16 md:pt-20">
        <section className="relative min-h-[720px] md:min-h-[921px] flex items-center overflow-hidden px-6 md:px-margin-desktop py-16 md:py-20">
          <div className="absolute inset-0 z-0">
            <img
              alt="Dr. David Favela Portrait"
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

            <div className="absolute inset-0 bg-black/45"></div>
          </div>

          <div className="relative z-10 w-full max-w-container-max-width mx-auto flex flex-col md:flex-row items-center md:items-end justify-between gap-10">
            <div className="w-full max-w-xl lg:max-w-2xl text-center md:text-left mb-0 md:mb-12">
              <span className="font-label-md text-xs sm:text-sm md:text-label-md text-secondary tracking-[0.22em] sm:tracking-[0.3em] uppercase mb-4 block">
                Médico Especialista
              </span>

              <h1 className="font-display-lg text-[38px] sm:text-[56px] md:text-[80px] leading-[0.95] md:leading-tight text-white mb-6 break-words">
                Innovación <br />
                <span className="text-secondary italic">Consciente</span>
              </h1>

              <p className="font-body-lg text-base sm:text-lg md:text-body-lg text-white/80 max-w-xl mx-auto md:mx-0 mb-10 md:mb-12 leading-relaxed">
                Liderando una nueva era en la medicina contemporánea donde la
                precisión tecnológica se encuentra con la calidez del trato
                personalizado. Excelencia médica para el paciente moderno.
              </p>

              <div className="flex flex-col md:flex-row gap-3 md:gap-6 w-full md:w-auto">
                <button
                  onClick={() => navigate("/tratamientos")}
                  className="w-full md:w-auto bg-secondary text-on-secondary px-6 sm:px-10 py-4 font-label-md text-sm md:text-label-md uppercase tracking-widest hover:brightness-110 transition-all"
                >
                  Conocer Trayectoria
                </button>

                <button
                  onClick={() => navigate("/especialidades")}
                  className="w-full md:w-auto border border-secondary/50 text-secondary px-6 sm:px-10 py-4 font-label-md text-sm md:text-label-md uppercase tracking-widest hover:bg-secondary/10 transition-all"
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
                    Años de Experiencia
                  </span>
                </div>

                <div>
                  <span className="block font-display-lg text-headline-md text-secondary">
                    500+
                  </span>
                  <span className="block font-label-md text-label-md uppercase tracking-tighter text-white/70">
                    Procedimientos Exitosos
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:block absolute top-1/4 -right-20 w-96 h-96 bg-secondary floating-accent rounded-full"></div>
          <div className="hidden md:block absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-secondary-container floating-accent rounded-full"></div>
        </section>

        <section className="py-16 md:py-24 bg-surface px-6 md:px-margin-desktop">
          <div className="max-w-container-max-width mx-auto">
            <div className="flex flex-col items-center mb-12 md:mb-20 text-center">
              <span className="font-label-md text-xs sm:text-sm md:text-label-md text-secondary uppercase tracking-[0.3em] md:tracking-[0.4em] mb-4">
                Currículum Vitae
              </span>

              <h2 className="font-display-lg text-4xl sm:text-headline-lg md:text-display-lg text-on-surface leading-tight">
                Trayectoria &amp; Excelencia
              </h2>

              <div className="relative w-32 md:w-48 h-[1px] bg-secondary/30 my-8 diamond-divider"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-gutter">
              <div className="md:col-span-8 space-y-6 md:space-y-gutter">
                <div className="bg-surface-container p-6 sm:p-8 md:p-12 border border-outline-variant/20 relative group hover:border-secondary/30 transition-all">
                  <div className="absolute top-0 left-0 w-1 h-0 bg-secondary group-hover:h-full transition-all duration-500"></div>

                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
                    <div>
                      <span className="font-label-md text-xs md:text-label-md text-secondary uppercase tracking-widest mb-2 block">
                        Formación Académica
                      </span>

                      <h3 className="font-headline-md text-2xl md:text-headline-md text-on-surface leading-tight">
                        Doctorado en Ciencias Médicas
                      </h3>
                    </div>

                    <span className="font-body-md text-sm md:text-body-md text-on-surface-variant italic shrink-0">
                      2018 - 2022
                    </span>
                  </div>

                  <p className="font-body-md text-base md:text-body-md text-on-surface-variant leading-relaxed">
                    Especialización avanzada en procedimientos de mínima
                    invasión y regeneración celular. Egresado con honores por
                    investigación en biotecnología aplicada a la salud
                    contemporánea.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-gutter">
                  <div className="bg-surface-container-high p-6 sm:p-8 border border-outline-variant/10">
                    <span
                      className="material-symbols-outlined text-secondary mb-4"
                      style={{ fontVariationSettings: "'FILL' 0" }}
                    >
                      school
                    </span>

                    <h4 className="font-headline-sm text-xl md:text-headline-sm text-on-surface mb-2">
                      Residencia Senior
                    </h4>

                    <p className="font-body-md text-base md:text-body-md text-on-surface-variant leading-relaxed">
                      Centro Médico de Excelencia Nacional, especializado en
                      trauma y cirugía de alta complejidad.
                    </p>
                  </div>

                  <div className="bg-surface-container-high p-6 sm:p-8 border border-outline-variant/10">
                    <span
                      className="material-symbols-outlined text-secondary mb-4"
                      style={{ fontVariationSettings: "'FILL' 0" }}
                    >
                      workspace_premium
                    </span>

                    <h4 className="font-headline-sm text-xl md:text-headline-sm text-on-surface mb-2">
                      Certificación Europea
                    </h4>

                    <p className="font-body-md text-base md:text-body-md text-on-surface-variant leading-relaxed">
                      Avalado por el Board Internacional de Cirujanos para
                      prácticas en protocolos de vanguardia.
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-4 space-y-6 md:space-y-gutter">
                <div className="bg-surface-container-lowest p-6 sm:p-8 border border-secondary/40 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="font-headline-md text-2xl md:text-headline-md text-secondary mb-6">
                      Valores Fundamentales
                    </h3>

                    <ul className="space-y-6">
                      <li className="flex gap-4">
                        <span className="font-display-lg text-2xl md:text-headline-md text-secondary/30 shrink-0">
                          01
                        </span>

                        <div>
                          <span className="font-label-md text-sm md:text-label-md uppercase text-on-surface">
                            Ética
                          </span>

                          <p className="text-base md:text-body-md text-on-surface-variant leading-relaxed">
                            Compromiso inquebrantable con el bienestar del
                            paciente.
                          </p>
                        </div>
                      </li>

                      <li className="flex gap-4 border-t border-outline-variant/10 pt-6">
                        <span className="font-display-lg text-2xl md:text-headline-md text-secondary/30 shrink-0">
                          02
                        </span>

                        <div>
                          <span className="font-label-md text-sm md:text-label-md uppercase text-on-surface">
                            Innovación
                          </span>

                          <p className="text-base md:text-body-md text-on-surface-variant leading-relaxed">
                            Integración de tecnologías de última generación.
                          </p>
                        </div>
                      </li>

                      <li className="flex gap-4 border-t border-outline-variant/10 pt-6">
                        <span className="font-display-lg text-2xl md:text-headline-md text-secondary/30 shrink-0">
                          03
                        </span>

                        <div>
                          <span className="font-label-md text-sm md:text-label-md uppercase text-on-surface">
                            Empatía
                          </span>

                          <p className="text-base md:text-body-md text-on-surface-variant leading-relaxed">
                            Acompañamiento humano en cada etapa del tratamiento.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-8 mt-auto">
                    <img
                      alt="Medical Facility"
                      className="w-full h-44 md:h-40 object-cover grayscale brightness-50 border border-secondary/20"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxciG4SPjmlsfIi58EwfK3yuwx9G_4a0U1i7ZXJKd7ziBTd3PnVtrKSkypZPjXw3s5CyEvhfil8q1lRpC5m3Oq7Sbo_YopTRXVZ0QHDxOBO5ZeYW0ZauCAXmTm9B4knkw56v1z2ohx4e6bAYARuAe-qxD--Ltk3qSbIYpiC1XoS77yA1QDUaq7ZiMiRaPMK8xt37NGtsGj5Fb7Q5orwyaQY051pcu3Ii5siw5HXJKwQh7OMN9Lg4F2fGCn6QLu2N3dHWkc_M9XGj-M"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 relative overflow-hidden px-6 md:px-margin-desktop">
          <div className="absolute inset-0 bg-secondary/5"></div>

          <div className="max-w-container-max-width mx-auto relative z-10 flex flex-col items-center text-center">
            <div className="mb-10">
              <span className="material-symbols-outlined text-secondary text-5xl mb-6">
                medical_services
              </span>

              <h2 className="font-display-lg text-4xl sm:text-headline-lg-mobile md:text-headline-lg text-on-surface mb-6 leading-tight">
                ¿Desea programar una consulta de valoración?
              </h2>

              <p className="font-body-lg text-base sm:text-lg md:text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
                Inicie su camino hacia una salud excepcional. Nuestro equipo se
                pondrá en contacto para coordinar una sesión privada con el Dr.
                David Favela.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
              <a
                href="tel:+526647544279"
                className="w-full sm:w-auto bg-secondary text-on-secondary px-8 sm:px-12 py-5 font-label-md text-sm md:text-label-md uppercase tracking-widest active:scale-95 transition-all text-center inline-flex items-center justify-center"
              >
                Contactar
              </a>

              <a
                href="https://wa.me/526647544279"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto border border-outline-variant text-on-surface px-8 sm:px-12 py-5 font-label-md text-sm md:text-label-md uppercase tracking-widest hover:border-secondary transition-all text-center inline-flex items-center justify-center"
              >
                Contactar por WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
