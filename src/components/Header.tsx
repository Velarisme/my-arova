
import { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="container-custom flex justify-between items-center">
        <a href="/" className="font-serif text-2xl font-medium text-sage-800 flex items-center group">
          <Leaf className="mr-2 text-sage-600 group-hover:text-sage-700 transition-colors duration-300" size={22} />
          <span className="group-hover:text-sage-900 transition-colors duration-300">Arova</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-sage-800 hover:text-sage-600 transition font-medium">Heritage</a>
          <a href="#products" className="text-sage-800 hover:text-sage-600 transition font-medium">Collection</a>
          <a href="#process" className="text-sage-800 hover:text-sage-600 transition font-medium">Process</a>
          <a href="#benefits" className="text-sage-800 hover:text-sage-600 transition font-medium">Benefits</a>
          <a href="#contact" className="text-sage-800 hover:text-sage-600 transition font-medium">Contact</a>
          <Button className="bg-gradient-to-r from-sage-700 to-sage-800 hover:from-sage-800 hover:to-sage-900 text-white shadow-lg hover:shadow-xl transition-all">
            Shop Luxury Oils
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-sage-800" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md absolute top-full left-0 right-0 shadow-lg">
          <div className="container-custom py-6 flex flex-col space-y-4">
            <a href="#about" className="text-sage-800 py-3 border-b border-sage-100 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              Heritage
            </a>
            <a href="#products" className="text-sage-800 py-3 border-b border-sage-100 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              Collection
            </a>
            <a href="#process" className="text-sage-800 py-3 border-b border-sage-100 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              Process
            </a>
            <a href="#benefits" className="text-sage-800 py-3 border-b border-sage-100 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              Benefits
            </a>
            <a href="#contact" className="text-sage-800 py-3 border-b border-sage-100 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </a>
            <Button className="bg-gradient-to-r from-sage-700 to-sage-800 hover:from-sage-800 hover:to-sage-900 text-white w-full justify-center shadow-lg">
              Shop Luxury Oils
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
