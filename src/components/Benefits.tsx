
import { Heart, Smile, Star, Sparkles } from 'lucide-react';

const Benefits = () => {
  return (
    <section id="benefits" className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-sage-900">Fragrance Benefits</h2>
          <div className="w-20 h-1 bg-sage-300 mx-auto mt-4 mb-6"></div>
          <p className="text-sage-700">
            Discover how our premium fragrance oils can transform your mood and elevate your daily experiences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-sage-50 p-6 rounded-lg">
            <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mb-4">
              <Smile className="text-sage-700" size={20} />
            </div>
            <h3 className="font-serif text-xl font-medium text-sage-800 mb-3">Mood Enhancement</h3>
            <p className="text-sage-700">
              Experience the uplifting properties of fine fragrance that elevate mood, reduce stress, and promote emotional balance through scent.
            </p>
          </div>
          
          <div className="bg-sage-50 p-6 rounded-lg">
            <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mb-4">
              <Star className="text-sage-700" size={20} />
            </div>
            <h3 className="font-serif text-xl font-medium text-sage-800 mb-3">Signature Scent</h3>
            <p className="text-sage-700">
              Create your unique scent identity with our carefully crafted fragrance oils that adapt beautifully to your skin chemistry.
            </p>
          </div>
          
          <div className="bg-sage-50 p-6 rounded-lg">
            <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mb-4">
              <Heart className="text-sage-700" size={20} />
            </div>
            <h3 className="font-serif text-xl font-medium text-sage-800 mb-3">Emotional Wellness</h3>
            <p className="text-sage-700">
              Our thoughtfully crafted fragrance blends help create positive emotional states and reduce daily stress naturally through aromatherapy.
            </p>
          </div>
          
          <div className="bg-sage-50 p-6 rounded-lg">
            <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mb-4">
              <Sparkles className="text-sage-700" size={20} />
            </div>
            <h3 className="font-serif text-xl font-medium text-sage-800 mb-3">Confidence Boost</h3>
            <p className="text-sage-700">
              Signature fragrance oils that enhance your personal presence and leave lasting impressions wherever you go.
            </p>
          </div>
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-sage-100 to-sand-100 rounded-lg p-8 md:p-12">
          <div className="md:flex items-center justify-between">
            <div className="md:max-w-xl mb-6 md:mb-0">
              <h3 className="font-serif text-2xl font-medium text-sage-900 mb-3">
                Elevate Your Daily Fragrance Rituals
              </h3>
              <p className="text-sage-700">
                Incorporating Arova fragrance oils into your everyday life transforms ordinary moments into extraordinary experiences. 
                Discover countless ways to enjoy the mood-enhancing benefits of premium fragrance craftsmanship.
              </p>
            </div>
            
            <a href="#" className="block text-center bg-white text-sage-800 px-6 py-3 rounded-lg font-medium hover:bg-sage-50 transition">
              Fragrance Guide
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
