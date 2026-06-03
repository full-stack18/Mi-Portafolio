'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { misProyectos } from '../app/data/projects';

// VARIANTES PARA LA APARICIÓN EN CASCADA
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }, // Aparecen una tras otra
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { type: "spring", stiffness: 100, damping: 20 } 
  },
};

export default function ProjectsSection() {
  return (
    // FONDO ORIGINAL: bg-slate-950
    <section id="proyectos" className="py-24 bg-slate-950 text-white px-4 border-t border-slate-800/80 relative z-20">
      <div className="max-w-6xl mx-auto">
        
        {/* ENCABEZADO ANIMADO TIPO TERMINAL */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-3 mb-16 border-l-2 border-cyan-500 pl-4"
        >
          <h2 className="font-mono text-sm text-slate-500 uppercase tracking-widest">
            <span className="text-cyan-500">0x01</span> // proyectos.destacados
          </h2>
          <p className="text-slate-400 max-w-xl text-sm font-mono">
            Parseando repositorios locales y académicos... OK.
          </p>
        </motion.div>

        {/* CONTENEDOR GRID EN CASCADA */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {misProyectos.map((proyecto) => (
            // TARJETA: Sin bordes redondeados, colores slate originales
            <motion.div 
              key={proyecto.id} 
              variants={cardVariants}
              whileHover={{ y: -5 }} // Se eleva ligeramente al hacer hover
              className="bg-slate-900/50 border border-slate-800 p-6 hover:border-cyan-500/50 hover:bg-slate-900 transition-all duration-300 group flex flex-col justify-between shadow-none hover:shadow-[0_0_30px_rgba(6,182,212,0.05)]"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                  {proyecto.titulo}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {proyecto.descripcion}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {proyecto.tecnologias.map((tech) => (
                    // TAGS ESTILO TERMINAL PERO CON TUS COLORES
                    <span 
                      key={tech} 
                      className="px-2 py-1 text-[10px] uppercase tracking-wider font-mono bg-slate-950 text-cyan-400 border border-slate-800 group-hover:border-cyan-500/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4 pt-8">
                {proyecto.github && (
                  <a 
                    href={proyecto.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-slate-500 hover:text-cyan-400 flex items-center gap-2 transition-all uppercase tracking-widest group/link"
                  >
                    [ Ver_Código ] 
                    <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}