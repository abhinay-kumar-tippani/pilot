import React from 'react';
import './App.css';
import Cursor from './components/Cursor';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Cursor />
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Projects />
      <Achievements />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;