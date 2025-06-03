
import { Leaf, Droplet, SunMedium } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-serif text-3xl md:text-5xl font-medium text-sage-900 mb-6">Our Heritage</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sage-400 to-sage-600 mx-auto mb-8"></div>
          <p className="text-sage-700 text-lg leading-relaxed">
            Rooted in tradition and elevated by luxury, Arova transforms nature's finest botanicals into exquisite fragrance oils.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h3 className="font-serif text-3xl font-medium text-sage-800 mb-6">From Earth to Essence</h3>
            <p className="text-sage-700 mb-6 text-lg leading-relaxed">
              Our journey began with a profound respect for nature's artistry. We believe that the world's most beautiful scents deserve to be captured with the utmost care and presented as luxury experiences.
            </p>
            <p className="text-sage-700 mb-8 text-lg leading-relaxed">
              Each Arova fragrance oil represents months of careful cultivation, precise steam distillation, and artisanal blending to create scents that transform spaces and elevate moments.
            </p>
            
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-sage-100 to-sage-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Leaf className="text-sage-700" size={24} />
                </div>
                <p className="text-sm text-sage-800 font-semibold">Premium Botanicals</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-sage-100 to-sage-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Droplet className="text-sage-700" size={24} />
                </div>
                <p className="text-sm text-sage-800 font-semibold">Steam Distillation</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-sage-100 to-sage-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <SunMedium className="text-sage-700" size={24} />
                </div>
                <p className="text-sm text-sage-800 font-semibold">Luxury Crafted</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 aspect-square relative bg-gradient-to-br from-sand-100 to-sage-100 rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-6 bg-[url('https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9')] bg-cover bg-center rounded-2xl shadow-xl"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-sage-900/20 to-transparent rounded-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
