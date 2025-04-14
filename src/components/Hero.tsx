
import { Button } from '@/components/ui/button';
import { ArrowRight, Droplet } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-sage-50 -z-10"></div>
      <div className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-bl from-sand-100 to-transparent -z-10 opacity-50"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-5 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-sage-100 opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24 rounded-full bg-lemon-100 opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 right-1/3 w-16 h-16 rounded-full bg-sand-200 opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container-custom relative">
        <div className="max-w-2xl">
          <p className="text-sm md:text-base font-medium text-sage-600 mb-3 tracking-wide fade-in uppercase flex items-center">
            <Droplet size={16} className="mr-2 animate-bounce" style={{ animationDuration: '3s' }} />
            Pure Organic Essential Oils
          </p>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-sage-900 leading-tight fade-in">
            Arova – From Earth <span className="text-sage-700">to Essence</span>
          </h1>
          
          <p className="mt-6 text-lg text-sage-700 max-w-xl fade-in-delay-1">
            Arova crafts premium organic oils from handpicked geranium and lemongrass, 
            capturing nature's purest essence for your aromatherapy and beauty rituals.
          </p>
          
          <div className="mt-10 flex flex-wrap gap-4 fade-in-delay-2">
            <Button className="bg-sage-700 hover:bg-sage-800 text-white group">
              Discover Our Products
              <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" className="border-sage-300 text-sage-800 hover:bg-sage-100">
              Learn Our Process
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-sage-100/50 to-transparent -z-10"></div>
    </section>
  );
};

export default Hero;
