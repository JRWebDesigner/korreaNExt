import { FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
export default function Footer(){
  return(
        <footer className="bg-black text-white py-10 px-6 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10">
        <div className="flex items-center gap-4 mb-6 md:mb-0">
          <Image src="/img/logo-ec.png" alt="Event Concept logo" width={60} height={60} />
          <div className="text-sm">
            <p className="text-green-400 font-medium">+44 (0) 20 7740 3988</p>
            <p className="text-green-400 font-medium">info@eventconcept.com</p>
          </div>
        </div>
        <div className="text-sm text-right">
          <p>London | New York | Global</p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6 border-t border-gray-700 pt-6">
        {["EXPERTISE", "OUR WORK", "INSIGHTS", "ABOUT US", "VENUES", "SUSTAINABILITY"].map((item) => (
          <Link key={item} href="#" className="text-white font-semibold text-sm hover:text-green-400">
            {item}
          </Link>
        ))}
        <div className="flex items-center gap-4 ml-4 text-green-400">
          <Link href="https://www.instagram.com/korreastudio?igsh=MW1kOTQza25vMW9ocw=="><FaInstagram size={20} /></Link>
        </div>
      </div>
    </footer>
  )
}
