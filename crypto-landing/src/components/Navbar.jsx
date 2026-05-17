import React from 'react';
import { motion } from 'framer-motion';
import { Component } from 'lucide-react';

const Navbar = () => {
  const links = ['Home', 'About Us', 'Features', 'Use-Cases', 'Security', 'Testimonials'];

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full px-6 py-4 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between glass rounded-full px-6 py-3 shadow-sm">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="bg-blue-600 text-white p-1.5 rounded-lg">
            <Component size={20} />
          </div>
          <span className="font-bold text-xl tracking-tight">Ocampos</span>
        </div>

        {/* Links (Desktop) */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-600">
          {links.map((link, index) => (
            <a 
              key={index} 
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              className="hover:text-black transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <button className="bg-[#1a1a1a] hover:bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg">
          Connect Wallet
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
