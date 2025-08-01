import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import './App.css';
import Header from './container/Header/Header';
import Footer from './container/Footer/Footer';
import Laurels from './container/Laurels/Laurels';
import About from './container/About/about';
import { MarqueeDemo } from './container/Testimonial';
import Cta from './container/Cta';
import Stores from './container/store/Store';
import Contact from './pages/Contact';
import About_page from './pages/About_page';
import Gallery_page from './pages/Gallery_page';
import Menu from './pages/Menu';

const Home = () => (
  <>
    <Header />
    <About />
    {/* <Chef /> */}
    <Laurels />
    <MarqueeDemo />
    {/* <Gallery /> */}
    <Stores/>
    <Cta/>
    {/* <Contact/> */}
  </>
);

const App = () => {
  // useEffect(() => {
  //   const lenis = new Lenis({
  //     duration: 1.2,
  //     smooth: true,
  //     direction: 'vertical',
  //     gestureDirection: 'vertical',
  //     smoothTouch: true,
  //     touchMultiplier: 2,
  //     wheelMultiplier: 1,
  //     lerp: 0.1,
  //   });

  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }
  //   requestAnimationFrame(raf);

  //   return () => {
  //     lenis.destroy();
  //   };
  // }, []);

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<><Contact /></>} />
        <Route path="/about" element={<About_page  />} />
        <Route path="/gallery" element={<Gallery_page />} />


      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
