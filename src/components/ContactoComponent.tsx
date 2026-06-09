export default function ContactoComponent() {
  return (
    <div className="bg-background text-on-background selection:bg-secondary selection:text-on-secondary">
      <main className="pt-20">
        <section className="relative py-20 px-6 md:px-margin-desktop max-w-container-max-width mx-auto overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="z-10">
              <span className="font-label-md text-label-md text-secondary uppercase tracking-[0.2em] mb-4 block">
                Contacto de Élite
              </span>
              <h1 className="font-display-lg text-display-lg md:text-display-lg mb-6 leading-tight">
                Excelencia Médica a Su Alcance
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-lg">
                Inicie su camino hacia un bienestar superior. Nuestra práctica
                boutique combina la precisión quirúrgica con una atención
                profundamente personalizada.
              </p>
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 flex items-center justify-center gold-border rounded-full group-hover:bg-secondary/10 transition-colors">
                    <span
                      className="material-symbols-outlined text-secondary"
                      style={{ fontVariationSettings: "'wght' 300" }}
                    >
                      call
                    </span>
                  </div>
                  <div>
                    <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
                      Teléfono Directo
                    </p>
                    <p className="font-headline-sm text-headline-sm text-secondary">
                      (664) 123 4567
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 flex items-center justify-center gold-border rounded-full group-hover:bg-secondary/10 transition-colors">
                    <span
                      className="material-symbols-outlined text-secondary"
                      style={{ fontVariationSettings: "'wght' 300" }}
                    >
                      mail
                    </span>
                  </div>
                  <div>
                    <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
                      Email Profesional
                    </p>
                    <p className="font-headline-sm text-headline-sm text-secondary">
                      david.favela@correo.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 flex items-center justify-center gold-border rounded-full group-hover:bg-secondary/10 transition-colors">
                    <span
                      className="material-symbols-outlined text-secondary"
                      style={{ fontVariationSettings: "'wght' 300" }}
                    >
                      location_on
                    </span>
                  </div>
                  <div>
                    <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
                      Ubicación Privada
                    </p>
                    <p className="font-headline-sm text-headline-sm text-secondary">
                      Blvd. Agua Caliente 1234, Tijuana, B.C.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-secondary/5 blur-3xl rounded-full"></div>
              <div className="relative matte-card gold-border p-8 md:p-12 z-10">
                <h2 className="font-headline-lg text-headline-lg mb-8 text-center">
                  Formulario de Consulta
                </h2>
                <form className="space-y-10" id="contactForm">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative group">
                      <input
                        className="w-full py-2 px-0 font-body-md text-body-md input-underline text-on-surface placeholder-on-surface-variant/30"
                        id="name"
                        placeholder="Nombre Completo"
                        required
                        type="text"
                      />
                    </div>
                    <div className="relative group">
                      <input
                        className="w-full py-2 px-0 font-body-md text-body-md input-underline text-on-surface placeholder-on-surface-variant/30"
                        id="email"
                        placeholder="Correo Electrónico"
                        required
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative group">
                      <input
                        className="w-full py-2 px-0 font-body-md text-body-md input-underline text-on-surface placeholder-on-surface-variant/30"
                        id="phone"
                        placeholder="Teléfono"
                        type="tel"
                      />
                    </div>
                    <div className="relative group">
                      <select
                        className="w-full py-2 px-0 font-body-md text-body-md input-underline text-on-surface bg-surface appearance-none"
                        id="specialty"
                      >
                        <option disabled selected value="">
                          Especialidad de Interés
                        </option>
                        <option value="estetica">Cirugía Estética</option>
                        <option value="reconstructiva">Reconstructiva</option>
                        <option value="facial">Tratamientos Faciales</option>
                      </select>
                    </div>
                  </div>
                  <div className="relative group">
                    <textarea
                      className="w-full py-2 px-0 font-body-md text-body-md input-underline text-on-surface placeholder-on-surface-variant/30 resize-none"
                      id="message"
                      placeholder="¿En qué podemos asistirle?"
                      required
                      rows={3}
                    ></textarea>
                  </div>
                  <button
                    className="w-full bg-secondary text-on-secondary py-4 font-label-md text-label-md uppercase tracking-[0.2em] transition-all hover:brightness-110 active:scale-[0.98]"
                    type="submit"
                  >
                    Solicitar Información Privada
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-surface-container-lowest border-y border-secondary/20">
          <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop">
            <div className="flex flex-col lg:flex-row gap-12 items-stretch">
              <div className="flex-grow relative h-[500px] gold-border overflow-hidden">
                <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center">
                  <img
                    className="w-full h-full object-cover opacity-60 grayscale brightness-75"
                    data-alt="A stylized dark-themed architectural map focusing on a modern metropolitan district. The map features deep obsidian backgrounds with subtle charcoal grid lines. A prominent golden circular marker indicates the precise location of the clinic, glowing softly against the dark interface. The visual style is premium, technical, and minimalist, echoing high-end GPS navigation systems."
                    data-location="Tijuana"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBU8f3DexuaikpWng_30wABu44rhFBzF7OAwJrRPaUOHuHBvJ_vkQZ9-mcb3-5FVl1m9O2eyLJqrx8xPdJbbOWGeoNBior0t08yN4ry8UKNjyoqOQGmIpPlIz3KL-GUNoQBKcll3wuYMtCOP_kJMIhXXS9q61WeWXIHQpHM_8TevAELvTYViomfTXF25XfuexGcCfg6OSo7d45_wUOoI5oe1sY5HtXL-LhLHy3Ez3-h65et4LcW-OSwsdKo5Y-K6c6JDl0It6vAbiKN"
                  />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span
                      className="material-symbols-outlined text-secondary text-5xl animate-bounce"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      location_on
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 bg-surface-container/90 backdrop-blur-md p-6 gold-border max-w-xs">
                  <h3 className="font-headline-sm text-headline-sm text-secondary mb-2">
                    Visítenos
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Zona Urbana Rio Tijuana, Centro Médico Excelencia, Nivel 12.
                  </p>
                </div>
              </div>

              <div className="lg:w-80 flex flex-col justify-between p-8 matte-card border border-outline-variant/30">
                <div className="text-center">
                  <div className="mb-6 mx-auto w-40 h-40 gold-border p-2 bg-white flex items-center justify-center">
                    <div className="w-full h-full bg-black flex items-center justify-center">
                      <span className="material-symbols-outlined text-white text-6xl">
                        qr_code_2
                      </span>
                    </div>
                  </div>
                  <p className="font-label-md text-label-md uppercase tracking-widest text-secondary">
                    whatsapp
                  </p>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                    Contactame
                  </p>
                </div>
                <div className="mt-12 space-y-4">
                  <hr className="border-secondary/30" />
                  <p className="font-body-md text-body-md text-center italic text-on-surface-variant">
                    "La excelencia no es un acto, sino un hábito."
                  </p>
                  <div className="flex justify-center gap-6">
                    <span className="material-symbols-outlined text-secondary hover:scale-110 cursor-pointer transition-transform">
                      share
                    </span>
                    <span className="material-symbols-outlined text-secondary hover:scale-110 cursor-pointer transition-transform">
                      schedule
                    </span>
                    <span className="material-symbols-outlined text-secondary hover:scale-110 cursor-pointer transition-transform">
                      medical_services
                    </span>
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
