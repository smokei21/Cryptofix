import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';

function App() {
  return (
    <div className="min-h-screen relative font-sans overflow-x-hidden selection:bg-blue-200">
      <div className="absolute inset-0 bg-[#f8f9fa] -z-10"></div>
      
      <div className="py-4">
        <Navbar />
      </div>
      
      <main>
        <Hero />
        <Features />
      </main>
      
      {/* Footer Placeholder */}
      <footer className="max-w-7xl mx-auto px-6 py-8 text-center text-sm text-gray-400 mt-10">
        &copy; {new Date().getFullYear()} Ocampos Exchange. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
