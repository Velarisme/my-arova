
import { Leaf, Droplet, SunMedium, FlaskConical, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-serif text-3xl md:text-5xl font-medium text-sage-900 mb-6">Our Heritage</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sage-400 to-sage-600 mx-auto mb-8"></div>
          <p className="text-sage-700 text-lg leading-relaxed">
            Rooted in the Indian heartland, Arova celebrates the deep bond between tradition and nature. From verdant farms to luxury vials, every step is handcrafted — backed by research, driven by scent psychology, and powered by the purity of real ingredients.
          </p>
        </div>

        {/* Mini Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16">
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-sage-100 to-sage-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <span className="text-2xl">🌾</span>
            </div>
            <p className="text-sm text-sage-800 font-semibold">Farm-Fresh Botanicals</p>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-sage-100 to-sage-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <span className="text-2xl">🔬</span>
            </div>
            <p className="text-sm text-sage-800 font-semibold">Curated Scent Science</p>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-sage-100 to-sage-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <span className="text-2xl">🧪</span>
            </div>
            <p className="text-sm text-sage-800 font-semibold">Steam Distillation</p>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-sage-100 to-sage-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <span className="text-2xl">🎁</span>
            </div>
            <p className="text-sm text-sage-800 font-semibold">Hand-Rolled Bottling</p>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-sage-100 to-sage-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <span className="text-2xl">🌍</span>
            </div>
            <p className="text-sm text-sage-800 font-semibold">Small-Batch, Earth-Loving</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h3 className="font-serif text-3xl font-medium text-sage-800 mb-6">From Earth to Essence</h3>
            <p className="text-sage-700 mb-6 text-lg leading-relaxed">
              Our blends begin in sun-kissed fields — harvested fresh from trusted partner farms where lemongrass, geranium, kalonji, and rare herbs are grown chemical-free. We distill within hours of harvesting, locking in volatile aromatic compounds for unmatched purity.
            </p>
            <p className="text-sage-700 mb-8 text-lg leading-relaxed">
              Each Arova fragrance oil represents the marriage of traditional farming wisdom and modern distillation science, creating scents that transform spaces and elevate everyday rituals.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" className="border-sage-300 text-sage-800 hover:bg-sage-50">
                📸 View Our Farms
              </Button>
              <Button variant="outline" className="border-sage-300 text-sage-800 hover:bg-sage-50">
                🧪 Our Lab Standards
              </Button>
            </div>
          </div>
          
          <div className="order-1 md:order-2 aspect-square relative bg-gradient-to-br from-sand-100 to-sage-100 rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-6 bg-[url('https://images.unsplash.com/photo-1523712999610-f77fbcfc3843')] bg-cover bg-center rounded-2xl shadow-xl"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-sage-900/20 to-transparent rounded-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
