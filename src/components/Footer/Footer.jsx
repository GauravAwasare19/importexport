import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import footerLogo from "../../images/logo-modified.png";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-gray-100 text-black">
      <section className="max-w-[1200px] mx-auto px-4 py-6">
        <div className="grid md:grid-cols-3 gap-6">

          {/* Left side */}
          <div className="flex flex-col items-start">
            <h1 className="text-2xl font-bold mb-3 flex items-center gap-2 text-black">
              <img src={footerLogo} alt="Logo" className="max-w-[50px] w-30 h-20 object-contain" />
              Veggiesphere
            </h1>
            <p className="mb-4 text-black">
              Discover the best of plant-based living with Veggiesphere. Join us on our journey!
            </p>
            <div className="flex items-center gap-2 text-black">
              <FaLocationArrow />
              <p>Pune, Maharashtra</p>
            </div>
            <div className="flex items-center gap-2 mt-1 text-black">
              <FaMobileAlt />
              <p>+91 8080518692</p>
            </div>

            {/* Social Handle */}
            <div className="flex gap-3 mt-4 text-black">
              <a href="#" >
                <FaInstagram className="text-2xl" />
              </a>
              <a href="#" >
                <FaFacebook className="text-2xl" />
              </a>
              <a href="#" >
                <FaLinkedin className="text-2xl" />
              </a>
            </div>

          </div>
          
          {/* Right side */}
          <div className="col-span-2 flex flex-col sm:flex-row justify-between text-black">
            <div className="py-4">
              <h2 className="text-lg font-semibold mb-2 text-black">Quick Links</h2>
              <ul className="flex flex-col gap-1 text-black">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>
            <div className="py-4">
              <h2 className="text-lg font-semibold mb-2 text-black">Newsletter</h2>
              <p>Subscribe for updates and offers:</p>
              <form className="flex flex-col mt-2">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="p-2 rounded-md mb-2 text-black"
                  required
                />
                <button className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition duration-200">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Footer below */}
        <div>
          <div className="text-center py-4 border-t border-gray-600 mt-4 text-black">
            &copy; 2024 All rights reserved  </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
