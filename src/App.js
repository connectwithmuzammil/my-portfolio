import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom/dist'
import ScrollReveal from 'scrollreveal'
import HeroSection from './screens/HeroSection/Index'
import About from './screens/About/Index'
import Services from './screens/Services/Index'
import Portfolio from './screens/Portfolio/Index'
import Contact from './screens/Contact/Index'
import Footer from './components/Footer/Index'
import Navbar from './components/Navbar/Index'
const App = () => {
  useEffect(() => {
    const scrollReveal = ScrollReveal();

    scrollReveal.reveal(".home-content, .heading", {
      origin: "top",
      distance: "80px",
      duration: 2000,
      delay: 200,
      // reset: true,
    });
    scrollReveal.reveal(".home-img, .service-container, .portfolio-box, .contact form", {
      origin: "bottom",
      distance: "80px",
      duration: 2000,
      delay: 200,
      // reset: true,
    });
    scrollReveal.reveal(".home-content h1, .about-img", {
      origin: "left",
      distance: "80px",
      duration: 2000,
      delay: 200,
      // reset: true,
    });
    scrollReveal.reveal(".home-content p, .about-content", {
      origin: "right",
      distance: "80px",
      duration: 2000,
      delay: 200,
      // reset: true,
    });
  }, []);
  return (
    <div>

      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />


    </div>
  )
}

export default App