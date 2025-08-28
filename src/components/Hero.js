import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-20">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="relative mb-8"
            variants={itemVariants}
          >
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
              <span className="text-4xl font-bold text-white">MF</span>
            </div>
            <motion.div
              className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              Mauricio Faúndez
            </span>
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl text-gray-600 font-medium mb-8"
            variants={itemVariants}
          >
            Ingeniero en Informática
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed"
            variants={itemVariants}
          >
            Desarrollador Full Stack especializado en React Native, Node.js y bases de datos SQL. 
            Apasionado por crear soluciones tecnológicas eficientes que mejoren la experiencia del usuario 
            y optimicen procesos empresariales.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            variants={itemVariants}
          >
            <motion.a
              href="/cvmauriciofaundez.pdf"
              download
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 justify-center"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5" />
              Descargar CV
            </motion.a>

            <motion.button
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white text-gray-800 font-semibold rounded-2xl border-2 border-gray-200 hover:border-blue-500 hover:text-blue-600 transition-all duration-300 flex items-center gap-3 justify-center"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              Contactar
            </motion.button>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            <motion.div
              className="flex items-center justify-center gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-sm"
              whileHover={{ scale: 1.05 }}
            >
              <MapPin className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700 font-medium">San Carlos, Ñuble</span>
            </motion.div>

            <motion.div
              className="flex items-center justify-center gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-sm"
              whileHover={{ scale: 1.05 }}
            >
              <Phone className="w-5 h-5 text-green-600" />
              <span className="text-gray-700 font-medium">+569 82171604</span>
            </motion.div>

            <motion.div
              className="flex items-center justify-center gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-sm"
              whileHover={{ scale: 1.05 }}
            >
              <Mail className="w-5 h-5 text-purple-600" />
              <span className="text-gray-700 font-medium">mauricio.faundez@hotmail.com</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;