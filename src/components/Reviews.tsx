
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
    <section className="section relative overflow-hidden">
      {/* Unique Background with Fragrance Theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        {/* Animated floating particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white/10 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 3 + 2}s`
              }}
            />
          ))}
        </div>
        
        {/* Fragrance Vapor Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-pink-400/20 to-yellow-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hexagons" x="0" y="0" width="100" height="87" patternUnits="userSpaceOnUse">
                <polygon points="50,0 93.3,25 93.3,75 50,100 6.7,75 6.7,25" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons)"/>
          </svg>
        </div>
        
        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-serif text-3xl md:text-5xl font-medium text-white mb-6">Real Stories, Real Essence</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-white/90 text-lg leading-relaxed">
            Experience luxury through the words of those who have made Arova part of their daily rituals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group border border-white/20 hover:bg-white/15">
              <div className="flex items-center mb-6">
                <Quote className="text-pink-300 mr-3" size={24} />
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-white/90 mb-6 leading-relaxed text-lg italic">
                "{review.review}"
              </p>
              
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold text-white">{review.name}</p>
                  <p className="text-sm text-white/70">{review.location}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-pink-300">{review.product}</p>
                  <p className="text-xs text-white/60">Product</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Luxury Quote Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 text-center border border-white/20">
          <blockquote className="font-serif text-2xl md:text-3xl font-medium text-white mb-8 italic">
            "Luxury isn't loud — it's pure, purposeful, and rooted in nature."
          </blockquote>
          <div className="w-16 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mb-8"></div>
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-medium shadow-lg hover:shadow-xl transition-all">
            🌿 Start Your Ritual
          </button>
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 inline-block border border-white/20">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-4xl font-bold text-white">2,847+</span>
            </div>
            <p className="text-white/90 font-medium">Happy Customers & Counting</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
