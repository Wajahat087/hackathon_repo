'use client'; // Ensures this component is client-side rendered

import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { FaCheckCircle, FaChevronRight, FaArrowRight, FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"; // Change FaArrow to FaArrowRight
import { useState } from "react";
import Image from "next/image";


export default function Pricings() {
  const [isMonthly, setIsMonthly] = useState(true); // This handles the toggle state

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />

      {/* Header Section */}
      <div className="text-center mt-7 pt-10">
        <h2 className="font-bold">PRICING</h2>
        <h1 className="font-bold text-5xl mb-4 mt-10">Simple Pricing</h1>

        {/* Breadcrumb Navigation */}
        <nav className="flex justify-center mb-8 mt-16">
          <ul className="flex space-x-2">
            <li>
              <Link
                href="/"
                className="text-gray-800 hover:text-blue-500 font-semibold"
              >
                Home
              </Link>
            </li>
            <li>
              <FaChevronRight className="text-gray-400 mt-2" size={12} />
            </li>
            <li>
              <Link
                href="/src/app/Shops"
                className="text-gray-400 hover:text-blue-500 font-semibold"
              >
                Pricing
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Pricing Section */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h1 className="text-4xl font-bold mb-4 mt-40">Pricing</h1>
        <p className="text-gray-600 text-center mb-8 px-4 md:px-0 max-w-2xl">
          Problems trying to resolve the conflict between <br /> the two major realms
          of Classical physics: Newtonian mechanics.
        </p>

        {/* Toggle Switch for Monthly / Yearly */}
        <div className="flex items-center space-x-4 mb-6">
          <button
            onClick={() => setIsMonthly(true)}
            className={`py-2 px-4 rounded-full ${isMonthly ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"}`}
          >
            Monthly
          </button>
          <div
            className={`w-12 h-6 flex items-center bg-gray-300 rounded-full px-1 cursor-pointer ${isMonthly ? "justify-start" : "justify-end"}`}
            onClick={() => setIsMonthly(!isMonthly)}
          >
            <div className="w-5 h-5 bg-white rounded-full shadow-md"></div>
          </div>
          <button
            onClick={() => setIsMonthly(false)}
            className={`py-2 px-4 rounded-full ${!isMonthly ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"}`}
          >
            Yearly
          </button>
        </div>

        <button className="py-2 px-6 text-blue-500 border border-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition">
          Save 25%
        </button>
      </div>

      {/* Pricing Cards */}
      <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center py-10">
        <div className="flex space-x-4 mb-10">
          {/* First Card - FREE */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg w-80 p-6 mt-10">
            <h2 className="text-center text-xl font-bold mb-4">FREE</h2>
            <p className="text-center text-gray-500 mb-4">Organize across all apps by hand</p>
            <div className="text-5xl font-bold text-left mb-4">
              0 <span className="text-xl text-gray-500 absolute top"> $</span>
              <span className="text-right text-sm"> per Month</span>
            </div>
            <div className="flex justify-center items-center space-x-2 mb-6">
              <FaCheckCircle className="text-green-500" />
              <p className="text-sm text-green-500">Unlimited product updates</p>
            </div>
          </div>

          {/* Second Card - STANDARD */}
          <div className="bg-blue-950 text-white border border-gray-300 rounded-lg shadow-lg w-80 p-6">
            <h2 className="text-center text-xl font-bold mb-4">STANDARD</h2>
            <p className="text-center text-gray-200 mb-4">Organize across all apps by hand</p>
            <div className="text-5xl font-bold text-left mb-4 relative">
              9.99
              <span className="text-xl absolute top ml-2">$</span>
              <span className="text-right text-sm ml-2">per Month</span>
            </div>

            <div className="flex justify-center items-center space-x-2 mb-6">
              <FaCheckCircle className="text-green-500" />
              <p className="text-sm text-green-500">Unlimited product updates</p>
            </div>
            <div className="flex justify-center items-center space-x-2 mb-6">
              <FaCheckCircle className="text-green-500" />
              <p className="text-sm text-green-500">Unlimited product updates</p>
            </div>
          </div>

          {/* Third Card - PREMIUM */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg w-80 p-6 mt-10">
            <h2 className="text-center text-xl font-bold mb-4">PREMIUM</h2>
            <p className="text-center text-gray-500 mb-4">Organize across all apps by hand</p>
            <div className="text-5xl font-bold text-left mb-4">
              19.99 <span className="text-xl absolute top ml-2">$</span>
              <span className="text-right text-sm ml-2">per Month</span>
            </div>
            <div className="flex justify-center items-center space-x-2 mb-6">
              <FaCheckCircle className="text-green-500" />
              <p className="text-sm text-green-500">Unlimited product updates</p>
            </div>
          </div>
        </div>
      </div>

      {/* Client Logos */}
      <section className="flex flex-wrap justify-center items-center gap-6 sm:gap-12 px-4 sm:px-8 bg-gray-50">
        <Image src="/Vector.png" alt="Hooli" width={103} height={34} />
        <Image src="/Vector-(1).png" alt="Lyft" width={83} height={59} />
        <Image src="/Vector-(2).png" alt="Stripe" width={102} height={75} />
        <Image src="/Vector-(3).png" alt="AWS" width={103} height={42} />
        <Image src="/Vector-(4).png" alt="Reddit" width={104} height={62} />
        <Image src="/Vector-(5).png" alt="text" width={76} height={72} />
      </section>

      {/* FAQ Section */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h1 className="text-4xl font-bold mb-4 mt-40">Pricing FAQs</h1>
        <p className="text-gray-600 text-center mb-8 px-4 md:px-0 max-w-2xl">
          Problems trying to resolve the conflict between <br /> the two major realms
          of Classical physics
        </p>
        <div className="flex flex-wrap justify-between gap-4">
  {/* First row */}
  
  <div className="flex justify-between gap-6">
  {/* Left Content */}
  <div className="w-full sm:w-1/2 p-4 border border-gray-200 rounded-md">
    <div className="flex items-center">
      <FaArrowRight className="mr-2" />
      <p className="font-bold p-2">The quick fox jumps over the lazy dog</p>
    </div>
    <p className="m-2">
      Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
    </p>
  </div>

  {/* Right Content */}
  <div className="w-full sm:w-1/2 p-4 border border-gray-200 rounded-md">
    <div className="flex items-center">
      <FaArrowRight className="mr-2" />
      <p className="font-bold p-2">The quick fox jumps over the lazy dog</p>
    </div>
    <p className="m-2">
      Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
    </p>
  </div>
</div>

<div className="flex justify-between gap-6">
<div className="w-full sm:w-1/2 p-4 border border-gray-200 rounded-md">
    <div className="flex items-center">
      <FaArrowRight className="mr-2" />
      <p className="font-bold p-2">The quick fox jumps over the lazy dog</p>
    </div>
    <p className="m-2">
      Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
    </p>
  </div>

  {/* Right Content */}
  <div className="w-full sm:w-1/2 p-4 border border-gray-200 rounded-md">
    <div className="flex items-center">
      <FaArrowRight className="mr-2" />
      <p className="font-bold p-2">The quick fox jumps over the lazy dog</p>
    </div>
    <p className="m-2">
      Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
    </p>
  </div>
</div>
<div className="flex justify-between gap-6">
<div className="w-full sm:w-1/2 p-4 border border-gray-200 rounded-md">
    <div className="flex items-center">
      <FaArrowRight className="mr-2" />
      <p className="font-bold p-2">The quick fox jumps over the lazy dog</p>
    </div>
    <p className="m-2">
      Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
    </p>
  </div>

  {/* Right Content */}
  <div className="w-full sm:w-1/2 p-4 border border-gray-200 rounded-md">
    <div className="flex items-center">
      <FaArrowRight className="mr-2" />
      <p className="font-bold p-2">The quick fox jumps over the lazy dog</p>
    </div>
    <p className="m-2">
      Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
    </p>
  </div>
  </div>
  </div>
  <div className="text-center mt-7 pt-10">
        <h2 className="text-gray-600">Haven’t got your answer? Contact our support</h2>
  </div>

  <div className="flex flex-col items-center justify-center py-10 px-6 mt-36 mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Start your 14 days free trial</h2>
        <p className="text-gray-600 text-center max-w-lg mb-4">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.
        </p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition">
          Try it free now
        </button>
        <div className="flex space-x-4 mt-6">
          <a href="#" className="text-blue-600 hover:text-blue-800">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-blue-900 hover:text-blue-950">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-blue-900 hover:text-blue-950">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-blue-600 hover:text-blue-800">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
    </div>
  );
}
