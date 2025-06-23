
import { Instagram, Facebook, Twitter, Leaf, Mail, MapPin, Phone, Package } from 'lucide-react';

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
            <p className="text-sage-200 text-sm mb-4">
              From Earth to Essence: Premium fragrance oils crafted with intention for your wellness and luxury rituals.
            </p>
            <div className="flex space-x-4">
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
            <h4 className="font-medium mb-4 text-sage-100">Our Blends</h4>
            <ul className="space-y-2 text-sm text-sage-300">
              <li><a href="#" className="hover:text-white transition hover:translate-x-1 inline-block">Digest</a></li>
              <li><a href="#" className="hover:text-white transition hover:translate-x-1 inline-block">Breathe</a></li>
              <li><a href="#" className="hover:text-white transition hover:translate-x-1 inline-block">Immune</a></li>
              <li><a href="#" className="hover:text-white transition hover:translate-x-1 inline-block">Headspace</a></li>
              <li><a href="#" className="hover:text-white transition hover:translate-x-1 inline-block">Sleep</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4 text-sage-100">Quick Links</h4>
            <ul className="space-y-2 text-sm text-sage-300">
              <li className="flex items-center">
                <Package size={16} className="mr-2 flex-shrink-0" />
                <a href="#" className="hover:text-white transition">Track Your Order</a>
              </li>
              <li className="flex items-center">
                <Instagram size={16} className="mr-2 flex-shrink-0" />
                <a href="#" className="hover:text-white transition">@ArovaEssence</a>
              </li>
              <li><a href="#" className="hover:text-white transition hover:translate-x-1 inline-block">Our Heritage</a></li>
              <li><a href="#" className="hover:text-white transition hover:translate-x-1 inline-block">Farm Partners</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4 text-sage-100">Join the Arova Tribe</h4>
            <p className="text-sage-300 text-sm mb-4">✨ Get exclusive access to new blends and wellness tips</p>
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full px-3 py-2 bg-sage-700 border border-sage-600 rounded text-white placeholder-sage-400 focus:outline-none focus:border-sage-500"
              />
              <button className="w-full bg-gradient-to-r from-sage-600 to-sage-700 hover:from-sage-500 hover:to-sage-600 text-white px-4 py-2 rounded transition-all">
                Join Newsletter
              </button>
            </div>
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
