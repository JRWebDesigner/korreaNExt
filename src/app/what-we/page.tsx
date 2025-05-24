"use client"
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const eventData = [
  { title: "Set design", image: "/brand.jpg" },
  { title: "Set construction", image: "/conferences.jpg" },
  { title: "Miniature and model making", image: "/dinners.jpg" },
  { title: "Prop making", image: "/exhibitions.jpg" },
  { title: "Art direction", image: "/private.jpg" },
  { title: "Scenic painting", image: "/live.jpg" },
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
];

// Animaciones profesionales
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { 
    opacity: 0,
    y: 30
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 0.77, 0.47, 0.97]
    }
  }
};

const fadeIn = {
  hidden: {
    opacity: 0,
    scale: 0.95                 // Ligero escalado inicial
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "backOut"           // Easing con pequeño rebote
    }
  }
};
export default function WhatWe() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = caseStudies[currentIndex];

  return (
    <>
      {/* Hero Section with professional fade-in */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="relative h-[70dvh] md:h-[100dvh] bg-black"
      >
        <video 
          src="ejemplo.mp4" 
          className="relative z-0 w-full h-full object-cover" 
          autoPlay 
          loop 
          playsInline 
          muted 
        />
      </motion.section>

      {/* Main Content Section */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        variants={container}
        viewport={{ once: true, margin: "-100px" }}
        className="min-h-screen bg-black text-white px-4 py-12"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 variants={item} className="text-4xl md:text-5xl font-semibold text-green-400 mb-4">
            From concept to creation,
            <br />
            <motion.span variants={item} className="text-white">we build bold ideas</motion.span>
          </motion.h2>
          
          <motion.p variants={item} className="text-gray-300 mb-10 max-w-2xl">
            From film sets to immersive installations, we design, construct and craft with purpose. Every detail is considered — every project, one of a kind.
          </motion.p>

          <motion.div 
            variants={container}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {eventData.map((event, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -10 }}
                className="relative group overflow-hidden rounded-lg shadow-lg"
              >
                <Image
                  src={event.image}
                  alt={event.title}
                  width={600}
                  height={400}
                  className="w-full h-60 object-cover transform duration-300 group-hover:scale-105"
                />
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center p-4"
                >
                  <h3 className="text-xl font-semibold text-green-400">{event.title}</h3>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 bg-green-400 text-black px-4 py-2 rounded text-sm font-medium"
                  >
                    Learn more
                  </motion.button>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Case Studies Section */}
      <div className="relative min-h-screen text-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={current.image}
              alt={current.title}
              fill
              className="object-cover z-0"
            />
          </motion.div>
        </AnimatePresence>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={container}
          viewport={{ once: true }}
          className="absolute inset-0 bg-black bg-opacity-60 z-10 flex flex-col justify-end p-6 md:p-12"
        >
          <motion.h2 variants={item} className="text-3xl md:text-4xl font-semibold mb-4">Case Studies</motion.h2>

          <motion.div variants={item} className="max-w-xl">
            <motion.h3 variants={item} className="text-2xl text-green-400 font-semibold">{current.title}</motion.h3>
            <motion.p variants={item} className="text-sm mb-6">{current.subtitle}</motion.p>

            <motion.div variants={item} className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-green-400 text-2xl" 
                  onClick={() => setCurrentIndex((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1))}
                >
                  &#x276E;
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-green-400 text-black font-semibold px-4 py-2 text-sm rounded hover:bg-green-500"
                >
                  VIEW CASE STUDY
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-green-400 text-2xl" 
                  onClick={() => setCurrentIndex((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1))}
                >
                  &#x276F;
                </motion.button>
              </div>
              <motion.span className="text-sm text-green-400">{`${currentIndex + 1} / ${caseStudies.length}`}</motion.span>
              <motion.button 
                whileHover={{ 
                  backgroundColor: "#4ADE80",
                  color: "#000"
                }}
                className="border border-green-400 text-green-400 px-4 py-2 text-sm rounded"
              >
                VIEW ALL
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
