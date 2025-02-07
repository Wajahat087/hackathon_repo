import Head from "next/head";

import HeroSection from "../app/components/HeroSection";
import Footer from "../app/components/Footer";
import FeaturedProducts from '../app/components/FeaturedProduct';
import ProductCard from "../app/components/Productcard";
import OurProduct from "./components/OurProduct";

export default function Home() {

  return (
    <div className="bg-gray-100">
      
      
      <HeroSection />
      <OurProduct /> 
      <FeaturedProducts />
      <ProductCard />
    </div>
  );
}
