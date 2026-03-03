import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, ShieldCheck, Globe2, Users, Building2, TrendingUp, FileText, Scale, Landmark } from 'lucide-react';
import { Link } from 'react-router-dom';

const servicesList = [
  {
    icon: BarChart3,
    title: "Audit & Assurance",
    description: "Independent validation of financial statements to build trust with stakeholders. We provide rigorous audit services that deliver insights beyond just the numbers.",
    features: ["Financial Statement Audits", "Internal Control Reviews", "Regulatory Compliance", "IT Audit & Assurance"]
  },
  {
    icon: Building2,
    title: "Tax Advisory",
    description: "Strategic tax planning and compliance services optimized for multinational operations. We help you navigate complex tax landscapes to minimize liability and ensure compliance.",
    features: ["Corporate Tax Strategy", "Transfer Pricing", "International Tax Planning", "Indirect Tax (VAT/GST)"]
  },
  {
    icon: TrendingUp,
    title: "Risk Consulting",
    description: "Identify, assess, and mitigate financial and operational risks. Our risk advisory services help you protect value and seize opportunities in a volatile world.",
    features: ["Enterprise Risk Management", "Cybersecurity", "Fraud Prevention", "Governance & Compliance"]
  },
  {
    icon: Globe2,
    title: "International Expansion",
    description: "End-to-end support for entering new markets. From entity setup to local compliance, we guide your business through every step of global growth.",
    features: ["Market Entry Strategy", "Entity Formation", "Local Compliance", "Cross-Border Structuring"]
  },
  {
    icon: Users,
    title: "Private Client Services",
    description: "Tailored wealth management and tax strategies for high-net-worth individuals and families. We protect and grow your legacy across generations.",
    features: ["Estate Planning", "Family Office Services", "Wealth Preservation", "Philanthropic Advisory"]
  },
  {
    icon: ShieldCheck,
    title: "Forensic Accounting",
    description: "Investigative services to detect fraud, quantify damages, and support litigation. We provide clarity and evidence in complex financial disputes.",
    features: ["Fraud Investigation", "Dispute Resolution", "Digital Forensics", "Asset Tracing"]
  },
  {
    icon: Scale,
    title: "Mergers & Acquisitions",
    description: "Comprehensive deal support from due diligence to post-merger integration. We help you maximize value and minimize risk in every transaction.",
    features: ["Financial Due Diligence", "Valuation Services", "Deal Structuring", "Integration Planning"]
  },
  {
    icon: Landmark,
    title: "Public Sector",
    description: "Specialized financial and advisory services for government entities and non-profits. We support transparency, accountability, and efficiency in the public sphere.",
    features: ["Government Auditing", "Performance Improvement", "Grant Management", "Public Policy Advisory"]
  },
  {
    icon: FileText,
    title: "Accounting & Outsourcing",
    description: "Streamlined accounting operations to let you focus on your core business. We provide scalable finance functions powered by the latest technology.",
    features: ["Bookkeeping & Reporting", "Payroll Services", "CFO Advisory", "Cloud Accounting Setup"]
  }
];

export function Services() {
  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-5xl md:text-6xl mb-6">Our Expertise</h1>
            <p className="text-xl text-slate-300 max-w-2xl font-light leading-relaxed">
              Delivering precision, insight, and strategic value across the full spectrum of financial and business challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-sm shadow-sm border border-slate-100 hover:shadow-xl transition-all group"
              >
                <service.icon className="w-12 h-12 text-slate-900 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-serif text-2xl text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6 text-sm">{service.description}</p>
                
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-500">
                      <div className="w-1 h-1 bg-slate-400 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link to="#" className="text-sm font-medium text-slate-900 flex items-center gap-2 group-hover:gap-3 transition-all border-t border-slate-100 pt-4">
                  View Details <div className="w-4 h-4 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-colors">→</div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl text-slate-900 mb-6">The GLP Methodology</h2>
            <p className="text-lg text-slate-600 mb-8 font-light">
              Our approach is built on a foundation of rigorous analysis, deep industry knowledge, and a commitment to understanding your unique business context.
            </p>
            
            <div className="space-y-6">
              {[
                { title: "Discovery", desc: "We start by listening. Understanding your goals, challenges, and operational environment is critical to our process." },
                { title: "Analysis", desc: "Leveraging advanced data analytics and AI, we uncover patterns and insights that others miss." },
                { title: "Strategy", desc: "We translate insights into actionable strategies that drive growth, efficiency, and compliance." },
                { title: "Execution", desc: "Our senior partners stay involved throughout implementation to ensure results meet our high standards." }
              ].map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="font-serif text-2xl text-slate-300 font-bold">0{i + 1}</div>
                  <div>
                    <h4 className="font-medium text-slate-900 mb-1">{step.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[600px] bg-slate-100 rounded-sm overflow-hidden">
             <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80" 
              alt="Team meeting" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-900/10" />
          </div>
        </div>
      </section>
    </div>
  );
}
