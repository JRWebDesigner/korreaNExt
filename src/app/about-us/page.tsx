
import Image from "next/image";

export default function Aboutus() {
  return (
    <>
      <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center">
        <Image
          src="/about-us/experiencias.webp"
          alt="Tec"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 flex items-center px-6 md:px-20">
          <div className="max-w-2xl text-white">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4">
              Creative Design & Fabrication Studio in London — Turning Bold Ideas Into Reality
            </h1>
            <p className="text-sm sm:text-base text-white">
              Korrea Studio is a creative workshop based in London, run by artists passionate about design and fabrication. We design and build bold, physical work that leaves a mark.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-20 px-6 md:px-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4 text-green-400">
             From Concept to Completion — We Bring Ideas to Life
            </h2>
        <div className="max-w-5xl mx-auto">
          <p className="mb-6">
            Korrea Studio is a creative workshop based in London, run by artists passionate about design and fabrication. We design and build bold, physical work that leaves a mark. From initial sketches to final pieces, we take your vision and turn it into environments, objects, and experiences that demand attention.
          </p>
          <p className="mb-6">
            Whether it’s a set, a prop, a painted backdrop, or a one-off installation — we handle it all, start to finish. With creative direction, design, fabrication, and scenic art, we make your ideas real — and impactful.
          </p>
        </div>
      </section>

      <section className="relative w-full h-[50vh] flex items-center">
        <Image
          src="/about-us/creatividad.webp"
          alt="Naturaleza en vitrinas"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 flex justify-center items-center px-6 md:px-20">
          <div className="max-w-2xl text-white text-center font-semibold">
            <span className="text-xl text-white text-center">
              {"Korrea Studio is where ideas become tangible — where creativity meets craftsmanship to create lasting impressions."}
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
