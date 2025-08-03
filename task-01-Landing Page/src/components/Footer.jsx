import React from 'react';

const Footer = () => (
  <footer className="footer bg-gray-900 text-white py-10 px-6" data-aos="fade-up">
    <div className="footer-container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
      
      <div className="footer-col">
        <h3 className="text-2xl font-semibold mb-4">Devendra Singh</h3>
        <p className="text-gray-400">Crafting modern, responsive, and interactive web experiences. Explore my work and connect below.</p>
      </div>
      
      <div className="footer-col">
        <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
        <ul className="space-y-2">
          <li><a href="#home" className="hover:underline text-gray-300">Home</a></li>
          <li><a href="#features" className="hover:underline text-gray-300">Features</a></li>
          <li><a href="#about" className="hover:underline text-gray-300">About</a></li>
          <li><a href="#contact" className="hover:underline text-gray-300">Contact</a></li>
        </ul>
      </div>
      
      <div className="footer-col">
        <h4 className="text-xl font-semibold mb-4">Contact</h4>
        <ul className="space-y-2 text-gray-300">
          <li>Email: <a href="mailto:devsingh200529@gmail.com" className="hover:underline">devsingh200529@gmail.com</a></li>
          <li>Portfolio: <a href="https://devs-portfolio-navy.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:underline">View Site</a></li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/devendra-singh-97b147216" target="_blank" rel="noopener noreferrer" className="hover:underline">/in/devendra-singh</a></li>
          <li>GitHub: <a href="https://github.com/DevS-2004" target="_blank" rel="noopener noreferrer" className="hover:underline">@DevS-2004</a></li>
        </ul>
      </div>

    </div>

    <div className="footer-bottom text-center mt-10 border-t border-gray-700 pt-4 text-gray-400">
      <p>&copy; 2025 Devendra Singh. Made with ❤️ by <a href="https://github.com/DevS-2004" target="_blank" rel="noopener noreferrer" className="hover:underline text-white">Devendra</a></p>
    </div>
  </footer>
);

export default Footer;
