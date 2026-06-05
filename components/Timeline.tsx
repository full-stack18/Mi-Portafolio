"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { miEducacion } from '@/app/data/constants';
import { fadeInUp, staggerContainer } from '@/app/data/animations';

export default function Timeline() {
  return (
    <section id="trayectoria" className="py-24 bg-slate-950 text-white px-4 border-t border-slate-800/80 relative z-20">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="border-l-2 border-cyan-500 pl-4 mb-16"
        >
          <h2 className="font-mono text-sm text-slate-500 uppercase tracking-widest">
            <span className="text-cyan-500">0x03</span> // trayectoria.academica
          </h2>
          <h3 className="text-4xl font-extrabold text-slate-100 tracking-tight mt-1">Educación & Hitos</h3>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer(0.2)}
          className="space-y-12 relative before:absolute before:top-0 before:left-4 md:before:left-32 before:bottom-0 before:w-[1px] before:bg-slate-800"
        >
          {miEducacion.map((item, idx) => (
            <motion.div 
              key={idx}
              variants={fadeInUp}
              className="relative flex flex-col md:flex-row md:gap-12 pl-12 md:pl-0"
            >
              {/* Nodo Temporal */}
              <div className="md:w-32 flex-shrink-0 mb-2 md:mb-0">
                <span className="font-mono text-xs text-cyan-400 font-bold bg-slate-900 border border-slate-800 px-2 py-1 inline-block">
                  {item.periodo}
                </span>
              </div>

              {/* Punto indicador */}
              <div className="absolute left-3.5 md:left-[124px] top-1.5 w-2 h-2 rounded-full bg-cyan-500 border-4 border-[#0a0a0a] box-content" />

              {/* Contenido descriptivo */}
              <div className="flex-1 space-y-2">
                <h4 className="text-xl font-bold text-slate-200">{item.titulo}</h4>
                <p className="font-mono text-xs text-slate-500 uppercase tracking-wider">{item.institucion}</p>
                <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">{item.descripcion}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}