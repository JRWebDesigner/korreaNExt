"use client"
import Image from "next/image";


const eventData = [
  { title: "Title", image: "/brand.jpg" },
  { title: "Title", image: "/conferences.jpg" },
  { title: "Title", image: "/dinners.jpg" },
  { title: "Title", image: "/exhibitions.jpg" },
  { title: "Title", image: "/private.jpg" },
  { title: "Live Shows", image: "/live.jpg" },
  { title: "Title", image: "/private.jpg" },
  { title: "Live Shows", image: "/live.jpg" },
];


export default function Ourwork(){
  return(
    <>
      <section className="relative h-[40dvh] bg-black flex justify-center items-start">
<div className="container mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-center">
              Our Work
            </h1>
            <br />
            <br />
            <p className="text-center md:text-2xl text-white opacity-70">
              We create work that balances artistry with precision — from scenic painting and model making to full set design and build. Whether small-scale or monumental, each project is crafted to immerse, inspire, and leave a lasting mark.
            </p>
        </div>
      </section>
      <div className="min-h-screen bg-white px-4 py-12 mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-14 md:grid-cols-2">
          {eventData.map((event, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg h-[480px]"
            >
              <Image
                src={event.image}
                alt={event.title}
                width={600}
                height={400}
                className="w-full h-60 object-cover transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gray-300 bg-opacity-40 flex flex-col justify-between p-4 flex items-center justify-end">
                
              </div>
              <h3 className="text-lg font-semibold z-10">{event.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>

    </>
  )
}
