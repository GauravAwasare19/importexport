import React from "react";
import Slider from "react-slick";
import cert1 from "../../images/certificate1.jpeg";
import cert2 from "../../images/certificate2.jpeg";
import cert3 from "../../images/certificate3.png";
import cert4 from "../../images/certificate4.png";

const testimonialData = [
  {
    id: 1,
    name: "Agricultural and Processed Food Products Export Development Authority",
    text: "Certified by APEDA, Veggisphere LLP ensures adherence to the highest standards in the export of agricultural and processed food products, promoting sustainable and quality-driven practices.",
    img: cert1,
  },
  {
    id: 2,
    name: "Directorate General of Foreign Trade (DGFT)",
    text: "Accredited by the DGFT for commerce and foreign trade, Veggisphere LLP is authorized to engage in international trade, ensuring compliance with global regulations and trade standards.",
    img: cert2,
  },
  {
    id: 3,
    name: "LLP Identification Number : ACI-6746 ",
    text: "Veggiesphere LLP is officially recognized and registered under the Limited Liability Partnership Act, 2008, as certified by the Government of India, Ministry of Corporate Affairs.",
    img: cert3,
  },
  {
    id: 4,
    name: "Importer-Exporter Code(IEC) : AAYFV8309F ",
    text: "Officially recognized and registered for Ministry of Commerce and Industry / वाणि ज्य और उद्योग मंत्रालय Directorate General of Foreign Trade / वि देश व्यापार महानि देशालय",
    img: cert4,
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="py-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 md:mb-12 max-w-lg mx-auto">
            <h1 className="text-2xl md:text-3xl font-bold">License and Certificates</h1>
            <p className="text-sm md:text-s text-gray-400">
              Essential licenses and certificates validate professional competence, essential for credibility and trust in diverse fields.
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-lg mx-auto gap-4 md:gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map((data) => {
                return (
                  <div className="my-2 md:my-4" key={data.id}>
                    <div className="flex flex-col justify-center items-center gap-3 text-center shadow-lg p-4 md:p-6 mx-2 md:mx-4 rounded-xl bg-white relative h-[400px] sm:h-[450px]">
                      <img
                        className="block mx-auto object-contain w-full h-[150px] sm:h-[200px] mb-3"
                        src={data.img}
                        alt={data.name}
                      />
                      <p className="text-gray-500 text-xs sm:text-sm">{data.text}</p>
                      <h1 className="text-lg sm:text-xl font-bold">{data.name}</h1>
                      <p className="text-black/20 text-7xl md:text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
