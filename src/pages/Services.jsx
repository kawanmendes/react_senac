import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="page-container">
      <h1>Our Services</h1>
      <p>Discover what we can do for you.</p>
      <div className="content">
        <div className="service-item">
          <h3>Web Development</h3>
          <p>Building modern, responsive websites and web applications.</p>
        </div>
        <div className="service-item">
          <h3>Mobile Apps</h3>
          <p>Creating intuitive mobile applications for iOS and Android.</p>
        </div>
        <div className="service-item">
          <h3>UI/UX Design</h3>
          <p>Designing beautiful and user-friendly interfaces.</p>
        </div>
        <div className="service-item">
          <h3>Consulting</h3>
          <p>Providing expert advice and strategic guidance.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
