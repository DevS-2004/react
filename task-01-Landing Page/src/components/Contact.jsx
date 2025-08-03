import React from 'react';

const Contact = () => (
  <section id="contact" className="section contact fullscreen" data-aos="fade-up">
    <h2>Contact Us</h2>
    <form className="contact-form" data-aos="fade-up" data-aos-delay="200">
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea rows="5" placeholder="Your Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </section>
);

export default Contact;
