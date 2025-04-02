'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const benefits = [
  {
    title: 'Sustainable Growth',
    description: 'Implement regenerative practices that promote long-term farm sustainability.',
    icon: '🌱',
  },
  {
    title: 'Data-Driven Decisions',
    description: 'Make informed decisions based on real-time data and analytics.',
    icon: '📊',
  },
  {
    title: 'Resource Optimization',
    description: 'Optimize resource usage while maintaining high productivity levels.',
    icon: '⚡',
  },
  {
    title: 'Ecosystem Balance',
    description: 'Contribute to ecosystem restoration while running a profitable operation.',
    icon: '🌍',
  },
];

export const Benefits = () => {
  return (
    <section className="relative py-60">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/background2.png"
          alt="Background"
          fill
          className=""
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            className="text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Regeneration not only for<br />your agriculture, but for the world.
          </motion.h2>
          <motion.p 
            className="text-xl text-white/80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            We play a vital role in promoting regenerative practices, not only in<br />
            agriculture but also in restoring balance to our ecosystems.
          </motion.p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-white hover:bg-white/20 transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="text-4xl mb-4"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 + (0.1 * index), duration: 0.4 }}
                viewport={{ once: true }}
              >
                {benefit.icon}
              </motion.div>
              <motion.h3 
                className="text-xl font-semibold mb-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 + (0.1 * index), duration: 0.4 }}
                viewport={{ once: true }}
              >
                {benefit.title}
              </motion.h3>
              <motion.p 
                className="text-white/80"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 + (0.1 * index), duration: 0.4 }}
                viewport={{ once: true }}
              >
                {benefit.description}
              </motion.p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button 
            className="bg-white text-green-800 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Template
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}; 