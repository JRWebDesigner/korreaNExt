"use client";
import { motion } from "framer-motion";

export default function Contact() {
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
        delayChildren: 0.2
      }
    }
  };

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
        className="bg-black text-white px-6 py-12 space-y-12"
      >
        <motion.section variants={fadeInUp} className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-green-400 font-semibold mb-4">New York</h2>
          <address className="not-italic leading-relaxed">
            <p>Event Concept Inc.</p>
            <p>61 Greenpoint Ave #603</p>
            <p>Brooklyn, NY 11222</p>
            <p className="mt-2">
              <a href="tel:+19292516994" className="text-green-400 underline">+1 (929) 251 6994</a><br />
              <a href="mailto:info@eventconcept.com" className="text-green-400 underline">info@eventconcept.com</a>
            </p>
          </address>

          <div className="mt-8">
            <iframe
              src="https://www.google.com/maps?q=61+Greenpoint+Ave+%23603,+Brooklyn,+NY+11222&output=embed"
              className="w-full h-96 border-0"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </motion.section>

        <motion.section variants={fadeInUp} className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-green-400 font-semibold mb-4">Get in touch</h2>
          <p className="mb-6">Drop us a message and we will get back to you shortly.</p>

          <motion.form variants={container} className="space-y-6">
            <motion.input variants={fadeInUp} type="text" placeholder="Type of enquiry*" className="w-full bg-gray-800 p-3 rounded text-white" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.input variants={fadeInUp} type="text" placeholder="First Name" className="bg-gray-800 p-3 rounded text-white w-full" />
              <motion.input variants={fadeInUp} type="text" placeholder="Last Name" className="bg-gray-800 p-3 rounded text-white w-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.input variants={fadeInUp} type="email" placeholder="Email*" className="bg-gray-800 p-3 rounded text-white w-full" />
              <motion.input variants={fadeInUp} type="tel" placeholder="Phone*" className="bg-gray-800 p-3 rounded text-white w-full" />
            </div>
            <motion.input variants={fadeInUp} type="text" placeholder="Company name" className="w-full bg-gray-800 p-3 rounded text-white" />
            <motion.select variants={fadeInUp} className="w-full bg-gray-800 p-3 rounded text-white">
              <option>Where did you hear about us?</option>
              <option>Google</option>
              <option>Social Media</option>
              <option>Friend or Colleague</option>
            </motion.select>
            <motion.textarea variants={fadeInUp} placeholder="How can we help?" rows={4} className="w-full bg-gray-800 p-3 rounded text-white" />

            <motion.div variants={fadeInUp} className="flex items-center gap-2">
              <input type="checkbox" id="newsletter" className="accent-green-500" />
              <label htmlFor="newsletter">Sign up to our newsletter</label>
            </motion.div>

            <motion.button
              variants={fadeInUp}
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-400 hover:bg-green-500 text-black font-bold px-6 py-3 rounded"
            >
              SEND THE MESSAGE
            </motion.button>
          </motion.form>
        </motion.section>
      </motion.div>
    </>
  );
}
