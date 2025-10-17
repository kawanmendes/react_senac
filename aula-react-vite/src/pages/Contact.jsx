import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="page-container">
      <h1>Contact Us</h1>
      <p>Get in touch with us.</p>
      <div className="content">
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Email: info@myapp.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Main Street, City, Country</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
