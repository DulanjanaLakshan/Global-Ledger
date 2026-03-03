import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, History, Target, Globe2 } from 'lucide-react';

export function About() {
  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-5xl md:text-6xl mb-6">Our Legacy</h1>
            <p className="text-xl text-slate-300 max-w-2xl font-light leading-relaxed">
              For nearly four decades, Global Ledger Partners has defined the standard for excellence in international accounting and advisory.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Office" className="rounded-sm mt-12" />
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Meeting" className="rounded-sm" />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-serif text-4xl text-slate-900 mb-6">A History of Trust</h2>
            <p className="text-lg text-slate-600 mb-6 font-light leading-relaxed">
              Founded in London in 1985, Global Ledger Partners began with a simple yet ambitious vision: to provide a level of financial insight and personal service that the "Big Four" could not match.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              What started as a boutique firm serving European family offices has grown into a global powerhouse. Today, we advise multinational corporations, sovereign wealth funds, and industry disruptors across 56 countries.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Despite our growth, we have never lost sight of our founding principle: <span className="font-medium text-slate-900">Business is personal.</span> We believe that behind every ledger is a legacy, and behind every number is a narrative.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl mb-4">Our Core Values</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">The principles that guide our decisions and define our culture.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Target, title: "Precision", desc: "We believe accuracy is the bedrock of trust. We sweat the details so you don't have to." },
              { icon: Users, title: "Partnership", desc: "We don't just work for you; we work with you. Your success is our singular metric." },
              { icon: Globe2, title: "Perspective", desc: "We bring a global mindset to local challenges, connecting dots across borders." },
              { icon: Award, title: "Integrity", desc: "We do what is right, not just what is expedient. Our reputation is our most valuable asset." }
            ].map((value, i) => (
              <div key={i} className="bg-white/5 p-8 rounded-sm border border-white/10 hover:bg-white/10 transition-colors">
                <value.icon className="w-8 h-8 text-white mb-4" />
                <h3 className="font-serif text-xl mb-3">{value.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl text-slate-900 mb-12 text-center">Executive Leadership</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Eleanor Sterling",
                role: "Global Managing Partner",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                bio: "With over 25 years of experience in international tax law, Eleanor leads the firm's strategic direction and global expansion initiatives."
              },
              {
                name: "James Chen",
                role: "Head of Advisory",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                bio: "James specializes in M&A and corporate restructuring. He has advised on some of the largest cross-border transactions in the last decade."
              },
              {
                name: "Sarah Al-Fayed",
                role: "Head of Audit & Assurance",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                bio: "Sarah brings a rigorous approach to compliance and risk management, ensuring our clients maintain the highest standards of financial integrity."
              }
            ].map((leader, i) => (
              <div key={i} className="group">
                <div className="aspect-[3/4] overflow-hidden mb-4 bg-slate-100 rounded-sm">
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h3 className="font-serif text-2xl text-slate-900">{leader.name}</h3>
                <div className="text-xs font-medium text-slate-500 uppercase tracking-widest mb-3">{leader.role}</div>
                <p className="text-slate-600 text-sm leading-relaxed">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
