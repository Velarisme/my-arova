
import { useState, useEffect } from 'react';
import { Menu, X, Leaf, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useCart } from '@/contexts/CartContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getTotalItems, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="container-custom flex justify-between items-center">
        <a href="/" className="font-serif text-2xl font-medium text-sage-800 flex items-center group">
          <Leaf className="mr-2 text-sage-600 group-hover:text-sage-700 transition-colors duration-300" size={22} />
          <span className="group-hover:text-sage-900 transition-colors duration-300">Arova</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => handleSmoothScroll('about')} className="text-sage-800 hover:text-sage-600 transition font-medium">Heritage</button>
          <button onClick={() => handleSmoothScroll('products')} className="text-sage-800 hover:text-sage-600 transition font-medium">Collection</button>
          <button onClick={() => handleSmoothScroll('process')} className="text-sage-800 hover:text-sage-600 transition font-medium">Process</button>
          <button onClick={() => handleSmoothScroll('benefits')} className="text-sage-800 hover:text-sage-600 transition font-medium">Benefits</button>
          <button onClick={() => handleSmoothScroll('contact')} className="text-sage-800 hover:text-sage-600 transition font-medium">Contact</button>
          
          {/* Cart Icon with Tooltip */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button 
                  onClick={() => setIsCartOpen(true)}
                  className="relative p-2 text-sage-800 hover:text-sage-600 transition"
                >
                  <ShoppingBag size={22} />
                  {getTotalItems() > 0 && (
                    <span className="absolute -top-1 -right-1 bg-gradient-to-r from-sage-700 to-sage-800 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                      {getTotalItems()}
                    </span>
                  )}
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Cart</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <Button className="bg-gradient-to-r from-sage-700 to-sage-800 hover:from-sage-800 hover:to-sage-900 text-white shadow-lg hover:shadow-xl transition-all">
            Shop Luxury Oils
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button 
                  onClick={() => setIsCartOpen(true)}
                  className="relative p-2 text-sage-800"
                >
                  <ShoppingBag size={22} />
                  {getTotalItems() > 0 && (
                    <span className="absolute -top-1 -right-1 bg-gradient-to-r from-sage-700 to-sage-800 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                      {getTotalItems()}
                    </span>
                  )}
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Cart</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <button className="text-sage-800" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md absolute top-full left-0 right-0 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="container-custom py-6 flex flex-col space-y-4">
            <button onClick={() => handleSmoothScroll('about')} className="text-sage-800 py-3 border-b border-sage-100 font-medium text-left">
              Heritage
            </button>
            <button onClick={() => handleSmoothScroll('products')} className="text-sage-800 py-3 border-b border-sage-100 font-medium text-left">
              Collection
            </button>
            <button onClick={() => handleSmoothScroll('process')} className="text-sage-800 py-3 border-b border-sage-100 font-medium text-left">
              Process
            </button>
            <button onClick={() => handleSmoothScroll('benefits')} className="text-sage-800 py-3 border-b border-sage-100 font-medium text-left">
              Benefits
            </button>
            <button onClick={() => handleSmoothScroll('contact')} className="text-sage-800 py-3 border-b border-sage-100 font-medium text-left">
              Contact
            </button>
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
