export default function Ourwork(){
  return(
    <>
      <section className="relative h-[130dvh] bg-black">
	      <video src="ejemplo.mp4" className="relative z-0 w-full h-full object-cover" autoPlay loop playsInline muted>
	      </video>
      </section>
      <section className="bg-black text-white py-16 px-4 md:px-20">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-green-400">
          Una escala que se adapta a tu ambición
        </h2>
        <p className="text-base md:text-lg mt-4 text-gray-300">
          Nuestrahaferta ha crecido orgánicamente a lo largo de tres décadas en respuesta a las necesidades de nuestros clientes y a nuestro propio compromiso con la excelencia. El resultado es un conjunto único e integral de capacidades y servicios, todo bajo un mismo techo, literalmente. Esto significa que podemos pasar de la estrategia y la creatividad a la producción y la entrega en un proceso integrado.
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
    </>
  )
}
