"use client";
import Image from "next/image";
import Link from "next/link";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

// Import Navbar and Footer components
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer";

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState("/single-product-1-cover-2.jpg");

  const productImages = [
    "/single-product-1-cover-2.jpg",
    "/single-product-1-thumb-1.jpg",
  ];

  const bestsellerProducts = [
    { id: 1, title: "Graphic Design", price: "$14.43", img: "/product-cover-5-(16).png" },
    { id: 2, title: "Graphic Design", price: "$14.43", img: "/product-cover-5-(17).png" },
    { id: 3, title: "Graphic Design", price: "$14.43", img: "/product-cover-5-(18).png" },
    { id: 4, title: "Graphic Design", price: "$14.43", img: "/product-cover-5-(19).png" },
    { id: 5, title: "Graphic Design", price: "$14.43", img: "/product-cover-5-(20).png" },
    { id: 6, title: "Graphic Design", price: "$14.43", img: "/product-cover-5-(21).png" },
    { id: 7, title: "Graphic Design", price: "$14.43", img: "/product-cover-5-(22).png" },
    { id: 8, title: "Graphic Design", price: "$14.43", img: "/product-cover-5-(23).png" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        
        <nav>
          <ul className="flex items-center space-x-2 pl-6">
            <li>
              <Link
                href="/src/app/page.tsx"
                className="text-gray-800 hover:text-blue-500 font-semibold"
              >
                Home
              </Link>
            </li>
            <li>
              <FaChevronRight className="text-gray-400" size={12} /> {/* Arrow */}
            </li>
            <li>
              <Link
                href="/src/app/Shops"
                className="text-gray-400 hover:text-blue-500 font-semibold"
              >
                Shop
              </Link>
            </li>
          </ul>

          </nav>

        {/* Product Section */}
        <section className="max-w-7xl mx-auto p-6 md:flex md:space-x-6">
          {/* Product Image Section */}
          <div className="md:w-1/2">
            <div className="border rounded-lg overflow-hidden">
              <Image
                src={selectedImage}
                alt="Product"
                width={506}
                height={450}
                className="w-full object-cover"
              />
            </div>
            {/* Thumbnail Images */}
            <div className="flex space-x-4 mt-4">
              {productImages.map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index}`}
                  width={80}
                  height={80}
                  className={`cursor-pointer border rounded-lg ${
                    selectedImage === img ? "border-blue-500" : "border-gray-200"
                  }`}
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>
          </div>

          {/* Product Information */}
          <div className="md:w-1/2">
            <h1 className="text-2xl font-semibold text-gray-800">Floating Phone</h1>
            <div className="flex items-center mt-2">
              <div className="flex text-yellow-400 space-x-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
              </div>
              <span className="text-gray-600 text-sm ml-2">10 Reviews</span>
            </div>
            <p className="text-2xl font-bold text-blue-700 mt-4">$1,139.33</p>
            <p className="text-sm text-green-600 mt-1">Availability: <span>In Stock</span></p>
            <p className="text-gray-600 mt-4">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
              Self inflicted customization chain.
            </p>

            {/* Color Selection */}
            <div className="mt-6">
              <h3 className="text-gray-800 font-semibold mb-2">Select Color</h3>
              <div className="flex space-x-2">
                {["bg-blue-500", "bg-green-500", "bg-red-500", "bg-gray-800"].map(
                  (color, i) => (
                    <button
                      key={i}
                      className={`w-8 h-8 rounded-full ${color} border-2 border-white hover:border-gray-400`}
                    ></button>
                  )
                )}
              </div>
            </div>

            {/* Button */}
            <button className="mt-6 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
              Select Options
            </button>
          </div>
        </section>
      </main>


{/* Product Tabs */}
<section className="max-w-7xl mx-auto p-6 border-t mt-8">
  {/* Tab Buttons */}
  <div className="flex items-center justify-center space-x-8 border-b">
    <button className="pb-2 border-b-2 border-gray-500 text-gray-500 font-semibold focus:outline-none">
      Description
    </button>
    <button className="pb-2 text-gray-500 hover:text-blue-500 focus:outline-none">
      Additional Information
    </button>
    <button className="pb-2 text-gray-500 hover:text-blue-500 focus:outline-none">
      Reviews (0)
    </button>
  </div>
  

{/* Product Section */}
<section className="max-w-7xl mx-auto p-6 border-t mt-8">
  <div className="flex flex-col md:flex-row items-start gap-8">
    {/* Image Section */}
    <div className="w-full md:w-1/3 flex justify-center">
      <img
        src="/unsplash.png" // Replace with the correct image path
        alt="Product"
        className="w-full max-w-xs rounded-lg shadow-lg object-cover"
      />
    </div>

    {/* Text Content Section */}
    <div className="w-full md:w-1/3">
      <h2 className="text-gray-800 font-semibold text-lg mb-4">The quick fox jumps over</h2>
      <p className="text-gray-600 leading-relaxed">
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. Self-inflicted customization chain. Exclamation exulted consecrate.
      </p>
      <p className="text-gray-600 mt-4 leading-relaxed">
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. Self-inflicted customization chain. Exclamation exulted consecrate.
      </p>
    </div>

    {/* Additional Content Section */}
    <div className="w-full md:w-1/3 space-y-4">
      {Array(3)
        .fill("The quick fox jumps over the lazy dog")
        .map((text, i) => (
          <div key={i}>
            <h3 className="font-bold text-gray-800">{text}</h3>
            <ul className="list-arrow list-inside text-gray-600">
              <li>{text}</li>
              <li>{text}</li>
              <li>{text}</li>
            </ul>
          </div>
        ))}
    </div>
  </div>
</section>


{/* Bestseller Products */}
<section>
          <h3 className="text-2xl font-bold mb-4 mt-4 pt-4 pb-4 text-gray-800">
            BESTSELLER PRODUCTS
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-cols-4 gap-6">
            {bestsellerProducts.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg overflow-hidden bg-white"
              >
                <Image
                  src={product.img}
                  alt={product.title}
                  width={300}
                  height={200}
                  className="w-full object-cover"
                />
                <div className="p-4 ml-20 text-justify items-center">
                  <h4 className="font-semibold text-gray-800">
                    {product.title}
                  </h4>
                  <p className="text-gray-500 text-justify items-center text-sm">English Department</p>
                  <p className="text-green-500 text-justify items-center font-bold mt-2">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

           {/* Logos */}
              <section className="flex justify-center items-center gap-48 px-8 py-6 bg-gray-50 mt-6">
                <Image src="/Vector.png" alt="Hooli" width={102.99} height={33.81} />
                <Image src="/Vector-(1).png" alt="Lyft" width={83} height={58.96} />
                <Image src="/Vector-(2).png" alt="Stripe" width={102} height={74.84} />
                <Image src="/Vector-(3).png" alt="AWS" width={102.98} height={41.98} />
                <Image src="/Vector-(4).png" alt="Reddit" width={103.68} height={61.75} />
                <Image src="/Vector-(5).png" alt="text" width={75.75} height={71.86} />
              </section>

</section>


      <Footer />
    </div>
  );
}
