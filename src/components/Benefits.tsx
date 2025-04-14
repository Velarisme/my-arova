
import { Heart, Smile, Star, Moon } from 'lucide-react';

const Benefits = () => {
  return (
    <section id="benefits" className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-sage-900">Natural Benefits</h2>
          <div className="w-20 h-1 bg-sage-300 mx-auto mt-4 mb-6"></div>
          <p className="text-sage-700">
            Discover how our organic essential oils can enhance your daily wellness and beauty rituals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-sage-50 p-6 rounded-lg">
            <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mb-4">
              <Heart className="text-sage-700" size={20} />
            </div>
            <h3 className="font-serif text-xl font-medium text-sage-800 mb-3">Natural Skincare</h3>
            <p className="text-sage-700">
              Our oils balance skin's natural oils, soothe irritation, and promote a healthy, radiant complexion.
            </p>
          </div>
          
          <div className="bg-sage-50 p-6 rounded-lg">
            <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mb-4">
              <Smile className="text-sage-700" size={20} />
            </div>
            <h3 className="font-serif text-xl font-medium text-sage-800 mb-3">Mood Enhancement</h3>
            <p className="text-sage-700">
              Experience the aromatherapeutic properties that elevate mood, reduce stress, and promote emotional balance.
            </p>
          </div>
          
          <div className="bg-sage-50 p-6 rounded-lg">
            <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mb-4">
              <Star className="text-sage-700" size={20} />
            </div>
            <h3 className="font-serif text-xl font-medium text-sage-800 mb-3">Natural Fragrance</h3>
            <p className="text-sage-700">
              Infuse your home and personal care with pure, chemical-free fragrances that refresh and inspire.
            </p>
          </div>
          
          <div className="bg-sage-50 p-6 rounded-lg">
            <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mb-4">
              <Moon className="text-sage-700" size={20} />
            </div>
            <h3 className="font-serif text-xl font-medium text-sage-800 mb-3">Better Sleep</h3>
            <p className="text-sage-700">
              Create bedtime rituals with our calming oils to promote deeper, more restorative sleep naturally.
            </p>
          </div>
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-sage-100 to-sand-100 rounded-lg p-8 md:p-12">
          <div className="md:flex items-center justify-between">
            <div className="md:max-w-xl mb-6 md:mb-0">
              <h3 className="font-serif text-2xl font-medium text-sage-900 mb-3">
                Enhance Your Daily Rituals
              </h3>
              <p className="text-sage-700">
                Incorporating Sameira oils into your everyday life is simple. From diffusers to skincare, 
                discover countless ways to enjoy the benefits of nature's purest essences.
              </p>
            </div>
            
            <a href="#" className="block text-center bg-white text-sage-800 px-6 py-3 rounded-lg font-medium hover:bg-sage-50 transition">
              View Usage Guide
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
