import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-5xl md:text-6xl mb-6">Contact Us</h1>
            <p className="text-xl text-slate-300 max-w-2xl font-light leading-relaxed">
              Connect with our global team. Whether you have a specific inquiry or need strategic advice, we are here to help.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white p-8 md:p-12 rounded-sm shadow-sm border border-slate-100">
              <h2 className="font-serif text-3xl text-slate-900 mb-6">Send us a message</h2>
              
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-100 p-8 text-center rounded-sm"
                >
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-medium text-green-900 mb-2">Message Sent</h3>
                  <p className="text-green-700">Thank you for contacting us. A member of our team will respond within 24 hours.</p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="mt-6 text-sm font-medium text-green-800 hover:text-green-900 underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formState.name}
                        onChange={e => setFormState({...formState, name: e.target.value})}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formState.email}
                        onChange={e => setFormState({...formState, email: e.target.value})}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                    <select
                      id="subject"
                      required
                      value={formState.subject}
                      onChange={e => setFormState({...formState, subject: e.target.value})}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 transition-all"
                    >
                      <option value="">Select a topic...</option>
                      <option value="Audit">Audit & Assurance</option>
                      <option value="Tax">Tax Advisory</option>
                      <option value="Consulting">Risk Consulting</option>
                      <option value="General">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={formState.message}
                      onChange={e => setFormState({...formState, message: e.target.value})}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 transition-all resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-slate-900 text-white font-medium rounded-sm hover:bg-slate-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>Processing...</>
                    ) : (
                      <>Send Message <Send className="w-4 h-4" /></>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h3 className="font-serif text-2xl text-slate-900 mb-6">Global Headquarters</h3>
                <div className="bg-white p-8 border border-slate-100 rounded-sm space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-slate-400 mt-1" />
                    <div>
                      <p className="font-medium text-slate-900">The Shard</p>
                      <p className="text-slate-600">32 London Bridge St</p>
                      <p className="text-slate-600">London SE1 9SG, United Kingdom</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-slate-400" />
                    <p className="text-slate-600">+44 20 7946 0123</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-slate-400" />
                    <p className="text-slate-600">london.hq@glp-firm.com</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-slate-400 mt-1" />
                    <div>
                      <p className="text-slate-600">Mon - Fri: 09:00 - 18:00 GMT</p>
                      <p className="text-slate-600">Sat - Sun: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-2xl text-slate-900 mb-6">Regional Hubs</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { city: "New York", phone: "+1 212 555 0199", email: "ny@glp-firm.com" },
                    { city: "Singapore", phone: "+65 6789 0123", email: "sg@glp-firm.com" },
                    { city: "Dubai", phone: "+971 4 123 4567", email: "dubai@glp-firm.com" },
                    { city: "Zurich", phone: "+41 44 123 45 67", email: "zurich@glp-firm.com" },
                  ].map((office, i) => (
                    <div key={i} className="bg-white p-6 border border-slate-100 rounded-sm hover:shadow-md transition-shadow">
                      <h4 className="font-serif text-lg text-slate-900 mb-2">{office.city}</h4>
                      <p className="text-sm text-slate-500 mb-1">{office.phone}</p>
                      <p className="text-sm text-slate-500">{office.email}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
