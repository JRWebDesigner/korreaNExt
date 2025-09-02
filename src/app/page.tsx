"use client"
import Link from 'next/link'
import { motion} from "framer-motion"

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const slideUp = {
  hidden: { y: 50, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

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
    { href: '/our-work', label: 'Our work' },
    { href: '/services', label: 'Services' },
    { href: '/about-us', label: 'About us' },
    { href: '/contact', label: 'Contact' },
  ];
  return (
    <>
      <section className="relative h-[70dvh] md:h-[100dvh] bg-black">
	      <video src="ejemplo.mp4" className="relative z-0 w-full h-full object-cover" autoPlay loop playsInline muted>
	      </video>
      </section>
	    <section className="bg-black py-16 px-4 md:px-20 flex flex-col flex-wrap items-center">
      <div className="container text-center mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          From Concept to Completion — We Bring Ideas to Life
        </h1>
        <p className="text-base md:text-lg mt-4 text-white">
          Korrea Studio is a creative workshop based in London, run by artists passionate about design and fabrication. We design and build bold, physical work that leaves a mark. From initial sketches to final pieces, we take your vision and turn it into environments, objects, and experiences that demand attention.
        </p>
         <p className="text-base md:text-lg mt-4 text-white">
          Whether it’s a set, a prop, a painted backdrop, or a one-off installation — we handle it all, start to finish. With creative direction, design, fabrication, and scenic art, we make your ideas real — and impactful.
        </p>
      </div>
    </section>
	<section className="mt-10">
	   <motion.div 
            className="container mx-auto flex flex-wrap gap-16 justify-center items-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
              <motion.div 
                variants={scaleUp}
              >
                <div className="bg-white border-gray-800 overflow-hidden hover:border-gray-600 transition-colors group h-full rounded-2xl w-[500px] lg:w-[1100px] mx-auto">
                  <div className="relative h-[600px] overflow-hidden flex flex-col justify-center items-center text-white text-center">
          
                    <div className="absolute inset-0 bg-black" />
                    <ul className="relative z-20 flex flex-col gap-8 text-3xl md:text-5xl  font-medium tracking-wide">
                    {navLinks.map(({ href, label }) => (
                      <li key={href} className="hover:text-green-400 transition-colors">
                        <Link href={href}>{label}</Link>
                      </li>
                    ))}
                  </ul>
                  </div>
                </div>
              </motion.div>
            {[1, 2, 3].map((i) => (
              <motion.div 
                key={i}
                variants={scaleUp}
              >
                <div className="bg-white border-gray-800 overflow-hidden hover:border-gray-600 transition-colors group h-full rounded-2xl w-[500px] lg:w-[1100px] mx-auto">
                  <div className="relative h-[600px] overflow-hidden">
                    <img
                      src={`/`}
                      alt={`Project ${i}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-center font-bold">Creative Installation {i}</h3>
                    <button className="text-center mx-auto hover:text-green-900 p-0">
                      View details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}

          </motion.div>
	</section>
	<section id="about" className="py-24 bg-black">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideUp}
              className="text-white"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Experts in Creating
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-800">
                  Unique Experiences
                </span>
              </h2>
              <p className="text-xl mb-8">
                Korrea Studio is a creative workshop based in London, run by artists passionate about design and fabrication. We design and build bold, physical work that leaves a mark. From initial sketches to final pieces, we take your vision and turn it into environments, objects, and experiences that demand attention.
              </p>

              <motion.div 
                className="grid sm:grid-cols-3 gap-8 mb-8"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <motion.div 
                  className="text-center"
                  variants={fadeIn}
                >
                  <div className="text-2xl font-bold text-gray-100">50+</div>
                  <div className="text-gray-200">Projects</div>
                </motion.div>
                <motion.div 
                  className="text-center"
                  variants={fadeIn}
                >
                  <div className="text-2xl font-bold text-gray-100">30+</div>
                  <div className="text-gray-200">Clients</div>
                </motion.div>
                <motion.div 
                  className="text-center"
                  variants={fadeIn}
                >
                  <div className="text-2xl font-bold text-gray-100">5+</div>
                  <div className="text-gray-200">Years</div>
                </motion.div>
              </motion.div>

              <Link href="/about-us" className="p-4 rounded-xl bg-white text-black hover:bg-green-900 hover:text-white duration-300">
                Learn More 
              </Link>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <img
                src="/index/fondo-agencia.webp"
                alt="Korrea Studio Workspace"
                className="w-[500px] h-auto rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

