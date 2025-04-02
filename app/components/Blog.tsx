'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  CalendarIcon 
} from '@heroicons/react/24/outline';

const blogPosts = [
  {
    id: 1,
    title: 'Agrofloresta em Pequenas Propriedades',
    excerpt: 'Guia passo a passo para os agricultores implementarem sistemas agroflorestais em áreas menores.',
    image: '/images/blog-agroforestry.jpg',
    category: 'Agrofloresta',
    date: '22 Dezembro, 2024',
  },
  {
    id: 2,
    title: 'Construindo sistemas de solo resilientes',
    excerpt: 'Mergulhe em técnicas de agricultura regenerativa para restaurar a saúde do solo e aumentar a sustentabilidade.',
    image: '/images/blog-soil.jpg',
    category: 'Biodiversidade',
    date: '19 Novembro, 2024',
  },
];

export const Blog = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.span 
            className="inline-block text-green-500 text-sm font-medium mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Blogue
          </motion.span>
          <motion.h2 
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Nossas últimas notícias regenerativas
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Desempenhamos um papel vital na promoção de práticas regenerativas, não apenas na agricultura, mas também na restauração do equilíbrio de nossos ecossistemas.
          </motion.p>
          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link href="/blog" className="inline-block bg-green-500 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-green-600 transition-colors">
              Abrir Blog
            </Link>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {blogPosts.map((post, index) => (
            <motion.div 
              key={post.id}
              className="border-1 border-gray-300 rounded-xl overflow-hidden "
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="relative h-64">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
                {index === 0 && (
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10"></div>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link 
                  href={`/blog/${post.id}`} 
                  className="text-green-600 font-medium hover:text-green-700 transition-colors flex items-center"
                >
                  Ler mais
                  <svg 
                    className="w-4 h-4 ml-1" 
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 