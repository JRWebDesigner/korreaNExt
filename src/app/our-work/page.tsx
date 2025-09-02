"use client"
import Image from "next/image";
import { useState } from "react";

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
      <div className="min-h-screen bg-white px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="container mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 text-center">
              Events may come and go,
              <br />
              <span className="">experiences stay</span>
            </h2>
            <p className="mb-10 text-center">
              We work across the full spectrum of business events, brand experiences and personal occasions. Whether your guest list includes the great and the good, or your nearest and dearest, you can relax knowing each event is meticulously planned and flawlessly delivered. Live, virtual or hybrid, they all share the power to create a lasting impression that lives long in the memory.
            </p>
        </div>
        

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
                
              </div>
              <h3 className="text-lg font-semibold z-10">{event.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>

    </>
  )
}
