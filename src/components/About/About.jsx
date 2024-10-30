import React from 'react';
import './About.css';
import CoverBanner from '../CoverBanner/CoverBanner';
import aboutus from "../../images/aboutus.png";

const About = () => {
  return (
    <>
      {/* Move the heading outside the container */}
      <h2 className="text-xxl mt-28 font-bold about-heading">About Us</h2>
      
      <div className="about-page-container">
        <div className="about-text interactive-text">
          <p>
            Welcome to <strong>Veggiesphere</strong>! Established in 2024, we have quickly grown into a trusted exporter of fresh vegetables and fruits to various markets across the globe. Our passion for quality produce drives us to connect with farmers who share our dedication to sustainable farming practices.
          </p>
          <p>
            At Veggiesphere, we believe that good food should be accessible to everyone. That’s why we focus on sourcing only the freshest and highest-quality fruits and vegetables, ensuring that each product meets our strict quality standards before it reaches our customers.
          </p>
        </div>
        <div className="about-image">
          <img src={aboutus} alt="Veggiesphere" />
        </div>
      </div>
      <div className="about-page pt-6">
        <h3>Our Mission</h3>
        <p>
          Our mission is simple: to promote healthy living through fresh produce. We aim to inspire our customers to make healthier choices by providing access to nutritious, delicious, and seasonal fruits and vegetables. We are dedicated to fostering a culture of wellness and sustainability in everything we do.
        </p>

        <h3>Quality Assurance</h3>
        <p>
          Quality is at the heart of Veggiesphere. Our team works tirelessly to ensure that every product we export undergoes rigorous quality checks. From the moment we source our produce to the time it arrives at your doorstep, we prioritize freshness and quality to guarantee satisfaction.
        </p>

        <h3>Our Values</h3>
        <ul>
          <li><strong>Sustainability:</strong> We are committed to environmentally friendly practices, working with farmers who prioritize sustainability.</li>
          <li><strong>Community:</strong> We believe in giving back to the communities we serve, supporting local farmers and initiatives that promote agriculture.</li>
          <li><strong>Customer Satisfaction:</strong> Our customers are our top priority. We listen to their needs and strive to exceed their expectations.</li>
        </ul>

        <h3>Meet Our Team</h3>
        <p>
          Our team is made up of passionate individuals who are experts in their fields. From sourcing to logistics, every member of Veggiesphere plays a crucial role in delivering fresh produce to your tables. We work collaboratively to ensure that our processes are efficient, transparent, and focused on quality.
        </p>

        <h3>Join Us on Our Journey</h3>
        <p>
          We invite you to join us on our journey towards healthier eating and sustainable practices. Whether you are a retailer looking for quality produce or a consumer who values fresh ingredients, Veggiesphere is here to serve you. Together, we can create a healthier world, one bite at a time!
        </p>
      </div>
      {/* WhatsApp button */}
      <a href="https://wa.me/918080518692" className="whatsapp_float" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-whatsapp"></i>
      </a>
      <CoverBanner />
    </>
  );
};

export default About;
