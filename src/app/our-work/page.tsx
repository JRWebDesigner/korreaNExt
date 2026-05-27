"use client";
import Image from "next/image";

const eventData = [
  { title: "Title", image: "/brand.jpg" },
  { title: "Title", image: "/conferences.jpg" },
  { title: "Title", image: "/dinners.jpg" },
  { title: "Title", image: "/exhibitions.jpg" },
  { title: "Title", image: "/private.jpg" },
  { title: "Live Shows", image: "/live.jpg" },
  { title: "Title", image: "/private.jpg" },
  { title: "Live Shows", image: "/live.jpg" },
];

export default function Ourwork() {
  return (
    <>
      {/* Header con texto pegado arriba */}
      <section className="relative h-[180px] bg-[url(/fondoB.jpg)] bg-cover flex justify-center items-start">
        <div className="container mx-auto pt-0">   {/* ← pt-0 elimina padding superior */}
          <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-4 text-center mt-0 pt-0">
            Work
          </h1>
          <p className="text-xl text-white text-center mt-0">   {/* ← mt-0 quita margen arriba */}
            Selected Projects
          </p>
        </div>
      </section>

      {/* Resto del componente (grid de imágenes) */}
      <div className="min-h-screen bg-white px-4 py-12 mt-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-14 md:grid-cols-2">
            {eventData.map((event, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-lg h-[480px]"
              >
                <Image
                  src={event.image}
                  alt={event.title}
                  width={600}
                  height={400}
                  className="w-full h-60 object-cover transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gray-300 bg-opacity-40 flex flex-col justify-between p-4 flex items-center justify-end">
                  {/* Este div tiene duplicados de flex, pero no es parte del problema principal */}
                </div>
                <h3 className="text-lg font-semibold z-10">{event.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
