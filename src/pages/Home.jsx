import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="page-container">
      <h1>Welcome to Home Page</h1>
      <p>This is the home page of our application.</p>
      <div className="content">
        <h2>Getting Started</h2>
        <p>
          Explore our website to learn more about what we offer. Check out our services,
          learn about our story, or get in touch with us.
        </p>
      </div>
    </div>
  );
};

export default Home;
