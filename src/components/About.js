import React from 'react';
import { motion } from 'framer-motion';
import { Target, Code2, Users, Zap } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Code2,
      title: 'Desarrollo Full Stack',
      description: 'Experiencia completa en frontend y backend con tecnologías modernas'
    },
    {
      icon: Target,
      title: 'Enfoque en Resultados',
      description: 'Soluciones eficientes que mejoran la productividad empresarial'
    },
    {
      icon: Users,
      title: 'Trabajo en Equipo',
      description: 'Colaboración efectiva usando metodologías ágiles como Scrum y Kanban'
    },
    {
      icon: Zap,
      title: 'Aprendizaje Continuo',
      description: 'Siempre actualizado con las últimas tendencias tecnológicas'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Sobre Mí
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-gray-200/50">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Mi Objetivo</h3>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  Soy desarrollador Full Stack recién egresado con interés en el área de aseguramiento de 
                  calidad (QA). Me motiva aplicar mis conocimientos en tecnologías como React Native, Node.js, 
                  Express.js y bases de datos SQL para contribuir al desarrollo de productos confiables y eficientes, 
                  asegurando su correcto funcionamiento mediante pruebas y validaciones sistemáticas.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Durante mi experiencia en la Municipalidad de San Carlos, adquirí habilidades 
                  prácticas en el análisis funcional de sistemas, la detección de errores y la mejora 
                  continua de procesos, participando en distintas etapas del ciclo de desarrollo para 
                  garantizar la calidad del software entregado.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;