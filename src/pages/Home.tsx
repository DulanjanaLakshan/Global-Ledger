import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, ShieldCheck, Globe2, Users, Building2, TrendingUp, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-slate-900 text-white">
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />
        </div>
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

        <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-xs font-medium tracking-wide uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Global Financial Excellence
            </div>
            <h1 className="font-serif text-5xl md:text-7xl font-medium leading-[1.1] mb-8 tracking-tight">
              Precision in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Every Number.</span>
            </h1>
            <p className="text-lg text-slate-300 mb-10 max-w-lg leading-relaxed font-light">
              Global Ledger Partners delivers strategic audit, tax, and advisory services to the world's most ambitious organizations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="px-8 py-4 bg-white text-slate-900 font-medium rounded-sm hover:bg-slate-100 transition-all flex items-center gap-2 group">
                Schedule Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/services" className="px-8 py-4 border border-white/20 text-white font-medium rounded-sm hover:bg-white/10 transition-all backdrop-blur-sm">
                Explore Services
              </Link>
            </div>
          </motion.div>

          {/* Hero Visual - Abstract Dashboard/Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
              <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Global Revenue</div>
                  <div className="text-3xl font-serif">$4.2B <span className="text-green-400 text-sm font-sans font-medium">+12.4%</span></div>
                </div>
                <Globe2 className="w-10 h-10 text-white/20" />
              </div>
              <div className="space-y-4">
                {[
                  { region: "North America", val: 78, color: "bg-blue-500" },
                  { region: "Europe & Middle East", val: 64, color: "bg-indigo-500" },
                  { region: "Asia Pacific", val: 42, color: "bg-slate-500" },
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-sm text-slate-300">
                      <span>{item.region}</span>
                      <span>{item.val}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.val}%` }}
                        transition={{ duration: 1.5, delay: 0.5 + (i * 0.2) }}
                        className={`h-full ${item.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-xl z-20"
            >
              <ShieldCheck className="w-8 h-8 text-green-400 mb-2" />
              <div className="text-xs text-slate-400">Compliance Status</div>
              <div className="font-medium text-white">100% Verified</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Years of Excellence", value: "39" },
            { label: "Global Offices", value: "142" },
            { label: "Professionals", value: "4,500+" },
            { label: "Client Satisfaction", value: "98%" },
          ].map((stat, i) => (
            <div key={i}>
              <div className="font-serif text-4xl md:text-5xl font-medium text-slate-900 mb-2">{stat.value}</div>
              <div className="text-sm text-slate-500 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 md:flex justify-between items-end">
            <div className="max-w-2xl">
              <h2 className="font-serif text-4xl md:text-5xl text-slate-900 mb-6">Comprehensive Financial Solutions</h2>
              <p className="text-lg text-slate-600 font-light">
                We combine deep industry expertise with advanced technology to help you navigate complex regulatory environments and drive growth.
              </p>
            </div>
            <Link to="/services" className="hidden md:flex items-center gap-2 text-slate-900 font-medium hover:text-slate-600 transition-colors pb-2 border-b border-slate-900 hover:border-slate-600">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: "Audit & Assurance",
                desc: "Independent validation of your financial statements to build trust with stakeholders and investors."
              },
              {
                icon: Building2,
                title: "Tax Advisory",
                desc: "Strategic tax planning and compliance services optimized for multinational operations."
              },
              {
                icon: TrendingUp,
                title: "Risk Consulting",
                desc: "Identify, assess, and mitigate financial and operational risks in an ever-changing global landscape."
              },
              {
                icon: Globe2,
                title: "International Expansion",
                desc: "End-to-end support for entering new markets, from entity setup to local compliance."
              },
              {
                icon: Users,
                title: "Private Client Services",
                desc: "Tailored wealth management and tax strategies for high-net-worth individuals and families."
              },
              {
                icon: ShieldCheck,
                title: "Forensic Accounting",
                desc: "Investigative services to detect fraud, quantify damages, and support litigation."
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-sm shadow-sm border border-slate-100 hover:shadow-md transition-all group"
              >
                <service.icon className="w-10 h-10 text-slate-900 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-serif text-2xl text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{service.desc}</p>
                <Link to="#" className="text-sm font-medium text-slate-900 flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn more <ArrowRight className="w-3 h-3" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl mb-6">A Global Network of Expertise</h2>
              <p className="text-lg text-slate-300 mb-8 font-light leading-relaxed">
                With 142 offices across 56 countries, Global Ledger Partners provides seamless cross-border services. Our integrated approach ensures consistent quality and deep local knowledge wherever you operate.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div>
                  <h4 className="font-serif text-xl mb-4 text-white">Americas</h4>
                  <ul className="space-y-2 text-slate-400 text-sm">
                    <li>New York (Regional HQ)</li>
                    <li>Toronto</li>
                    <li>São Paulo</li>
                    <li>Mexico City</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-4 text-white">EMEA</h4>
                  <ul className="space-y-2 text-slate-400 text-sm">
                    <li>London (Global HQ)</li>
                    <li>Zurich</li>
                    <li>Dubai</li>
                    <li>Johannesburg</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-4 text-white">Asia Pacific</h4>
                  <ul className="space-y-2 text-slate-400 text-sm">
                    <li>Singapore (Regional HQ)</li>
                    <li>Tokyo</li>
                    <li>Hong Kong</li>
                    <li>Sydney</li>
                  </ul>
                </div>
              </div>

              <Link to="/offices" className="text-white border-b border-white pb-1 hover:text-slate-300 hover:border-slate-300 transition-colors inline-flex items-center gap-2">
                View all locations <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="relative">
              {/* Abstract Map Visualization */}
              <div className="aspect-square rounded-full border border-white/10 relative flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-white/5 animate-[spin_60s_linear_infinite]" />
                <div className="absolute inset-12 rounded-full border border-white/5 animate-[spin_40s_linear_infinite_reverse]" />
                <div className="absolute inset-24 rounded-full border border-white/5 animate-[spin_20s_linear_infinite]" />
                
                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
                  <path d="M100,200 Q250,100 400,200 T700,200" fill="none" stroke="white" strokeWidth="1" />
                  <path d="M150,300 Q300,150 450,300 T750,300" fill="none" stroke="white" strokeWidth="1" />
                </svg>

                <div className="text-center z-10">
                  <Globe2 className="w-16 h-16 text-white/20 mx-auto mb-4" />
                  <div className="text-2xl font-serif">One Firm.</div>
                  <div className="text-sm text-slate-400 uppercase tracking-widest">Worldwide.</div>
                </div>

                {/* Pulsing Dots for Cities */}
                {[
                  { top: '20%', left: '30%' },
                  { top: '40%', left: '45%' },
                  { top: '35%', left: '60%' },
                  { top: '60%', left: '70%' },
                  { top: '25%', left: '80%' },
                ].map((pos, i) => (
                  <div key={i} className="absolute w-3 h-3 bg-white rounded-full" style={pos}>
                    <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-75" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl text-slate-900 mb-16 text-center">Trusted by Industry Leaders</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "GLP's strategic insights were instrumental in our successful expansion into the Asian market. Their team operates as a true extension of our own.",
                author: "Jonathan Reed",
                role: "CFO, TechFlow Systems",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                quote: "In a complex regulatory environment, GLP provides the clarity and confidence we need to make bold decisions. Their attention to detail is unmatched.",
                author: "Elena Rodriguez",
                role: "Director of Operations, Solaris Energy",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                quote: "We switched to GLP for their audit services and stayed for their advisory. They bring a level of proactive thinking that is rare in this industry.",
                author: "Marcus Thorne",
                role: "Managing Partner, Thorne Capital",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white p-8 rounded-sm shadow-sm border border-slate-100 relative"
              >
                <Quote className="w-10 h-10 text-slate-200 absolute top-6 right-6" />
                <p className="text-slate-600 italic mb-8 relative z-10">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-serif text-lg text-slate-900">{testimonial.author}</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Insights Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <h2 className="font-serif text-4xl text-slate-900">Latest Insights</h2>
            <Link to="/insights" className="hidden md:flex items-center gap-2 text-slate-900 font-medium hover:text-slate-600 transition-colors">
              View all articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                category: "Tax Regulation",
                date: "Oct 12, 2023",
                title: "Navigating the New Global Minimum Tax Framework",
                image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                category: "Sustainability",
                date: "Oct 08, 2023",
                title: "ESG Reporting Standards: What CFOs Need to Know",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                category: "Digital Transformation",
                date: "Sep 28, 2023",
                title: "AI in Auditing: Enhancing Accuracy and Efficiency",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              }
            ].map((article, i) => (
              <Link key={i} to="#" className="group block">
                <div className="aspect-[4/3] overflow-hidden mb-6 bg-slate-100">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-3 uppercase tracking-wider font-medium">
                  <span className="text-slate-900">{article.category}</span>
                  <span>|</span>
                  <span>{article.date}</span>
                </div>
                <h3 className="font-serif text-2xl text-slate-900 leading-tight group-hover:text-slate-600 transition-colors">
                  {article.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-8">Ready to elevate your financial strategy?</h2>
          <p className="text-xl text-slate-300 mb-10 font-light">
            Connect with our global team of experts to discuss your specific needs and challenges.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="px-8 py-4 bg-white text-slate-900 font-medium rounded-sm hover:bg-slate-100 transition-colors">
              Contact Us
            </Link>
            <Link to="/offices" className="px-8 py-4 border border-white/20 text-white font-medium rounded-sm hover:bg-white/10 transition-colors">
              Find an Office
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
