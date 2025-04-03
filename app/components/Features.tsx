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

const features = [
  {
    id: 'home',
    label: 'Início',
    icon: HomeIcon,
    title: 'Tenha uma visão 360° para gerenciar sua fazenda como nunca antes',
    description: 'Obtenha uma visão completa das operações da sua fazenda em um só lugar.',
  },
  {
    id: 'fields',
    label: 'Campos',
    icon: Square3Stack3DIcon,
    title: 'Gerencie sua fazenda, escale sua produção e mantenha a sustentabilidade',
    description: 'Desempenhamos um papel vital na promoção de práticas regenerativas, não apenas na agricultura, mas também na restauração do equilíbrio de nossos ecossistemas.',
  },
  {
    id: 'tasks',
    label: 'Tarefas',
    icon: ClipboardDocumentListIcon,
    title: 'Prepare todas as tarefas necessárias para plantar e crescer!',
    description: 'Mantenha o controle de todas as suas tarefas e atribuições em um só lugar, garantindo que nada fique para trás.',
  },
  {
    id: 'weather',
    label: 'Clima',
    icon: CloudIcon,
    title: 'Monitoramento e previsão do tempo em tempo real',
    description: 'Tome decisões informadas com base em dados meteorológicos precisos e atualizados.',
  },
  {
    id: 'energy',
    label: 'Energia',
    icon: BoltIcon,
    title: 'Monitore e otimize seu consumo de energia',
    description: 'Acompanhe e gerencie o uso de energia da sua fazenda de forma eficiente.',
  },
];

export const Features = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = features.map(f => document.getElementById(f.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        if (!section) return;
        
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-8">
          <motion.aside 
            className={`w-64 flex-shrink-0 hidden sm:block`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <nav className="space-y-1 sticky top-24">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.button
                    key={feature.id}
                    onClick={() => scrollToSection(feature.id)}
                    className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-all ${
                      activeSection === feature.id
                        ? 'bg-gray-50 text-green-700'
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    <span className="font-medium text-sm">{feature.label}</span>
                  </motion.button>
                );
              })}
            </nav>
          </motion.aside>

          <div className="flex-1">
            <div className="space-y-10 ">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.id}
                    id={feature.id}
                    className="bg-gray-100 rounded-2xl p-8 scroll-mt-8"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <div className="flex items-center gap-2 mb-6">
                      <Icon className="w-6 h-6 text-green-600" />
                      <span className="text-green-800 font-medium">
                        Features
                      </span>
                    </div>
                    <motion.h2 
                      className="text-4xl font-bold mb-6"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {feature.title}
                    </motion.h2>
                    <motion.p 
                      className="text-gray-600 text-lg mb-8"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {feature.description}
                    </motion.p>

                    {feature.id === 'fields' && (
                      <motion.div 
                        className="bg-gray-50 rounded-xl p-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 0.4 }}
                            viewport={{ once: true }}
                          >
                            <h3 className="text-xl font-semibold mb-4">Campo 237</h3>
                            <div className="space-y-3">
                              <div className="flex justify-between">
                                <span>Crescimento</span>
                                <span className="text-green-600">30%</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Umidade do Solo</span>
                                <span>56%</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Potencial de Carbono</span>
                                <span>3.8 T</span>
                              </div>
                            </div>
                          </motion.div>
                          <motion.div 
                            className="relative h-48"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            viewport={{ once: true }}
                          >
                            <Image
                              src="/images/field-preview.png"
                              alt="Visualização do Campo"
                              fill
                              className="object-cover rounded-lg"
                            />
                          </motion.div>
                        </div>
                      </motion.div>
                    )}

                    {feature.id === 'tasks' && (
                      <motion.div 
                        className="bg-gray-50 rounded-xl p-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <div className="grid grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <motion.div 
                              className="bg-white p-4 rounded-lg shadow-sm"
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.5, duration: 0.4 }}
                              viewport={{ once: true }}
                            >
                              <div className="flex items-center gap-2 mb-2">
                                <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                                <span className="font-medium">Regar 4 Acres de Trigo</span>
                              </div>
                              <div className="text-sm text-gray-500">2 dias restantes</div>
                            </motion.div>
                            <motion.div 
                              className="bg-white p-4 rounded-lg shadow-sm"
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.6, duration: 0.4 }}
                              viewport={{ once: true }}
                            >
                              <div className="flex items-center gap-2 mb-2">
                                <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                                <span className="font-medium">A Colheita está Abundante</span>
                              </div>
                              <div className="text-sm text-gray-500">Em andamento</div>
                            </motion.div>
                          </div>
                          <motion.div 
                            className="relative h-48"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                            viewport={{ once: true }}
                          >
                            <Image
                              src="/images/tasks-preview.png"
                              alt="Visualização das Tarefas"
                              fill
                              className="object-cover rounded-lg"
                            />
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 