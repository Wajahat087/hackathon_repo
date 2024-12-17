import { FaFacebook, FaInstagram, FaTwitter, FaThLarge, FaList } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";
import { FaChevronRight } from "react-icons/fa";

// ProductCard Component
const ProductCard = ({ imgSrc, title, department, oldPrice, newPrice }) => (
  <div className="flex-none w-[262px]">
    <div className="relative">
      <Image src={imgSrc} alt={title} width={239} height={427} className="w-full h-auto object-cover rounded-md" />
      <div className="p-4 bg-white bg-opacity-60">
        <div className="text-center">
          <span className="block text-sm text-black font-bold">{title}</span>
          <span className="block text-sm text-gray-600 font-bold">{department}</span>
        </div>
        <div className="mt-2 flex justify-center items-center gap-4">
          <span className="text-lg text-gray-400 font-semibold">{oldPrice}</span>
          <span className="text-lg text-green-800 font-semibold">{newPrice}</span>
        </div>
        <div className="mt-4 flex justify-center gap-2">
          {["bg-blue-500", "bg-green-500", "bg-orange-500", "bg-black"].map((color, i) => (
            <div key={i} className={`w-6 h-6 rounded-full ${color}`}></div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// CategoryCard Component
const CategoryCard = ({ imgSrc, title, itemCount }) => (
  <div className="relative group">
    <Image src={imgSrc} alt={title} width={205} height={223} className="w-full h-full object-cover" />
    <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
      <h2 className="text-white font-bold text-lg">{title}</h2>
      <p className="text-white">{itemCount} Items</p>
    </div>
  </div>
);

export default function ShopPage() {
  const categoryImages = [
    "media-bg-cover-(1)",
    "media-bg-cover-(2)",
    "media-bg-cover-(3)",
    "media-bg-cover-(4)",
    "media-bg-cover-(5)",
  ];
  const productImages = [
    "/product-cover-5-(4).png",
    "/product-cover-5-(5).png",
    "/product-cover-5-(6).png",
    "/product-cover-5-(7).png",
    "/product-cover-5-(8).png",
    "/product-cover-5-(9).png",
    "/product-cover-5-(10).png",
    "/product-cover-5-(11).png",
    "/product-cover-5-(12).png",
    "/product-cover-5-(13).png",
    "/product-cover-5-(14).png",
    "/product-cover-5-(15).png",
  ];

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="bg-gray-100 min-h-screen">
        {/* Header */}
        <header className="flex justify-between items-center py-4 px-8 bg-white shadow-md">
          <h1 className="text-2xl font-bold">Shop</h1>
          <nav>
          <ul className="flex items-center space-x-2">
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
        </header>

        {/* Category Cards */}
        <section className="grid grid-cols-1 md:grid-cols-5 gap-6 px-8 mt-6">
          {categoryImages.map((img, index) => (
            <CategoryCard
              key={index}
              imgSrc={`/${img}.png`}
              title="CLOTHS"
              itemCount="5"
            />
          ))}
        </section>

        {/* Product Filter */}
        <section className="bg-white px-8 py-4 mt-6 shadow-md">
          <div className="flex justify-between items-center">
            <p className="text-gray-600">Showing all 12 results</p>
            <div className="flex items-center space-x-4">
              <span className="font-semibold text-gray-700">Views:</span>
              <button className="flex items-center justify-center p-2 border rounded hover:bg-gray-200">
                <FaThLarge className="text-gray-600" size={18} />
              </button>
              <button className="flex items-center justify-center p-2 border rounded hover:bg-gray-200">
                <FaList className="text-gray-600" size={18} />
              </button>
              <select className="border rounded px-2 py-1 text-gray-700">
                <option>Popularity</option>
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-800">
                Filter
              </button>
            </div>
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

        {/* Footer */}
      <Footer />

        {/* Product Cards */}
        <section className="grid grid-cols-4 gap-1 ml-36 px-2 py-6">
          {productImages.slice(0, 12).map((imgSrc, index) => (
           <ProductCard
            key={index}
            imgSrc={imgSrc}
            title="Graphic Design"
            department="English Department"
            oldPrice="$16.48"
            newPrice="$6.48"
    />
  ))}
</section>

    <div className="flex items-center justify-center border border-gray-300 w-fit mx-auto px-4 py-6 mb-4 rounded-md">
      {/* First Button */}
      <button className="text-gray-400 px-3 border-r border-gray-300 hover:text-blue-700">
        First
      </button>

      {/* Page Numbers */}
      <button className="px-3 border-r border-blue-500 hover:bg-gray-200">1</button>
      <button className="px-3 border-r border-blue-500 text-white bg-blue-500 hover:bg-blue-800">
        2
      </button>
      <button className="px-3 border-r border-blue-500 hover:bg-gray-200">3</button>

      {/* Next Button */}
      <button className="text-blue-500 px-3 hover:text-blue-800">Next</button>
    </div>
      </div>

      
    </>
  );
}