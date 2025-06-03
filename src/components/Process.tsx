
import { Droplets, Flame, FlaskConical, Sparkles } from 'lucide-react';

const Process = () => {
  return (
    <section id="process" className="section bg-gradient-to-b from-sage-50 to-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-serif text-3xl md:text-5xl font-medium text-sage-900 mb-6">The Art of Steam Distillation</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sage-400 to-sage-600 mx-auto mb-8"></div>
          <p className="text-sage-700 text-lg leading-relaxed">
            Our time-honored steam distillation process captures the purest essence of botanicals, preserving their natural beauty and potency.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="w-24 h-24 bg-gradient-to-br from-sage-100 to-sage-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
              <Sparkles className="text-sage-700" size={32} />
            </div>
            <h3 className="font-serif text-xl font-medium text-sage-900 mb-4">1. Selection</h3>
            <p className="text-sage-700 leading-relaxed">
              Hand-picked botanicals at peak potency, sourced from premium organic farms worldwide.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="w-24 h-24 bg-gradient-to-br from-sage-100 to-sage-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
              <Flame className="text-sage-700" size={32} />
            </div>
            <h3 className="font-serif text-xl font-medium text-sage-900 mb-4">2. Heating</h3>
            <p className="text-sage-700 leading-relaxed">
              Gentle steam passes through the botanicals, releasing their precious aromatic compounds.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="w-24 h-24 bg-gradient-to-br from-sage-100 to-sage-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
              <Droplets className="text-sage-700" size={32} />
            </div>
            <h3 className="font-serif text-xl font-medium text-sage-900 mb-4">3. Condensation</h3>
            <p className="text-sage-700 leading-relaxed">
              Steam and oils are cooled and condensed, naturally separating the pure essential oils.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="w-24 h-24 bg-gradient-to-br from-sage-100 to-sage-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
              <FlaskConical className="text-sage-700" size={32} />
            </div>
            <h3 className="font-serif text-xl font-medium text-sage-900 mb-4">4. Refinement</h3>
            <p className="text-sage-700 leading-relaxed">
              Each oil is carefully refined and blended to create our signature luxury fragrance collections.
            </p>
          </div>
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-sage-100 to-sand-100 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl font-medium text-sage-900 mb-6">Why Steam Distillation?</h3>
              <p className="text-sage-700 mb-4 leading-relaxed">
                This traditional method preserves the complete aromatic profile while ensuring the highest purity and potency.
              </p>
              <p className="text-sage-700 leading-relaxed">
                Unlike chemical extraction, steam distillation maintains the natural integrity of each botanical, resulting in fragrance oils that are both luxurious and therapeutic.
              </p>
            </div>
            <div className="aspect-video bg-gradient-to-br from-sage-200 to-sand-200 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <FlaskConical size={48} className="text-sage-700 mx-auto mb-4" />
                <p className="text-sage-800 font-medium">Traditional Distillation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
