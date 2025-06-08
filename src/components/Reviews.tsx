
import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: "Riya M.",
      location: "Pune", 
      rating: 5,
      review: "I've used many fragrance oils, but Arova's blends smell fresh and intentional. The Sleep blend has become part of my night ritual.",
      product: "Sleep"
    },
    {
      name: "Aman K.",
      location: "Delhi",
      rating: 5,
      review: "The Digest oil is incredible! I use it after heavy meals and feel so much lighter. You can tell these are made with real ingredients.",
      product: "Digest"
    },
    {
      name: "Priya S.",
      location: "Mumbai",
      rating: 5,
      review: "Breathe has been a game-changer for my meditation practice. The quality is exceptional - pure, potent, and long-lasting.",
      product: "Breathe"
    }
  ];

  return (
    <section className="section bg-gradient-to-b from-white to-sage-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-serif text-3xl md:text-5xl font-medium text-sage-900 mb-6">Real Stories, Real Essence</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sage-400 to-sage-600 mx-auto mb-8"></div>
          <p className="text-sage-700 text-lg leading-relaxed">
            Experience luxury through the words of those who have made Arova part of their daily rituals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center mb-6">
                <Quote className="text-sage-300 mr-3" size={24} />
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-500 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-sage-700 mb-6 leading-relaxed text-lg italic">
                "{review.review}"
              </p>
              
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold text-sage-900">{review.name}</p>
                  <p className="text-sm text-sage-600">{review.location}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-sage-800">{review.product}</p>
                  <p className="text-xs text-sage-600">Product</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Luxury Quote Section */}
        <div className="bg-gradient-to-r from-sage-100 to-sand-100 rounded-3xl p-12 text-center">
          <blockquote className="font-serif text-2xl md:text-3xl font-medium text-sage-900 mb-8 italic">
            "Luxury isn't loud — it's pure, purposeful, and rooted in nature."
          </blockquote>
          <div className="w-16 h-1 bg-gradient-to-r from-sage-400 to-sage-600 mx-auto mb-8"></div>
          <button className="bg-gradient-to-r from-sage-700 to-sage-800 hover:from-sage-800 hover:to-sage-900 text-white px-8 py-4 rounded-lg text-lg font-medium shadow-lg hover:shadow-xl transition-all">
            🌿 Start Your Ritual
          </button>
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-sage-100 to-sand-100 rounded-2xl p-8 inline-block">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-500 fill-current" />
                ))}
              </div>
              <span className="text-2xl font-bold text-sage-900">4.9</span>
            </div>
            <p className="text-sage-700 font-medium">Based on 847+ verified reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
