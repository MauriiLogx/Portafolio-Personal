import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, BookOpen } from 'lucide-react';

const Education = () => {
  const certifications = [
    {
      title: 'Certificado Redes Cisco CCNAv7',
      institution: 'IP Santo Tomás',
      year: '2020',
      description: 'Certificación en redes y comunicaciones'
    },
    {
      title: 'Certificado de Título',
      institution: 'Ingeniería en Informática',
      year: '2020-2025',
      description: 'Título profesional en Ingeniería en Informática'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
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
              Educación y Certificaciones
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Education */}
            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Educación Superior</h3>
                  <p className="text-blue-600 font-semibold">Formación Académica</p>
                </div>
              </div>

              <motion.div
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-200/50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                  <h4 className="text-xl font-bold text-gray-900">Ingeniería en Informática</h4>
                </div>
                
                <p className="text-blue-600 font-semibold mb-3">IP Santo Tomás</p>
                
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-600 font-medium">2020 - 2025</span>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  Formación integral en desarrollo de software, bases de datos, redes, 
                  metodologías de desarrollo y gestión de proyectos tecnológicos. 
                  Enfoque práctico en tecnologías modernas y buenas prácticas de programación.
                </p>
              </motion.div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Certificaciones</h3>
                  <p className="text-green-600 font-semibold">Competencias Especializadas</p>
                </div>
              </div>

              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.title}
                    className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200/50"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + (index * 0.2) }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Award className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-900 mb-1">{cert.title}</h4>
                        <p className="text-green-600 font-semibold text-sm">{cert.institution}</p>
                      </div>
                      <span className="text-gray-500 text-sm font-medium bg-white px-3 py-1 rounded-full">
                        {cert.year}
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{cert.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Additional Info */}
          <motion.div
            className="mt-12 bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Compromiso con el Aprendizaje</h3>
            <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Mi formación académica y certificaciones reflejan mi compromiso con la excelencia técnica 
              y el aprendizaje continuo. Siempre busco mantenerme actualizado con las últimas tendencias 
              y mejores prácticas en el desarrollo de software para ofrecer soluciones de calidad.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;