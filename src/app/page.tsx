"use client"
import Link from 'next/link'
import { motion } from "framer-motion"

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

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
      <section className="relative h-[70dvh] md:h-[90dvh] bg-black">
        <video src="ejemplo.mp4" className="relative z-0 w-full h-full object-cover" autoPlay loop playsInline muted>
        </video>
      </section>

      <section className="flex flex-col flex-wrap items-center mb-16">
        {/* Fondo blanco */}
        <div className="w-full bg-white py-10 md:py-24 px-4 md:px-20">
          <div className="info container text-center mx-auto">
            <h1 className="text-2xl md:text-5xl font-bold text-gray-900">
              Set design / Art direction / Fabrication
            </h1>
            <br className="hidden md:block"/>
            <br className="hidden md:block"/>
            <p className="text-base md:text-2xl mt-4 text-gray-900">
              Korrea Studio works across art direction, set design and fabrication for film, editorial and brand worlds. We develop spatial environments from concept to completion, driven by storytelling, atmosphere and contemporary visual language.
            </p>
          </div>
        </div>

        {/* Menú con fondo negro */}
        <div className="w-full bg-[url(/fondoB.jpg)] bg-contain md:bg-cover bg-repeat py-10 px-4 md:px-20">
          <motion.div variants={scaleUp}>
            <div className="overflow-hidden   group h-full rounded-2xl w-full max-w-[500px] lg:max-w-[1100px] mx-auto">
              <div className="relative h-[95px] md:h-64 lg:h-[320px] overflow-hidden flex flex-col justify-center items-center text-white text-center">
                <ul className="relative z-20 flex flex-row flex-wrap justify-center gap-4 md:gap-8 text-2xl md:text-4xl lg:text-5xl font-medium tracking-wide">
                  {navLinks.map(({ href, label }) => (
                    <li key={href} className="text-red-600 hover:text-white transition-colors">
                      <Link href={href}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="my-16 md:my-[130px]">
        <motion.div 
          className="container mx-auto flex flex-wrap  gap-10 justify-center items-center px-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {[1, 2].map((i) => (
            <motion.div key={i} variants={scaleUp}>
              <div className="bg-gray-600 border-gray-800 overflow-hidden hover:border-gray-600 transition-colors group rounded-2xl w-[270px] md:w-[350px] h-[270px] md:h-[350px]">
                <div className="relative overflow-hidden w-full h-full">
                  <img
                    src={`/`}
                    alt={`Project ${i}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
