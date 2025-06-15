
import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Products from '@/components/Products';
import Process from '@/components/Process';
import Reviews from '@/components/Reviews';
import Benefits from '@/components/Benefits';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Cart from '@/components/Cart';

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Products />
      <Process />
      <Reviews />
      <Benefits />
      <Contact />
      <Footer />
      <Cart />
      
      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop} 
        className={`fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-sage-700 to-sage-800 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all z-50 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
};

export default Index;
