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

      <section className="flex flex-col items-center mb-16">
        <div className="w-full bg-[url(/fondoB.jpg)] bg-cover bg-center py-14 md:py-20 px-6 md:px-20">
          <div className="max-w-3xl">
            <p className="italic text-base md:text-2xl leading-relaxed text-gray-200">
              Korrea Studio works across art direction, set design and fabrication
              for film, editorial and brand worlds. We develop spatial environments
              from concept to completion, driven by storytelling, atmosphere and
              contemporary visual language.
            </p>
      
            <motion.div variants={scaleUp}>
              <ul className="flex flex-row flex-wrap gap-6 md:gap-10 text-xl md:text-3xl font-bold uppercase tracking-wide text-white mt-10 md:mt-16">
                {navLinks.map(({ href, label }) => (
                  <li key={href} className="hover:text-red-500 transition-colors">
                    <Link href={href}>{label}</Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
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
