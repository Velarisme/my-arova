
import { Instagram, Facebook, Twitter, Leaf, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-sage-800 text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-serif text-xl font-medium mb-4 flex items-center">
              <Leaf size={18} className="mr-2" /> Arova
            </h3>
            <p className="text-sage-200 text-sm">
              From Earth to Essence: Premium organic essential oils crafted with care for your wellness and beauty rituals.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-sage-300 hover:text-white transition transform hover:scale-110">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-sage-300 hover:text-white transition transform hover:scale-110">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-sage-300 hover:text-white transition transform hover:scale-110">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-4 text-sage-100">Products</h4>
            <ul className="space-y-2 text-sm text-sage-300">
              <li><a href="#" className="hover:text-white transition hover:translate-x-1 inline-block">Geranium Oil</a></li>
              <li><a href="#" className="hover:text-white transition hover:translate-x-1 inline-block">Lemongrass Oil</a></li>
              <li><a href="#" className="hover:text-white transition hover:translate-x-1 inline-block">Gift Sets</a></li>
              <li><a href="#" className="hover:text-white transition hover:translate-x-1 inline-block">Accessories</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4 text-sage-100">Company</h4>
            <ul className="space-y-2 text-sm text-sage-300">
              <li><a href="#" className="hover:text-white transition hover:translate-x-1 inline-block">About Us</a></li>
              <li><a href="#" className="hover:text-white transition hover:translate-x-1 inline-block">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition hover:translate-x-1 inline-block">Blog</a></li>
              <li><a href="#" className="hover:text-white transition hover:translate-x-1 inline-block">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4 text-sage-100">Contact</h4>
            <ul className="space-y-3 text-sm text-sage-300">
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-0.5 flex-shrink-0" />
                <span>123 Nature Way, Botanical Gardens, BT12 3GL</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 flex-shrink-0" />
                <span>+44 (0) 123 456 7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 flex-shrink-0" />
                <span>hello@arova-oils.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-sage-700 pt-6 text-center text-sm text-sage-400">
          <p>&copy; {currentYear} Arova. All rights reserved. From Earth to Essence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
