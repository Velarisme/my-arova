
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-sage-50 -z-10"></div>
      <div className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-bl from-sand-100 to-transparent -z-10 opacity-50"></div>
      
      <div className="container-custom relative">
        <div className="max-w-2xl">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-sage-900 leading-tight fade-in">
            Pure Essence of <span className="text-sage-700">Nature</span>
          </h1>
          
          <p className="mt-6 text-lg text-sage-700 max-w-xl fade-in-delay-1">
            Sameira crafts premium organic oils from handpicked geranium and lemongrass, 
            capturing nature's purest essence for your aromatherapy and beauty rituals.
          </p>
          
          <div className="mt-10 flex flex-wrap gap-4 fade-in-delay-2">
            <Button className="bg-sage-700 hover:bg-sage-800 text-white">
              Discover Our Products
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
