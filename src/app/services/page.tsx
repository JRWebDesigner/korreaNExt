"use client"
import Link from 'next/link'

const services = [
  { title: "Prop Making", link: "/services", index:1 },
  { title: "Miniatures & Model Making", link: "/services", index:2 },
  { title: "Scenic Painting", link: "/services", index:3 },
  { title: "Set Building", link: "/services", index:4 },
  { title: "Set Design & Art Direction", link: "/services", index:5 },
];


export default function Services(){
  return(
    <>
      <section className="relative min-h-screen bg-black flex justify-center items-center flex-col gap-10">
        <div className="container mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-center">
              Services
            </h1>
            <br />
            <br />
            <p className="text-center md:text-2xl text-white opacity-70">
              At Korrea Studio, we bring visions to life — from first concept to finished build. Every project blends artistry and craftsmanship to create striking, immersive results.
            </p>
        </div>
        <div>
           <div className="overflow-hidden hover:border-gray-600 transition-colors group h-full rounded-2xl w-[500px] lg:w-[1100px] mx-auto">
                  <div className="relative overflow-hidden flex flex-col justify-center items-center text-white text-center">
                    <div className="absolute inset-0" />
                    <ul className="relative z-20 flex flex-col gap-8 text-3xl md:text-5xl  font-medium tracking-wide">
                    {services.map(({ link, title, index }) => (
                      <li key={index} className="hover:text-green-400 transition-colors">
                        <Link href={link}>{title}</Link>
                      </li>
                    ))}
                  </ul>
                  </div>
                </div>
            </div>
      </section>

    </>
  )
}
