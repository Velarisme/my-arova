
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/components/ui/use-toast';

const Products = () => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const products = [
    {
      id: "digest",
      name: "Digest",
      price: 499,
      ingredients: "Peppermint | Lemon | Ginger",
      description: "For lightness after meals and refreshment.",
      gradient: "from-green-100 via-lemon-200 to-green-300",
      tags: ["Refreshing", "Digestive", "Energizing"],
      rating: 4.8
    },
    {
      id: "breathe",
      name: "Breathe",
      price: 499, 
      ingredients: "Lavender | Eucalyptus | Cedarwood",
      description: "Opens airways, calms nerves.",
      gradient: "from-purple-100 via-blue-200 to-green-300",
      tags: ["Calming", "Respiratory", "Relaxing"],
      rating: 4.9
    },
    {
      id: "immune",
      name: "Immune",
      price: 499,
      ingredients: "Thieves | Oregano | Clove", 
      description: "Fortifying and warming blend for immunity.",
      gradient: "from-orange-100 via-red-200 to-yellow-300",
      tags: ["Fortifying", "Warming", "Protective"],
      rating: 4.7
    },
    {
      id: "headspace",
      name: "Headspace",
      price: 499,
      ingredients: "Peppermint | Lavender | Rosemary",
      description: "Relieves headaches and mental fog.",
      gradient: "from-blue-100 via-purple-200 to-green-300", 
      tags: ["Clarity", "Relief", "Focus"],
      rating: 4.8
    },
    {
      id: "sleep",
      name: "Sleep",
      price: 499,
      ingredients: "Blue Tansy | Chamomile | Ylang Ylang",
      description: "Crafted to guide you into peaceful slumber.",
      gradient: "from-indigo-100 via-purple-200 to-blue-300",
      tags: ["Peaceful", "Calming", "Restful"],
      rating: 4.9
    }
  ];

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price
    });
    
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <section id="products" className="section bg-gradient-to-b from-white to-sage-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-serif text-3xl md:text-5xl font-medium text-sage-900 mb-6">Our Signature Collection</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sage-400 to-sage-600 mx-auto mb-8"></div>
          <p className="text-sage-700 text-lg leading-relaxed">
            Fragrance oils designed to elevate your everyday rituals — each bottle a sensory journey.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-12">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
              <div className={`h-72 bg-gradient-to-br ${product.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9')] bg-cover bg-center opacity-30 group-hover:scale-110 transition-transform duration-700"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <div className="flex items-center gap-1">
                    <Star size={12} className="text-yellow-500 fill-current" />
                    <span className="text-xs font-medium">{product.rating}</span>
                  </div>
                </div>
                {/* Bottle illustration placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-24 bg-gradient-to-b from-sage-700 to-sage-800 rounded-lg shadow-xl opacity-80 group-hover:scale-110 transition-transform"></div>
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-serif text-2xl font-medium text-sage-900 mb-1">{product.name}</h3>
                    <p className="text-sm text-sage-600 font-medium">{product.ingredients}</p>
                  </div>
                  <span className="text-xl font-bold text-sage-800">₹{product.price}</span>
                </div>
                
                <p className="text-sage-700 mb-6 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs bg-gradient-to-r from-sage-100 to-sand-100 text-sage-800 px-3 py-1 rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button 
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-gradient-to-r from-sage-700 to-sage-800 hover:from-sage-800 hover:to-sage-900 text-white py-3 shadow-lg hover:shadow-xl transition-all"
                >
                  Add to Collection
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-gradient-to-r from-sage-700 to-sage-800 hover:from-sage-800 hover:to-sage-900 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all">
            🛒 View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
