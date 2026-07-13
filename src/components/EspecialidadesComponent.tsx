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
    <div className="bg-background text-on-background selection:bg-secondary selection:text-background font-body-md">
      <main className="pt-20">
        <header className="relative h-[614px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover opacity-40"
              data-alt="A cinematic, wide-angle shot of a high-end medical office interior with dark wood paneling, warm ambient accent lighting in gold tones, and minimalist contemporary furniture. The environment exudes an atmosphere of elite professionalism and serene medical excellence, using a deep charcoal and champagne gold color palette to maintain the brand's sophisticated matte aesthetic."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYsze2uGVVjkCxfIwzjQS-BHFsMsrx9wAwl_MiXsfpSVu60CCNQLA9POJja0v2HSXpIGEFrhSBenQ3dAz2k6PoFTYaxwvIDNfJ0mdtyYNXIuimvEBXPt3YtQwNkhTtdz5B1ZvF9ds3kJWn--68nNV25uAqIaJdjxQbeED2xyS-j9nPhQ-xjPOIN_k-twfl8d97PD4LeVvNSz2zfYHpsViBGboWwafP5cLVcoJkIJA6_vXeQlnkV4gqNKTVjtfkZdhJAkNW9RDcXwzu"
            />
            <div className="absolute inset-0 hero-gradient"></div>
          </div>
          <div className="relative z-10 text-center px-margin-mobile">
            <h1 className="font-display-lg text-display-lg md:text-[64px] text-secondary mb-4 tracking-tighter">
              Especialidades &amp; Tratamientos
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Excelencia médica contemporánea a través de tecnología de
              vanguardia y un enfoque profundamente humano y personalizado.
            </p>
            <div className="w-24 h-px bg-secondary mx-auto mt-8"></div>
          </div>
        </header>

        <section className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop -mt-20 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="matte-card p-8 border border-secondary/20">
              <span className="material-symbols-outlined text-secondary text-4xl mb-4">
                verified
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">
                Atención Integral
              </h3>
              <p className="text-on-surface-variant">
                Desde prevención hasta rehabilitación completa con implantes.
              </p>
            </div>

            <div className="matte-card p-8 border border-secondary/20">
              <span className="material-symbols-outlined text-secondary text-4xl mb-4">
                precision_manufacturing
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">
                Tecnología y Planeación
              </h3>
              <p className="text-on-surface-variant">
                Tratamientos diseñados con precisión para cada paciente.
              </p>
            </div>

            <div className="matte-card p-8 border border-secondary/20">
              <span className="material-symbols-outlined text-secondary text-4xl mb-4">
                sentiment_satisfied
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">
                Sonrisas Naturales
              </h3>
              <p className="text-on-surface-variant">
                Resultados funcionales, estéticos y personalizados.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop py-28">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-label-md text-label-md uppercase tracking-[0.2em] block mb-3">
              Nuestros Servicios
            </span>

            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">
              Odontología Integral para Adultos
            </h2>

            <p className="text-on-surface-variant font-body-md text-body-md">
              Realizamos una gran variedad de tratamientos dentales, agrupados
              por especialidad para ayudarte a encontrar la atención que
              necesitas.
            </p>
          </div>

          <div className="mb-14 rounded-2xl border border-secondary/20 bg-secondary/10 p-6 md:p-8 flex gap-5 items-start">
            <span className="material-symbols-outlined text-secondary text-3xl">
              info
            </span>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-secondary mb-2">
                Nota importante
              </h3>
              <p className="text-on-surface-variant font-body-md text-body-md">
                Actualmente atendemos pacientes adultos y adolescentes. Por el
                momento no contamos con atención odontopediátrica.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {categorias.map((categoria) => (
              <article
                key={categoria.titulo}
                className="group matte-card overflow-hidden border border-secondary/10 hover:border-secondary/40 transition-all"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={categoria.imagen}
                    alt={categoria.titulo}
                    className="w-full h-full object-cover opacity-75 group-hover:scale-110 group-hover:opacity-90 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>

                  <div className="absolute left-6 bottom-6 w-14 h-14 rounded-full bg-secondary text-on-secondary flex items-center justify-center shadow-xl">
                    <span className="material-symbols-outlined text-3xl">
                      {categoria.icon}
                    </span>
                  </div>
                </div>

                <div className="p-7">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">
                    {categoria.titulo}
                  </h3>

                  <p className="text-on-surface-variant font-body-md text-body-md mb-6">
                    {categoria.descripcion}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {categoria.tratamientos.map((tratamiento) => (
                      <span
                        key={tratamiento}
                        className="rounded-full border border-secondary/20 bg-surface-container-low text-on-surface-variant px-3 py-1 text-xs"
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

        <section className="bg-surface-container-low py-24">
          <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] bg-surface-container-highest overflow-hidden border border-secondary/20">
                <img
                  className="w-full h-full object-cover opacity-80"
                  data-alt="Doctor dental en consultorio moderno."
                  src="/david_perfil.jpeg"
                />
              </div>

              <div className="absolute -bottom-6 -right-6 md:-right-12 bg-secondary p-8 hidden md:block">
                <p className="text-background font-headline-sm text-headline-sm leading-tight">
                  "Cada sonrisa requiere precisión, diagnóstico y atención
                  personalizada."
                </p>
              </div>
            </div>

            <div>
              <span className="text-secondary font-label-md text-label-md uppercase tracking-[0.2em] block mb-3">
                Experiencia Personalizada
              </span>

              <h2 className="font-headline-lg text-headline-lg text-secondary mb-8 gold-underline">
                Un plan dental diseñado para tu sonrisa
              </h2>

              <div className="space-y-8">
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
                ].map((item) => (
                  <div key={item.numero} className="flex gap-6">
                    <span className="text-secondary font-display-lg text-display-lg leading-none opacity-50">
                      {item.numero}
                    </span>
                    <div>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface mb-2">
                        {item.titulo}
                      </h4>
                      <p className="text-on-surface-variant font-body-md text-body-md">
                        {item.texto}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-28 text-center px-margin-mobile overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover opacity-25"
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1800&auto=format&fit=crop"
              alt="Sonrisa saludable"
            />
            <div className="absolute inset-0 bg-background/85"></div>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="text-secondary font-label-md text-label-md uppercase tracking-[0.2em] block mb-4">
              Agenda tu valoración
            </span>

            <h2 className="font-display-lg text-display-lg text-on-surface mb-8">
              ¿Listo para transformar tu sonrisa?
            </h2>

            <p className="text-on-surface-variant font-body-lg text-body-lg max-w-2xl mx-auto mb-10">
              Recibe una valoración profesional y conoce el tratamiento más
              adecuado para mejorar tu salud y estética dental.
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <button
                onClick={() => navigate("/contacto")}
                className="bg-secondary text-on-secondary px-10 py-4 font-label-md text-label-md uppercase tracking-widest hover:brightness-110 transition-all text-center"
              >
                Agendar Cita
              </button>

              <a
                href="https://wa.me/526647544279?text=Hola%20Dr.%20David%20Favela,%20me%20gustaría%20agendar%20una%20consulta."
                target="_blank"
                rel="noopener noreferrer"
                className="border border-secondary text-secondary px-10 py-4 font-label-md text-label-md uppercase tracking-widest hover:bg-secondary/5 transition-all text-center"
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
