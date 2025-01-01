import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { FaChevronRight, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Pricing() {
    return (
        <div className="bg-gray-50 min-h-screen flex flex-col overflow-x-hidden">
            <Navbar />

            <div className="text-center px-4 sm:px-6 md:px-8">
                <h2 className="font-bold mt-7">WHAT WE DO</h2>
                <h1 className="font-bold text-3xl mb-4 mt-4">Innovation tailored for you</h1>

                <nav className="flex justify-center mb-8">
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
                            <FaChevronRight className="text-gray-400 mt-1" size={12} /> {/* Arrow */}
                        </li>
                        <li>
                            <Link
                                href="/team" // Corrected path for "Team" page
                                className="text-gray-400 hover:text-blue-500 font-semibold"
                            >
                                Team
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Image Section */}
                <section className="flex flex-wrap justify-center py-4 w-full">
                    <div className="flex flex-wrap justify-center items-start space-x-0 sm:space-x-4 w-full">
                        {/* 1st Column */}
                        <div className="flex-shrink-0 w-full sm:w-1/2 md:w-2/5">
                            <img
                                src="/unsplash_2.png"
                                alt="Left Image"
                                className="h-[50vh] w-full object-cover shadow-md"
                            />
                        </div>

                        {/* 2nd Column */}
                        <div className="grid grid-rows-2 gap-2 w-full sm:w-1/2 md:w-1/3">
                            <img
                                src="/unsplash_3.png"
                                alt="Image 2"
                                className="h-[25vh] w-full object-cover shadow-md"
                            />
                            <img
                                src="/unsplash_4.png"
                                alt="Image 3"
                                className="h-[25vh] w-full object-cover shadow-md"
                            />
                        </div>

                        {/* 3rd Column */}
                        <div className="grid grid-rows-2 gap-2 w-full sm:w-1/2 md:w-1/3">
                            <img
                                src="/unsplash_5.png"
                                alt="Image 4"
                                className="h-[25vh] w-full object-cover shadow-md"
                            />
                            <img
                                src="/unsplash_6.png"
                                alt="Image 5"
                                className="h-[25vh] w-full object-cover shadow-md"
                            />
                        </div>
                    </div>
                </section>
            </div>

            {/* Packages Section: Free, Standard, Premium */}
            <section className="py-8 px-6 bg-gray-100">
                <h2 className="text-center text-3xl font-semibold text-gray-800 mb-8">Choose Your Package</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-full mx-auto">
                    {/* Free Package */}
                    <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Free</h3>
                        <p className="text-gray-600 mb-4">For beginners who want to explore.</p>
                        <div className="text-2xl font-semibold text-blue-500 mb-4">$0</div>
                        <ul className="text-left space-y-2 mb-4">
                            <li>Feature 1</li>
                            <li>Feature 2</li>
                            <li>Feature 3</li>
                        </ul>
                        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition">
                            Get Started
                        </button>
                    </div>

                    {/* Standard Package */}
                    <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Standard</h3>
                        <p className="text-gray-600 mb-4">For growing businesses.</p>
                        <div className="text-2xl font-semibold text-blue-500 mb-4">$49/month</div>
                        <ul className="text-left space-y-2 mb-4">
                            <li>Feature 1</li>
                            <li>Feature 2</li>
                            <li>Feature 3</li>
                        </ul>
                        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition">
                            Get Started
                        </button>
                    </div>

                    {/* Premium Package */}
                    <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Premium</h3>
                        <p className="text-gray-600 mb-4">For enterprises with high needs.</p>
                        <div className="text-2xl font-semibold text-blue-500 mb-4">$99/month</div>
                        <ul className="text-left space-y-2 mb-4">
                            <li>Feature 1</li>
                            <li>Feature 2</li>
                            <li>Feature 3</li>
                        </ul>
                        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition">
                            Get Started
                        </button>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-8 px-6">
                <h2 className="text-center text-3xl font-semibold text-gray-800 mb-8">About Our Services</h2>
                <p className="text-gray-600 text-center max-w-4xl mx-auto mb-4">
                    The quick fox jumps over the lazy dog.
                </p>
                <p className="text-gray-600 text-center max-w-4xl mx-auto">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                </p>
            </section>

            {/* Free Trial Section */}
            <div className="bg-gray-100 flex flex-col items-center justify-center py-10 px-6">
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

            <Footer />
        </div>
    );
}
