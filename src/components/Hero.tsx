
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const handleSmoothScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-sage-50 via-white to-sand-50 relative overflow-hidden flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9')] bg-cover bg-center opacity-5"></div>
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-gradient-to-br from-sage-200/30 to-sand-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-gradient-to-br from-sand-200/20 to-sage-200/20 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Content */}
          <div className="space-y-8 lg:pr-12">
            <div className="space-y-6">
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium text-sage-900 leading-tight">
                From Earth
                <span className="block text-transparent bg-gradient-to-r from-sage-700 to-sage-800 bg-clip-text">
                  to Essence
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-sage-700 leading-relaxed font-light">
                Discover luxury fragrance oils crafted to elevate your everyday moments into extraordinary experiences.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => handleSmoothScroll('products')}
                size="lg" 
                className="bg-gradient-to-r from-sage-700 to-sage-800 hover:from-sage-800 hover:to-sage-900 text-white px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
              >
                Discover Our Collection
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-sage-200">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-sage-800">5+</div>
                <div className="text-sm text-sage-600 font-medium">Signature Blends</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-sage-800">100%</div>
                <div className="text-sm text-sage-600 font-medium">Premium Quality</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-sage-800">∞</div>
                <div className="text-sm text-sage-600 font-medium">Scent Memories</div>
              </div>
            </div>
          </div>
          
          {/* Visual Element */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-sage-100 to-sand-100 rounded-full shadow-2xl overflow-hidden relative">
              <div className="absolute inset-8 bg-[url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9')] bg-cover bg-center rounded-full shadow-xl"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-sage-900/10 to-transparent rounded-full"></div>
              
              {/* Floating Elements */}
              <div className="absolute top-12 right-12 w-16 h-16 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center animate-bounce">
                <span className="text-2xl">🌿</span>
              </div>
              <div className="absolute bottom-16 left-8 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center animate-pulse">
                <span className="text-xl">✨</span>
              </div>
              <div className="absolute top-1/3 left-4 w-14 h-14 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center animate-bounce delay-150">
                <span className="text-xl">🌸</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => handleSmoothScroll('about')}
            className="p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all text-sage-700 hover:text-sage-800"
          >
            <ArrowDown size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
