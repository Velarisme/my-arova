
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!email.trim() || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }
    
    // Success notification
    toast({
      title: "Successfully subscribed!",
      description: "Thank you for joining the Sameira community.",
    });
    
    // Reset form
    setEmail('');
  };
  
  return (
    <section id="contact" className="section bg-sage-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')] bg-cover bg-center p-12 flex items-end relative">
              <div className="absolute inset-0 bg-gradient-to-t from-sage-900/70 to-transparent"></div>
              <div className="relative text-white">
                <h3 className="font-serif text-2xl font-medium mb-2">Connect With Us</h3>
                <p className="text-white/90 text-sm">
                  Join our community to receive updates, exclusive offers, and tips for natural living.
                </p>
              </div>
            </div>
            
            <div className="md:w-1/2 p-8 md:p-12">
              <h3 className="font-serif text-2xl font-medium text-sage-900 mb-4">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-sage-700 mb-6">
                Stay informed about new products, seasonal offerings, and expert advice on natural wellness.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-sage-800 mb-1">
                    Email Address
                  </label>
                  <Input 
                    id="email"
                    type="email" 
                    placeholder="Your email address" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border-sage-200 focus:border-sage-500 focus:ring focus:ring-sage-200 focus:ring-opacity-50"
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full bg-sage-700 hover:bg-sage-800 text-white">
                  Subscribe
                </Button>
                
                <p className="text-xs text-sage-600 mt-4">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates from Sameira.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
