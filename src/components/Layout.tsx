import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Globe, Menu, X, ChevronRight } from 'lucide-react';
import clsx from 'clsx';

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Insights', path: '/insights' },
    { name: 'Careers', path: '/careers' },
    { name: 'About', path: '/about' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900">
      {/* Top Bar */}
      <div className="bg-slate-900 text-white text-xs py-2 px-6 flex justify-between items-center">
        <div className="flex gap-4">
          <span>Global Headquarters: London</span>
          <span className="text-slate-500">|</span>
          <span>New York</span>
          <span className="text-slate-500">|</span>
          <span>Singapore</span>
          <span className="text-slate-500">|</span>
          <span>Dubai</span>
        </div>
        <div className="flex gap-4">
          <Link to="/client-portal" className="hover:text-slate-300 transition-colors">Client Portal</Link>
          <Link to="/contact" className="hover:text-slate-300 transition-colors">Contact Us</Link>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-slate-900 text-white flex items-center justify-center rounded-sm group-hover:bg-slate-800 transition-colors">
              <Globe className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold leading-none tracking-tight">Global Ledger</span>
              <span className="text-[10px] uppercase tracking-widest text-slate-500 font-medium">Partners</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={clsx(
                  "text-sm font-medium transition-colors hover:text-slate-900 relative group",
                  location.pathname === link.path ? "text-slate-900" : "text-slate-500"
                )}
              >
                {link.name}
                <span className={clsx(
                  "absolute -bottom-1 left-0 w-full h-px bg-slate-900 origin-left transition-transform duration-300",
                  location.pathname === link.path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                )} />
              </Link>
            ))}
            <Link
              to="/contact"
              className="px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-sm hover:bg-slate-800 transition-all flex items-center gap-2 group"
            >
              Get in Touch
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-lg font-medium text-slate-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-white">
              <Globe className="w-6 h-6" />
              <span className="font-serif text-xl font-bold">Global Ledger Partners</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Providing world-class audit, tax, and advisory services to multinational corporations and high-net-worth individuals since 1985.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-serif mb-6">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="#" className="hover:text-white transition-colors">Audit & Assurance</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Tax Advisory</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Risk Consulting</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Mergers & Acquisitions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif mb-6">Global Offices</h4>
            <ul className="space-y-3 text-sm">
              <li>London (HQ)</li>
              <li>New York</li>
              <li>Singapore</li>
              <li>Dubai</li>
              <li>Zurich</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif mb-6">Newsletter</h4>
            <p className="text-sm mb-4">Subscribe for the latest financial insights.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-slate-800 border-none text-white text-sm px-4 py-2 w-full focus:ring-1 focus:ring-white/20"
              />
              <button className="bg-white text-slate-900 px-4 py-2 text-sm font-medium hover:bg-slate-100 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-800 text-xs flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2024 Global Ledger Partners. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="#" className="hover:text-white transition-colors">Cookie Settings</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
