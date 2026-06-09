import { useNavigate } from "react-router-dom";

export default function ProcedimientosComponent() {
    const navigate = useNavigate();

  return (
    <div className="font-body-md text-on-surface selection:bg-secondary selection:text-background">
      <main className="pt-20">
        <section className="relative min-h-[614px] flex items-center justify-center overflow-hidden px-margin-mobile md:px-margin-desktop py-24">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10"></div>
            <img
              alt="Modern Medical Tech"
              className="w-full h-full object-cover opacity-20"
              data-alt="A cinematic, low-angle shot of a high-tech medical laboratory at night. Deep obsidian and charcoal tones dominate the scene, with sharp beams of clinical blue light hitting surgical steel surfaces. In the background, large holographic displays glow with complex DNA structures and patient data. The atmosphere is quiet, exclusive, and technologically advanced, embodying clinical perfection."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8wSf804V7SBPtJho6ItynLfEp1OJu6dNIY3P2Cq4DUoU0MQqUv1a93ZUam5fhoZE3p_cZvNZfd62o690soldSDvIxBo3FBI3jachbv-ydhCybbnVK1Gpe1gVZ2wTkrR5APe5kyDhdibTFmm2KqHmsO3kycBpqj2Lmw-fxK2nNYUXSsaSrB2Z1Ey7Cq9AscKs5dAVdYrS5VXvjc9OgpSyohk9wcdyo2bgSo60ZgnoonrnL2IiqJVtdOF9Mu-__Qs0VBTcyB4g7ySxY"
            />
          </div>
          <div className="relative z-20 text-center max-w-[800px]">
            <span className="font-label-md text-secondary tracking-[0.2em] mb-4 block">
              EXCELENCIA CLÍNICA
            </span>
            <h1 className="font-display-lg text-display-lg md:text-[64px] md:leading-tight mb-6">
              Procedimientos de{" "}
              <span className="gold-gradient-text italic font-bold">
                Precisión
              </span>
            </h1>
            <p className="font-body-lg text-on-surface-variant max-w-[600px] mx-auto">
              Fusionamos la ciencia genómica más avanzada con tecnología de
              monitoreo en tiempo real para redefinir el estándar de su
              bienestar personal.
            </p>
            <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center">
              <div className="h-px w-24 bg-secondary/30 self-center hidden md:block"></div>
              <span className="material-symbols-outlined text-secondary text-4xl animate-bounce">
                expand_more
              </span>
              <div className="h-px w-24 bg-secondary/30 self-center hidden md:block"></div>
            </div>
          </div>
        </section>

        <section className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <div className="group relative overflow-hidden glass-card transition-all duration-500 hover:border-secondary/40 flex flex-col h-full">
              <div className="aspect-video overflow-hidden">
                <img
                  alt="Genómica"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60"
                  data-alt="A high-definition visualization of a double helix DNA strand floating in a dark, atmospheric void. The DNA is illuminated with bioluminescent gold and cyan highlights, showing intricate details of genetic markers. Subtle data overlays and scientific annotations float in the periphery. The overall aesthetic is premium, scientific, and mysterious, suggesting deep biological insights."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp8gqo63oKwGu4DXmoA5XrjgZ01Y8UyCpAqb_sH0R2EKpkjp9UzxTMYA-geL4ZfvDr2obJCCXwlV8Ef1-qOZYbRqStAuC-dqxMFULTTkWkzjeKZEEOI2n8GYpyqF3tNSrfBkKLcIIxnws48W0cQ2Q98fSCDNE-lpvZjQgakAHTlssVQhmp72zXaFpyy6f1eFBLfRnYZktl_zOSBiUMsiJ1U_bpPPDUgBoTvIs2ZLDWTryu0RNk1iLEAb9SBqxegQQDB8aLO2e7UIuO"
                />
              </div>
              <div className="p-base md:p-8 flex-grow flex flex-col">
                <span className="text-secondary font-label-md mb-2">
                  01. AVANZADO
                </span>
                <h3 className="font-headline-lg text-headline-lg mb-4">
                  Medicina Genómica
                </h3>
                <p className="font-body-md text-on-surface-variant mb-8 flex-grow">
                  Análisis exhaustivo de su código genético para identificar
                  predisposiciones, optimizar tratamientos y prevenir riesgos
                  antes de que se manifiesten.
                </p>
                <button className="self-start flex items-center gap-2 font-label-md text-secondary group-hover:gap-4 transition-all">
                  SABER MÁS{" "}
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>

            <div className="group relative overflow-hidden glass-card transition-all duration-500 hover:border-secondary/40 flex flex-col h-full md:mt-24">
              <div className="aspect-video overflow-hidden">
                <img
                  alt="Bio-Optimización"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60"
                  data-alt="A professional medical dashboard showing real-time metabolic and hormonal data on a sleek, matte black tablet. The interface is minimal, with gold-accented graphs and precise numerical readouts. The setting is a luxury clinical office with soft, warm ambient lighting. The mood is focused on performance optimization and sophisticated biological management."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKzjZ3jpBlZM9wtXI_oBu1Wv8c9y76usBDSzzPTSGAkg5BThA8LwXjY6_GUmkZUVna__Q_SuFPT0MTKAoj1NOaZ3H0GdAxiPV7eAyMgpGwiEHU5VOsbl8E9Gr4e8iw69PYlIXG9QKgQ4k_Wh6J3bqmw-pn-Jmkby3dhWAU4dbp4MvxoDXtI4zxCKxqVqBNi6RyD_LlmimwndpQmmYLsVMB6zPw2osdet2xqUUUaEX9jVbbWxmM8dfi3nTUvijuZcdAq4W3nC9DBnm0"
                />
              </div>
              <div className="p-base md:p-8 flex-grow flex flex-col">
                <span className="text-secondary font-label-md mb-2">
                  02. PERFORMANCE
                </span>
                <h3 className="font-headline-lg text-headline-lg mb-4">
                  Bio-Optimización
                </h3>
                <p className="font-body-md text-on-surface-variant mb-8 flex-grow">
                  Ajustes metabólicos y hormonales de precisión quirúrgica,
                  diseñados para restaurar su vitalidad y elevar su rendimiento
                  físico y cognitivo.
                </p>
                <button className="self-start flex items-center gap-2 font-label-md text-secondary group-hover:gap-4 transition-all">
                  SABER MÁS{" "}
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>

            <div className="group relative overflow-hidden glass-card transition-all duration-500 hover:border-secondary/40 flex flex-col h-full md:-mt-24">
              <div className="aspect-video overflow-hidden">
                <img
                  alt="Diagnóstico"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60"
                  data-alt="A futuristic 3D medical scan of a human heart rendered in translucent glass with glowing red neural pathways. The image is displayed on a large, frameless transparent screen within a dark, sterile diagnostic suite. The lighting is low and dramatic, highlighting the precision of AI-assisted medical imaging. The aesthetic is clean, high-tech, and life-focused."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_oNAZscAlNEgyVNsVz_MEa3FgwS_OsoQjmeRg-VE22Hk1ZKpVjzSbTdEkQQa63uVWvDRCoS-d48w-IpACjNEfK4IutHHBIXXwlRpXBXsAFk79Nrr-olthM_25abRZT0xZdbd1-adPF5ldoNCZvDdJTGcn-CE-BYhmb0LLId7KDX7_ilHgOogQcjRYh0EqcR3GODrYnXfkhKiTKdv4uhwS_Cp2Pz7akOzuJV5U6a3FSvBUKmi17-tbPBIbEuzQti7S6awddHPayruK"
                />
              </div>
              <div className="p-base md:p-8 flex-grow flex flex-col">
                <span className="text-secondary font-label-md mb-2">
                  03. TECNOLOGÍA
                </span>
                <h3 className="font-headline-lg text-headline-lg mb-4">
                  Diagnóstico de Vanguardia
                </h3>
                <p className="font-body-md text-on-surface-variant mb-8 flex-grow">
                  Integración de escaneos 3D de alta resolución y análisis
                  asistido por Inteligencia Artificial para una comprensión
                  absoluta de su estado de salud.
                </p>
                <button className="self-start flex items-center gap-2 font-label-md text-secondary group-hover:gap-4 transition-all">
                  SABER MÁS{" "}
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>

            <div className="group relative overflow-hidden glass-card transition-all duration-500 hover:border-secondary/40 flex flex-col h-full">
              <div className="aspect-video overflow-hidden">
                <img
                  alt="Digital Monitoring"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60"
                  data-alt="Close up of a luxury high-end smartwatch on a wrist, featuring a custom clinical interface with gold accents. The screen shows a steady heartbeat waveform and oxygen saturation levels. The background is a soft-focus hospital corridor with a professional medical vibe. The image conveys constant care, luxury technology, and seamless healthcare integration."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDh_oSmCy2voplc-UK26ViZc2gRMm5IaD5QOzESl0IFM6YkkQrG12ffzWrOTKFc3txx7WiKNtrp6fmxxJ2H2VvSdk_KHOW28uw3E3I80KyCqPBdMfBUDr4TStQDykGAuiQ0qC9UEsF7DTf9fFgpiy5gXL6mBQMYluq4CtUaPtvCZVWPf6ZqdjKUn88rKlt65tMUhfoXhr_Ndm-U5uQgEbhEqdxZXdKXSHyjiAV8tzbjjuhRswpd0FPKWEmveWaLIf9etlS1MzKkNSOG"
                />
              </div>
              <div className="p-base md:p-8 flex-grow flex flex-col">
                <span className="text-secondary font-label-md mb-2">
                  04. CONECTIVIDAD
                </span>
                <h3 className="font-headline-lg text-headline-lg mb-4">
                  Seguimiento Digital 24/7
                </h3>
                <p className="font-body-md text-on-surface-variant mb-8 flex-grow">
                  Ecosistema de dispositivos wearables integrados directamente
                  con nuestro centro de monitoreo, asegurando atención proactiva
                  en cada momento.
                </p>
                <button className="self-start flex items-center gap-2 font-label-md text-secondary group-hover:gap-4 transition-all">
                  SABER MÁS{" "}
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-32 px-margin-mobile md:px-margin-desktop bg-surface-container-low overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div
              className="w-full h-full"
              style={{
                backgroundImage:
                  "radial-gradient(#e9c176 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            ></div>
          </div>
          <div className="max-w-[800px] mx-auto text-center relative z-10">
            <h2 className="font-display-lg text-display-lg mb-6">
              Transforme su Salud Hoy
            </h2>
            <p className="font-body-lg text-on-surface-variant mb-12">
              Inicie su viaje hacia una vida optimizada con el respaldo de la
              ciencia médica más avanzada y un enfoque humano inigualable.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => navigate("/contacto")}
                className="bg-secondary text-background px-12 py-4 font-label-md hover:bg-secondary-fixed transition-all flex items-center justify-center gap-2"
              >
                AGENDAR CITA
                <span className="material-symbols-outlined">
                  calendar_today
                </span>
              </button>
              <button onClick={() => navigate("/especialidades")} className="border border-secondary/40 text-secondary px-12 py-4 font-label-md hover:bg-secondary/10 transition-all">
                VER TODAS LAS ESPECIALIDADES
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
