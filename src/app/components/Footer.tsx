import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-6">
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        <h1 className="text-2xl font-bold text-gray-800">Bandage</h1>


        <div className="flex space-x-4">
          <a href="#" className="text-blue-500 hover:text-blue-900 transition">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-900 transition">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-900 transition">
            <FaTwitter size={24} />
          </a>
        </div>
      </div>

      <footer className="bg-white text-gray-800 py-6">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {/* First Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Company Info</h3>
          <ul>
            <li><a href="#" className="hover:text-blue-500">About Us</a></li>
            <li><a href="#" className="hover:text-blue-500">Carrier</a></li>
            <li><a href="#" className="hover:text-blue-500">We Are Hiring</a></li>
            <li><a href="#" className="hover:text-blue-500">Blog</a></li>
          </ul>
        </div>

        {/* Second Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Legal</h3>
          <ul>
            <li><a href="#" className="hover:text-blue-500">About Us</a></li>
            <li><a href="#" className="hover:text-blue-500">Carrier</a></li>
            <li><a href="#" className="hover:text-blue-500">We Are Hiring</a></li>
            <li><a href="#" className="hover:text-blue-500">Blog</a></li>
          </ul>
        </div>

        {/* Third Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Features</h3>
          <ul>
            <li><a href="#" className="hover:text-blue-500">Business Marketing</a></li>
            <li><a href="#" className="hover:text-blue-500">User Analytic</a></li>
            <li><a href="#" className="hover:text-blue-500">Live Chat</a></li>
            <li><a href="#" className="hover:text-blue-500">Unlimited Support</a></li>
          </ul>
        </div>

        {/* Fourth Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Resources</h3>
          <ul>
            <li><a href="#" className="hover:text-blue-500">IOS & Android</a></li>
            <li><a href="#" className="hover:text-blue-500">Watch a Demo</a></li>
            <li><a href="#" className="hover:text-blue-500">Customers</a></li>
            <li><a href="#" className="hover:text-blue-500">ΑΡΙ</a></li>
          </ul>
        </div>

        {/* Fifth Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Get In Touch</h3>
          <div className="mb-4 flex items-center space-x-4">
  <input
    type="email"
    placeholder="Your Email"
    className="w-full md:w-3/4 p-2 bg-white text-gray-800 border border-gray-700 rounded-md"
  />
  <button className="w-auto p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
  Subscribe
</button>

</div>

          <p className="text-sm text-gray-500">Lore ipsum sum dolor Amit</p>
        </div>
      </div>

      <div className="bg-white text-gray-800 px-6 py-4">
        <p className="text-sm text-gray-800">Made with Love By Finland. All Right Reserved</p>
      </div>
    </footer>
    </footer>
  );
}
