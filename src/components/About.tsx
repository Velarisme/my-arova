
import { Leaf, Droplet, SunMedium } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-sage-900">Our Story</h2>
          <div className="w-20 h-1 bg-sage-300 mx-auto mt-4 mb-6"></div>
          <p className="text-sage-700">
            Rooted in tradition and guided by sustainability, Sameira brings nature's finest oils directly to you.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="font-serif text-2xl font-medium text-sage-800 mb-4">From Earth to Essence</h3>
            <p className="text-sage-700 mb-6">
              Our journey began with a simple belief: that the purest botanicals, when thoughtfully harvested and gently processed, yield extraordinary oils that honor both body and planet.
            </p>
            <p className="text-sage-700 mb-6">
              Each Sameira product embodies our commitment to organic farming, ethical harvesting, and meticulous extraction methods that preserve the complete profile of beneficial compounds.
            </p>
            
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Leaf className="text-sage-700" size={20} />
                </div>
                <p className="text-sm text-sage-800 font-medium">100% Organic</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Droplet className="text-sage-700" size={20} />
                </div>
                <p className="text-sm text-sage-800 font-medium">Pure Extraction</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <SunMedium className="text-sage-700" size={20} />
                </div>
                <p className="text-sm text-sage-800 font-medium">Sustainable</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 aspect-square relative bg-sand-100 rounded-lg overflow-hidden">
            <div className="absolute inset-4 bg-[url('https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9')] bg-cover bg-center rounded"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
