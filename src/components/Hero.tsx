
import { Button } from '@/components/ui/button';
import { ArrowRight, Droplet } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sage-50 via-sand-50 to-sage-100 -z-10"></div>
      <div className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-bl from-sand-100 to-transparent -z-10 opacity-60"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-5 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-40 h-40 rounded-full bg-gradient-to-br from-sage-200 to-sage-100 opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-lemon-200 to-sand-100 opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 right-1/3 w-24 h-24 rounded-full bg-gradient-to-br from-sand-300 to-sage-200 opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container-custom relative">
        <div className="max-w-3xl">
          <p className="text-sm md:text-base font-medium text-sage-600 mb-3 tracking-wider fade-in uppercase flex items-center">
            <Droplet size={16} className="mr-2 animate-bounce text-sage-700" style={{ animationDuration: '3s' }} />
            Premium Fragrance Oils
          </p>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-medium text-sage-900 leading-tight fade-in mb-6">
            Arova – <span className="text-transparent bg-gradient-to-r from-sage-700 via-sage-600 to-sage-800 bg-clip-text">From Earth to Essence</span>
          </h1>
          
          <p className="mt-6 text-xl md:text-2xl text-sage-700 max-w-2xl fade-in-delay-1 font-light leading-relaxed">
            Crafted through traditional steam distillation, our luxury fragrance oils capture nature's most exquisite scents for an elevated sensory experience.
          </p>
          
          <div className="mt-12 flex flex-wrap gap-6 fade-in-delay-2">
            <Button className="bg-gradient-to-r from-sage-700 to-sage-800 hover:from-sage-800 hover:to-sage-900 text-white px-8 py-4 text-lg group shadow-lg hover:shadow-xl transition-all">
              Discover Our Collection
              <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" className="border-2 border-sage-300 text-sage-800 hover:bg-sage-50 px-8 py-4 text-lg shadow-md hover:shadow-lg transition-all">
              Our Distillation Process
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/80 to-transparent -z-10"></div>
    </section>
  );
};

export default Hero;
