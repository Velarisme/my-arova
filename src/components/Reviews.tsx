
import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: "Isabella Chen",
      rating: 5,
      review: "Blue Calm has transformed my evening routine. The scent is absolutely divine and so calming. Worth every penny for this luxury experience.",
      product: "Blue Calm"
    },
    {
      name: "Marcus Rodriguez",
      rating: 5,
      review: "Golden Sunset brings such warmth to our home. The quality is exceptional, and you can tell it's made with premium ingredients.",
      product: "Golden Sunset"
    },
    {
      name: "Sophia Williams",
      rating: 5,
      review: "I've tried many fragrance oils, but Arova is in a league of its own. Forest Whisper makes me feel like I'm in a serene woodland.",
      product: "Forest Whisper"
    },
    {
      name: "David Park",
      rating: 5,
      review: "The steam distillation process really makes a difference. These oils are pure, potent, and long-lasting. Truly luxurious.",
      product: "Blue Calm"
    }
  ];

  return (
    <section className="section bg-gradient-to-b from-white to-sage-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-serif text-3xl md:text-5xl font-medium text-sage-900 mb-6">What Our Customers Say</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sage-400 to-sage-600 mx-auto mb-8"></div>
          <p className="text-sage-700 text-lg leading-relaxed">
            Experience the luxury through the words of those who have made Arova part of their daily rituals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
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
                  <p className="text-sm text-sage-600">Verified Purchase</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-sage-800">{review.product}</p>
                  <p className="text-xs text-sage-600">Product</p>
                </div>
              </div>
            </div>
          ))}
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
