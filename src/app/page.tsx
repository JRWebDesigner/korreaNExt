
export default function Home() {
  return (
    <>
      <section className="relative h-[130dvh] bg-black">
	      <video src="ejemplo.mp4" className="relative z-0 w-full h-full object-cover" autoplay muted>
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
    </>
  );
}
