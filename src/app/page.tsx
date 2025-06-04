"use client"
import Link from 'next/link'
import Image from "next/image";
import { useEffect, useState } from "react";

const testimonios = [
  {
    texto:
      "I wanted to send my gratitude to you and the team for helping us deliver this event and for working with us with the many requests and changes we threw your way. The long hours that your team worked through is not unnoticed. Everyone remarked on how brilliantly professional and polished the event looked, which is entirely down to your team.",
    autor: "Foreign, Commonwealth & Development Office",
  },
	{
    texto:
      "2.- I wanted to send my gratitude to you and the team for helping us deliver this event and for working with us with the many requests and changes we threw your way. The long hours that your team worked through is not unnoticed. Everyone remarked on how brilliantly professional and polished the event looked, which is entirely down to your team.",
    autor: "Foreign, Commonwealth & Development Office",
  },
  // Puedes agregar más testimonios aquí si lo deseas
];
//Rossy te amo y extraño
export default function Home() {
const [indice, setIndice] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndice((prev) => (prev + 1) % testimonios.length);
    }, 7000); // Cambia cada 7 segundos
    return () => clearInterval(intervalo);
  }, []);
  return (
    <>
      <section className="relative h-[70dvh] md:h-[100dvh] bg-black">
	      <video src="ejemplo.mp4" className="relative z-0 w-full h-full object-cover" autoPlay loop playsInline muted>
	      </video>
      </section>
      <section className="bg-[url(/svg.svg)] bg-cover bg-center h-[90dvh] w-full flex justify-center items-center flex-col gap-10 p-6">
          <h1 className="md:mx-22 font-bold text-center text-green-400">
            Creative Event Agency &
Event Production Company
          </h1>
          <p className="md:mx-22 text-center font-medium text-blue-300">
          We blend creative agency thinking with production company doing to deliver extraordinary events and everlasting experiences
<br />
Enabling you to create an experience that matters for the people that matter to you
          </p>
      </section>
	    <section className="bg-black text-white py-16 px-4 md:px-20">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-green-400">
          A scale that adapts to your ambition
        </h2>
        <p className="text-base md:text-lg mt-4 text-gray-300">
          Our offering has grown organically over three decades in response to our clients needs and our own commitment to excellence. The result is a unique and comprehensive set of capabilities and services, literally all under one roof. This means we can move from strategy and creativity to production and delivery in an integrated process.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative h-80 md:h-[500px]">
          <Image
            src="/index/soluciones-mundial.webp"
            alt="Soluciones integrales"
            fill
            className="object-cover rounded relative z-0"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4 z-10">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">
              Comprehensive solutions worldwide
            </h3>
          </div>
        </div>

        <div className="relative h-80 md:h-[500px]">
          <Image
            src="/index/eventos-londres.webp"
            alt="Eventos en Londres"
            fill
            className="object-cover rounded"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">
              Event production specialists in London
            </h3>
          </div>
        </div>
      </div>
    </section>
	    <section className="relative w-full h-[70dvh] md:h-[60dvh] bg-[url('/index/guap-gala.webp')] bg-fixed bg-cover bg-norepeat">
      <div className="absolute inset-0 bg-black/30 bg-opacity-60 flex items-center justify-center p-6 md:p-16">
        <div className="max-w-2xl text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-skyblue-500 text-center mb-4">
            Celebrate,
            communicate,
            inspire, educate.
          </h2>

          <p className="sm:text-base text-white font-semibold mb-6">
            From the strictly professional to the deeply personal, our work encompasses everything from exhibitions and brand experiences, to conferences and launches, to awards, receptions, dinners and more. Whether live, virtual or hybrid, they all share the power to bring people together and deliver an experience that lasts.
          </p>

          <Link href='/our-work' className="bg-green-300 text-black font-medium px-6 py-2 rounded text-sm sm:text-base">
            VIEW OUR WORK
          </Link>
        </div>
      </div>
    </section>
	    <section className="bg-black text-white py-16 px-4 md:px-20 text-center transition-all duration-1000">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-green-400 mb-6">
          The once-in-a-lifetime, on a daily basis.
        </h2>

        <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-10">
          We re trusted by some of the world’s most high-profile brands and venues to design and deliver without fail – because failure isn’t an option. We partner closely with our clients to truly understand their needs and create the perfect event based on a deep knowledge of what we know will work. Creating a shared success that lives long in the memory.
        </p>

        <blockquote className="text-green-300 italic text-base md:text-lg leading-relaxed mb-6">
          “{testimonios[indice].texto}”
        </blockquote>

        <p className="text-sm md:text-base font-semibold text-white">
          {testimonios[indice].autor}
        </p>

        <div className="flex justify-center mt-8 gap-2">
          {testimonios.map((_, i) => (
            <span
              key={i}
              className={`h-3 w-3 rounded-full transition-colors duration-500 ${
                i === indice ? "bg-green-400" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
	    <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center text-center">
      <Image
        src="/index/fondo-agencia.webp" // Asegúrate de que esta imagen esté en public/img/
        alt="Fondo Agencia Londres"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/60 bg-opacity-60 flex flex-col items-center justify-center px-4">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold max-w-3xl leading-snug mb-6">
          Born in London our creative event agency and production company delivers extraordinary events and experiences on a global scale
        </h2>

        <Link href="/contact" className="border border-green-400 text-green-400 px-6 py-2 text-sm sm:text-base font-medium rounded hover:bg-green-400 hover:text-black transition uppercase">
          Contact now
        </Link>
      </div>
    </section>
    </>
  );
}
