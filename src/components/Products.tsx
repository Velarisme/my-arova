
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ProductSkeleton from './ProductSkeleton';

const Products = () => {
  const { addToCart } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading for better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

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
    },
    {
      id: "aurum-tide",
      name: "Aurum Tide",
      price: 679,
      ingredients: "Marine Accord | Golden Amber | Sea Salt",
      description: "Luxurious oceanic fragrance with golden warmth.",
      gradient: "from-amber-100 via-blue-200 to-gold-300",
      tags: ["Luxurious", "Marine", "Golden"],
      rating: 4.7
    },
    {
      id: "silva-bleu",
      name: "Silva Bleu",
      price: 679,
      ingredients: "Silver Pine | Blue Iris | Cedar",
      description: "Forest-inspired elegance with silvery blue notes.",
      gradient: "from-blue-100 via-slate-200 to-green-300",
      tags: ["Elegant", "Forest", "Fresh"],
      rating: 4.8
    },
    {
      id: "bleu-dusk",
      name: "Bleu Dusk",
      price: 679,
      ingredients: "Twilight Musk | Blue Lavender | Sandalwood",
      description: "Mysterious evening fragrance with twilight essence.",
      gradient: "from-indigo-100 via-slate-200 to-purple-300",
      tags: ["Mysterious", "Evening", "Sophisticated"],
      rating: 4.9
    },
    {
      id: "velour-heat",
      name: "Velour Heat",
      price: 679,
      ingredients: "Warm Spices | Velvet Rose | Amber",
      description: "Sensual warmth with velvety smooth finish.",
      gradient: "from-red-100 via-rose-200 to-amber-300",
      tags: ["Sensual", "Warm", "Velvety"],
      rating: 4.8
    },
    {
      id: "musk-glace",
      name: "Musk Glacé",
      price: 679,
      ingredients: "White Musk | Icy Mint | Crystal Accord",
      description: "Cool, crystalline musk with icy freshness.",
      gradient: "from-cyan-100 via-blue-200 to-slate-300",
      tags: ["Cool", "Fresh", "Crystalline"],
      rating: 4.7
    },
    {
      id: "cloud-oud",
      name: "Cloud Oud",
      price: 679,
      ingredients: "Soft Oud | Cloud Musk | Vanilla Sky",
      description: "Ethereal oud blend that floats like clouds.",
      gradient: "from-gray-100 via-purple-200 to-pink-300",
      tags: ["Ethereal", "Luxurious", "Dreamy"],
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

  const handleViewProduct = (productId: string) => {
    navigate(`/product/${productId}`);
  };

  if (isLoading) {
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
            {Array.from({ length: 11 }).map((_, index) => (
              <ProductSkeleton key={index} />
            ))}
          </div>
        </div>
      </section>
    );
  }

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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group transform hover:-translate-y-1">
              <div 
                className={`h-72 bg-gradient-to-br ${product.gradient} relative overflow-hidden cursor-pointer`}
                onClick={() => handleViewProduct(product.id)}
              >
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9')] bg-cover bg-center opacity-30 group-hover:scale-110 transition-transform duration-700"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <div className="flex items-center gap-1">
                    <Star size={12} className="text-yellow-500 fill-current" />
                    <span className="text-xs font-medium">{product.rating}</span>
                  </div>
                </div>
                {/* Clean bottle illustration without brand tags */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-24 bg-gradient-to-b from-white/20 to-white/10 rounded-lg shadow-xl opacity-80 group-hover:scale-110 transition-transform border border-white/30 backdrop-blur-sm"></div>
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 
                      className="font-serif text-2xl font-medium text-sage-900 mb-1 cursor-pointer hover:text-sage-700 transition-colors"
                      onClick={() => handleViewProduct(product.id)}
                    >
                      {product.name}
                    </h3>
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
                
                <div className="flex gap-2">
                  <Button 
                    onClick={() => handleViewProduct(product.id)}
                    variant="outline"
                    className="flex-1 border-sage-300 text-sage-700 hover:bg-sage-50"
                  >
                    View Details
                  </Button>
                  <Button 
                    onClick={() => handleAddToCart(product)}
                    className="flex-1 bg-gradient-to-r from-sage-700 to-sage-800 hover:from-sage-800 hover:to-sage-900 text-white shadow-lg hover:shadow-xl transition-all"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
