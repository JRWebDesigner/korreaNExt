"use client"
type ServiceVariant = "light-dots" | "gray-orange" | "dark-orange";
//rossy te amo
type Service = {
  title: string;
  description: string;
  index: string;
  variant: ServiceVariant;
};

const services: Service[] = [
  {
    title: "Art Direction & Set Design",
    description:
      "Creative direction and spatial design for film, editorial and brand projects. From early concept development through to final visual planning.",
    index: "01",
    variant: "light-dots",
  },
  {
    title: "Set Fabrication & Construction",
    description:
      "Full build of physical environments, combining traditional craft and contemporary fabrication techniques.",
    index: "02",
    variant: "gray-orange",
  },
  {
    title: "Miniatures & Scale Models",
    description:
      "Highly detailed miniature environments and models for film, photography and conceptual development.",
    index: "03",
    variant: "light-dots",
  },
  {
    title: "Scenic Finishing",
    description:
      "Surface treatment, painting and detailing to bring depth, texture and atmosphere to constructed sets.",
    index: "04",
    variant: "dark-orange",
  },
];

// Fondo con puntitos, generado en CSS (sin necesitar una imagen)
const dotBg = {
  backgroundImage: "radial-gradient(circle, #00000022 1px, transparent 1px)",
  backgroundSize: "14px 14px",
};

function VisualColumn({ variant }: { variant: ServiceVariant }) {
  if (variant === "light-dots") {
    return (
      <div className="relative w-full h-full bg-[#f2f1ee]" style={dotBg}>
        <span className="absolute top-4 right-4 text-orange-600 text-lg">+</span>
      </div>
    );
  }
  if (variant === "gray-orange") {
    return (
      <div className="relative w-full h-full flex">
        <div className="w-1/2 h-full bg-neutral-500" />
        <div className="w-1/2 h-full bg-orange-600" />
        <span className="absolute top-4 left-4 text-white/60 text-lg">+</span>
      </div>
    );
  }
  // dark-orange
  return (
    <div className="relative w-full h-full flex">
      <div className="w-1/2 h-full bg-neutral-800" style={dotBg} />
      <div className="w-1/2 h-full bg-orange-600" />
    </div>
  );
}

export default function Services() {
  return (
    <div className="bg-black">
      {/* Header */}
      <section className="relative px-6 md:px-10 pt-16 pb-14 overflow-hidden">
        {/* Línea decorativa curva */}
        <svg
          className="absolute top-0 right-0 w-1/2 h-full opacity-40 pointer-events-none"
          viewBox="0 0 400 300"
          fill="none"
        >
          <path
            d="M50 300 C 150 200, 200 100, 380 20"
            stroke="#ea580c"
            strokeWidth="1"
          />
        </svg>

        {/* Texto vertical superior derecho */}
        <div className="absolute top-6 right-8 flex gap-4 text-[10px] tracking-[0.3em] text-white/50 uppercase">
          <span className="[writing-mode:vertical-rl]">Built Spaces</span>
          <span className="[writing-mode:vertical-rl]">Told Stories</span>
        </div>

        {/* Puntos decorativos */}
        <div className="absolute top-6 right-28 flex flex-col gap-1.5">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="w-1 h-1 rounded-full bg-orange-600" />
          ))}
        </div>

        <h1 className="text-6xl md:text-8xl font-extrabold text-white leading-none">
          Services
        </h1>

        <div className="mt-6 flex items-start gap-3">
          <span className="text-orange-600 text-xl leading-none mt-1">+</span>
          <p className="text-white/70 text-sm md:text-base leading-relaxed">
            Crafted environments.
            <br />
            Built to be seen.
          </p>
        </div>
      </section>

      {/* Filas de servicios */}
      <section className="w-full">
        {services.map(({ title, description, index, variant }) => (
          <div
            key={index}
            className="grid grid-cols-[60px_1fr] md:grid-cols-[80px_1fr_1fr] border-t border-white/10"
          >
            {/* Columna número */}
            <div className="bg-black flex flex-col items-center pt-6 pb-6">
              <span className="text-orange-600 text-sm font-semibold">
                {index}
              </span>
              <span className="flex-1 w-px bg-orange-600/60 mt-3" />
            </div>

            {/* Columna descripción */}
            <div className="bg-[#f2f1ee] px-6 md:px-10 py-8 md:py-10">
              <h2 className="text-xl md:text-3xl font-bold text-black leading-tight">
                {title}
              </h2>
              <span className="block w-8 h-[2px] bg-orange-600 my-3" />
              <p className="text-black/60 text-sm md:text-base leading-relaxed max-w-md">
                {description}
              </p>
            </div>

            {/* Columna visual (oculta en mobile) */}
            <div className="hidden md:block h-auto min-h-[180px]">
              <VisualColumn variant={variant} />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
