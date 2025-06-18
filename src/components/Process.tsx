
import { Button } from '@/components/ui/button';
import { Award, Shield } from 'lucide-react';
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
          <h2 className="font-serif text-3xl md:text-5xl font-medium text-sage-900 mb-6">Our Artisan Craft Process</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sage-400 to-sage-600 mx-auto mb-8"></div>
          <p className="text-sage-700 text-lg leading-relaxed">
            Every Arova blend is crafted with meticulous attention to detail, honoring traditional perfumery methods while embracing modern sustainability practices. Our artisan process ensures each fragrance oil maintains its pure botanical essence and sophisticated scent profile — just authentic aromatic compounds, blended and bottled with intention.
          </p>
        </div>

        {/* Artisan Heritage Section */}
        <div className="bg-gradient-to-r from-sage-100 to-sand-100 rounded-2xl p-8 mb-16 border border-sage-200">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl font-medium text-sage-900 mb-4">🎨 The Arova Philosophy</h3>
            <p className="text-sage-700 text-lg">
              Our commitment to artisanal craftsmanship means every step of our process is guided by quality, sustainability, and respect for nature's gifts. We believe in creating fragrances that tell a story — your story.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-semibold text-sage-900 mb-2">🌱 Premium Ingredients</h4>
              <p className="text-sage-700 text-sm">Ethically sourced botanical extracts and premium fragrance compounds</p>
            </div>
            <div>
              <h4 className="font-semibold text-sage-900 mb-2">⚗️ Expert Blending</h4>
              <p className="text-sage-700 text-sm">Small-batch perfumery techniques preserving scent complexity</p>
            </div>
            <div>
              <h4 className="font-semibold text-sage-900 mb-2">🎭 Signature Formulations</h4>
              <p className="text-sage-700 text-sm">Expertly crafted blends based on modern perfumery principles</p>
            </div>
          </div>
        </div>
        
        <div className="text-center space-y-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="border-2 border-sage-300 text-sage-800 hover:bg-sage-50 px-8 py-4 text-lg shadow-md hover:shadow-lg transition-all">
                <Shield className="mr-2" size={20} />
                Quality Standards & Certifications
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl font-serif text-sage-900 flex items-center">
                  <Award className="mr-3 text-sage-700" size={28} />
                  Quality Standards & Certifications
                </DialogTitle>
                <DialogDescription className="text-sage-700 text-lg">
                  Our commitment to quality, safety, and authenticity in fragrance oil production
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
                      <p className="text-sage-700 text-sm">Quality Management Systems certification ensuring consistent fragrance oil quality and customer satisfaction.</p>
                    </div>
                    <div className="bg-sage-50 p-4 rounded-lg border border-sage-200">
                      <h4 className="font-semibold text-sage-900 mb-2">✅ GMP Certified</h4>
                      <p className="text-sage-700 text-sm">Good Manufacturing Practices certification for cosmetic-grade fragrance oil production standards.</p>
                    </div>
                    <div className="bg-sage-50 p-4 rounded-lg border border-sage-200">
                      <h4 className="font-semibold text-sage-900 mb-2">✅ Premium Ingredients</h4>
                      <p className="text-sage-700 text-sm">High-quality fragrance compounds and botanical extracts from certified suppliers.</p>
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
                        <span><strong>Fragrance Stability Testing:</strong> Long-term scent performance and longevity analysis</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-sage-600 mr-2">•</span>
                        <span><strong>Skin Compatibility Testing:</strong> Dermatological safety assessment for topical application</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-sage-600 mr-2">•</span>
                        <span><strong>Purity Analysis:</strong> Chemical composition verification of fragrance compounds</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-sage-600 mr-2">•</span>
                        <span><strong>Gas Chromatography Testing:</strong> Quality assurance of fragrance oil composition</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-sage-600 mr-2">•</span>
                        <span><strong>Allergen Testing:</strong> EU regulatory compliance for known fragrance allergens</span>
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
                      <p className="text-sage-700 text-sm">Complies with FDA regulations for cosmetic fragrance products (21 CFR 700-740).</p>
                    </div>
                    <div className="bg-sage-50 p-4 rounded-lg border border-sage-200">
                      <h4 className="font-semibold text-sage-900 mb-2">🇪🇺 EU Cosmetics Regulation</h4>
                      <p className="text-sage-700 text-sm">Meets EC 1223/2009 cosmetics regulation requirements for fragrance oils.</p>
                    </div>
                    <div className="bg-sage-50 p-4 rounded-lg border border-sage-200">
                      <h4 className="font-semibold text-sage-900 mb-2">🌐 International Standards</h4>
                      <p className="text-sage-700 text-sm">Compliant with international cosmetic safety standards for fragrance products.</p>
                    </div>
                    <div className="bg-sage-50 p-4 rounded-lg border border-sage-200">
                      <h4 className="font-semibold text-sage-900 mb-2">🌐 IFRA Certified</h4>
                      <p className="text-sage-700 text-sm">International Fragrance Association safety standards compliance for all formulations.</p>
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
                    <p><strong>Manufacturing:</strong> Proudly crafted using artisanal perfumery methods and premium fragrance ingredients.</p>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="bg-sage-100 p-4 rounded-lg border border-sage-300">
                  <h4 className="font-semibold text-sage-900 mb-2">📞 Quality Assurance Contact</h4>
                  <p className="text-sage-700 text-sm">
                    For quality concerns or certification inquiries, contact our QA team at: 
                    <br />Email: quality@arova.com | Phone: +1-XXX-XXX-XXXX
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
