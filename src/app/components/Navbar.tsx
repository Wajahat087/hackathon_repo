import Link from 'next/link';
import { FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="bg-gray-800 text-white">
    
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center py-4 px-6 max-w-full overflow-hidden">
        
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
          <a href="tel:(225)555-0118" className="flex items-center space-x-2 text-sm hover:text-blue-400">
            <FaPhone />
            <span>(225) 555-0118</span>
          </a>
          <a
            href="mailto:michelle.rivera@example.com"
            className="flex items-center space-x-2 text-sm hover:text-blue-400"
          >
            <FaEnvelope />
            <span>michelle.rivera@example.com</span>
          </a>
        </div>

        
        <p className="text-sm text-center sm:text-left mt-2 sm:mt-0">Follow Us and get a chance to win 80% off</p>

        
        <div className="flex items-center space-x-4 mt-2 sm:mt-0">
          <p className="text-sm hidden sm:block">Follow us:</p>
          <a href="#" className="hover:text-blue-400">
            <FaFacebook />
          </a>
          <a href="#" className="hover:text-pink-500">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-blue-300">
            <FaTwitter />
          </a>
        </div>
      </div>

      
      <nav className="bg-white">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center py-3 px-6 max-w-full overflow-hidden">
          
          <h1 className="text-xl font-bold text-gray-800">Bandage</h1>

          
          <div className="sm:hidden flex items-center space-x-4">
           
            <button className="text-gray-800 hover:text-blue-400">
              <i className="fas fa-bars"></i>
            </button>
          </div>

         
          <ul className="flex flex-col sm:flex-row sm:px-5 space-y-4 sm:space-y-0 sm:space-x-6 mt-4 sm:mt-0 max-w-full overflow-hidden">
  <li>
    <Link href="/" className="hover:text-blue-400 text-gray-800 font-bold">
      Home
    </Link>
  </li>
  <li>
    <Link
      href="/product"
      className="hover:text-blue-400 text-gray-800 font-bold flex items-center gap-1"
    >
      <span>Products</span>
      <FaChevronDown className="text-gray-600 mt-[1px]" />
    </Link>
  </li>
  {/* <li>
    <Link href="../About" className="hover:text-blue-400 text-gray-800 font-bold">
      About
    </Link>
  </li> */}
  {/* <li>
    <Link href="../Pricing" className="hover:text-blue-400 text-gray-800 font-bold">
      Blog
    </Link>
  </li> */}
  {/* <li>
    <Link href="../Pricings" className="hover:text-blue-400 text-gray-800 font-bold">
      Pricing
    </Link>
  </li> */}
  {/* <li>
    <Link
      href="../contact"
      className="hover:text-blue-400 text-gray-800 font-bold"
    >
      Contact
    </Link>
  </li> */}
  {/* <li>
    <Link href="../Shops" className="hover:text-blue-400 text-gray-800 font-bold">
      Pages
    </Link>
  </li> */}
</ul>

          
          <div className="flex items-center space-x-6 mt-4 sm:mt-0 ml-5">
            
            <Link href="/login" className="flex items-center hover:text-blue-400 text-blue-400 font-bold">
              <i className="fas fa-user mr-1"></i> Login / Register
            </Link>

            
            <button className="hover:text-blue-400 text-blue-400">
              <i className="fas fa-search"></i>
            </button>

            
            <Link href="/cart" className="flex items-center hover:text-blue-400 text-blue-400">
              <i className="fas fa-shopping-cart mr-1"></i> 1
            </Link>

            
            <Link href="/wishlist" className="flex items-center hover:text-blue-400 text-blue-400 mr-4">
              <i className="fas fa-heart mr-1"></i> 1
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
