
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

const Products = () => {
  return (
    <section id="products" className="section bg-gradient-to-b from-white to-sage-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-serif text-3xl md:text-5xl font-medium text-sage-900 mb-6">Our Signature Collection</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sage-400 to-sage-600 mx-auto mb-8"></div>
          <p className="text-sage-700 text-lg leading-relaxed">
            Each fragrance is meticulously crafted through steam distillation, capturing the pure essence of nature's finest botanicals in luxurious oils.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Blue Calm */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
            <div className="h-72 bg-gradient-to-br from-blue-100 via-blue-200 to-slate-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9')] bg-cover bg-center opacity-60 group-hover:scale-110 transition-transform duration-700"></div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                <div className="flex items-center gap-1">
                  <Star size={12} className="text-yellow-500 fill-current" />
                  <span className="text-xs font-medium">4.9</span>
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-serif text-2xl font-medium text-sage-900 mb-2">Blue Calm</h3>
                  <p className="text-sm text-sage-600 font-medium tracking-wider uppercase">Signature Blend</p>
                </div>
                <span className="text-xl font-semibold text-sage-800">$89.99</span>
              </div>
              
              <p className="text-sage-700 mb-8 leading-relaxed">
                A serene blend of ocean breeze and tranquil botanicals, designed to evoke peaceful moments and inner balance.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="text-xs bg-gradient-to-r from-blue-100 to-slate-100 text-sage-800 px-4 py-2 rounded-full font-medium">Calming</span>
                <span className="text-xs bg-gradient-to-r from-blue-100 to-slate-100 text-sage-800 px-4 py-2 rounded-full font-medium">Fresh</span>
                <span className="text-xs bg-gradient-to-r from-blue-100 to-slate-100 text-sage-800 px-4 py-2 rounded-full font-medium">Ocean Breeze</span>
              </div>
              
              <Button className="w-full bg-gradient-to-r from-sage-700 to-sage-800 hover:from-sage-800 hover:to-sage-900 text-white py-3 shadow-lg hover:shadow-xl transition-all">
                Add to Collection
              </Button>
            </div>
          </div>
          
          {/* Golden Sunset */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
            <div className="h-72 bg-gradient-to-br from-orange-100 via-yellow-200 to-amber-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1472396961693-142e6e269027')] bg-cover bg-center opacity-60 group-hover:scale-110 transition-transform duration-700"></div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                <div className="flex items-center gap-1">
                  <Star size={12} className="text-yellow-500 fill-current" />
                  <span className="text-xs font-medium">4.8</span>
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-serif text-2xl font-medium text-sage-900 mb-2">Golden Sunset</h3>
                  <p className="text-sm text-sage-600 font-medium tracking-wider uppercase">Warm Blend</p>
                </div>
                <span className="text-xl font-semibold text-sage-800">$94.99</span>
              </div>
              
              <p className="text-sage-700 mb-8 leading-relaxed">
                Warm citrus notes intertwined with amber undertones, capturing the magic of golden hour in every drop.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="text-xs bg-gradient-to-r from-orange-100 to-amber-100 text-sage-800 px-4 py-2 rounded-full font-medium">Energizing</span>
                <span className="text-xs bg-gradient-to-r from-orange-100 to-amber-100 text-sage-800 px-4 py-2 rounded-full font-medium">Citrus</span>
                <span className="text-xs bg-gradient-to-r from-orange-100 to-amber-100 text-sage-800 px-4 py-2 rounded-full font-medium">Warm</span>
              </div>
              
              <Button className="w-full bg-gradient-to-r from-sage-700 to-sage-800 hover:from-sage-800 hover:to-sage-900 text-white py-3 shadow-lg hover:shadow-xl transition-all">
                Add to Collection
              </Button>
            </div>
          </div>
          
          {/* Forest Whisper */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group md:col-span-2 lg:col-span-1">
            <div className="h-72 bg-gradient-to-br from-green-100 via-emerald-200 to-sage-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523712999610-f77fbcfc3843')] bg-cover bg-center opacity-60 group-hover:scale-110 transition-transform duration-700"></div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                <div className="flex items-center gap-1">
                  <Star size={12} className="text-yellow-500 fill-current" />
                  <span className="text-xs font-medium">4.9</span>
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-serif text-2xl font-medium text-sage-900 mb-2">Forest Whisper</h3>
                  <p className="text-sm text-sage-600 font-medium tracking-wider uppercase">Earthy Blend</p>
                </div>
                <span className="text-xl font-semibold text-sage-800">$92.99</span>
              </div>
              
              <p className="text-sage-700 mb-8 leading-relaxed">
                Deep woodland essences with hints of cedar and moss, bringing the serenity of ancient forests to your space.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="text-xs bg-gradient-to-r from-green-100 to-emerald-100 text-sage-800 px-4 py-2 rounded-full font-medium">Grounding</span>
                <span className="text-xs bg-gradient-to-r from-green-100 to-emerald-100 text-sage-800 px-4 py-2 rounded-full font-medium">Woody</span>
                <span className="text-xs bg-gradient-to-r from-green-100 to-emerald-100 text-sage-800 px-4 py-2 rounded-full font-medium">Natural</span>
              </div>
              
              <Button className="w-full bg-gradient-to-r from-sage-700 to-sage-800 hover:from-sage-800 hover:to-sage-900 text-white py-3 shadow-lg hover:shadow-xl transition-all">
                Add to Collection
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
