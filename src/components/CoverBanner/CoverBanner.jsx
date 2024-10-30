import React from "react";
import carousel1 from "../../images/carousel6.jpg"; 
import carousel2 from "../../images/carousel5.jpg"; 
import carousel3 from "../../images/carousel4.jpg"; 
import "./cover.css";

const CoverBanner = () => {

  return (
    <div>
      {/* Carousel */}
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={carousel1} className="d-block w-100" alt="Carousel 1" loading="lazy"/> {/* Lazy loading added */}
            <div className="carousel-caption custom-caption d-none d-md-block">
              <h5>Exporter of Farm Fresh Vegetables and Fruits</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src={carousel2} className="d-block w-100" alt="Carousel 2" loading="lazy"/> {/* Lazy loading added */}
            <div className="carousel-caption custom-caption d-none d-md-block">
              <h5>Exporter of Farm Fresh Vegetables and Fruits</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src={carousel3} className="d-block w-100" alt="Carousel 3" loading="lazy"/> {/* Lazy loading added */}
            <div className="carousel-caption custom-caption d-none d-md-block">
              <h5>Exporter of Farm Fresh Vegetables and Fruits</h5>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default CoverBanner;
