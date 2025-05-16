"use client"
import Image from "next/image";
import { useState } from "react";

const eventData = [
  { title: "Brand Experiences", image: "/brand.jpg" },
  { title: "Conferences", image: "/conferences.jpg" },
  { title: "Dinners & Receptions", image: "/dinners.jpg" },
  { title: "Exhibitions", image: "/exhibitions.jpg" },
  { title: "Private Events", image: "/private.jpg" },
  { title: "Live Shows", image: "/live.jpg" },
];

const caseStudies = [
  {
    title: "GUAP Gala",
    subtitle: "Guap Gala Dinner",
    image: "/guap-gala.jpg",
  },
{
    title: "GUAP Gala",
    subtitle: "Guap Gala Dinner",
    image: "/guap-gala.jpg",
  },
  // Puedes agregar más elementos aquí si quieres un slider funcional
];

export default function Ourwork(){
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = caseStudies[currentIndex];

  return(
    <>
      <section className="relative h-[130dvh] bg-black">
	      <video src="ejemplo.mp4" className="relative z-0 w-full h-full object-cover" autoPlay loop playsInline muted>
	      </video>
      </section>
      <div className="min-h-screen bg-black text-white px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold text-green-400 mb-4">
          Events may come and go,
          <br />
          <span className="text-white">experiences stay</span>
        </h2>
        <p className="text-gray-300 mb-10 max-w-2xl">
          We work across the full spectrum of business events, brand experiences and personal occasions. Whether your guest list includes the great and the good, or your nearest and dearest, you can relax knowing each event is meticulously planned and flawlessly delivered. Live, virtual or hybrid, they all share the power to create a lasting impression that lives long in the memory.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {eventData.map((event, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src={event.image}
                alt={event.title}
                width={600}
                height={400}
                className="w-full h-60 object-cover transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-between p-4">
                <h3 className="text-lg font-semibold z-10">{event.title}</h3>
                <button className="bg-green-400 text-black text-sm font-semibold px-4 py-2 rounded hover:bg-green-500 self-start">
                  DISCOVER MORE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
     <div className="relative min-h-screen text-white">
      <Image
        src={current.image}
        alt={current.title}
        fill
        className="object-cover z-0"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10 flex flex-col justify-end p-6 md:p-12">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Case Studies</h2>

        <div className="max-w-xl">
          <h3 className="text-2xl text-green-400 font-semibold">{current.title}</h3>
          <p className="text-sm mb-6">{current.subtitle}</p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button className="text-green-400 text-2xl" onClick={() => setCurrentIndex((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1))}>
                &#x276E;
              </button>
              <button className="bg-green-400 text-black font-semibold px-4 py-2 text-sm rounded hover:bg-green-500">
                VIEW CASE STUDY
              </button>
              <button className="text-green-400 text-2xl" onClick={() => setCurrentIndex((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1))}>
                &#x276F;
              </button>
            </div>
            <div className="text-sm text-green-400">{`${currentIndex + 1} / ${caseStudies.length}`}</div>
            <button className="border border-green-400 text-green-400 px-4 py-2 text-sm rounded hover:bg-green-400 hover:text-black">
              VIEW ALL
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
