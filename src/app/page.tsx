"use client"
import Link from 'next/link'
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';


export default function Home() {
 
  return (
    <>
      <section className="relative h-[70dvh] md:h-[100dvh] bg-black">
	      <video src="ejemplo.mp4" className="relative z-0 w-full h-full object-cover" autoPlay loop playsInline muted>
	      </video>
      </section>
	    <section className="bg-black bg-cover bg-norepeat py-16 px-4 md:px-20 flex flex-col flex-wrap">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-3xl md:text-4xl font-semibold text-green-400">
          From Concept to Completion — We Bring Ideas to Life
        </h1>
        <p className="text-base md:text-lg mt-4 text-white">
          Korrea Studio is a creative workshop based in London, run by artists passionate about design and fabrication. We design and build bold, physical work that leaves a mark. From initial sketches to final pieces, we take your vision and turn it into environments, objects, and experiences that demand attention.
        </p>
         <p className="text-base md:text-lg mt-4 text-white">
          Whether it’s a set, a prop, a painted backdrop, or a one-off installation — we handle it all, start to finish. With creative direction, design, fabrication, and scenic art, we make your ideas real — and impactful.
        </p>
      </div>
      <Link href='/about-us' className='flex w-[240px] justify-center shadow-xl mx-auto py-5 rounded-2xl text-white bg-green-700 hover:scale-105 hover:bg-green-600 duration-300'>Explore Our Work</Link>
    </section>
	<section className="md:grid md:grid-cols-2 flex flex-col-reverse justify-center items-center place-items-center p-7">
      <Swiper
        spaceBetween={30}
         loop={true}
         autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        effect={'fade'}
        modules={[EffectFade,Autoplay]}
        className="w-full h-[300px] md:h-[400px] text-gree-500"
      >
        <SwiperSlide>
          <img className='object-cover w-full object-center w-full h-[300px] md:h-[400px]' src="/about-us/experiencias.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='object-cover w-full object-center w-full h-[300px] md:h-[400px]' src="/about-us/creatividad.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='object-cover w-full object-center w-full h-[300px] md:h-[400px]' src="/what-we/conferences.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='object-center object-cover w-full h-[300px] md:h-[400px]' src="/what-we/dinners.webp" />
        </SwiperSlide>
      </Swiper>
      <div className='text-center md:text-right flex flex-col items-center md:items-end gap-6 md:gap-10'>
        <h2>We Bring Ideas to Life</h2>
        <p>
        Our London studio combines design and fabrication under one roof. We turn your vision into environments, props, installations, and experiences that demand attention.
        </p>
        
      </div>
    </section>
	    <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center text-center">
      <Image
        src="/index/fondo-agencia.webp" // Asegúrate de que esta imagen esté en public/img/
        alt="Fondo Agencia Londres"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/60 bg-opacity-60 flex flex-col items-center justify-center px-4">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold max-w-3xl leading-snug mb-6">
          Born in London our creative event agency and production company delivers extraordinary events and experiences on a global scale
        </h2>

        <Link href="/contact" className="border border-green-400 text-green-400 px-6 py-2 text-sm sm:text-base font-medium rounded hover:bg-green-400 hover:text-black transition uppercase">
          Contact now
        </Link>
      </div>
    </section>
    </>
  );
}

