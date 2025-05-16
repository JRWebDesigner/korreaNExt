export default function Contact(){
  return(
    <>
      <section className="relative h-[130dvh] bg-black">
	      <video src="ejemplo.mp4" className="relative z-0 w-full h-full object-cover" autoPlay loop playsInline muted>
	      </video>
      </section>
       <div className="bg-black text-white px-6 py-12 space-y-12">
      <section className="max-w-6xl mx-auto">
        <h2 className="text-3xl text-green-400 font-semibold mb-4">New York</h2>
        <address className="not-italic leading-relaxed">
          <p>Event Concept Inc.</p>
          <p>61 Greenpoint Ave #603</p>
          <p>Brooklyn, NY 11222</p>
          <p className="mt-2">
            <a href="tel:+19292516994" className="text-green-400 underline">+1 (929) 251 6994</a><br />
            <a href="mailto:info@eventconcept.com" className="text-green-400 underline">info@eventconcept.com</a>
          </p>
        </address>

        <div className="mt-8">
          <iframe
            src="https://www.google.com/maps?q=61+Greenpoint+Ave+%23603,+Brooklyn,+NY+11222&output=embed"
            className="w-full h-96 border-0"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <section className="max-w-6xl mx-auto">
        <h2 className="text-3xl text-green-400 font-semibold mb-4">Get in touch</h2>
        <p className="mb-6">Drop us a message and we will get back to you shortly.</p>
        <form className="space-y-6">
          <input type="text" placeholder="Type of enquiry*" className="w-full bg-gray-800 p-3 rounded text-white" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" placeholder="First Name" className="bg-gray-800 p-3 rounded text-white w-full" />
            <input type="text" placeholder="Last Name" className="bg-gray-800 p-3 rounded text-white w-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="email" placeholder="Email*" className="bg-gray-800 p-3 rounded text-white w-full" />
            <input type="tel" placeholder="Phone*" className="bg-gray-800 p-3 rounded text-white w-full" />
          </div>
          <input type="text" placeholder="Company name" className="w-full bg-gray-800 p-3 rounded text-white" />
          <select className="w-full bg-gray-800 p-3 rounded text-white">
            <option>Where did you hear about us?</option>
            <option>Google</option>
            <option>Social Media</option>
            <option>Friend or Colleague</option>
          </select>
          <textarea placeholder="How can we help?" rows="4" className="w-full bg-gray-800 p-3 rounded text-white"></textarea>

          <div className="flex items-center gap-2">
            <input type="checkbox" id="newsletter" className="accent-green-500" />
            <label htmlFor="newsletter">Sign up to our newsletter</label>
          </div>

          <button type="submit" className="bg-green-400 hover:bg-green-500 text-black font-bold px-6 py-3 rounded">
            SEND THE MESSAGE
          </button>
        </form>
      </section>
    </div>
    </>
  )
}
