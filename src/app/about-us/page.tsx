import Image from "next/image";
export default function Aboutus(){
  return(
    <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center">
      <Image
        src="/img/experiencias.jpg" // Guarda la imagen como experiencias.jpg en public/img
        alt="Techo iluminado"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 flex items-center px-6 md:px-20">
        <div className="max-w-2xl text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight mb-4">
            We believe shared experiences<br />
            are the most powerful
          </h2>
          <p className="text-sm sm:text-base text-white">
            The stories they create and the ideas they inspire can live for generations
          </p>
        </div>
      </div>
    </section><section className="bg-black text-white py-20 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-6">
          Experiences matter
        </h2>

        <p className="text-green-300 text-base md:text-lg mb-6">
          Which makes the events that give rise to them a pretty big deal too. And why being responsible for organising one brings a particular sort of pressure. At EC we understand this.
        </p>

        <p className="text-gray-200 text-base md:text-lg mb-6">
          Founded on a desire to always exceed expectations, we’ve been planning and delivering extraordinary events across the globe for over three decades. Our close-knit team of over 140 thinkers and doers collaborate in harmony with each other and our clients. Enabling them to create an experience that matters, for the people that matter to them.
        </p>

        <p className="text-green-300 text-base md:text-lg">
          Making the extraordinary, everlasting.
        </p>
      </div>
    </section>
<section className="relative w-full h-[70vh] md:h-[85vh] flex items-center">
      <Image
        src="/img/creatividad.jpg" // Guarda esta imagen como creatividad.jpg en public/img
        alt="Naturaleza en vitrinas"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 flex items-center px-6 md:px-20">
        <div className="max-w-2xl text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-green-400 mb-4">
            Creativity and conscience
          </h2>
          <p className="text-sm sm:text-base text-white">
            It’s not just what we do that matters, but how we do it. We care about each other and our clients as deeply as we care about the work. We act with creativity and conscience, guided by the principles we share.
          </p>
        </div>
      </div>
    </section>

  )
}
