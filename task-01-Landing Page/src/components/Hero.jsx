import React from 'react';

const Hero = () => (
  <section className="hero fullscreen" id="home" data-aos="fade-up">
    <div className="hero-content">
      <h1 data-aos="fade-down">Empower Your Digital Presence</h1>
      <p data-aos="zoom-in">
        Build beautiful, responsive, and functional websites with modern tools and best practices.
      </p>
      <a href="#features" className="btn" data-aos="fade-up">Get Started</a>
      <div className="stats" data-aos="fade-up" data-aos-delay="100">
        <div className="stat-box"><h2>10+</h2><p>Years Experience</p></div>
        <div className="stat-box"><h2>500+</h2><p>Projects Delivered</p></div>
        <div className="stat-box"><h2>24/7</h2><p>Support</p></div>
      </div>
    </div>
  </section>
);

export default Hero;
