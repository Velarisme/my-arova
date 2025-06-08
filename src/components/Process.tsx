
import { Droplets, Flame, FlaskConical, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Process = () => {
  return (
    <section id="process" className="section bg-gradient-to-b from-sage-50 to-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-serif text-3xl md:text-5xl font-medium text-sage-900 mb-6">Our Farm-to-Bottle Ritual</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sage-400 to-sage-600 mx-auto mb-8"></div>
          <p className="text-sage-700 text-lg leading-relaxed">
            Every Arova blend is a product of intention. Our partner farms practice sustainable harvesting. Within hours, botanicals are distilled in micro-batches using steam. No additives, no shortcuts — just essential purity, bottled with care.
          </p>
        </div>

        {/* Visual Collage Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center group">
            <div className="aspect-square bg-gradient-to-br from-green-100 to-sage-200 rounded-2xl mb-6 overflow-hidden shadow-lg group-hover:shadow-xl transition-all">
              <div className="h-full bg-[url('https://images.unsplash.com/photo-1472396961693-142e6e269027')] bg-cover bg-center group-hover:scale-105 transition-transform duration-500"></div>
            </div>
            <h3 className="font-serif text-xl font-medium text-sage-900 mb-2">🌱 Handpicked Fresh</h3>
            <p className="text-sage-700">Farmers carefully select botanicals at peak potency from chemical-free fields.</p>
          </div>
          
          <div className="text-center group">
            <div className="aspect-square bg-gradient-to-br from-orange-100 to-amber-200 rounded-2xl mb-6 overflow-hidden shadow-lg group-hover:shadow-xl transition-all">
              <div className="h-full bg-[url('https://images.unsplash.com/photo-1518495973542-4542c06a5843')] bg-cover bg-center group-hover:scale-105 transition-transform duration-500"></div>
            </div>
            <h3 className="font-serif text-xl font-medium text-sage-900 mb-2">🔥 Steam Distillation</h3>
            <p className="text-sage-700">Gentle steam extracts pure essential compounds in copper vessels within hours of harvest.</p>
          </div>
          
          <div className="text-center group">
            <div className="aspect-square bg-gradient-to-br from-sage-100 to-sand-200 rounded-2xl mb-6 overflow-hidden shadow-lg group-hover:shadow-xl transition-all">
              <div className="h-full bg-[url('https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9')] bg-cover bg-center group-hover:scale-105 transition-transform duration-500"></div>
            </div>
            <h3 className="font-serif text-xl font-medium text-sage-900 mb-2">🎁 Artisan Bottling</h3>
            <p className="text-sage-700">Each glass roll-on is hand-filled and sealed with care in our micro-batch facility.</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center group">
            <div className="w-24 h-24 bg-gradient-to-br from-sage-100 to-sage-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
              <Sparkles className="text-sage-700" size={32} />
            </div>
            <h3 className="font-serif text-xl font-medium text-sage-900 mb-4">1. Selection</h3>
            <p className="text-sage-700 leading-relaxed">
              Hand-picked botanicals at peak potency, sourced from premium organic farms across India.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="w-24 h-24 bg-gradient-to-br from-sage-100 to-sage-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
              <Flame className="text-sage-700" size={32} />
            </div>
            <h3 className="font-serif text-xl font-medium text-sage-900 mb-4">2. Distillation</h3>
            <p className="text-sage-700 leading-relaxed">
              Gentle steam passes through fresh botanicals, releasing precious aromatic compounds naturally.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="w-24 h-24 bg-gradient-to-br from-sage-100 to-sage-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
              <Droplets className="text-sage-700" size={32} />
            </div>
            <h3 className="font-serif text-xl font-medium text-sage-900 mb-4">3. Separation</h3>
            <p className="text-sage-700 leading-relaxed">
              Steam and oils are cooled and naturally separated, preserving the purest essential compounds.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="w-24 h-24 bg-gradient-to-br from-sage-100 to-sage-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
              <FlaskConical className="text-sage-700" size={32} />
            </div>
            <h3 className="font-serif text-xl font-medium text-sage-900 mb-4">4. Blending</h3>
            <p className="text-sage-700 leading-relaxed">
              Master blenders craft signature formulations using scent psychology and traditional wisdom.
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <Button className="bg-gradient-to-r from-sage-700 to-sage-800 hover:from-sage-800 hover:to-sage-900 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all">
            🔍 Explore the Full Process
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Process;
