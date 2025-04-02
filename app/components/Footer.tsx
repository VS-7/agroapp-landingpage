'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const footerLinks = {
  product: [
    { label: 'Features', href: '#features' },
    { label: 'Use Cases', href: '#use-cases' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Resources', href: '#resources' },
  ],
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'Blog', href: '#blog' },
    { label: 'Careers', href: '#careers' },
    { label: 'Contact', href: '#contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Service', href: '#terms' },
    { label: 'Cookie Policy', href: '#cookies' },
  ],
  social: [
    { label: 'Twitter', href: '#twitter', icon: '𝕏' },
    { label: 'LinkedIn', href: '#linkedin', icon: '🔗' },
    { label: 'Instagram', href: '#instagram', icon: '📸' },
  ],
};

export const Footer = () => {
  return (
    <footer className="relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/background3.png"
          alt="Footer Background"
          fill
          className=""
        />
       
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Brand Column */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/" className="flex items-center mb-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src="/images/logo.png"
                    alt="Flora Logo"
                    width={250}
                    height={250}
                    className="h-20 w-auto"
                  />
                </motion.div>
                <motion.span 
                  className="ml-2 text-4xl font-semibold text-black"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  Flora™
                </motion.span>
              </Link>
              <motion.p 
                className="text-black/80 mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
              >
                Empowering agriculture to restore ecosystems and create a
                sustainable future for all.
              </motion.p>
              <motion.div 
                className="flex space-x-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {footerLinks.social.map((social, index) => (
                  <motion.div
                    key={social.label}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.7 + (index * 0.1), duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.2 }}
                  >
                    <Link
                      href={social.href}
                      className="text-black/80 hover:text-black text-2xl"
                    >
                      {social.icon}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Links Columns */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-black font-semibold mb-4">Product</h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link, index) => (
                  <motion.li 
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + (index * 0.1), duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <Link
                      href={link.href}
                      className="text-black/80 hover:text-black"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-black font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <motion.li 
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + (index * 0.1), duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <Link
                      href={link.href}
                      className="text-black/80 hover:text-black"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-black font-semibold mb-4">Legal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link, index) => (
                  <motion.li 
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + (index * 0.1), duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <Link
                      href={link.href}
                      className="text-black/80 hover:text-black"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div 
            className="border-t border-black/20 mt-12 pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-black/60 text-center">
              © {new Date().getFullYear()} Flora™. All rights reserved.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
}; 