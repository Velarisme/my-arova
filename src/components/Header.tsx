
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/90 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container-custom flex justify-between items-center">
        <a href="/" className="font-serif text-2xl font-medium text-sage-800 flex items-center group">
          <Leaf className="mr-2 text-sage-600 group-hover:text-sage-700 transition-colors duration-300" size={20} />
          <span className="group-hover:text-sage-900 transition-colors duration-300">Arova</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#about" className="text-sage-800 hover:text-sage-600 transition">About</a>
          <a href="#products" className="text-sage-800 hover:text-sage-600 transition">Products</a>
          <a href="#benefits" className="text-sage-800 hover:text-sage-600 transition">Benefits</a>
          <a href="#contact" className="text-sage-800 hover:text-sage-600 transition">Contact</a>
          <Button variant="outline" className="border-sage-300 text-sage-800 hover:bg-sage-100">Shop Now</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-sage-800" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background absolute top-full left-0 right-0 shadow-md">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <a href="#about" className="text-sage-800 py-2 border-b border-sage-100" onClick={() => setIsMobileMenuOpen(false)}>
              About
            </a>
            <a href="#products" className="text-sage-800 py-2 border-b border-sage-100" onClick={() => setIsMobileMenuOpen(false)}>
              Products
            </a>
            <a href="#benefits" className="text-sage-800 py-2 border-b border-sage-100" onClick={() => setIsMobileMenuOpen(false)}>
              Benefits
            </a>
            <a href="#contact" className="text-sage-800 py-2 border-b border-sage-100" onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </a>
            <Button variant="outline" className="border-sage-300 text-sage-800 hover:bg-sage-100 w-full justify-center">
              Shop Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
