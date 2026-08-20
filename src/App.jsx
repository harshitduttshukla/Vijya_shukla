import { useEffect } from 'react';
import Topbar from './components/Topbar';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Stats from './components/Stats';
import Services from './components/Services';
import Process from './components/Process';
import CTA from './components/CTA';
import WhyChooseUs from './components/WhyChooseUs';
import ServiceAreas from './components/ServiceAreas';
import FAQ from './components/FAQ';
import Documents from './components/Documents';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.animate(
              [
                { opacity: 0, transform: 'translateY(22px)' },
                { opacity: 1, transform: 'translateY(0)' },
              ],
              {
                duration: 650,
                easing: 'ease-out',
                fill: 'forwards',
              }
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    const elements = document.querySelectorAll(
      '.card, .steps article, .why-list article, .gallery-grid img'
    );

    elements.forEach((el) => {
      el.style.opacity = '0';
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Topbar />
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <Stats />
        <Services />
        <Process />
        <CTA />
        <WhyChooseUs />
        <ServiceAreas />
        <FAQ />
        <Documents />
        <Gallery />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
