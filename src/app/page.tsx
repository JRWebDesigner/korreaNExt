import Image from "next/image";
    
//Rossy te amo y extraño
export default function Home() {
  return (
    <>
      <section className="relative h-[130dvh] bg-black">
	      <video src="ejemplo.mp4" className="relative z-0 w-full h-full object-cover" autoPlay loop playsInline muted>
	      </video>
      </section>
      <section className="bg-[url(/svg.svg)] bg-cover h-[90dvh] w-full flex justify-center items-center flex-col gap-10 p-6">
          <h2 className="md:mx-22 font-bold text-xl md:text-6xl text-center text-green-400">
            Creative Event Agency &
Event Production Company
          </h2>
          <p className="md:mx-22 text-center font-medium text-2xl text-blue-300">
          We blend creative agency thinking with production company doing to deliver extraordinary events and everlasting experiences
<br />
Enabling you to create an experience that matters for the people that matter to you
          </p>
      </section>
	    <section className="bg-black text-white py-16 px-4 md:px-20">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-green-400">
          A scale that adapts to your ambition
        </h2>
        <p className="text-base md:text-lg mt-4 text-gray-300">
          Our offering has grown organically over three decades in response to our clients' needs and our own commitment to excellence. The result is a unique and comprehensive set of capabilities and services, literally all under one roof. This means we can move from strategy and creativity to production and delivery in an integrated process.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative h-80 md:h-[500px]">
          <Image
            src="/img/soluciones-mundial.jpg"
            alt="Soluciones integrales"
            fill
            className="object-cover rounded"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">
              Soluciones integrales a nivel mundial
            </h3>
            <button className="bg-green-400 text-black px-4 sm:px-6 py-2 font-medium rounded text-sm sm:text-base">
              DESCUBRA NUESTRA EXPERIENCIA
            </button>
          </div>
        </div>

        <div className="relative h-80 md:h-[500px]">
          <Image
            src="/img/eventos-londres.jpg"
            alt="Eventos en Londres"
            fill
            className="object-cover rounded"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">
              Especialistas en producción de eventos en Londres
            </h3>
            <button className="bg-green-400 text-black px-4 sm:px-6 py-2 font-medium rounded text-sm sm:text-base">
              DESCUBRE MÁS
            </button>
          </div>
        </div>
      </div>
    </section>
	    <section className="relative w-full h-[90vh] md:h-screen">
      <Image
        src="/img/guap-gala.jpg" // Asegúrate de que esta imagen esté en public/img/
        alt="Evento G"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-start p-6 md:p-16">
        <div className="max-w-2xl text-left text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-300 leading-tight mb-4">
            Celebrate,<br />
            communicate,<br />
            inspire, educate.
          </h2>

          <p className="text-sm sm:text-base text-gray-200 mb-6">
            From the strictly professional to the deeply personal, our work encompasses everything from exhibitions and brand experiences, to conferences and launches, to awards, receptions, dinners and more. Whether live, virtual or hybrid, they all share the power to bring people together and deliver an experience that lasts.
          </p>

          <button className="bg-green-300 text-black font-medium px-6 py-2 rounded text-sm sm:text-base">
            VIEW OUR WORK
          </button>
        </div>
      </div>
    </section>
    </>
  );
}
