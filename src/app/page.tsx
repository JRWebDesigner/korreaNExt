"use client"
import Link from 'next/link'
import { motion} from "framer-motion"



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
	    <section className="bg-black py-16 px-4 md:px-20 flex flex-col flex-wrap items-center mb-16">
      <div className="container text-center mx-auto">
        <h1 className="text-3xl md:text-7xl font-bold text-white">
          From Concept to Completion 
          <br/>
          We Bring Ideas to Life
        </h1>
        <br />
        <br />
        <p className="text-base md:text-lg mt-4 text-white">
          Korrea Studio is a creative workshop based in London, run by artists passionate about design and fabrication. We design and build bold, physical work that leaves a mark. From initial sketches to final pieces, we take your vision and turn it into environments, objects, and experiences that demand attention.
        </p>
         <p className="text-base md:text-lg mt-4 text-white">
          Whether it’s a set, a prop, a painted backdrop, or a one-off installation — we handle it all, start to finish. With creative direction, design, fabrication, and scenic art, we make your ideas real — and impactful.
        </p>
      </div>
       <motion.div 
                variants={scaleUp}
              >
                <div className="bg-white border-gray-800 overflow-hidden hover:border-gray-600 transition-colors group h-full rounded-2xl w-[500px] lg:w-[1100px] mx-auto">
                  <div className="relative h-[500px] overflow-hidden flex flex-col justify-center items-center text-white text-center">
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
    </section>
	<section className="my-[130px]">
	   <motion.div 
            className="container mx-auto flex flex-wrap gap-[130px] justify-center items-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[1, 2].map((i) => (
              <motion.div 
                key={i}
                variants={scaleUp}
              >
                <div className="bg-gray-600 border-gray-800 overflow-hidden hover:border-gray-600 transition-colors group h-full rounded-2xl w-[500px] lg:w-[1100px] mx-auto">
                  <div className="relative h-[600px] overflow-hidden">
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

