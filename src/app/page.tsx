import Head from "next/head";
import Navbar from "./components/Navbar";
import HeroSection from "../app/components/HeroSection";
import Footer from "../app/components/Footer";
import EditorsPick from "../app/components/EditorsPick";
import FeaturedProducts from '../app/components/FeaturedProducts';
import HeroSection2 from "./components/HeroSection2";
import ProductCard from "../app/components/Productcard";
import Link from "next/link";

export default function Home() {
  const products = [
    { title: "Product 1", description: "Short description.", price: "$99.99", image: null },
    { title: "Product 2", description: "Short description.", price: "$79.99", image: null },
    { title: "Product 3", description: "Short description.", price: "$59.99", image: null },
    { title: "Product 4", description: "Short description.", price: "$49.99", image: null },
    { title: "Product 5", description: "Short description.", price: "$89.99", image: null },
    { title: "Product 6", description: "Short description.", price: "$69.99", image: null },
  ];

  return (
    <div className="bg-gray-100">
      
      <Navbar />
      <HeroSection />
      <EditorsPick /> 
      <FeaturedProducts />
      <HeroSection2 />
      <ProductCard />
      <Footer />
    </div>
  );
}
