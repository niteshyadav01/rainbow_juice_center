import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import './App.css';
import Header from './container/Header/Header';
import Footer from './container/Footer/Footer';
import Chef from './container/Chef/Chef';
import Laurels from './container/Laurels/Laurels';
import Gallery from './container/Gallery/Gallery';
import Photogallery from './container/PhotoGallery/Photogallery';
import BestSellerMenu from './container/Menu/Menu';
import MenuPage from './container/MenuPage/Menu';
import GalleryPage from './container/GalleryPage/GalleryPage';
import AboutPage from './container/AboutPage/AboutPage';
import Contact from './container/ContactPage/Contact';
import About from './container/About/about';
import { MarqueeDemo } from './container/Testimonial';

const Home = () => (
  <>
    <Header />
    <About />
    {/* <BestSellerMenu /> */}
    <Laurels />
    <Chef />
    <MarqueeDemo />
    {/* <MenuPage /> */}
    {/* <Photogallery /> */}
    {/* <Gallery /> */}
  </>
);

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      direction: 'vertical',
      gestureDirection: 'vertical',
      smoothTouch: true,
      touchMultiplier: 2,
      wheelMultiplier: 1,
      lerp: 0.1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<><about /></>} />
        <Route path="/about" element={<><AboutPage /> </>} />
        <Route path="/menu" element={<><MenuPage /> </>} />
        <Route path="/gallery" element={<><GalleryPage /> </>} />
        <Route path="/contact" element={<><Contact /></>} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
