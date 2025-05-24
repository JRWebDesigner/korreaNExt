"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = caseStudies[currentIndex];

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
            From concept to creation,<br />
            <span className="text-white">we build bold ideas</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-300 mb-10 max-w-2xl">
            From film sets to immersive installations, we design, construct and craft with purpose. Every detail is considered — every project, one of a kind.
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
                  src={event.image}
                  alt={event.title}
                  width={600}
                  height={400}
                  className="w-full h-60 object-cover transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4">
                  <h3 className="text-lg font-semibold z-10">{event.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, amount: 0.3 }}
        className="relative min-h-screen text-white"
      >
        <Image src={current.image} alt={current.title} fill className="object-cover z-0" />
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10 flex flex-col justify-end p-6 md:p-12">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-semibold mb-4">Case Studies</motion.h2>

          <motion.div variants={container} className="max-w-xl">
            <motion.h3 variants={fadeInUp} className="text-2xl text-green-400 font-semibold">{current.title}</motion.h3>
            <motion.p variants={fadeInUp} className="text-sm mb-6">{current.subtitle}</motion.p>

            <motion.div variants={fadeInUp} className="flex items-center justify-between">
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
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
