"use client";

import React from 'react';
import { motion } from 'framer-motion';
// Importamos los nombres de exportación actualizados de la librería
import { 
  SiJava, 
  SiJavascript, 
  SiPhp, 
  SiReact, 
  SiNodedotjs, 
  SiMysql 
} from '@icons-pack/react-simple-icons';

const tecnologias = [
  { name: 'Java', logo: <SiJava className="w-6 h-6" color="#EA2D42" />, color: 'hover:border-[#EA2D42]/50' },
  { name: 'JavaScript', logo: <SiJavascript className="w-6 h-6" color="#F7DF1E" />, color: 'hover:border-[#F7DF1E]/50' },
  { name: 'PHP', logo: <SiPhp className="w-6 h-6" color="#777BB4" />, color: 'hover:border-[#777BB4]/50' },
  { name: 'React', logo: <SiReact className="w-6 h-6" color="#61DAFB" />, color: 'hover:border-[#61DAFB]/50' },
  { name: 'Node.js', logo: <SiNodedotjs className="w-6 h-6" color="#339933" />, color: 'hover:border-[#339933]/50' },
  { name: 'MySQL', logo: <SiMysql className="w-6 h-6" color="#00758F" />, color: 'hover:border-[#00758F]/50' }
];

// Duplicamos la lista para asegurar el ciclo infinito del tren sin cortes
const trenInfinito = [...tecnologias, ...tecnologias];

export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex flex-col justify-center bg-slate-950 text-white pt-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
        
        {/* TEXTO DE PRESENTACIÓN */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 text-center md:text-left order-2 md:order-1"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Hola, soy{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Juan Pedro
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-xl">
            Estudiante de Ingeniería de Sistemas y Desarrollador Software. Me apasiona construir soluciones web modernas, eficientes y optimizadas.
          </p>
          <div className="flex justify-center md:justify-start gap-4 pt-2">
            <a href="#proyectos" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold rounded-lg shadow-lg shadow-cyan-500/20 transition-all">
              Ver Proyectos
            </a>
            <a href="#contacto" className="px-6 py-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white font-semibold rounded-lg transition-all">
              Contáctame
            </a>
          </div>
        </motion.div>

        {/* IMAGEN PERSONAL */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center order-1 md:order-2"
        >
          <motion.div 
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-cyan-500/30 shadow-2xl shadow-cyan-500/10 bg-slate-900"
          >
            <img 
              src="/tu-foto.jpg" 
              alt="Juan Pedro" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60";
              }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* CONTENEDOR REDUCIDO Y CENTRADO DEL TREN (max-w-3xl) */}
      <div className="max-w-3xl mx-auto w-full pt-24 pb-12 mt-12 relative overflow-hidden">
        {/* Desvanecimiento en los bordes para un look más limpio */}
        <div className="absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none" />

        <p className="text-center text-sm font-semibold tracking-wider text-slate-500 uppercase mb-8">
          Tecnologías que domino
        </p>
        
        <div className="w-full overflow-hidden">
          <motion.div 
            className="flex gap-6 w-max items-center"
            animate={{ x: [0, "-50%"] }}
            transition={{ ease: "linear", duration: 16, repeat: Infinity }}
          >
            {trenInfinito.map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-5 py-2.5 bg-slate-900/40 border border-slate-900 rounded-xl transition-all duration-300 cursor-pointer grayscale opacity-50 hover:grayscale-0 hover:opacity-100 hover:bg-slate-900/80 group"
              >
                <div className="flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  {tech.logo}
                </div>
                <span className="font-semibold text-sm text-slate-400 hover:text-white transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}