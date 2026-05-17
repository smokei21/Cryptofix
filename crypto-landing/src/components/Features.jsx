import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, RefreshCcw, Smartphone } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Zap className="text-blue-500" size={24} />,
      title: 'Fast Transactions',
      description: 'Experience lightning-fast crypto trades with our optimized matching engine.',
    },
    {
      icon: <Shield className="text-green-500" size={24} />,
      title: 'Bank-grade Security',
      description: 'Your assets are protected by industry-leading encryption and cold storage.',
    },
    {
      icon: <RefreshCcw className="text-orange-500" size={24} />,
      title: 'Auto Exchange',
      description: 'Set up automatic recurring buys and portfolio rebalancing effortlessly.',
    },
    {
      icon: <Smartphone className="text-purple-500" size={24} />,
      title: 'Mobile Friendly',
      description: 'Manage your digital assets on the go with our responsive platform.',
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="features" className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-[#111]"
        >
          Why Choose Ocampos
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, delay: 0.1 }}
          className="text-gray-500 max-w-2xl mx-auto"
        >
          We provide the most essential features to make your crypto trading experience seamless, secure, and profitable.
        </motion.p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {features.map((feature, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
          >
            <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Features;
