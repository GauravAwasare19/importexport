import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import vegetable from "../../images/vegetablecircle.png";
import fruits from "../../images/fruitscircle.png";

const Banner = () => {

  return (
    <div className="min-h-[600px]">
      <div className="min-h-[600px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0">
        <div data-aos="slide-up" data-aos-duration="300" className="container">
          <div className="flex flex-col items-center text-center gap-8 sm:pt-0">
            <h1 className="text-4xl sm:text-5xl font-bold">
              Explore the Products
            </h1>
            <p className="text-base sm:text-lg text-gray-500 tracking-wide leading-7 max-w-3xl">
              Veggiesphere offers an extensive range of farm fresh agro products
              to cater to the requirements of our esteemed clientele that
              includes Supermarket chains, Resorts, Distributors, and
              Wholesalers.
              <br />
              <br />
              Our comprehensive product range comprises various categories of
              Lettuces, Fresh Vegetables, Melons, Mangos, Grapes, Herbs, and
              Leaves.
            </p>
            <div className="flex gap-10 justify-center">
              <Link
                to="/vegetables"
                className="flex flex-col items-center no-underline hover:no-underline"
              >
                <img
                  src={vegetable}
                  alt="Vegetable"
                  loading="lazy"
                  className="h-40 w-40 sm:h-48 sm:w-48 rounded-full transition-transform duration-300 hover:scale-105"
                />
                <span className="mt-3 text-base sm:text-lg text-gray-700">Vegetables</span>
              </Link>
              <Link
                to="/fruits"
                className="flex flex-col items-center no-underline hover:no-underline"
              >
                <img
                  src={fruits}
                  alt="Fruits"
                  loading="lazy"
                  className="h-40 w-40 sm:h-48 sm:w-48 rounded-full transition-transform duration-300 hover:scale-105"
                />
                <span className="mt-3 text-base sm:text-lg text-gray-700">Fruits</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
