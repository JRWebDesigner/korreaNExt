
import Image from "next/image";

const eventData = [
  { title: "Brand Experiences", image: "/brand.jpg" },
  { title: "Conferences", image: "/conferences.jpg" },
  { title: "Dinners & Receptions", image: "/dinners.jpg" },
  { title: "Exhibitions", image: "/exhibitions.jpg" },
  { title: "Private Events", image: "/private.jpg" },
  { title: "Live Shows", image: "/live.jpg" },
];

export default function Ourwork(){
  return(
    <>
      <section className="relative h-[130dvh] bg-black">
	      <video src="ejemplo.mp4" className="relative z-0 w-full h-full object-cover" autoPlay loop playsInline muted>
	      </video>
      </section>
      <div className="min-h-screen bg-black text-white px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold text-green-400 mb-4">
          Events may come and go,
          <br />
          <span className="text-white">experiences stay</span>
        </h2>
        <p className="text-gray-300 mb-10 max-w-2xl">
          We work across the full spectrum of business events, brand experiences and personal occasions. Whether your guest list includes the great and the good, or your nearest and dearest, you can relax knowing each event is meticulously planned and flawlessly delivered. Live, virtual or hybrid, they all share the power to create a lasting impression that lives long in the memory.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {eventData.map((event, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src={event.image}
                alt={event.title}
                width={600}
                height={400}
                className="w-full h-60 object-cover transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-between p-4">
                <h3 className="text-lg font-semibold z-10">{event.title}</h3>
                <button className="bg-green-400 text-black text-sm font-semibold px-4 py-2 rounded hover:bg-green-500 self-start">
                  DISCOVER MORE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}
