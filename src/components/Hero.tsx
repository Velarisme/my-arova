import { Button } from '@/components/ui/button';
import { ArrowRight, Droplet } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden soothing-bg">
      <div className="absolute inset-0 bg-gradient-to-br from-sage-50/40 via-sand-50/30 to-sage-100/40"></div>
      <div className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-bl from-sand-100/30 to-transparent opacity-60"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-40 h-40 rounded-full bg-gradient-to-br from-sage-200/20 to-sage-100/20 opacity-40 animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-lemon-200/20 to-sand-100/20 opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 right-1/3 w-24 h-24 rounded-full bg-gradient-to-br from-sand-300/20 to-sage-200/20 opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container-custom relative">
        <div className="max-w-4xl">
          <p className="text-sm md:text-base font-medium text-sage-600 mb-3 tracking-wider fade-in uppercase flex items-center">
            <Droplet size={16} className="mr-2 animate-bounce text-sage-700" style={{ animationDuration: '3s' }} />
            Premium Fragrance Oils
          </p>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-medium text-sage-900 leading-tight fade-in mb-6">
            Arova – <span className="text-transparent bg-gradient-to-r from-sage-700 via-sage-600 to-sage-800 bg-clip-text">From Earth to Essence</span>
          </h1>
          
          <p className="mt-6 text-xl md:text-2xl text-sage-700 max-w-3xl fade-in-delay-1 font-light leading-relaxed">
            Crafted from rare botanicals and inspired by nature's purest rhythms, our fragrance oils are born on farms, refined in distilleries, and perfected through intentional blending. Feel the essence of real luxury.
          </p>
          
          <div className="mt-12 fade-in-delay-2">
            <Button 
              onClick={() => scrollToSection('products')}
              className="bg-gradient-to-r from-sage-700 to-sage-800 hover:from-sage-800 hover:to-sage-900 text-white px-8 py-4 text-lg group shadow-lg hover:shadow-xl transition-all"
            >
              🌿 Discover Our Blends
              <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/20 to-transparent"></div>
    </section>
  );
};

export default Hero;
