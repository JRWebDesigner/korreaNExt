"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.7,
      delayChildren: 0.5
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: "easeOut"
    }
  }
};

export default function Home() {
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndice((prev) => (prev + 1) % testimonios.length);
    }, 7000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <>
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[70dvh] md:h-[100dvh] bg-black"
      >
        <video src="ejemplo.mp4" className="relative z-0 w-full h-full object-cover" autoPlay loop playsInline muted />
      </motion.section>

      <motion.section 
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, margin: "-100px" }}
        className="bg-[url(/svg.svg)] bg-cover bg-center h-[90dvh] w-full flex justify-center items-center flex-col gap-10 p-6"
      >
        <motion.h1 variants={itemVariants} className="md:mx-22 font-bold text-center text-green-400">
          Creative Event Agency & Event Production Company
        </motion.h1>
        <motion.p variants={itemVariants} className="md:mx-22 text-center font-medium text-blue-300">
          We blend creative agency thinking with production company doing to deliver extraordinary events and everlasting experiences
          <br />
          Enabling you to create an experience that matters for the people that matter to you
        </motion.p>
      </motion.section>

      <motion.section 
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, margin: "-100px" }}
        className="bg-black text-white py-16 px-4 md:px-20"
      >
        <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-green-400">
            A scale that adapts to your ambition
          </h2>
          <p className="text-base md:text-lg mt-4 text-gray-300">
            Our offering has grown organically over three decades in response to our clients needs and our own commitment to excellence. The result is a unique and comprehensive set of capabilities and services, literally all under one roof. This means we can move from strategy and creativity to production and delivery in an integrated process.
          </p>
        </motion.div>

        <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div variants={itemVariants} className="relative h-80 md:h-[500px]">
            <Image
              src="/img/soluciones-mundial.jpg"
              alt="Soluciones integrales"
              fill
              className="object-cover rounded"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">
                Soluciones integrales a nivel mundial
              </h3>
              <button className="bg-green-400 text-black px-4 sm:px-6 py-2 font-medium rounded text-sm sm:text-base">
                DESCUBRA NUESTRA EXPERIENCIA
              </button>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative h-80 md:h-[500px]">
            <Image
              src="/img/eventos-londres.jpg"
              alt="Eventos en Londres"
              fill
              className="object-cover rounded"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">
                Especialistas en producción de eventos en Londres
              </h3>
              <button className="bg-green-400 text-black px-4 sm:px-6 py-2 font-medium rounded text-sm sm:text-base">
                DESCUBRE MÁS
              </button>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section 
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
        className="relative w-full h-[90vh] md:h-screen"
      >
        <Image
          src="/img/guap-gala.jpg"
          alt="Evento G"
          fill
          className="object-cover"
          priority
        />

        <motion.div variants={itemVariants} className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-start p-6 md:p-16">
          <div className="max-w-2xl text-left text-white">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-300 leading-tight mb-4">
              Celebrate,<br />
              communicate,<br />
              inspire, educate.
            </h2>

            <p className="text-sm sm:text-base text-gray-200 mb-6">
              From the strictly professional to the deeply personal, our work encompasses everything from exhibitions and brand experiences, to conferences and launches, to awards, receptions, dinners and more. Whether live, virtual or hybrid, they all share the power to bring people together and deliver an experience that lasts.
            </p>

            <button className="bg-green-300 text-black font-medium px-6 py-2 rounded text-sm sm:text-base">
              VIEW OUR WORK
            </button>
          </div>
        </motion.div>
      </motion.section>

      <motion.section 
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, margin: "-100px" }}
        className="bg-black text-white py-16 px-4 md:px-20 text-center transition-all duration-1000"
      >
        <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-green-400 mb-6">
            The once-in-a-lifetime, on a daily basis.
          </h2>

          <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-10">
            We re trusted by some of the world&apos;s most high-profile brands and venues to design and deliver without fail – because failure isn&apos;t an option. We partner closely with our clients to truly understand their needs and create the perfect event based on a deep knowledge of what we know will work. Creating a shared success that lives long in the memory.
          </p>

          <motion.div 
            key={indice}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <blockquote className="text-green-300 italic text-base md:text-lg leading-relaxed mb-6">
              &quot;{testimonios[indice].texto}&quot;
            </blockquote>

            <p className="text-sm md:text-base font-semibold text-white">
              {testimonios[indice].autor}
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center mt-8 gap-2">
            {testimonios.map((_, i) => (
              <span
                key={i}
                className={`h-3 w-3 rounded-full transition-colors duration-500 ${
                  i === indice ? "bg-green-400" : "bg-gray-600"
                }`}
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section 
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
        className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center text-center"
      >
        <Image
          src="/img/fondo-agencia.jpg"
          alt="Fondo Agencia Londres"
          fill
          className="object-cover"
          priority
        />

        <motion.div variants={itemVariants} className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center px-4">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold max-w-3xl leading-snug mb-6">
            Born in London our creative event agency and production company delivers extraordinary events and experiences on a global scale
          </h2>

          <button className="border border-green-400 text-green-400 px-6 py-2 text-sm sm:text-base font-medium rounded hover:bg-green-400 hover:text-black transition">
            EVENT AGENCY LONDON
          </button>
        </motion.div>
      </motion.section>
    </>
  );
}
