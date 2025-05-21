import Image from "next/image";

export default function Aboutus() {
  return (
    <>
      <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center">
        <Image
          src="/img/experiencias.jpg"
          alt="Techo iluminado"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center px-6 md:px-20">
          <div className="max-w-2xl text-white">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight mb-4">
              From Concept to Completion —<br /> We Bring Ideas to Life
            </h2>
            <p className="text-sm sm:text-base text-white">
              Korrea Studio is a creative workshop based in London, run by artists passionate about design and fabrication. We design and build bold, physical work that leaves a mark.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-20 px-6 md:px-20">
        <div className="max-w-5xl mx-auto">
          <p className="text-green-300 text-base md:text-lg mb-6">
            From initial sketches to final pieces, we take your vision and turn it into environments, objects, and experiences that demand attention.
          </p>
          <p className="text-gray-200 text-base md:text-lg mb-6">
            Whether it’s a set, a prop, a painted backdrop, or a one-off installation — we handle it all, start to finish.
          </p>
          <p className="text-green-300 text-base md:text-lg">
            With creative direction, design, fabrication, and scenic art, we make your ideas real — and impactful.
          </p>
        </div>
      </section>

      <section className="relative w-full h-[70vh] md:h-[85vh] flex items-center">
        <Image
          src="/img/creatividad.jpg"
          alt="Naturaleza en vitrinas"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center px-6 md:px-20">
          <div className="max-w-2xl text-white">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-green-400 mb-4">
              From Concept to Completion
            </h2>
            <p className="text-sm sm:text-base text-white">
              Korrea Studio is where ideas become tangible — where creativity meets craftsmanship to create lasting impressions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
