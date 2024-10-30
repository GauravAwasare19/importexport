import React from "react";
import { Link } from "react-router-dom";
import "./service.css";

// Import images
import vegetablesImage from "../../images/vegetableproduct.jpeg";
import fruitsImage from "../../images/fruits.jpeg";

const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10 pt-28">
        <div className="container">
          <div className="text-center mb-20 max-w-[800px] mx-auto">
            <h1 className="text-3xl font-bold">Products</h1>
            <p className="text-lg text-gray-700 mt-4">
              Discover our commitment to quality and sustainability. Our products are sourced directly from local farms to ensure freshness and flavor. Whether you're looking for nutritious vegetables or sweet fruits, we've got you covered!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-14 place-items-center">
            {/* Vegetables Card */}
            <div className="rounded-2xl bg-white hover:bg-primary relative shadow-xl duration-high group max-w-[400px] p-8">
              <Link to="/vegetables" className="no-underline hover:no-underline">
                <img
                  src={vegetablesImage}
                  alt="Vegetables"
                  className="w-full h-60 object-cover rounded-t-2xl mb-4"
                />
                <h2 className="text-2xl font-bold text-center">Vegetables</h2>
                <p className="text-center text-gray-500 mt-2">
                  Explore our variety of fresh vegetables. From leafy greens to root vegetables, our selection offers quality, freshness, and flavor that you can trust.
                </p>
                <p className="text-center text-gray-500 mt-2">
                  Perfect for salads, soups, and every dish in between, our vegetables provide the essential nutrients you need for a balanced, healthy diet.
                </p>
              </Link>
              <Link
                to="/vegetables"
                className="no-underline hover:no-underline mt-4 inline-block bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-full text-center w-full hover:scale-105 duration-200"
              >
                View Products
              </Link>
            </div>

            {/* Fruits Card */}
            <div className="rounded-2xl bg-white hover:bg-primary relative shadow-xl duration-high group max-w-[400px] p-8">
              <Link to="/fruits" className="no-underline hover:no-underline">
                <img
                  src={fruitsImage}
                  alt="Fruits"
                  className="w-full h-60 object-cover rounded-t-2xl mb-4"
                />
                <h2 className="text-2xl font-bold text-center">Fruits</h2>
                <p className="text-center text-gray-500 mt-2">
                  Discover our selection of fresh, juicy fruits. From tropical delights to seasonal favorites, each fruit is packed with natural goodness.
                </p>
                <p className="text-center text-gray-500 mt-2">
                  Enjoy our fruits as a healthy snack or use them to add a burst of sweetness to any meal, knowing they are sourced with care and quality.
                </p>
              </Link>
              <Link
                to="/fruits"
                className="no-underline hover:no-underline mt-4 inline-block bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-full text-center w-full hover:scale-105 duration-200"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp button */}
      <a
        href="https://wa.me/918080518692"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </>
  );
};

export default Services;
