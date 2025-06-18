
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim()) {
      toast({
        title: "Please fill in all required fields",
        description: "Name and email are required.",
        variant: "destructive"
      });
      return;
    }
    
    if (!formData.email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="section bg-sage-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-sage-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-sage-700 max-w-2xl mx-auto">
            Have questions about our fragrances or need personalized recommendations? 
            We'd love to hear from you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')] bg-cover bg-center p-12 flex items-end relative">
              <div className="absolute inset-0 bg-gradient-to-t from-sage-900/70 to-transparent"></div>
              <div className="relative text-white">
                <h3 className="font-serif text-2xl font-medium mb-4">Connect With Us</h3>
                <div className="space-y-3 text-white/90">
                  <p className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Handcrafted with love in India
                  </p>
                  <p className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Direct from our partner farms
                  </p>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-sage-800 mb-1">
                      Name *
                    </label>
                    <Input 
                      id="name"
                      name="name"
                      type="text" 
                      placeholder="Your full name" 
                      value={formData.name}
                      onChange={handleChange}
                      className="border-sage-200 focus:border-sage-500 focus:ring focus:ring-sage-200 focus:ring-opacity-50"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-sage-800 mb-1">
                      Email *
                    </label>
                    <Input 
                      id="email"
                      name="email"
                      type="email" 
                      placeholder="your@email.com" 
                      value={formData.email}
                      onChange={handleChange}
                      className="border-sage-200 focus:border-sage-500 focus:ring focus:ring-sage-200 focus:ring-opacity-50"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-sage-800 mb-1">
                    Subject
                  </label>
                  <Input 
                    id="subject"
                    name="subject"
                    type="text" 
                    placeholder="What's this about?" 
                    value={formData.subject}
                    onChange={handleChange}
                    className="border-sage-200 focus:border-sage-500 focus:ring focus:ring-sage-200 focus:ring-opacity-50"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-sage-800 mb-1">
                    Message
                  </label>
                  <Textarea 
                    id="message"
                    name="message"
                    placeholder="Tell us about your fragrance preferences, questions, or how we can help you..."
                    value={formData.message}
                    onChange={handleChange}
                    className="border-sage-200 focus:border-sage-500 focus:ring focus:ring-sage-200 focus:ring-opacity-50 min-h-[120px]"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-sage-700 to-sage-800 hover:from-sage-800 hover:to-sage-900 text-white"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
                
                <p className="text-xs text-sage-600 mt-4">
                  We typically respond within 24 hours. Your information is kept private and secure.
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
