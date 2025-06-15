
import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

const Cart = () => {
  const { 
    items, 
    removeFromCart, 
    updateQuantity, 
    getTotalPrice, 
    isCartOpen, 
    setIsCartOpen 
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50" onClick={() => setIsCartOpen(false)}>
      <div 
        className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b p-4">
            <h2 className="text-lg font-semibold text-sage-900">Shopping Cart</h2>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="rounded-full p-2 hover:bg-sage-100 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-sage-600">
                <ShoppingBag size={64} className="mb-4 text-sage-300" />
                <p className="text-lg font-medium mb-2">Your cart is empty</p>
                <p className="text-sm">Add some beautiful fragrances to get started</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 border-b pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-sage-100 to-sand-100 rounded-lg flex items-center justify-center">
                      <div className="w-8 h-12 bg-gradient-to-b from-sage-700 to-sage-800 rounded opacity-80"></div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-medium text-sage-900">{item.name}</h3>
                      <p className="text-sage-600">₹{item.price}</p>
                      
                      <div className="flex items-center space-x-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full border border-sage-300 flex items-center justify-center hover:bg-sage-100 transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full border border-sage-300 flex items-center justify-center hover:bg-sage-100 transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-sage-400 hover:text-red-500 transition-colors"
                    >
                      <X size={18} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t p-4 space-y-4">
              <div className="flex justify-between text-lg font-semibold text-sage-900">
                <span>Total</span>
                <span>₹{getTotalPrice()}</span>
              </div>
              <Button className="w-full bg-gradient-to-r from-sage-700 to-sage-800 hover:from-sage-800 hover:to-sage-900 text-white">
                Proceed to Checkout
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
