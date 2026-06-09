export default function EspecialidadesComponent() {
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

        <section className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop py-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-gutter">
            <div className="max-w-xl">
              <span className="text-secondary font-label-md text-label-md uppercase tracking-[0.2em] block mb-2">
                Nuestros Servicios
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">
                Medicina de Alta Precisión
              </h2>
              <p className="text-on-surface-variant font-body-md text-body-md">
                Integramos los protocolos internacionales más avanzados con un
                entorno de cuidado exclusivo, diseñado para pacientes que no
                aceptan menos que la perfección.
              </p>
            </div>
            <div className="hidden md:block">
              <span className="text-on-surface-variant/30 font-display-lg text-display-lg opacity-20">
                DF
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8 group relative matte-card p-12 overflow-hidden">
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <span className="material-symbols-outlined text-secondary text-4xl mb-6">
                    precision_manufacturing
                  </span>
                  <h3 className="font-headline-md text-headline-md text-secondary mb-4">
                    Cirugía de Mínima Invasión
                  </h3>
                  <p className="text-on-surface-variant font-body-md text-body-md max-w-md">
                    Utilizamos sistemas robóticos y laparoscópicos de última
                    generación para garantizar recuperaciones aceleradas y
                    cicatrización estética mínima. El futuro de la cirugía, hoy.
                  </p>
                </div>
                <div className="mt-12 flex items-center gap-4 text-secondary font-label-md uppercase tracking-widest cursor-pointer group-hover:gap-6 transition-all">
                  Saber más{" "}
                  <span className="material-symbols-outlined">
                    arrow_right_alt
                  </span>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-[300px] absolute -right-20 -top-20">
                  biotech
                </span>
              </div>
            </div>

            <div className="md:col-span-4 matte-card p-8 group">
              <span className="material-symbols-outlined text-secondary text-3xl mb-6">
                monitoring
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">
                Diagnóstico Molecular
              </h3>
              <p className="text-on-surface-variant font-body-md text-body-md">
                Análisis genómico avanzado para planes de tratamiento preventivo
                personalizados según su perfil biológico único.
              </p>
            </div>

            <div className="md:col-span-4 matte-card p-8 group">
              <span className="material-symbols-outlined text-secondary text-3xl mb-6">
                health_metrics
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">
                Terapia Regenerativa
              </h3>
              <p className="text-on-surface-variant font-body-md text-body-md">
                Protocolos biotecnológicos diseñados para la restauración
                celular y funcional de tejidos comprometidos.
              </p>
            </div>

            <div className="md:col-span-8 matte-card overflow-hidden relative group">
              <div className="flex h-full flex-col md:flex-row">
                <div className="p-8 md:w-1/2 flex flex-col justify-center">
                  <span className="material-symbols-outlined text-secondary text-3xl mb-6">
                    psychology
                  </span>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-4">
                    Neuro-Optimización
                  </h3>
                  <p className="text-on-surface-variant font-body-md text-body-md">
                    Enfoque holístico en el bienestar neurológico, combinando
                    tecnología de estimulación con manejo del estrés ejecutivo.
                  </p>
                </div>
                <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60"
                    data-alt="A high-contrast macro photograph of modern medical equipment in a dark laboratory setting. Clean metallic lines are illuminated by sharp, cool white highlights and warm golden reflections. The image captures the essence of surgical precision and advanced biotechnology, fitting perfectly within a luxury medical brand's visual identity."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMnEP1DGCl2srW3R0pZHikjcuSUSrULMCnQwEnVjqJQdVL6Sep6JIHRA9Pqs_I-0RhJZXHTzwgk1Um_dGJaomO9PusNrKco4z_q4SCMidNJZgFXG-9AXniA9JiyjicGyMSTOFO7Zyx4FNWg_hNuCEKWuRHpc_UmCUqq1sSh44Y9p15QWdg7xT2-T81ZaoeduQmsot-tDPcFiK5BwRxIOEOoLoONOKWJtZCfADcK85chFFkWnsSG651KK9-s0WdfUgnt_0SxNVlk-tb"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent"></div>

        <section className="bg-surface-container-low py-24">
          <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] bg-surface-container-highest overflow-hidden border border-secondary/20">
                <img
                  className="w-full h-full object-cover opacity-80"
                  data-alt="A portrait of a male doctor in his 40s wearing a high-quality tailored white coat, standing in a minimalist dark-themed medical suite. He has a calm, confident, and professional expression. The lighting is dramatic, Rembrandt-style, highlighting facial features against a deep matte black background, embodying the concept of youthful excellence and medical mastery."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCUXiecKvkt80XpNZSub1n7aGsSaNmlInOunQ-WCdCZcU6YiZIEa-LW3W6BAbapKUheht2ZUBxomZiNun3LTSmWMu4zZgqU2Ex9xwTblJDV_QMjcDO74R2hDMgvdiONzL_ZwWu5TFiOmlLTWANtZaasbpaWYCRa0khis9MDYNbMhUOPgSdCmMK2bMMt06oJA0-1hvQuoS2yABpZeYRtd5zOd-tBMUDZbR_rtdH0ko1JFb269Kqt1tEAGyjl4owBi0sOJAXTKGe-Cmo"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 md:-right-12 bg-secondary p-8 hidden md:block">
                <p className="text-background font-headline-sm text-headline-sm leading-tight">
                  "La precisión es el lenguaje de la maestría."
                </p>
              </div>
            </div>
            <div>
              <h2 className="font-headline-lg text-headline-lg text-secondary mb-8 gold-underline">
                El Enfoque Personalizado
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <span className="text-secondary font-display-lg text-display-lg leading-none opacity-50">
                    01
                  </span>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface mb-2">
                      Consulta Extendida
                    </h4>
                    <p className="text-on-surface-variant font-body-md text-body-md">
                      Dedicamos el tiempo necesario para comprender su historial
                      clínico y aspiraciones de salud, sin prisas.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <span className="text-secondary font-display-lg text-display-lg leading-none opacity-50">
                    02
                  </span>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface mb-2">
                      Seguimiento Digital 24/7
                    </h4>
                    <p className="text-on-surface-variant font-body-md text-body-md">
                      Acceso directo a su equipo médico a través de nuestra
                      plataforma encriptada para una tranquilidad total.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <span className="text-secondary font-display-lg text-display-lg leading-none opacity-50">
                    03
                  </span>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface mb-2">
                      Entorno Boutique
                    </h4>
                    <p className="text-on-surface-variant font-body-md text-body-md">
                      Nuestras instalaciones están diseñadas para ofrecer
                      privacidad absoluta y confort premium durante cada visita.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 text-center px-margin-mobile">
          <h2 className="font-display-lg text-display-lg text-on-surface mb-8">
            Comience su trayectoria hacia la excelencia en salud.
          </h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button className="bg-secondary text-on-secondary px-10 py-4 font-label-md text-label-md uppercase tracking-widest hover:brightness-110 transition-all">
              Agendar Consulta Inicial
            </button>
            <button className="border border-secondary text-secondary px-10 py-4 font-label-md text-label-md uppercase tracking-widest hover:bg-secondary/5 transition-all">
              Descargar Brochure Médico
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
