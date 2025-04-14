
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-sage-800 text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-serif text-xl font-medium mb-4">Sameira</h3>
            <p className="text-sage-200 text-sm">
              Premium organic essential oils crafted with care for your wellness and beauty rituals.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-sage-300 hover:text-white transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-sage-300 hover:text-white transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-sage-300 hover:text-white transition">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-4 text-sage-100">Products</h4>
            <ul className="space-y-2 text-sm text-sage-300">
              <li><a href="#" className="hover:text-white transition">Geranium Oil</a></li>
              <li><a href="#" className="hover:text-white transition">Lemongrass Oil</a></li>
              <li><a href="#" className="hover:text-white transition">Gift Sets</a></li>
              <li><a href="#" className="hover:text-white transition">Accessories</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4 text-sage-100">Company</h4>
            <ul className="space-y-2 text-sm text-sage-300">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4 text-sage-100">Support</h4>
            <ul className="space-y-2 text-sm text-sage-300">
              <li><a href="#" className="hover:text-white transition">FAQs</a></li>
              <li><a href="#" className="hover:text-white transition">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-sage-700 pt-6 text-center text-sm text-sage-400">
          <p>&copy; {currentYear} Sameira. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
