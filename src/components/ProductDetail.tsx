
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/components/ui/use-toast';
import { useState } from 'react';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);

  const products = [
    {
      id: "digest",
      name: "Digest",
      price: 499,
      ingredients: "Peppermint | Lemon | Ginger",
      description: "For lightness after meals and refreshment.",
      detailedDescription: "Our Digest blend is crafted with the finest peppermint leaves from the hills of Uttarakhand, zesty lemon from organic farms, and warming ginger root. This powerful combination aids digestion while providing a refreshing burst of energy. Perfect for use after meals or whenever you need to feel light and revitalized.",
      gradient: "from-green-100 via-lemon-200 to-green-300",
      tags: ["Refreshing", "Digestive", "Energizing"],
      rating: 4.8,
      benefits: [
        "Aids in healthy digestion",
        "Provides natural energy boost",
        "Refreshes and revitalizes",
        "100% natural ingredients"
      ],
      usage: "Apply 2-3 drops to pulse points or add to a diffuser for aromatherapy benefits.",
      size: "10ml"
    },
    {
      id: "breathe",
      name: "Breathe",
      price: 499, 
      ingredients: "Lavender | Eucalyptus | Cedarwood",
      description: "Opens airways, calms nerves.",
      detailedDescription: "Breathe deeply with our carefully curated blend of French lavender, Australian eucalyptus, and Himalayan cedarwood. This therapeutic combination opens airways while promoting calm and relaxation. Ideal for meditation, yoga practice, or simply unwinding after a long day.",
      gradient: "from-purple-100 via-blue-200 to-green-300",
      tags: ["Calming", "Respiratory", "Relaxing"],
      rating: 4.9,
      benefits: [
        "Opens respiratory pathways",
        "Promotes deep relaxation",
        "Reduces stress and anxiety",
        "Perfect for meditation"
      ],
      usage: "Inhale directly from bottle or apply diluted to chest and temples.",
      size: "10ml"
    },
    {
      id: "immune",
      name: "Immune",
      price: 499,
      ingredients: "Thieves | Oregano | Clove", 
      description: "Fortifying and warming blend for immunity.",
      detailedDescription: "Strengthen your natural defenses with our potent Immune blend. Featuring time-tested thieves oil, wild oregano, and aromatic clove, this warming blend has been used for centuries to support the immune system. A powerful ally during seasonal changes.",
      gradient: "from-orange-100 via-red-200 to-yellow-300",
      tags: ["Fortifying", "Warming", "Protective"],
      rating: 4.7,
      benefits: [
        "Supports immune system",
        "Natural antimicrobial properties",
        "Warming and comforting",
        "Traditional herbal wisdom"
      ],
      usage: "Dilute and apply to soles of feet or diffuse in living spaces.",
      size: "10ml"
    },
    {
      id: "headspace",
      name: "Headspace",
      price: 499,
      ingredients: "Peppermint | Lavender | Rosemary",
      description: "Relieves headaches and mental fog.",
      detailedDescription: "Clear your mind with our Headspace blend, combining cooling peppermint, soothing lavender, and stimulating rosemary. This unique formulation helps relieve tension headaches while improving mental clarity and focus. Your go-to remedy for mental fog and stress-related discomfort.",
      gradient: "from-blue-100 via-purple-200 to-green-300", 
      tags: ["Clarity", "Relief", "Focus"],
      rating: 4.8,
      benefits: [
        "Relieves tension headaches",
        "Improves mental clarity",
        "Reduces mental fatigue",
        "Enhances concentration"
      ],
      usage: "Apply to temples and back of neck, or inhale for immediate relief.",
      size: "10ml"
    },
    {
      id: "sleep",
      name: "Sleep",
      price: 499,
      ingredients: "Blue Tansy | Chamomile | Ylang Ylang",
      description: "Crafted to guide you into peaceful slumber.",
      detailedDescription: "Drift into serene sleep with our Sleep blend, featuring rare blue tansy, gentle chamomile, and exotic ylang ylang. This dreamy combination calms the nervous system and prepares your body and mind for restorative rest. Transform your bedtime routine into a luxurious ritual.",
      gradient: "from-indigo-100 via-purple-200 to-blue-300",
      tags: ["Peaceful", "Calming", "Restful"],
      rating: 4.9,
      benefits: [
        "Promotes deep, restful sleep",
        "Calms nervous system",
        "Reduces bedtime anxiety",
        "Creates peaceful atmosphere"
      ],
      usage: "Apply to pulse points before bed or add to pillow and linens.",
      size: "10ml"
    }
  ];

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif text-sage-900 mb-4">Product not found</h1>
          <Button onClick={() => navigate('/')}>Return Home</Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price
      });
    }
    
    toast({
      title: "Added to cart!",
      description: `${quantity} x ${product.name} added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sage-50">
      {/* Header spacer */}
      <div className="h-20"></div>
      
      <div className="container-custom py-12">
        {/* Back button */}
        <button 
          onClick={() => navigate('/')}
          className="flex items-center text-sage-700 hover:text-sage-900 mb-8 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Collection
        </button>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${product.gradient} h-96 lg:h-[500px]`}>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9')] bg-cover bg-center opacity-30"></div>
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
              <div className="flex items-center gap-1">
                <Star size={14} className="text-yellow-500 fill-current" />
                <span className="text-sm font-medium">{product.rating}</span>
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-36 bg-gradient-to-b from-sage-700 to-sage-800 rounded-lg shadow-2xl opacity-80"></div>
            </div>
          </div>

          {/* Product Details */}
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              {product.tags.map((tag, index) => (
                <span key={index} className="text-xs bg-gradient-to-r from-sage-100 to-sand-100 text-sage-800 px-3 py-1 rounded-full font-medium">
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="font-serif text-4xl font-medium text-sage-900 mb-2">{product.name}</h1>
            <p className="text-sage-600 font-medium mb-4">{product.ingredients}</p>
            <p className="text-3xl font-bold text-sage-800 mb-6">₹{product.price}</p>

            <p className="text-sage-700 text-lg leading-relaxed mb-8">
              {product.detailedDescription}
            </p>

            {/* Benefits */}
            <div className="mb-8">
              <h3 className="font-serif text-xl text-sage-900 mb-4">Benefits</h3>
              <ul className="space-y-2">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-sage-700">
                    <div className="w-2 h-2 bg-sage-600 rounded-full mr-3"></div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* Usage */}
            <div className="mb-8">
              <h3 className="font-serif text-xl text-sage-900 mb-2">How to Use</h3>
              <p className="text-sage-700">{product.usage}</p>
              <p className="text-sm text-sage-600 mt-2">Size: {product.size}</p>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center space-x-2">
                <span className="text-sage-800 font-medium">Quantity:</span>
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-full border border-sage-300 flex items-center justify-center hover:bg-sage-100 transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-full border border-sage-300 flex items-center justify-center hover:bg-sage-100 transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            <Button 
              onClick={handleAddToCart}
              className="w-full bg-gradient-to-r from-sage-700 to-sage-800 hover:from-sage-800 hover:to-sage-900 text-white py-4 text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Add to Collection - ₹{product.price * quantity}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
