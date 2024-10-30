import React from "react";
import spin from "../../images/spin.png";
import Vector from "../../images/backg1.jpg";
import CoverBanner from "../CoverBanner/CoverBanner";
import Banner from "../Banner/Banner";
import Certificates from "../Certificates/Certificates";
import { Link } from "react-router-dom";
import "./hero.css";

const Hero = () => {
  const [imageId, setImageId] = React.useState(spin);

  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "180%",  // Increased height to make the background vector taller
    width: "100%",
  };

  return (
    <>
      <div
        className="pt-24 min-h-[650px] sm:min-h-[700px] bg-gray-100 flex justify-center items-center"
        style={bgImage}
      >
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* Text content section */}
            <div
              data-aos="zoom-out"
              data-aos-duration="400"
              data-aos-once="true"
              className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 text-white"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black">
                Welcome{" "}
                <span className="text-white font-black">
                  Veggiesphere
                </span>
              </h1>
              <p className="text-sm md:text-base font-semibold text-white">
                As a distinguished producer and exporter, we supply all types of fresh fruits and vegetables, lettuces, herbs, leaves, spices, pulses, powders, dried nuts, dairy products, food products, and many more to the Maldives and other destinations globally. Veggiesphere believes in delivering and serving its clientele with products that uphold the highest standards of quality.
              </p>
              <div className="flex justify-center sm:justify-start"> {/* Center button on smaller screens */}
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-3 rounded-full flex items-center justify-center w-[150px] sm:w-[180px] no-underline hover:no-underline font-bold mx-auto sm:mx-0"
                >
                  Reach Out
                </Link>
              </div>
            </div>

            {/* Spinning Image section */}
            
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

      {/* Additional sections */}
      <Banner />
      <CoverBanner />
      <Certificates />
    </>
  );
};

export default Hero;
