import React from "react";
import { Link } from "react-router-dom";
import chilli from "../../images/chilliesProduct.jpeg";
import "./service.css";

const vegetableProducts = [
  {
    id: 1,
    name: "Chilli",
    image: chilli,
    description: "High-quality Chilli for all types of cuisines.",
  },
];

const Vegetables = () => {
  return (
    <div className="py-10 pt-28">
      <div className="container">
        <div className="text-center mb-20 max-w-[800px] mx-auto">
          <h1 className="text-3xl font-bold">Vegetables</h1>
          <p className="text-m text-gray-600 mt-4">
            Our vegetables are sourced from trusted local farms, ensuring that
            you receive the freshest and most nutritious options. Whether for
            salads, soups, or sides, we have a wide variety to meet your culinary needs.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-14 place-items-center">
          {vegetableProducts.map((product) => (
            <div
              key={product.id}
              className="rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
            >
              <div className="h-[200px] flex items-center justify-center overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 group-hover:rotate-6 duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-4 text-center">
                <h1 className="text-xl font-bold">{product.name}</h1>
                <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                  {product.description}
                </p>
                <Link to="/contact">
                  <button className="mt-4 bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded-full">
                    Enquiry
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <a
        href="https://wa.me/918080518692"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
};

export default Vegetables;