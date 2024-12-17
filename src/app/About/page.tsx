import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

// pages/about.js

export default function About() {
    return (
      <div className="font-sans">
        <Navbar />
        {/* Header Section */}
        <section className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 py-12">
  <div className="md:w-1/2 text-center md:text-left">
    <h2 className="text-gray-800 font-bold text-4xl mb-4">ABOUT US</h2>
    <p className="text-gray-600 mb-6 leading-relaxed">
      We are passionate about delivering the best solutions for your needs.
      Let’s grow your business together.
    </p>
    <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md transition">
      Learn More
    </button>
  </div>
  <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
    <img
      src="/hero-2-bg-shape-cover.png"
      alt="About Us"
      className="w-full max-w-[600px] h-auto md:max-w-[750px] lg:max-w-[900px] object-contain"
    />
  </div>
</section>


  
        {/* Statistics Section */}
        <section className="bg-gray-100 py-8">
          <div className="flex justify-around text-center px-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-800">15K</h3>
              <p className="text-gray-500 text-sm">Customers</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">150K</h3>
              <p className="text-gray-500 text-sm">Products Sold</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">15</h3>
              <p className="text-gray-500 text-sm">Awards</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">100+</h3>
              <p className="text-gray-500 text-sm">Partners</p>
            </div>
            
          </div>

          <img
            src="/desktop-content-9.png"
            alt="About Us"
            className="w-full max-w-[600px] h-auto md:max-w-[750px] lg:max-w-[900px] object-contain items-center"
          />
        </section>


        
  
        {/* Video Section */}
        <section className="flex justify-center py-8">
          <div className="w-full max-w-4xl">
            <img
              src="/filter(1).png" // Replace with your image path
              alt="Video"
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>
  
        {/* Team Section */}
        <section className="py-12 px-6">
          <h2 className="text-center text-3xl font-semibold text-gray-800 mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: "Username", role: "Professional", img: "/team-1-user-1.jpg" },
              { name: "Username", role: "Professional", img: "/team-1-user-2.jpg" },
              { name: "Usernaem", role: "Professional", img: "/team-1-user-3.jpg" },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-36 h-36"
                />
                <h3 className="text-gray-800 font-bold">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
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
            ))}
          </div>
        </section>
  
        {/* Companies Section */}
        <section className="bg-gray-100 py-8">
          <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">
            Big Companies Are Here
          </h2>
          <div className="flex justify-center gap-8 flex-wrap">
            {["tesla", "lyft", "stripe", "shopify", "aws"].map((company, index) => (
              <div key={index} className="text-gray-500 text-xl uppercase">
                {company}
              </div>
            ))}
          </div>
        </section>
  
        {/* CTA Section */}
        <section className="bg-blue-500 text-white py-12 px-6">
          <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Now Let’s grow Yours</h2>
              <p className="text-gray-100 leading-relaxed mb-6">
                Join hands with us to elevate your business to the next level. Start now.
              </p>
              <button className="bg-white text-blue-500 font-semibold px-6 py-2 rounded-lg shadow-lg hover:bg-gray-100 transition">
                Get Started
              </button>
            </div>
            <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
              <img
                src="/unsplash_1.png" 
                alt="Grow"
                className="w-2/3 max-w-sm"
              />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
  