"use client"
import Link from 'next/link'
import { motion } from "framer-motion"

// const staggerContainer = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2
//     }
//   }
// };

const scaleUp = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { 
      duration: 0.5, 
      ease: "easeOut",
      delay: 0.2 
    }
  }
};

export default function Home() {
  const navLinks = [
    { href: '/work', label: 'Work' },
    { href: '/studio', label: 'Studio' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <section className="relative grid grid-cols-[0.5fr_2fr_0.5fr] h-[70dvh] md:h-[71dvh] bg-black max-w-[1680px] mx-auto">
        <div className="bg-gray-200 h-full" /> 
        <video src="ejemplo.mp4" className="relative z-0 w-full h-full object-cover" autoPlay loop playsInline muted>
        </video>
         <div className="bg-gray-200 h-full" /> 
      </section>

      <section className="flex flex-col justify-center items-center max-w-[1600px] mx-auto">
        <div className="w-full bg-black py-14 md:py-32 px-6 md:px-20">
          <div className="max-w-6xl mx-auto text-center">
            <p className="italic text-base md:text-4xl leading-relaxed text-gray-200">
              Korrea Studio works across art direction, set design and fabrication
              for film, editorial and brand worlds. We develop spatial environments
              from concept to completion, driven by storytelling, atmosphere and
              contemporary visual language.
            </p>
      
            <motion.div variants={scaleUp}>
              <ul className="flex flex-row flex-wrap justify-center gap-6 md:gap-20 text-xl md:text-3xl font-bold uppercase tracking-wide text-white mt-10 md:mt-16">
                {navLinks.map(({ href, label }) => (
                  <li key={href} className="hover:text-orange-500 transition-colors">
                    <Link href={href}>{label}</Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
     <section className="relative w-full overflow-hidden border-y border-white/30 ">

      {/* Contenedor centrado con el mosaico */}
      <div className="w-full max-w-[1680px] mx-auto">
        <div className="grid grid-cols-12 grid-rows-2 border-2 border-black">
          {/* Franja superior (cols 1-10) */}
          <div className="col-span-10 h-[28dvh] bg-[#efece4] border border-black" />
    
          {/* Naranja: arriba a la derecha (cols 11-12) */}
          <div className="col-start-11 col-span-2 h-[28dvh] bg-orange-600 border border-black" />
    
          {/* Franja inferior (cols 1-10) */}
          <div className="col-span-10 h-[28dvh] bg-[#efece4] border border-black" />
    
          {/* Gris oscuro: abajo a la derecha (cols 11-12) */}
          <div className="col-start-11 col-span-2 h-[28dvh] bg-gray-800 border border-black" />
        </div>
      </div>
    </section>
      <section className="w-full max-w-[1680px] mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-12 bg-black h-28 md:h-36" />
      
          {/* Fila 4: gris claro / imagen / naranja */}
          <div className="col-span-6 bg-white h-[35dvh] md:h-[28dvh]" />
          <div className="col-span-6 bg-gray-200 bg-cover bg-center h-[35dvh] md:h-[28dvh]" />
          <div className="col-span-2 bg-orange-600 h-[35dvh] md:h-[28dvh]" />
        </div>
      </section>
    </>
  );
}
