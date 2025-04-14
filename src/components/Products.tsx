
import { Button } from '@/components/ui/button';

const Products = () => {
  return (
    <section id="products" className="section bg-sage-50">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-sage-900">Our Essential Oils</h2>
          <div className="w-20 h-1 bg-sage-300 mx-auto mt-4 mb-6"></div>
          <p className="text-sage-700">
            Carefully crafted from the finest organic ingredients, our oils capture nature's purest essence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Geranium Oil */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-64 bg-[url('https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07')] bg-cover bg-center"></div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-serif text-xl font-medium text-sage-900">Geranium Essential Oil</h3>
                  <p className="text-sm text-sage-600 mt-1">100% Pure Organic</p>
                </div>
                <span className="text-lg font-medium text-sage-800">$24.99</span>
              </div>
              
              <p className="text-sage-700 mb-6">
                Our geranium oil offers a delicate floral scent with hints of rose and citrus, 
                perfect for balancing skin and uplifting mood.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs bg-sage-100 text-sage-800 px-3 py-1 rounded-full">Skin-balancing</span>
                <span className="text-xs bg-sage-100 text-sage-800 px-3 py-1 rounded-full">Mood-lifting</span>
                <span className="text-xs bg-sage-100 text-sage-800 px-3 py-1 rounded-full">Stress relief</span>
              </div>
              
              <Button className="w-full bg-sage-700 hover:bg-sage-800 text-white">
                Add to Cart
              </Button>
            </div>
          </div>
          
          {/* Lemongrass Oil */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-64 bg-[url('https://images.unsplash.com/photo-1518495973542-4542c06a5843')] bg-cover bg-center"></div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-serif text-xl font-medium text-sage-900">Lemongrass Essential Oil</h3>
                  <p className="text-sm text-sage-600 mt-1">100% Pure Organic</p>
                </div>
                <span className="text-lg font-medium text-sage-800">$22.99</span>
              </div>
              
              <p className="text-sage-700 mb-6">
                Our lemongrass oil delivers a fresh, citrusy aroma with earthy undertones, 
                known for its purifying properties and invigorating effect.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs bg-sage-100 text-sage-800 px-3 py-1 rounded-full">Purifying</span>
                <span className="text-xs bg-sage-100 text-sage-800 px-3 py-1 rounded-full">Energizing</span>
                <span className="text-xs bg-sage-100 text-sage-800 px-3 py-1 rounded-full">Cleansing</span>
              </div>
              
              <Button className="w-full bg-sage-700 hover:bg-sage-800 text-white">
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
