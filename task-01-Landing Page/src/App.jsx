import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Features from './components/Features.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Contact />
      <Footer />
    </>
  );
};

export default App;