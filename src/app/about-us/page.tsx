"use client"
import Image from "next/image";
import { motion } from "framer-motion";

// Animaciones profesionales
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 0.77, 0.47, 0.97]
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};




export default function Aboutus() {
  return (
    <>
      {/* Hero Section with Parallax Effect */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative w-full h-[60vh] md:h-[80vh] flex items-center overflow-hidden"
      >
        <motion.div
          initial={{ y: -50 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/img/experiencias.jpg"
            alt="Techo iluminado"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="absolute inset-0 flex items-center px-6 md:px-20 bg-black bg-opacity-40"
        >
          <motion.div variants={fadeInUp} className="max-w-2xl text-white">
            <motion.h2 
              variants={fadeInUp}
              className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight mb-4"
            >
              From Concept to Completion —<br /> We Bring Ideas to Life
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-sm sm:text-base text-white"
            >
              Korrea Studio is a creative workshop based in London, run by artists passionate about design and fabrication. We design and build bold, physical work that leaves a mark.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Content Section with Staggered Animation */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true, margin: "-50px" }}
        className="bg-black text-white py-20 px-6 md:px-20"
      >
        <div className="max-w-5xl mx-auto">
          <motion.p 
            variants={fadeInUp}
            className="text-green-300 text-base md:text-lg mb-6"
          >
            From initial sketches to final pieces, we take your vision and turn it into environments, objects, and experiences that demand attention.
          </motion.p>
          <motion.p 
            variants={fadeInUp}
            className="text-gray-200 text-base md:text-lg mb-6"
          >
            Whether it&apos;s a set, a prop, a painted backdrop, or a one-off installation — we handle it all, start to finish.
          </motion.p>
          <motion.p 
            variants={fadeInUp}
            className="text-green-300 text-base md:text-lg"
          >
            With creative direction, design, fabrication, and scenic art, we make your ideas real — and impactful.
          </motion.p>
        </div>
      </motion.section>

      {/* Full-width Image Section with Subtle Zoom Effect */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative w-full h-[70vh] md:h-[85vh] flex items-center overflow-hidden"
      >
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/img/creatividad.jpg"
            alt="Naturaleza en vitrinas"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="absolute inset-0 flex items-center px-6 md:px-20 bg-black bg-opacity-40"
        >
          <motion.div variants={fadeInUp} className="max-w-2xl text-white">
            <motion.h2 
              variants={fadeInUp}
              className="text-2xl sm:text-3xl md:text-4xl font-semibold text-green-400 mb-4"
            >
              From Concept to Completion
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-sm sm:text-base text-white"
            >
              Korrea Studio is where ideas become tangible — where creativity meets craftsmanship to create lasting impressions.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  );
}
