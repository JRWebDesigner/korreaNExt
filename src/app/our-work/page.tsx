
import Link from "next/link"
interface EventCategoryProps {
  title: string;
}
export default function Ourwork(){
  return(
    <>
      <section className="relative h-[130dvh] bg-black">
	      <video src="ejemplo.mp4" className="relative z-0 w-full h-full object-cover" autoPlay loop playsInline muted>
	      </video>
      </section>
      <section className="bg-black text-white py-16 px-4 md:px-20">
       <div className="max-w-4xl mx-auto">
        {/* Main heading section */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Events may come and go, experiences stay
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            We work across the full spectrum of business events, brand experiences and personal occasions.<br />
            Whether your guest list includes the great and the good, or your nearest and dearest, you can relax knowing each event is meticulously planned and flawlessly delivered. Live, virtual or hybrid, they all share the power to create a lasting impression that lives long in the memory.
          </p>
          <div className="h-px bg-gray-200 w-full"></div>
        </section>

        {/* Event categories */}
        <div className="space-y-8">
          <EventCategory title="Brand Experiences" />
          <EventCategory title="Dimers & Receptions" />
          <EventCategory title="Drivers & Receptions" />
          <EventCategory title="Driver & Receptions" />
          <EventCategory title="Dishonest & Receptions" />
          <EventCategory title="Living & Receptions" />
        </div>
      </div>
      
    </section>
    </>
  )
}
function EventCategory({ title }: EventCategoryProps) {
  return (
    <section className="group">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
      <div className="h-px bg-gray-200 w-full group-last:hidden"></div>
      <Link 
        href="#" 
        className="inline-block mt-4 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
      >
        DISCOVER MORE
      </Link>
    </section>
  );
}
