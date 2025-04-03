'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 px-4 transition-all duration-200 ${
      isScrolled ? 'pt-4' : 'pt-0'
    }`}>
      <motion.nav 
        className={`mx-auto rounded-lg transition-all duration-100 ${
          isScrolled 
            ? 'bg-white max-w-[800px] py-2 border-1 border-gray-300' 
            : 'bg-transparent max-w-5xl py-4 border-none'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto px-6">
          <div className={`flex justify-around items-center transition-all duration-300 ${
            isScrolled ? 'h-12' : 'h-12'
          }`}>
            <motion.div 
              className="flex-shrink-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logo.png"
                  alt="Flora Logo"
                  width={150}
                  height={150}
                  className={`w-auto transition-all duration-300 ${
                    isScrolled ? 'h-15' : 'h-15'
                  }`}
                />
                {!isScrolled && (
                  <motion.span 
                    className={`ml-2 font-semibold text-gray-700 transition-all duration-300 ${
                      isScrolled ? 'text-2xl' : 'text-2xl'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    Flora™
                  </motion.span>
                )}
              </Link>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 font-medium">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <Link href="#use-cases" className="text-gray-600 hover:text-green-800 transition-all duration-300">
                  Casos de Uso
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <Link href="#about" className="text-gray-600 hover:text-green-800 transition-all duration-300">
                  Sobre Nós
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <Link href="#contact" className="text-gray-600 hover:text-green-800 transition-all duration-300">
                  Contato
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <Link href="#blog" className="text-gray-600 hover:text-green-800 transition-all duration-300">
                  Blog
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#template"
                  className={`bg-green-500 border-1 border-green-600 font-semibold text-white rounded-xl hover:bg-green-600 transition-all duration-300 ${
                    isScrolled ? 'px-4 py-1.5' : 'px-4 py-2 text-base'
                  }`}
                >
                  Acessar Plataforma
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.div 
              className="md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-green-600"
              >
                <svg
                  className={`transition-all duration-300 ${
                    isScrolled ? 'h-5 w-5' : 'h-6 w-6'
                  }`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </motion.div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                className="md:hidden mt-2"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white rounded-lg ">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                  >
                    <Link
                      href="#use-cases"
                      className="block px-3 py-2 text-gray-700 hover:text-green-600"
                    >
                      Casos de Uso
                    </Link>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                  >
                    <Link
                      href="#about"
                      className="block px-3 py-2 text-gray-700 hover:text-green-600"
                    >
                      Sobre Nós
                    </Link>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                  >
                    <Link
                      href="#contact"
                      className="block px-3 py-2 text-gray-700 hover:text-green-600"
                    >
                      Contato
                    </Link>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                  >
                    <Link
                      href="#blog"
                      className="block px-3 py-2 text-gray-700 hover:text-green-600"
                    >
                      Blog
                    </Link>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <Link
                      href="#template"
                      className="block px-3 py-2 bg-green-500 text-white text-center rounded-lg border-1 border-green-600 hover:bg-green-600"
                    >
                      Acessar Plataforma
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </div>
  );
}; 