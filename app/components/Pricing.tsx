'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Basic',
    price: 109,
    description: 'Perfect for small teams and startups',
    features: [
      'Collaborate with up to 3 teammates',
      'Core task management features',
      'Unlimited projects and tasks',
      'Board and list views',
      'Basic integrations',
    ],
  },
  {
    name: 'Pro',
    price: 210,
    description: 'Advanced tools for growing teams.',
    features: [
      'Collaborate with up to 10 teammates',
      'Core task management features',
      'Advanced tracking & reports',
      'Priority integrations',
      'Email support',
    ],
  },
  {
    name: 'Enterprise',
    price: 268,
    description: 'Full collaboration for big teams.',
    features: [
      'Up to 25 teammates',
      'Unlimited workflows & automations',
      'Real-time analytics',
      'Premium integrations',
      'Priority support',
    ],
  },
];

export const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Choose the plan that fits your needs
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            All plans include a 30-day free trial. No credit card required.
          </motion.p>

          {/* Billing Cycle Toggle */}
          <motion.div 
            className="flex justify-center items-center mt-8 space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 rounded-lg ${
                billingCycle === 'monthly'
                  ? 'bg-green-500 text-white'
                  : 'bg-white text-gray-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Monthly
            </motion.button>
            <motion.button
              onClick={() => setBillingCycle('yearly')}
              className={`px-4 py-2 rounded-lg ${
                billingCycle === 'yearly'
                  ? 'bg-green-500 text-white'
                  : 'bg-white text-gray-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Yearly
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className="bg-white rounded-2xl p-8 border-1 border-gray-300 transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              <motion.h3 
                className="text-2xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 + (0.1 * index), duration: 0.4 }}
                viewport={{ once: true }}
              >
                {plan.name}
              </motion.h3>
              <motion.div 
                className="flex items-baseline mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 + (0.1 * index), duration: 0.4 }}
                viewport={{ once: true }}
              >
                <span className="text-4xl font-bold">$</span>
                <span className="text-6xl font-bold">{plan.price}</span>
                <span className="text-gray-500 ml-2">
                  /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                </span>
              </motion.div>
              <motion.p 
                className="text-gray-600 mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 + (0.1 * index), duration: 0.4 }}
                viewport={{ once: true }}
              >
                {plan.description}
              </motion.p>

              <motion.button 
                className="w-full bg-green-500 text-white border-1 border-green-600 py-3 rounded-lg hover:bg-green-600 transition-colors mb-8"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + (0.1 * index), duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Get Template
              </motion.button>

              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7 + (0.1 * index), duration: 0.4 }}
                viewport={{ once: true }}
              >
                <p className="font-medium text-gray-900">Basic Plan includes</p>
                {plan.features.map((feature, featureIndex) => (
                  <motion.div 
                    key={featureIndex} 
                    className="flex items-center"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + (0.05 * featureIndex) + (0.1 * index), duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <svg
                      className="h-5 w-5 text-green-500 mr-3"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 