/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Insights } from './pages/Insights';
import { AIChat } from './components/AIChat';

// Placeholder components for other routes
const Placeholder = ({ title }: { title: string }) => (
  <div className="min-h-[60vh] flex items-center justify-center bg-slate-50">
    <div className="text-center">
      <h1 className="font-serif text-4xl text-slate-900 mb-4">{title}</h1>
      <p className="text-slate-500">This page is currently under construction.</p>
    </div>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="industries" element={<Placeholder title="Industries" />} />
          <Route path="insights" element={<Insights />} />
          <Route path="careers" element={<Placeholder title="Careers" />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="client-portal" element={<Placeholder title="Client Portal" />} />
          <Route path="*" element={<Placeholder title="Page Not Found" />} />
        </Route>
      </Routes>
      <AIChat />
    </BrowserRouter>
  );
}
