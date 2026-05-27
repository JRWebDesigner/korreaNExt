"use client"

const services = [
  { 
    title: "Art Direction & Set Design", 
    description: "Creative direction and spatial design for film, editorial and brand projects. From early concept development through to final visual planning.",
    index: 1 
  },
  { 
    title: "Set Fabrication & Construction", 
    description: "Full build of physical environments, combining traditional craft and contemporary fabrication techniques.",
    index: 2 
  },
  { 
    title: "Miniatures & Scale Models", 
    description: "Highly detailed miniature environments and models for film, photography and conceptual development.",
    index: 3 
  },
  { 
    title: "Scenic Finishing", 
    description: "Surface treatment, painting and detailing to bring depth, texture and atmosphere to constructed sets.",
    index: 4 
  },
];

export default function Services() {
  return (
    <>
      <section className="relative min-h-screen bg-black flex justify-center items-center flex-col gap-10 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-4 text-center">
              Services
          </h1>
          <br />
          <br />
          {/* <p className="text-center md:text-2xl text-white opacity-70 max-w-3xl mx-auto">
            At Korrea Studio, we bring visions to life — from first concept to finished build. Every project blends artistry and craftsmanship to create striking, immersive results.
          </p> */}
          
        </div>

        <div className="w-full max-w-5xl mx-auto px-4">
          <div className="flex flex-col gap-8">
            {services.map(({ title, description, index }) => (
              <div 
                key={index} 
                className="group border border-transparent hover:border-gray-700 transition-all duration-300 rounded-2xl p-6 md:p-8 bg-black/40 hover:bg-black/60"
              >
                <div className="block">
                  <h2 className="text-2xl md:text-3xl font-bold text-white group-hover:text-red-400 transition-colors mb-3">
                    {title}
                  </h2>
                  <p className="text-white/60 md:text-lg leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
