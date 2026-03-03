import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const articles = [
  {
    id: 1,
    category: "Tax Regulation",
    date: "Oct 12, 2023",
    author: "Eleanor Sterling",
    title: "Navigating the New Global Minimum Tax Framework",
    excerpt: "The OECD's Pillar Two rules are set to reshape the international tax landscape. Here is what multinational enterprises need to prepare for in the coming fiscal year.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    category: "Sustainability",
    date: "Oct 08, 2023",
    author: "James Chen",
    title: "ESG Reporting Standards: What CFOs Need to Know",
    excerpt: "As sustainability disclosure requirements tighten across the EU and US, finance leaders must integrate ESG data into their core reporting processes.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    category: "Digital Transformation",
    date: "Sep 28, 2023",
    author: "Sarah Al-Fayed",
    title: "AI in Auditing: Enhancing Accuracy and Efficiency",
    excerpt: "Machine learning algorithms are revolutionizing the audit process, allowing for 100% transaction testing and deeper risk insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    category: "Wealth Management",
    date: "Sep 15, 2023",
    author: "Michael Ross",
    title: "Preserving Wealth in a High-Inflation Environment",
    excerpt: "Strategies for high-net-worth individuals to protect purchasing power and optimize asset allocation during periods of economic volatility.",
    image: "https://images.unsplash.com/photo-1611974765270-ca1258634369?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    category: "Compliance",
    date: "Sep 02, 2023",
    author: "Elena Kovic",
    title: "The Future of KYC: Blockchain and Identity Verification",
    excerpt: "How distributed ledger technology is streamlining Know Your Customer processes and reducing compliance costs for financial institutions.",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    category: "Mergers & Acquisitions",
    date: "Aug 20, 2023",
    author: "David Miller",
    title: "Cross-Border M&A Trends: 2024 Outlook",
    excerpt: "Despite geopolitical headwinds, strategic deal-making remains robust in key sectors including technology, healthcare, and renewable energy.",
    image: "https://images.unsplash.com/photo-1553484771-371af705b430?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export function Insights() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-5xl mb-6">Insights & Perspectives</h1>
            <p className="text-xl text-slate-300 max-w-2xl font-light">
              Expert analysis on the financial, regulatory, and economic trends shaping the global business landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <div className="sticky top-20 z-30 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search articles..." 
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {["All", "Tax", "Audit", "Advisory", "Wealth", "Tech"].map((filter, i) => (
              <button 
                key={i}
                className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap transition-colors ${i === 0 ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-shadow group flex flex-col h-full"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-slate-900 uppercase tracking-wider rounded-sm">
                    {article.category}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {article.author}
                    </div>
                  </div>
                  
                  <h3 className="font-serif text-xl text-slate-900 mb-3 leading-tight group-hover:text-slate-600 transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                    {article.excerpt}
                  </p>
                  
                  <Link to="#" className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 group-hover:gap-3 transition-all mt-auto">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="px-8 py-3 border border-slate-300 text-slate-600 font-medium rounded-sm hover:bg-slate-50 transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl mb-4">Stay Ahead of the Curve</h2>
          <p className="text-slate-400 mb-8">
            Subscribe to our weekly newsletter for the latest financial insights, regulatory updates, and market analysis delivered straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 px-6 py-3 bg-white/10 border border-white/20 text-white placeholder:text-slate-500 rounded-sm focus:outline-none focus:ring-2 focus:ring-white/20"
            />
            <button className="px-8 py-3 bg-white text-slate-900 font-medium rounded-sm hover:bg-slate-100 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
