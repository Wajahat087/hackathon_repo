import { FaFacebook, FaInstagram, FaTwitter, FaThLarge, FaList } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";
import { FaChevronRight } from "react-icons/fa";

interface ProductProps {
  imgSrc: string;
  title: string;
  department: string;
  oldPrice: string;
  newPrice: string;
}

interface CategoryProps {
  imgSrc: string;
  title: string;
  itemCount: string;
}

// ProductCard Component
const ProductCard = ({ imgSrc, title, department, oldPrice, newPrice }: ProductProps) => (
  <div className="flex-none w-full sm:w-[262px]">
    <div className="relative">
      <Image src={imgSrc} alt={title} width={239} height={427} className="w-full h-auto object-cover rounded-md" />
      <div className="p-4 bg-white bg-opacity-90">
        <div className="text-center">
          <span className="block text-sm text-black font-bold">{title}</span>
          <span className="block text-sm text-gray-600">{department}</span>
        </div>
        <div className="mt-2 flex justify-center items-center gap-4">
          <span className="text-sm sm:text-lg text-gray-400 font-semibold">{oldPrice}</span>
          <span className="text-sm sm:text-lg text-green-800 font-semibold">{newPrice}</span>
        </div>
        <div className="mt-4 flex justify-center gap-2">
          {["bg-blue-500", "bg-green-500", "bg-orange-500", "bg-black"].map((color, i) => (
            <div key={i} className={`w-4 h-4 sm:w-6 sm:h-6 rounded-full ${color}`}></div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// CategoryCard Component
const CategoryCard = ({ imgSrc, title, itemCount }: CategoryProps) => (
  <div className="relative group">
    <Image src={imgSrc} alt={title} width={205} height={223} className="w-full h-full object-cover" />
    <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
      <h2 className="text-white font-bold text-sm sm:text-lg">{title}</h2>
      <p className="text-white text-xs sm:text-sm">{itemCount} Items</p>
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
      <div className="bg-gray-100 min-h-screen overflow-x-hidden">
        {/* Header */}
        <header className="flex flex-col sm:flex-row justify-between items-center py-4 px-6 sm:px-8 bg-white shadow-md w-full">
          <h1 className="text-xl sm:text-2xl font-bold">Shop</h1>
          <nav className="mt-2 sm:mt-0">
            <ul className="flex items-center space-x-2">
              <li>
                <Link href="/" className="text-gray-800 hover:text-blue-500 font-semibold">
                  Home
                </Link>
              </li>
              <li>
                <FaChevronRight className="text-gray-400" size={12} />
              </li>
              <li>
                <Link href="/shops" className="text-gray-400 hover:text-blue-500 font-semibold">
                  Shop
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Category Cards */}
        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 px-4 sm:px-8 mt-6 w-full">
          {categoryImages.map((img, index) => (
            <CategoryCard key={index} imgSrc={`/${img}.png`} title="CLOTHS" itemCount="5" />
          ))}
        </section>

        {/* Product Filter */}
        <section className="bg-white px-4 sm:px-8 py-4 mt-6 shadow-md w-full">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm sm:text-base text-gray-600">Showing all 12 results</p>
            <div className="flex items-center space-x-2 mt-4 sm:mt-0">
              <span className="text-sm sm:text-base font-semibold text-gray-700">Views:</span>
              <button className="flex items-center justify-center p-2 border rounded hover:bg-gray-200">
                <FaThLarge className="text-gray-600" size={18} />
              </button>
              <button className="flex items-center justify-center p-2 border rounded hover:bg-gray-200">
                <FaList className="text-gray-600" size={18} />
              </button>
              <select className="border rounded px-2 py-1 text-gray-700 text-sm sm:text-base">
                <option>Popularity</option>
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
              <button className="bg-blue-500 text-white text-sm sm:text-base px-3 sm:px-4 py-1 sm:py-2 rounded hover:bg-blue-700">
                Filter
              </button>
            </div>
          </div>
        </section>

        {/* Logos */}
        <section className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 px-4 sm:px-8 py-6 bg-gray-50 mt-6 w-full">
          {[
            "/Vector.png",
            "/Vector-(1).png",
            "/Vector-(2).png",
            "/Vector-(3).png",
            "/Vector-(4).png",
            "/Vector-(5).png",
          ].map((src, i) => (
            <Image key={i} src={src} alt={`Logo ${i + 1}`} width={80} height={40} className="h-auto" />
          ))}
        </section>

        {/* Product Cards */}
        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-4 sm:px-8 py-6 w-full">
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

        {/* Pagination */}
        <div className="flex items-center justify-center border border-gray-300 w-fit mx-auto px-4 py-3 sm:py-6 mb-4 rounded-md">
          <button className="text-gray-400 px-2 sm:px-3 border-r border-gray-300 hover:text-blue-700">First</button>
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              className={`px-2 sm:px-3 border-r ${
                page === 2 ? "text-white bg-blue-500" : "text-gray-400"
              } hover:bg-gray-200`}
            >
              {page}
            </button>
          ))}
          <button className="text-blue-500 px-2 sm:px-3 hover:text-blue-800">Next</button>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
