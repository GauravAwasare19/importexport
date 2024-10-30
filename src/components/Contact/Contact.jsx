import React, { useState, useEffect, useRef } from 'react';
import './Contact.css';

const Contact = () => {
  const [result, setResult] = React.useState("");
  const [isMapVisible, setIsMapVisible] = useState(false);
  const mapRef = useRef();

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9d960896-4183-4a3e-ac71-ab814a2181b6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsMapVisible(true);
            observer.disconnect(); // Stop observing once loaded
          }
        });
      },
      { threshold: 0.1 }
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="contact-page pt-28">
      <h2 className='contact-heading'>Get in touch</h2>
      <h4 className='contact-subheading'>Thank you for visiting our website. We are committed to the highest standards of customer service. Feel free to connect with us for sharing your feedback, queries, suggestions, and enquiries with the form given below.</h4>

      <div className="contact-container">
        <div className="map-container" ref={mapRef}>
          {isMapVisible && (
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.4562136698805!2d73.75526207496611!3d18.643512982473972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9f195c4ae31%3A0xc89d0f197095c927!2sAishwaryam%20Melody!5e0!3m2!1sen!2sin!4v1729762267362!5m2!1sen!2sin" 
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          )}
        </div>

        <div className="contact-details-form">
          <div className="contact-details">
            <p className="office-title">Office</p>
            <p>
              <strong>Address: </strong>
              <br />
              A703 - Aishwaryam Melodies Sector no 32A Ravet Pune, 412101
            </p>
            <p>
              <strong>Contact: </strong>+(91) 8080518692
            </p>
            <p>
              Email: <a href="mailto:Veggiesphere24@gmail.com">Veggiesphere24@gmail.com</a>
            </p>
          </div>

          <section className="form-section">
            <form className="contact-form" onSubmit={onSubmit}>
              <h3>Message Us</h3>
              <div className="input-box">
                <label>Full Name</label>
                <input type="text" className="field" placeholder="Enter your name" name="name" required />
              </div>
              <div className="input-box">
                <label>Email Address</label>
                <input type="email" className="field" placeholder="Enter your email" name="email" required />
              </div>
              <div className="input-box">
                <label>Phone Number</label>
                <input type="number" className="field" placeholder="Enter your contact number" name="mobilenumber" required />
              </div>
              <div className="input-box">
                <label>Your Message</label>
                <textarea name="message" className="field mess" placeholder="Your message"></textarea>
              </div>
              <button type="submit">Send Message</button>
            </form>
          </section>

          {/* Form result message */}
          {result && <div className="form-result">{result}</div>}

          {/* WhatsApp button */}
          <a href="https://wa.me/918080518692" className="whatsapp_float" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
