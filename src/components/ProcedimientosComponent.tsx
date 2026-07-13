import { useNavigate } from "react-router-dom";

type CasoClinico = {
  title: string;
  category: string;
  description: string;
  image: string;
};

export default function ProcedimientosComponent() {
  const navigate = useNavigate();

  const casosClinicos: CasoClinico[] = [
    {
      title: "Rehabilitación oral completa",
      category: "Transformación de sonrisa",
      description:
        "Restauración integral de la sonrisa para recuperar función, estabilidad y estética.",
      image: "/doctor/caso-rehabilitacion.png",
    },
    {
      title: "Limpieza y cuidado periodontal",
      category: "Prevención y encías",
      description:
        "Eliminación de cálculo dental y tratamiento periodontal para mejorar la salud de las encías.",
      image: "/doctor/caso-limpieza.jpeg",
    },
    {
      title: "Carillas estéticas",
      category: "Estética dental",
      description:
        "Corrección de forma, proporción y color mediante restauraciones de apariencia natural.",
      image: "/doctor/carillasesteticas.png",
    },
    {
      title: "Restauración con corona",
      category: "Prótesis dental",
      description:
        "Reconstrucción de una pieza dental dañada para recuperar su anatomía y resistencia.",
      image: "/doctor/caso-corona.jpeg",
    },
    {
      title: "Rehabilitación estética",
      category: "Antes y después",
      description:
        "Plan de tratamiento diseñado para devolver armonía y naturalidad a toda la sonrisa.",
      image: "/doctor/rehabilitacion-estetica2.jpeg",
    },
    {
      title: "Diseño de sonrisa",
      category: "Estética avanzada",
      description:
        "Modificación cuidadosa del tamaño y forma dental conservando una apariencia natural.",
      image: "/doctor/diseño.jpeg",
    },
  ];

  const ventajasConsultorio = [
    {
      icon: "local_parking",
      label: "Estacionamiento",
    },
    {
      icon: "elevator",
      label: "Elevadores",
    },
    {
      icon: "dentistry",
      label: "Equipo moderno",
    },
    {
      icon: "accessible",
      label: "Fácil acceso",
    },
    {
      icon: "chair",
      label: "Espacio cómodo",
    },
    {
      icon: "location_city",
      label: "Ubicación premium",
    },
  ];

  return (
    <div className="font-body-md text-on-surface selection:bg-secondary selection:text-background">
      <main className="pt-20">
        {/* HERO */}
        <section className="relative min-h-[720px] flex items-center overflow-hidden px-margin-mobile md:px-margin-desktop py-24">
          <div className="absolute inset-0">
            <img
              src="/newcity.png"
              alt="NewCity Medical Plaza"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/20" />
          </div>

          <div className="relative z-10 max-w-[1300px] mx-auto w-full">
            <div className="max-w-[760px]">
              <span className="font-label-md text-secondary tracking-[0.22em] uppercase mb-5 block">
                Odontología estética y rehabilitación oral
              </span>

              <h1 className="font-display-lg text-[48px] leading-[1.05] sm:text-[58px] lg:text-[76px] lg:leading-[1.02] mb-7">
                Recupera la confianza en tu{" "}
                <span className="gold-gradient-text italic font-bold">
                  sonrisa
                </span>
              </h1>

              <p className="font-body-lg text-on-surface-variant text-lg md:text-xl leading-8 max-w-[680px] mb-10">
                Tratamientos odontológicos personalizados con tecnología
                moderna, planeación precisa y resultados naturales.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  onClick={() => navigate("/contacto")}
                  className="bg-secondary text-background px-9 py-4 font-label-md hover:bg-secondary-fixed transition-all flex items-center justify-center gap-2"
                >
                  AGENDAR CITA
                  <span className="material-symbols-outlined">
                    calendar_today
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    document
                      .getElementById("casos-clinicos")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="border border-secondary/50 bg-background/20 backdrop-blur-md text-secondary px-9 py-4 font-label-md hover:bg-secondary/10 transition-all flex items-center justify-center gap-2"
                >
                  VER RESULTADOS
                  <span className="material-symbols-outlined">
                    arrow_downward
                  </span>
                </button>
              </div>

              <div className="mt-14 flex flex-wrap gap-x-8 gap-y-4 text-sm text-on-surface-variant">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">
                    verified
                  </span>
                  Atención personalizada
                </div>

                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">
                    location_on
                  </span>
                  NewCity Medical Plaza
                </div>

                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">
                    workspace_premium
                  </span>
                  Resultados naturales
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DOCTOR */}
        <section className="max-w-[1300px] mx-auto px-margin-mobile md:px-margin-desktop py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-20 items-center">
            <div className="relative group">
              <div className="absolute -inset-3 rounded-[38px] bg-secondary/20 blur-3xl opacity-40 group-hover:opacity-70 transition-opacity duration-500" />

              <div className="relative overflow-hidden rounded-[32px] border border-secondary/20 shadow-2xl">
                <img
                  src="/david1.jpeg"
                  alt="Dr. David Favela"
                  className="w-full h-[520px] md:h-[680px] object-cover group-hover:scale-[1.03] transition-transform duration-700"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/70 to-transparent p-7 md:p-9">
                  <p className="text-secondary font-label-md tracking-[0.18em] uppercase text-sm">
                    Especialista en odontología
                  </p>

                  <h3 className="font-display-lg text-3xl mt-2">
                    Dr. David Favela
                  </h3>
                </div>
              </div>
            </div>

            <div>
              <span className="font-label-md text-secondary tracking-[0.2em] uppercase mb-4 block">
                Conoce a tu especialista
              </span>

              <h2 className="font-display-lg text-display-lg mb-7">
                Experiencia, precisión y trato{" "}
                <span className="gold-gradient-text italic font-bold">
                  humano
                </span>
              </h2>

              <p className="font-body-lg text-on-surface-variant leading-8 mb-6">
                El Dr. David Favela se especializa en rehabilitación oral,
                estética dental e implantología, ofreciendo tratamientos
                personalizados respaldados por tecnología moderna y un enfoque
                centrado en el paciente.
              </p>

              <p className="font-body-lg text-on-surface-variant leading-8 mb-10">
                Cada caso es evaluado y planificado de manera individual para
                lograr resultados funcionales, naturales y duraderos.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  "Rehabilitación oral",
                  "Implantes dentales",
                  "Estética dental",
                  "Diseño de sonrisa",
                  "Carillas dentales",
                  "Prótesis dentales",
                  "Atención personalizada",
                  "Tecnología digital",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-secondary/15 bg-surface-container-low p-4"
                  >
                    <span className="material-symbols-outlined text-secondary">
                      check_circle
                    </span>

                    <span className="text-on-surface">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  onClick={() => navigate("/contacto")}
                  className="bg-secondary text-background px-8 py-4 font-label-md hover:bg-secondary-fixed transition-all flex items-center justify-center gap-2"
                >
                  AGENDAR VALORACIÓN
                  <span className="material-symbols-outlined">
                    calendar_today
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => navigate("/especialidades")}
                  className="border border-secondary/40 text-secondary px-8 py-4 font-label-md hover:bg-secondary/10 transition-all flex items-center justify-center gap-2"
                >
                  VER TRATAMIENTOS
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CASOS CLÍNICOS */}
        <section
          id="casos-clinicos"
          className="max-w-[1400px] mx-auto px-margin-mobile md:px-margin-desktop py-24 lg:py-32"
        >
          <div className="text-center max-w-[820px] mx-auto mb-16">
            <span className="font-label-md text-secondary tracking-[0.2em] uppercase mb-4 block">
              Casos clínicos
            </span>

            <h2 className="font-display-lg text-display-lg mb-6">
              Resultados{" "}
              <span className="gold-gradient-text italic font-bold">
                reales
              </span>
            </h2>

            <p className="font-body-lg text-on-surface-variant leading-8">
              Cada sonrisa refleja un plan de tratamiento personalizado,
              diseñado para recuperar estética, función y confianza.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {casosClinicos.map((caso, index) => (
              <article
                key={caso.title}
                className={`group relative overflow-hidden rounded-[30px] border border-secondary/15 bg-surface-container-low ${
                  index === 0 || index === 5
                    ? "md:col-span-2"
                    : "md:col-span-1"
                }`}
              >
                <div
                  className={
                    index === 0 || index === 5
                      ? "h-[400px] md:h-[620px]"
                      : "h-[400px] md:h-[520px]"
                  }
                >
                  <img
                    src={caso.image}
                    alt={caso.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">
                  <span className="inline-flex bg-secondary/15 backdrop-blur-md border border-secondary/30 text-secondary px-4 py-2 rounded-full font-label-md text-xs tracking-wider uppercase">
                    {caso.category}
                  </span>

                  <h3 className="font-display-lg text-2xl md:text-4xl text-white mt-4 mb-3">
                    {caso.title}
                  </h3>

                  <p className="text-white/70 leading-7 max-w-[650px]">
                    {caso.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p className="text-center text-sm text-on-surface-variant mt-8">
            Los resultados pueden variar de acuerdo con las condiciones y
            necesidades de cada paciente.
          </p>
        </section>

        {/* CONSULTORIO */}
        <section className="bg-surface-container-low py-24 lg:py-32 px-margin-mobile md:px-margin-desktop overflow-hidden">
          <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div>
              <span className="font-label-md text-secondary tracking-[0.2em] uppercase mb-4 block">
                Nuestro consultorio
              </span>

              <h2 className="font-display-lg text-display-lg mb-7">
                Comodidad, tecnología y{" "}
                <span className="gold-gradient-text italic font-bold">
                  precisión
                </span>
              </h2>

              <p className="font-body-lg text-on-surface-variant leading-8 mb-5">
                El consultorio se encuentra ubicado en NewCity Medical Plaza,
                en Tijuana, Baja California.
              </p>

              <p className="font-body-lg text-on-surface-variant leading-8 mb-10">
                Contamos con instalaciones modernas y equipo especializado para
                brindar tratamientos seguros, cómodos y precisos.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {ventajasConsultorio.map((ventaja) => (
                  <div
                    key={ventaja.label}
                    className="rounded-2xl border border-secondary/15 bg-background/50 p-5 text-center"
                  >
                    <span className="material-symbols-outlined text-secondary text-3xl">
                      {ventaja.icon}
                    </span>

                    <p className="text-sm text-on-surface-variant mt-3">
                      {ventaja.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-3 bg-secondary/20 rounded-[38px] blur-3xl opacity-30" />

              <img
                src="/newcity.png"
                alt="Consultorio del Dr. David Favela"
                loading="lazy"
                className="relative w-full h-[500px] md:h-[650px] object-cover rounded-[32px] border border-secondary/20 shadow-2xl group-hover:scale-[1.01] transition-transform duration-700"
              />
            </div>
          </div>
        </section>

        {/* UBICACIÓN */}
        <section className="relative min-h-[720px] flex items-end overflow-hidden">
          <img
            src="/newcity2.jpeg"
            alt="NewCity Medical Plaza en Tijuana"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />

          <div className="relative z-10 max-w-[1300px] mx-auto w-full px-margin-mobile md:px-margin-desktop pb-20 md:pb-28">
            <div className="max-w-[660px] glass-card rounded-[30px] p-7 md:p-10 backdrop-blur-xl border border-secondary/20">
              <span className="font-label-md text-secondary tracking-[0.2em] uppercase mb-4 block">
                Ubicación
              </span>

              <h2 className="font-display-lg text-4xl md:text-5xl mb-5">
                NewCity Medical Plaza
              </h2>

              <p className="font-body-lg text-on-surface-variant leading-8 mb-3">
                Consultorio del Dr. David Favela
              </p>

              <div className="flex items-start gap-3 text-on-surface-variant mb-8">
                <span className="material-symbols-outlined text-secondary">
                  location_on
                </span>

                <span>Tijuana, Baja California, México</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=NewCity+Medical+Plaza+Tijuana"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-secondary text-background px-8 py-4 font-label-md hover:bg-secondary-fixed transition-all flex items-center justify-center gap-2"
                >
                  VER EN GOOGLE MAPS
                  <span className="material-symbols-outlined">map</span>
                </a>

                <button
                  type="button"
                  onClick={() => navigate("/contacto")}
                  className="border border-secondary/40 text-secondary px-8 py-4 font-label-md hover:bg-secondary/10 transition-all flex items-center justify-center gap-2"
                >
                  AGENDAR CITA
                  <span className="material-symbols-outlined">
                    calendar_today
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-28 md:py-36 px-margin-mobile md:px-margin-desktop bg-surface-container-low overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div
              className="w-full h-full"
              style={{
                backgroundImage:
                  "radial-gradient(#e9c176 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="max-w-[850px] mx-auto text-center relative z-10">
            <span className="font-label-md text-secondary tracking-[0.2em] uppercase mb-5 block">
              Comienza tu tratamiento
            </span>

            <h2 className="font-display-lg text-display-lg mb-7">
              Tu nueva sonrisa comienza con una{" "}
              <span className="gold-gradient-text italic font-bold">
                valoración
              </span>
            </h2>

            <p className="font-body-lg text-on-surface-variant leading-8 mb-12 max-w-[700px] mx-auto">
              Agenda una consulta para conocer tus opciones de tratamiento y
              recibir un plan diseñado especialmente para ti.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                type="button"
                onClick={() => navigate("/contacto")}
                className="bg-secondary text-background px-12 py-4 font-label-md hover:bg-secondary-fixed transition-all flex items-center justify-center gap-2"
              >
                AGENDAR VALORACIÓN
                <span className="material-symbols-outlined">
                  calendar_today
                </span>
              </button>

              <button
                type="button"
                onClick={() => navigate("/especialidades")}
                className="border border-secondary/40 text-secondary px-12 py-4 font-label-md hover:bg-secondary/10 transition-all flex items-center justify-center gap-2"
              >
                VER TRATAMIENTOS
                <span className="material-symbols-outlined">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}