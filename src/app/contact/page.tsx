import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";

export default function Contact() {
  return (
    <div className="font-sans">
      <Navbar />
      
      {/* Header Section */}
      <section className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 py-12">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-gray-800 font-bold text-xl mb-4">CONTACT US</h2>
          <h1 className="text-gray-800 font-bold text-3xl md:text-7xl mb-4">
            Get in touch today!
          </h1>
          <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
            We know how large objects will act, but things on a small scale.
          </p>
          <h2 className="text-gray-800 font-bold text-lg md:text-xl mb-4">Phone : +451 215 215 </h2>
          <h2 className="text-gray-800 font-bold text-lg md:text-xl mb-4">Fax : +451 215 215 </h2>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 justify-center md:justify-start">
            <a href="#" className="text-gray-800 hover:text-blue-900 transition">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-gray-800 hover:text-blue-900 transition">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-gray-800 hover:text-blue-900 transition">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-gray-800 hover:text-blue-900 transition">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src="/hero-2-bg-shape-cover(1).png"
            alt="Contact Us"
            className="w-full h-auto object-contain"
          />
        </div>
      </section>

      {/* Visit Our Office Section */}
      <section className="text-center py-12">
        <div className="text-center">
          <h2 className="text-black font-bold text-xl md:text-2xl">VISIT OUR OFFICE</h2>
          <h1 className="text-3xl md:text-5xl font-bold mt-4">We help small businesses <br /> with big ideas</h1>
        </div>
      </section>

      {/* Cards Section */}
      <section className="flex flex-col md:flex-row justify-center items-center gap-8 py-12">
        {/* 1st Card (Left) */}
        <div className="bg-white w-full sm:w-[328px] h-[403px] p-6 flex flex-col justify-center items-center rounded-lg shadow-lg">
          <FaPhoneAlt size={40} className="text-gray-600 mb-4" />
          <div className="text-center">
            <p className="text-gray-800 font-medium">georgia.young@example.com</p>
            <p className="text-gray-800 font-medium mb-4">georgia.young@ple.com</p>
            <p className="text-gray-600 mb-6">Get Support</p>
            <button className="border-2 border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white transition">
              Submit Request
            </button>
          </div>
        </div>

        {/* 2nd Card (Center) */}
        <div className="bg-blue-950 w-full sm:w-[328px] h-[403px] p-6 flex flex-col justify-center items-center rounded-lg shadow-lg">
          <FaLocationDot size={40} className="text-white mb-4" />
          <div className="text-center text-white">
            <p className="font-medium">georgia.young@example.com</p>
            <p className="font-medium mb-4">georgia.young@ple.com</p>
            <p className="text-white mb-6">Get Support</p>
            <button className="border-2 border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white transition">
              Submit Request
            </button>
          </div>
        </div>

        {/* 3rd Card (Right) */}
        <div className="bg-white w-full sm:w-[328px] h-[403px] p-6 flex flex-col justify-center items-center rounded-lg shadow-lg">
          <FaEnvelope size={40} className="text-gray-600 mb-4" />
          <div className="text-center">
            <p className="text-gray-800 font-medium">georgia.young@example.com</p>
            <p className="text-gray-800 font-medium mb-4">georgia.young@ple.com</p>
            <p className="text-gray-600 mb-6">Get Support</p>
            <button className="border-2 border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white transition">
              Submit Request
            </button>
          </div>
        </div>
      </section>

      {/* Final Section */}
      <section className="flex flex-col items-center justify-center text-center py-10">
        <div className="flex flex-col items-center">
          <img
            src="/Arrow2.png"
            alt="Image 5"
            className="h-auto w-auto shadow-md mb-6"
          />
          <h2 className="font-bold text-lg">WE Can't WAIT TO MEET YOU</h2>
          <h1 className="text-4xl md:text-6xl font-bold">Let’s Talk</h1>
          <button className="bg-blue-600 rounded-md hover:bg-blue-950 text-white p-3 px-6 mt-6">
            Try it free now
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
