'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  HomeIcon,
  Square3Stack3DIcon,
  ClipboardDocumentListIcon,
  CloudIcon,
  BoltIcon
} from '@heroicons/react/24/outline';

const tabs = [
  { id: 'home', label: 'Home', icon: HomeIcon },
  { id: 'fields', label: 'Fields', icon: Square3Stack3DIcon },
  { id: 'tasks', label: 'Tasks', icon: ClipboardDocumentListIcon },
  { id: 'weather', label: 'Weather', icon: CloudIcon },
  { id: 'energy', label: 'Energy', icon: BoltIcon },
];

export const Hero = () => {
  const [activeTab, setActiveTab] = useState('fields');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen mx-auto flex items-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 transition-transform duration-500 ease-out"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <Image
          src="/images/background.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm mb-6 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Backed by VS
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white mb-6 font-medium drop-shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Sustainability isn't more<br />an option, be regenerative
          </motion.h1>
          <motion.p 
            className="text-xl text-white mb-8 drop-shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Our platform empowers agriculture to restore ecosystems,<br />
            turning you farm a regenerative success story.
          </motion.p>
          <motion.div 
            className="flex justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <button className="bg-green-500 font-semibold border-1 border-green-700 text-white px-8 py-3 rounded-xl hover:bg-green-600 transition-all hover:scale-105">
              Get Template
            </button>
            <button className="bg-white/10 backdrop-blur-sm font-semibold border border-white/30 text-white px-8 py-3 rounded-xl hover:bg-white/20 transition-all hover:scale-105">
              Explore Cases
            </button>
          </motion.div>
        </motion.div>

        {/* Tabs */}
        <motion.div 
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          <div className="bg-white/10 backdrop-blur-lg border-1 border-white/30 rounded-xl p-2 mx-auto w-full h-20 sm:w-115 flex justify-around items-center">
            <div className="grid grid-cols-5 gap-3">
              {tabs.map((tab, index) => {
                const Icon = tab.icon;
                return (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`p-2 rounded-lg text-white transition-all hover:scale-105 h-15 ${
                      activeTab === tab.id
                        ? 'bg-white/20'
                        : 'hover:bg-white/10'
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + (index * 0.1), duration: 0.5 }}
                  >
                    <div className="flex flex-col items-center">
                      <Icon className="w-6 h-6 mb-2" />
                      <div className="text-sm font-medium">{tab.label}</div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Tab Content Preview */}
          <motion.div 
            className="mt-8 bg-white/10 backdrop-blur-lg p-6 border-1 border-white/30 rounded-4xl w-full sm:w-220 h-80 sm:h-120 transform transition-all duration-500 hover:scale-[1.02]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            <div className="aspect-video relative">
              <div className="absolute inset-0 flex items-center justify-center text-white">
                {activeTab === 'fields' && (
                  <div className="grid grid-cols-2 gap-4 w-full">
                    <motion.div 
                      className="bg-white/20 backdrop-blur-sm rounded-lg p-6 transition-all hover:scale-105"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.7, duration: 0.5 }}
                    >
                      <h3 className="text-xl mb-2 font-medium">Field 237</h3>
                      <p className="text-white/90">Growth: 30%</p>
                      <p className="text-white/90">Soil Moisture: 56%</p>
                    </motion.div>
                    <motion.div 
                      className="bg-white/20 backdrop-blur-sm rounded-lg p-6 transition-all hover:scale-105"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.8, duration: 0.5 }}
                    >
                      <h3 className="text-xl mb-2 font-medium">Field 238</h3>
                      <p className="text-white/90">Growth: 45%</p>
                      <p className="text-white/90">Soil Moisture: 62%</p>
                    </motion.div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};