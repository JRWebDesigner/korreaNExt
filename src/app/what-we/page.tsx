"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const eventData = [
  { title: "Set design", image: "brand.webp" },
  { title: "Set construction", image: "conferences.webp" },
  { title: "Miniature and model making", image: "dinners.webp" },
  { title: "Prop making", image: "exhibitions.webp" },
  { title: "Art direction", image: "private.webp" },
  { title: "Scenic painting", image: "live.webp" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

export default function WhatWe() {

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative h-[70dvh] md:h-[100dvh] bg-black"
      >
        <video src="ejemplo.mp4" className="w-full h-full object-cover" autoPlay loop playsInline muted />
      </motion.section>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="min-h-screen bg-black text-white px-4 py-12"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-semibold text-green-400 mb-4">
            From Concept to Creation: Designing and Building Unique Projects
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-300 mb-10 max-w-2xl">
           We bring bold ideas to life by designing and constructing everything from film sets to immersive installations. Every detail is carefully crafted with purpose, ensuring each project is one of a kind. Trust our expert team to deliver creative, tailored solutions that make a lasting impact.
          </motion.p>

          <motion.div variants={container} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {eventData.map((event, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="relative group overflow-hidden rounded-lg shadow-lg"
              >
                <Image
                  src={`/what-we/${event.image}`}
                  alt={event.title}
                  width={600}
                  height={400}
                  className="w-full h-60 object-cover transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                  <h3 className="text-lg font-semibold z-10">{event.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
