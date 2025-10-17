import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="page-container">
      <h1>About Us</h1>
      <div className="content">
        <p className="content-intro">Learn more about our company and mission.</p>
        <div className="service-item">
          <h2>Our Story</h2>
          <p>
            We are dedicated to providing excellent service and innovative solutions.
            Our team is passionate about what we do and committed to excellence.
          </p>
        </div>
        <div className="service-item">
          <h2>Our Mission</h2>
          <p>
            To deliver high-quality products and services that exceed our customers' expectations
            and create lasting value.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
