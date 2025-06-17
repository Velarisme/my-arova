
import { Droplets, Flame, FlaskConical, Sparkles, Award, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const Process = () => {
  return (
    <section id="process" className="section bg-gradient-to-b from-sage-50 to-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-serif text-3xl md:text-5xl font-medium text-sage-900 mb-6">Our Kannauj Heritage Process</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sage-400 to-sage-600 mx-auto mb-8"></div>
          <p className="text-sage-700 text-lg leading-relaxed">
            Every Arova blend honors the 400-year-old tradition of Kannauj, the perfume capital of India. Our partner farms in this historic city practice sustainable harvesting methods passed down through generations. Raw materials are sourced from certified organic fields and processed using traditional copper vessels within hours of harvest. No synthetic additives, no chemical accelerants — just pure botanical essence, captured and bottled with reverence.
          </p>
        </div>

        {/* Kannauj Heritage Section */}
        <div className="bg-gradient-to-r from-sage-100 to-sand-100 rounded-2xl p-8 mb-16 border border-sage-200">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl font-medium text-sage-900 mb-4">🏛️ The Kannauj Legacy</h3>
            <p className="text-sage-700 text-lg">
              Kannauj, known as the "Grasse of the East," has been the epicenter of Indian perfumery since the Mughal era. Our raw materials come from this sacred land where the art of attar-making has been perfected over centuries.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-semibold text-sage-900 mb-2">🌾 Traditional Farms</h4>
              <p className="text-sage-700 text-sm">Organic cultivation methods unchanged for generations</p>
            </div>
            <div>
              <h4 className="font-semibold text-sage-900 mb-2">🔥 Copper Distillation</h4>
              <p className="text-sage-700 text-sm">Ancient bhapka method using traditional copper vessels</p>
            </div>
            <div>
              <h4 className="font-semibold text-sage-900 mb-2">👨‍🎨 Master Perfumers</h4>
              <p className="text-sage-700 text-sm">Hereditary knowledge passed through family lineages</p>
            </div>
          </div>
        </div>

        {/* Visual Collage Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center group">
            <div className="aspect-square bg-gradient-to-br from-green-100 to-sage-200 rounded-2xl mb-6 overflow-hidden shadow-lg group-hover:shadow-xl transition-all">
              <div className="h-full bg-[url('https://images.unsplash.com/photo-1472396961693-142e6e269027')] bg-cover bg-center group-hover:scale-105 transition-transform duration-500"></div>
            </div>
            <h3 className="font-serif text-xl font-medium text-sage-900 mb-2">🌱 Kannauj Fields</h3>
            <p className="text-sage-700">Handpicked botanicals from certified organic farms in the perfume capital of India.</p>
          </div>
          
          <div className="text-center group">
            <div className="aspect-square bg-gradient-to-br from-orange-100 to-amber-200 rounded-2xl mb-6 overflow-hidden shadow-lg group-hover:shadow-xl transition-all">
              <div className="h-full bg-[url('https://images.unsplash.com/photo-1518495973542-4542c06a5843')] bg-cover bg-center group-hover:scale-105 transition-transform duration-500"></div>
            </div>
            <h3 className="font-serif text-xl font-medium text-sage-900 mb-2">🔥 Traditional Bhapka</h3>
            <p className="text-sage-700">Ancient steam distillation in handcrafted copper vessels using sandalwood fire.</p>
          </div>
          
          <div className="text-center group">
            <div className="aspect-square bg-gradient-to-br from-sage-100 to-sand-200 rounded-2xl mb-6 overflow-hidden shadow-lg group-hover:shadow-xl transition-all">
              <div className="h-full bg-[url('https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9')] bg-cover bg-center group-hover:scale-105 transition-transform duration-500"></div>
            </div>
            <h3 className="font-serif text-xl font-medium text-sage-900 mb-2">🎁 Heritage Bottling</h3>
            <p className="text-sage-700">Each glass roll-on is hand-filled following time-honored traditions.</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center group">
            <div className="w-24 h-24 bg-gradient-to-br from-sage-100 to-sage-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
              <Sparkles className="text-sage-700" size={32} />
            </div>
            <h3 className="font-serif text-xl font-medium text-sage-900 mb-4">1. Selection</h3>
            <p className="text-sage-700 leading-relaxed">
              Hand-picked botanicals at peak potency from certified organic farms in historic Kannauj.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="w-24 h-24 bg-gradient-to-br from-sage-100 to-sage-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
              <Flame className="text-sage-700" size={32} />
            </div>
            <h3 className="font-serif text-xl font-medium text-sage-900 mb-4">2. Distillation</h3>
            <p className="text-sage-700 leading-relaxed">
              Traditional bhapka method using copper vessels and sandalwood fire, releasing pure aromatic compounds.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="w-24 h-24 bg-gradient-to-br from-sage-100 to-sage-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
              <Droplets className="text-sage-700" size={32} />
            </div>
            <h3 className="font-serif text-xl font-medium text-sage-900 mb-4">3. Separation</h3>
            <p className="text-sage-700 leading-relaxed">
              Natural cooling and separation process preserving the purest essential compounds.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="w-24 h-24 bg-gradient-to-br from-sage-100 to-sage-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
              <FlaskConical className="text-sage-700" size={32} />
            </div>
            <h3 className="font-serif text-xl font-medium text-sage-900 mb-4">4. Blending</h3>
            <p className="text-sage-700 leading-relaxed">
              Master perfumers craft signature formulations using hereditary knowledge and scent psychology.
            </p>
          </div>
        </div>
        
        <div className="text-center space-y-4">
          <Button className="bg-gradient-to-r from-sage-700 to-sage-800 hover:from-sage-800 hover:to-sage-900 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all mr-4">
            🔍 Explore the Full Process
          </Button>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="border-2 border-sage-300 text-sage-800 hover:bg-sage-50 px-8 py-4 text-lg shadow-md hover:shadow-lg transition-all">
                <Shield className="mr-2" size={20} />
                Lab Standards & Certifications
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl font-serif text-sage-900 flex items-center">
                  <Award className="mr-3 text-sage-700" size={28} />
                  Laboratory Standards & Certifications
                </DialogTitle>
                <DialogDescription className="text-sage-700 text-lg">
                  Our commitment to quality, safety, and authenticity
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-8 mt-6">
                {/* Quality Certifications */}
                <div>
                  <h3 className="text-xl font-semibold text-sage-900 mb-4 flex items-center">
                    <Shield className="mr-2 text-sage-700" size={20} />
                    Quality & Safety Certifications
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-sage-50 p-4 rounded-lg border border-sage-200">
                      <h4 className="font-semibold text-sage-900 mb-2">✅ ISO 9001:2015</h4>
                      <p className="text-sage-700 text-sm">Quality Management Systems certification ensuring consistent product quality and customer satisfaction.</p>
                    </div>
                    <div className="bg-sage-50 p-4 rounded-lg border border-sage-200">
                      <h4 className="font-semibold text-sage-900 mb-2">✅ GMP Certified</h4>
                      <p className="text-sage-700 text-sm">Good Manufacturing Practices certification for pharmaceutical-grade production standards.</p>
                    </div>
                    <div className="bg-sage-50 p-4 rounded-lg border border-sage-200">
                      <h4 className="font-semibold text-sage-900 mb-2">✅ USDA Organic</h4>
                      <p className="text-sage-700 text-sm">Certified organic ingredients sourced from verified organic farms in Kannauj.</p>
                    </div>
                    <div className="bg-sage-50 p-4 rounded-lg border border-sage-200">
                      <h4 className="font-semibold text-sage-900 mb-2">✅ Cruelty-Free</h4>
                      <p className="text-sage-700 text-sm">PETA certified cruelty-free with no animal testing at any stage of production.</p>
                    </div>
                  </div>
                </div>

                {/* Testing Standards */}
                <div>
                  <h3 className="text-xl font-semibold text-sage-900 mb-4">🧪 Laboratory Testing Standards</h3>
                  <div className="bg-gradient-to-r from-sage-50 to-sand-50 p-6 rounded-lg border border-sage-200">
                    <ul className="space-y-3 text-sage-700">
                      <li className="flex items-start">
                        <span className="text-sage-600 mr-2">•</span>
                        <span><strong>Microbiological Testing:</strong> Bacterial, yeast, and mold contamination screening</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-sage-600 mr-2">•</span>
                        <span><strong>Heavy Metals Analysis:</strong> Lead, mercury, cadmium, and arsenic testing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-sage-600 mr-2">•</span>
                        <span><strong>Pesticide Residue Testing:</strong> Multi-residue analysis for over 300 pesticides</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-sage-600 mr-2">•</span>
                        <span><strong>Gas Chromatography-Mass Spectrometry (GC-MS):</strong> Chemical composition verification</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-sage-600 mr-2">•</span>
                        <span><strong>Allergen Testing:</strong> EU regulatory compliance for known allergens</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Regulatory Compliance */}
                <div>
                  <h3 className="text-xl font-semibold text-sage-900 mb-4">📋 Regulatory Compliance</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-sage-50 p-4 rounded-lg border border-sage-200">
                      <h4 className="font-semibold text-sage-900 mb-2">🇺🇸 FDA Compliant</h4>
                      <p className="text-sage-700 text-sm">Complies with FDA regulations for cosmetic products (21 CFR 700-740).</p>
                    </div>
                    <div className="bg-sage-50 p-4 rounded-lg border border-sage-200">
                      <h4 className="font-semibold text-sage-900 mb-2">🇪🇺 EU Cosmetics Regulation</h4>
                      <p className="text-sage-700 text-sm">Meets EC 1223/2009 cosmetics regulation requirements.</p>
                    </div>
                    <div className="bg-sage-50 p-4 rounded-lg border border-sage-200">
                      <h4 className="font-semibold text-sage-900 mb-2">🇮🇳 BIS Standards</h4>
                      <p className="text-sage-700 text-sm">Bureau of Indian Standards compliance for cosmetic products.</p>
                    </div>
                    <div className="bg-sage-50 p-4 rounded-lg border border-sage-200">
                      <h4 className="font-semibold text-sage-900 mb-2">🌐 IFRA Certified</h4>
                      <p className="text-sage-700 text-sm">International Fragrance Association safety standards compliance.</p>
                    </div>
                  </div>
                </div>

                {/* Legal Disclaimers */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">⚖️ Legal Information & Disclaimers</h3>
                  <div className="space-y-3 text-gray-700 text-sm">
                    <p><strong>Product Classification:</strong> Our fragrance oils are classified as cosmetic products for external use only.</p>
                    <p><strong>Patch Testing:</strong> We recommend performing a patch test before first use. Apply a small amount to the inner wrist and wait 24 hours.</p>
                    <p><strong>Pregnancy & Medical Conditions:</strong> Consult with healthcare providers before use during pregnancy, nursing, or if you have medical conditions.</p>
                    <p><strong>Age Restrictions:</strong> Not recommended for children under 3 years of age. Keep out of reach of children.</p>
                    <p><strong>Storage Instructions:</strong> Store in a cool, dry place away from direct sunlight. Temperature range: 15-25°C (59-77°F).</p>
                    <p><strong>Shelf Life:</strong> Best used within 24 months of opening. Batch numbers and expiry dates are printed on each product.</p>
                    <p><strong>Liability:</strong> Individual skin sensitivities may vary. Discontinue use if irritation occurs and consult a healthcare professional.</p>
                    <p><strong>Trademark:</strong> Arova™ is a registered trademark. All rights reserved.</p>
                    <p><strong>Manufacturing Location:</strong> Proudly made in India using traditional methods from Kannauj.</p>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="bg-sage-100 p-4 rounded-lg border border-sage-300">
                  <h4 className="font-semibold text-sage-900 mb-2">📞 Quality Assurance Contact</h4>
                  <p className="text-sage-700 text-sm">
                    For quality concerns or certification inquiries, contact our QA team at: 
                    <br />Email: quality@arova.com | Phone: +91-XXXX-XXXXXX
                  </p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default Process;
