import { useNavigate } from "react-router-dom";

export default function EspecialidadesComponent() {
  const navigate = useNavigate();

  const categorias = [
    {
      icon: "health_and_safety",
      titulo: "Implantología",
      imagen: "/implantologia.png",
      descripcion:
        "Rehabilitación avanzada con implantes dentales para recuperar función, estética y confianza.",
      tratamientos: [
        "Implantes unitarios",
        "Implantes con guía quirúrgica",
        "Todo en 4",
        "Todo en X",
        "Medio arco",
        "Arco completo",
        "Rehabilitación con implantes",
        "Injerto óseo",
        "Elevación de seno maxilar",
        "Superestructura",
      ],
    },
    {
      icon: "dentistry",
      titulo: "Ortodoncia",
      imagen: "/ortodoncia.png",
      descripcion:
        "Alineación dental con opciones modernas para mejorar la mordida y la armonía de tu sonrisa.",
      tratamientos: [
        "Colocación de brackets",
        "Ajustes de brackets",
        "Remoción de brackets",
        "Brackets metálicos",
        "Brackets cerámicos",
        "Alineadores invisibles",
      ],
    },
    {
      icon: "medical_services",
      titulo: "Cirugía Oral",
      imagen: "/cirugiaoral.png",
      descripcion:
        "Procedimientos quirúrgicos dentales realizados con planeación, precisión y cuidado profesional.",
      tratamientos: [
        "Extracciones simples",
        "Extracciones complicadas",
        "Extracción quirúrgica",
        "Extracción del tercer molar",
        "Alargamiento coronario",
        "Gingivectomías",
        "Ferulización",
      ],
    },
    {
      icon: "workspace_premium",
      titulo: "Rehabilitación Oral",
      imagen: "/rehabilitacionoral.png",
      descripcion:
        "Restauramos piezas dentales dañadas o perdidas para devolver estética, función y comodidad.",
      tratamientos: [
        "Coronas",
        "Coronas PMMA",
        "Puentes dentales",
        "Carillas",
        "Restauraciones completas",
        "Prótesis parciales removibles",
        "Flipper",
        "Obturaciones",
        "Rellenos",
      ],
    },
    {
      icon: "healing",
      titulo: "Endodoncia",
      imagen: "/endodoncia.png",
      descripcion:
        "Tratamientos para conservar dientes afectados por dolor, infección o daño profundo.",
      tratamientos: [
        "Tratamiento de conducto radicular",
        "Tratamiento de emergencia",
        "Retratamiento de conductos",
        "Apicectomía",
        "Poste y núcleo",
      ],
    },
    {
      icon: "auto_awesome",
      titulo: "Estética Dental",
      imagen: "/esteticadental.png",
      descripcion:
        "Mejoramos la apariencia de tu sonrisa con tratamientos estéticos personalizados.",
      tratamientos: [
        "Blanqueamiento",
        "Blanqueamiento Zoom",
        "Remoción de amalgama",
        "Carillas",
      ],
    },
    {
      icon: "cleaning_services",
      titulo: "Prevención y Encías",
      imagen: "/prevencionencias.png",
      descripcion:
        "Cuidado preventivo, limpieza profunda y mantenimiento para conservar tu salud bucal.",
      tratamientos: [
        "Limpiezas",
        "Escalado y planificación radicular",
        "Mantenimiento",
        "Ajuste oclusal",
        "Evaluaciones completas",
      ],
    },
    {
      icon: "nightlight",
      titulo: "Protección Dental",
      imagen: "/protecciondental.png",
      descripcion:
        "Protectores personalizados para cuidar tus dientes del desgaste, bruxismo o impactos.",
      tratamientos: ["Protectores bucales", "Protectores nocturnos"],
    },
  ];

  return (
    <div className="bg-background text-on-background selection:bg-secondary selection:text-background font-body-md overflow-x-hidden">
      <main className="pt-16 md:pt-20">
        {/* HERO */}
        <header className="relative min-h-[580px] md:min-h-[650px] flex items-center justify-center overflow-hidden px-6">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover object-center opacity-45 scale-105"
              data-alt="A cinematic, wide-angle shot of a high-end medical office interior with dark wood paneling, warm ambient accent lighting in gold tones, and minimalist contemporary furniture. The environment exudes an atmosphere of elite professionalism and serene medical excellence, using a deep charcoal and champagne gold color palette to maintain the brand's sophisticated matte aesthetic."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYsze2uGVVjkCxfIwzjQS-BHFsMsrx9wAwl_MiXsfpSVu60CCNQLA9POJja0v2HSXpIGEFrhSBenQ3dAz2k6PoFTYaxwvIDNfJ0mdtyYNXIuimvEBXPt3YtQwNkhTtdz5B1ZvF9ds3kJWn--68nNV25uAqIaJdjxQbeED2xyS-j9nPhQ-xjPOIN_k-twfl8d97PD4LeVvNSz2zfYHpsViBGboWwafP5cLVcoJkIJA6_vXeQlnkV4gqNKTVjtfkZdhJAkNW9RDcXwzu"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-background/55 via-background/65 to-background" />
            <div className="absolute inset-0 hero-gradient opacity-80" />
          </div>

          <div className="absolute top-20 left-[-100px] w-72 h-72 rounded-full bg-secondary/10 blur-3xl" />
          <div className="absolute bottom-10 right-[-120px] w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />

          <div className="relative z-10 text-center max-w-4xl mx-auto pt-10">
            <span className="inline-block text-secondary font-label-md text-xs md:text-label-md uppercase tracking-[0.3em] mb-5">
              Atención odontológica especializada
            </span>

            <h1 className="font-display-lg text-[42px] sm:text-[54px] md:text-[68px] lg:text-[76px] leading-[0.98] text-secondary tracking-tight mb-6">
              Especialidades
              <span className="block italic text-on-surface">
                &amp; Tratamientos
              </span>
            </h1>

            <p className="font-body-lg text-base sm:text-lg md:text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              Excelencia médica contemporánea a través de tecnología de
              vanguardia y un enfoque profundamente humano y personalizado.
            </p>

            <div className="flex items-center justify-center gap-3 mt-9">
              <span className="w-12 md:w-20 h-px bg-secondary/30" />
              <span className="w-2 h-2 rotate-45 border border-secondary" />
              <span className="w-12 md:w-20 h-px bg-secondary/30" />
            </div>
          </div>
        </header>

        {/* BENEFICIOS */}
        <section className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop -mt-14 md:-mt-20 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                icon: "verified",
                titulo: "Atención Integral",
                texto:
                  "Desde prevención hasta rehabilitación completa con implantes.",
              },
              {
                icon: "precision_manufacturing",
                titulo: "Tecnología y Planeación",
                texto:
                  "Tratamientos diseñados con precisión para cada paciente.",
              },
              {
                icon: "sentiment_satisfied",
                titulo: "Sonrisas Naturales",
                texto:
                  "Resultados funcionales, estéticos y personalizados.",
              },
            ].map((item) => (
              <article
                key={item.titulo}
                className="group relative overflow-hidden bg-surface-container/95 backdrop-blur-md p-7 sm:p-8 border border-secondary/20 hover:border-secondary/50 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="w-12 h-12 mb-6 border border-secondary/30 bg-secondary/5 flex items-center justify-center group-hover:bg-secondary group-hover:text-on-secondary transition-all duration-300">
                  <span className="material-symbols-outlined text-secondary text-3xl group-hover:text-on-secondary transition-colors">
                    {item.icon}
                  </span>
                </div>

                <h3 className="font-headline-sm text-xl md:text-headline-sm text-on-surface mb-3">
                  {item.titulo}
                </h3>

                <p className="text-on-surface-variant leading-relaxed">
                  {item.texto}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* SERVICIOS */}
        <section className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop py-20 md:py-28">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="text-secondary font-label-md text-xs md:text-label-md uppercase tracking-[0.25em] block mb-4">
              Nuestros Servicios
            </span>

            <h2 className="font-headline-lg text-3xl sm:text-4xl md:text-headline-lg text-on-surface mb-6 leading-tight">
              Odontología Integral para Adultos
            </h2>

            <p className="text-on-surface-variant font-body-md text-base md:text-body-md leading-relaxed">
              Realizamos una gran variedad de tratamientos dentales, agrupados
              por especialidad para ayudarte a encontrar la atención que
              necesitas.
            </p>
          </div>

          {/* NOTA */}
          <div className="max-w-4xl mx-auto mb-12 md:mb-16 border-l-2 border-secondary bg-surface-container-low px-5 sm:px-7 py-5 flex gap-4 items-start">
            <div className="w-10 h-10 shrink-0 rounded-full bg-secondary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-secondary text-2xl">
                info
              </span>
            </div>

            <div>
              <h3 className="font-headline-sm text-lg md:text-headline-sm text-secondary mb-2">
                Nota importante
              </h3>

              <p className="text-on-surface-variant font-body-md text-sm md:text-body-md leading-relaxed">
                Actualmente atendemos pacientes adultos y adolescentes. Por el
                momento no contamos con atención odontopediátrica.
              </p>
            </div>
          </div>

          {/* TARJETAS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 items-stretch">
            {categorias.map((categoria) => (
              <article
                key={categoria.titulo}
                className="group relative flex flex-col h-full bg-surface-container border border-secondary/10 hover:border-secondary/40 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/20"
              >
                <div className="relative h-52 sm:h-56 overflow-hidden">
                  <img
                    src={categoria.imagen}
                    alt={categoria.titulo}
                    className="w-full h-full object-cover opacity-75 group-hover:scale-105 group-hover:opacity-95 transition-all duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-background/10 to-transparent" />

                  <div className="absolute top-5 right-5 w-10 h-10 rounded-full border border-white/20 bg-background/30 backdrop-blur-md flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                    <span className="material-symbols-outlined text-secondary text-xl">
                      arrow_outward
                    </span>
                  </div>

                  <div className="absolute left-6 bottom-5 w-14 h-14 rounded-full bg-secondary text-on-secondary flex items-center justify-center shadow-xl ring-4 ring-surface-container">
                    <span className="material-symbols-outlined text-3xl">
                      {categoria.icon}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex flex-col flex-1">
                  <h3 className="font-headline-sm text-xl md:text-headline-sm text-on-surface mb-3">
                    {categoria.titulo}
                  </h3>

                  <p className="text-on-surface-variant font-body-md text-sm md:text-body-md leading-relaxed mb-6 min-h-[72px]">
                    {categoria.descripcion}
                  </p>

                  <div className="h-px w-full bg-outline-variant/10 mb-5" />

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {categoria.tratamientos.map((tratamiento) => (
                      <span
                        key={tratamiento}
                        className="rounded-full border border-secondary/15 bg-surface-container-low text-on-surface-variant px-3 py-1.5 text-[11px] leading-none transition-colors hover:border-secondary/40 hover:text-secondary"
                      >
                        {tratamiento}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* PROCESO */}
        <section className="relative bg-surface-container-low py-20 md:py-28 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />

          <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative max-w-xl mx-auto lg:mx-0 w-full">
              <div className="absolute -inset-4 md:-inset-6 border border-secondary/10" />

              <div className="relative aspect-[4/5] bg-surface-container-highest overflow-hidden border border-secondary/20">
                <img
                  className="w-full h-full object-cover object-center opacity-85 hover:scale-105 transition-transform duration-1000"
                  data-alt="Doctor dental en consultorio moderno."
                  src="/david_perfil.jpeg"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
              </div>

              <div className="relative md:absolute md:-bottom-8 md:-right-8 lg:-right-12 bg-secondary p-6 md:p-8 mt-4 md:mt-0 md:max-w-[320px] shadow-2xl">
                <span className="material-symbols-outlined text-on-secondary/50 text-3xl mb-3">
                  format_quote
                </span>

                <p className="text-on-secondary font-headline-sm text-lg md:text-headline-sm leading-relaxed">
                  "Cada sonrisa requiere precisión, diagnóstico y atención
                  personalizada."
                </p>
              </div>
            </div>

            <div className="pt-4 lg:pt-0">
              <span className="text-secondary font-label-md text-xs md:text-label-md uppercase tracking-[0.25em] block mb-4">
                Experiencia Personalizada
              </span>

              <h2 className="font-headline-lg text-3xl sm:text-4xl md:text-headline-lg text-secondary mb-10 leading-tight gold-underline">
                Un plan dental diseñado para tu sonrisa
              </h2>

              <div className="space-y-0">
                {[
                  {
                    numero: "01",
                    titulo: "Diagnóstico personalizado",
                    texto:
                      "Cada tratamiento inicia con una evaluación completa para identificar tus necesidades reales y definir el mejor camino clínico.",
                  },
                  {
                    numero: "02",
                    titulo: "Tratamientos integrales",
                    texto:
                      "Atendemos prevención, estética, ortodoncia, cirugía oral, endodoncia, implantes y rehabilitación dental en un mismo lugar.",
                  },
                  {
                    numero: "03",
                    titulo: "Resultados funcionales y estéticos",
                    texto:
                      "Buscamos que cada tratamiento no solo se vea bien, sino que también mejore tu salud, mordida, comodidad y calidad de vida.",
                  },
                ].map((item, index) => (
                  <div
                    key={item.numero}
                    className={`group flex gap-5 md:gap-7 py-7 ${
                      index !== 2
                        ? "border-b border-outline-variant/10"
                        : ""
                    }`}
                  >
                    <span className="text-secondary font-display-lg text-4xl md:text-5xl leading-none opacity-35 group-hover:opacity-70 transition-opacity shrink-0">
                      {item.numero}
                    </span>

                    <div>
                      <h4 className="font-headline-sm text-xl md:text-headline-sm text-on-surface mb-3">
                        {item.titulo}
                      </h4>

                      <p className="text-on-surface-variant font-body-md text-base md:text-body-md leading-relaxed">
                        {item.texto}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24 md:py-32 text-center px-6 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover opacity-25 scale-105"
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1800&auto=format&fit=crop"
              alt="Sonrisa saludable"
            />

            <div className="absolute inset-0 bg-background/90" />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-transparent to-secondary/5" />
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="w-14 h-14 mx-auto mb-7 rounded-full border border-secondary/30 bg-secondary/5 flex items-center justify-center">
              <span className="material-symbols-outlined text-secondary text-3xl">
                dentistry
              </span>
            </div>

            <span className="text-secondary font-label-md text-xs md:text-label-md uppercase tracking-[0.25em] block mb-5">
              Agenda tu valoración
            </span>

            <h2 className="font-display-lg text-4xl sm:text-5xl md:text-display-lg text-on-surface mb-7 leading-tight">
              ¿Listo para transformar tu sonrisa?
            </h2>

            <p className="text-on-surface-variant font-body-lg text-base md:text-body-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Recibe una valoración profesional y conoce el tratamiento más
              adecuado para mejorar tu salud y estética dental.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <button
                type="button"
                onClick={() => navigate("/contacto")}
                className="w-full sm:w-auto bg-secondary text-on-secondary px-8 sm:px-10 py-4 font-label-md text-sm md:text-label-md uppercase tracking-widest hover:brightness-110 active:scale-[0.98] transition-all text-center"
              >
                Agendar Cita
              </button>

              <a
                href="https://wa.me/526647544279?text=Hola%20Dr.%20David%20Favela,%20me%20gustaría%20agendar%20una%20consulta."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto border border-secondary text-secondary px-8 sm:px-10 py-4 font-label-md text-sm md:text-label-md uppercase tracking-widest hover:bg-secondary hover:text-on-secondary active:scale-[0.98] transition-all text-center"
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