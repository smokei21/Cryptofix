import React from 'react';
import { motion } from 'framer-motion';
import { Play, ChevronRight, ArrowUpDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-1 lg:grid-cols-12 gap-6">
      
      {/* Left Column (Main Hero Content) */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="lg:col-span-7 bg-white rounded-[2.5rem] p-10 lg:p-16 flex flex-col justify-center relative overflow-hidden bg-grid shadow-sm"
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-full px-4 py-1.5 w-max mb-8 shadow-sm">
          <div className="bg-gray-200 rounded-full p-1">
            <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
          </div>
          <span className="text-xs font-semibold text-gray-700 tracking-wide">BEST EXCHANGE PLATFORM</span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl lg:text-[4rem] font-medium leading-[1.1] tracking-tight mb-6 text-[#111]">
          Hi, Let's Trade<br />
          <span className="font-bold">Crypto Confidently</span><br />
          With Ocampos
        </h1>

        {/* Subtext */}
        <p className="text-gray-500 text-lg max-w-md mb-10 leading-relaxed">
          The fastest and safest way to buy, sell, and manage your digital assets easily in one platform
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-4 mb-14">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-full font-medium transition-colors shadow-lg shadow-blue-500/30">
            Get Started
          </button>
          <button className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-800 px-8 py-3.5 rounded-full font-medium flex items-center gap-2 transition-colors shadow-sm">
            <Play size={18} fill="currentColor" /> Watch Demo
          </button>
        </div>

        {/* Email Subscribe */}
        <div className="max-w-md">
          <div className="relative flex items-center w-full">
            <input 
              type="email" 
              placeholder="Enter your email and subscribe..." 
              className="w-full bg-white border border-gray-200 rounded-full py-4 pl-6 pr-16 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 shadow-sm transition-all"
            />
            <button className="absolute right-2 bg-[#1a1a1a] hover:bg-black text-white p-2.5 rounded-full transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-3 text-center">
            Started get information & secure crypto exchange
          </p>
        </div>
      </motion.div>

      {/* Right Column */}
      <div className="lg:col-span-5 flex flex-col gap-6">
        
        {/* Top Image & Widget */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative bg-gray-200 rounded-[2.5rem] h-[400px] overflow-hidden shadow-sm"
        >
          {/* Background Image */}
          <img 
            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800" 
            alt="People trading" 
            className="w-full h-full object-cover object-center"
          />
          
          {/* Glass Widget overlay */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-[320px]">
             {/* Concentric rings effect */}
             <div className="absolute inset-0 border border-white/20 rounded-[2rem] scale-105 pointer-events-none"></div>
             <div className="absolute inset-0 border border-white/10 rounded-[2rem] scale-110 pointer-events-none"></div>
             
             {/* Main Widget Card */}
             <div className="glass rounded-[1.5rem] p-5 shadow-xl relative z-10">
                {/* You Pay */}
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-gray-500 font-medium">You Pay</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-gray-400">Balance 0.7810 BTC</span>
                    <button className="text-[10px] text-blue-600 bg-blue-50 px-2 py-0.5 rounded font-medium">Max</button>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-orange-500 text-xs font-bold">B</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-800">Bitcoin <span className="text-gray-400 font-normal">(BTC)</span></span>
                  </div>
                  <span className="font-semibold text-gray-800">0.0123 <span className="text-gray-400 font-normal">BTC</span></span>
                </div>

                {/* Divider & Switch Button */}
                <div className="relative h-px bg-gray-200 my-4">
                  <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1a1a1a] hover:bg-black text-white p-1.5 rounded-full shadow-md z-10 transition-colors cursor-pointer">
                    <ArrowUpDown size={14} />
                  </button>
                </div>

                {/* Will Receive */}
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-gray-500 font-medium">Will Receive</span>
                  <span className="text-[10px] text-gray-400">Receive <span className="text-green-500 font-medium">$1,348.88</span></span>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-500 text-xs font-bold">E</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-800">Ethereum <span className="text-gray-400 font-normal">(ETH)</span></span>
                  </div>
                  <span className="font-semibold text-gray-800">0.484 <span className="text-gray-400 font-normal">ETH</span></span>
                </div>
             </div>
          </div>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-[#0f0f0f] rounded-[2rem] p-8 flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-gray-800 shadow-xl"
        >
          <div className="flex-1 pb-6 sm:pb-0 sm:pr-6 flex flex-col justify-center">
            <h3 className="text-4xl font-bold text-white mb-2 tracking-tight">925K</h3>
            <p className="text-gray-400 text-sm">Total users at Ocampos</p>
          </div>
          <div className="flex-1 pt-6 sm:pt-0 sm:pl-6 flex flex-col justify-center">
            <h3 className="text-4xl font-bold text-white mb-2 tracking-tight">$8,720M</h3>
            <p className="text-gray-400 text-sm">Total volume transaction</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
