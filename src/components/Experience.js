import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

const Experience = () => {
  const achievements = [
    'Diseñé e implementé un sistema completo de gestión de inventarios',
    'Desarrollé funcionalidades de login con roles y gestión de usuarios',
    'Creé sistema de reportes Excel y mantenimientos',
    'Modelé base de datos relacional desde cero',
    'Brindé soporte técnico a usuarios finales',
    'Mejoré la trazabilidad de recursos tecnológicos'
  ];

  const technologies = [
    'React Native',
    'JavaScript',
    'Node.js',
    'Express.js',
    'MySQL',
    'RESTful APIs',
    'Git'
  ];

  return (
    <section id="experience" className="py-20 bg-white">
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
              Experiencia Laboral
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 border border-gray-200/50 shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Job Header */}
              <div className="lg:col-span-1">
                <motion.div
                  className="flex items-center gap-4 mb-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Desarrollador Full Stack (Practica Profesional)</h3>
                    <p className="text-blue-600 font-semibold">Municipalidad de San Carlos</p>
                  </div>
                </motion.div>

                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 text-gray-600">
                    <Calendar className="w-5 h-5" />
                    <span className="font-medium">Septiembre 2024 - Diciembre 2024</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="w-5 h-5" />
                    <span className="font-medium">San Carlos, Ñuble</span>
                  </div>
                </motion.div>

                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Tecnologías Utilizadas</h4>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-700 border border-gray-200 shadow-sm"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.5 + (index * 0.1) }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Job Details */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-xl font-bold text-gray-900 mb-6">Logros y Responsabilidades</h4>
                  <div className="grid gap-4">
                    {achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-4 p-4 bg-white/80 rounded-2xl border border-gray-200/50 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
                      >
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <p className="text-gray-700 leading-relaxed">{achievement}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  className="mt-8 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-200/50"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h5 className="text-lg font-bold text-gray-900 mb-3">Impacto del Proyecto</h5>
                  <p className="text-gray-700 leading-relaxed">
                    El sistema desarrollado mejoró significativamente la gestión de inventarios de la municipalidad, 
                    proporcionando mayor control, trazabilidad y eficiencia en la administración de recursos tecnológicos. 
                    La implementación de roles y permisos garantizó la seguridad de la información, mientras que los 
                    reportes automatizados optimizaron los procesos administrativos.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;