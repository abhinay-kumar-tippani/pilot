import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Achievements from './components/Achievements';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PageLoader from './components/PageLoader';

export default function App() {
  return (
    <>
      <PageLoader />
      <Navbar isAvailable />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Testimonials />
        <Achievements />
        <Services />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
