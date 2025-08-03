import React from 'react';

const Features = () => (
  <section id="features" className="section features" data-aos="fade-up">
    <h2>Features</h2>
    <div className="feature-grid">
      <div className="feature-card" data-aos="zoom-in"><h3>Responsive Design</h3><p>Looks great on all devices.</p></div>
      <div className="feature-card" data-aos="zoom-in" data-aos-delay="100"><h3>Interactive UI</h3><p>Enhanced user experience with animations.</p></div>
      <div className="feature-card" data-aos="zoom-in" data-aos-delay="200"><h3>Fast Performance</h3><p>Quick load time and smooth nav.</p></div>
    </div>
  </section>
);

export default Features;