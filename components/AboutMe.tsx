"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/app/data/animations';

export default function AboutMe() {
  return (
    <section id="sobre-mi" className="py-24 bg-[#0a0a0a] text-white px-4 border-t border-slate-800/80 relative z-20">
     <div className="max-w-5xl mx-auto px-6 w-full">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="space-y-6"
        >
          <div className="border-l-2 border-cyan-500 pl-4 mb-8">
            <h2 className="font-mono text-sm text-slate-500 uppercase tracking-widest">
              <span className="text-cyan-500">0x01</span> // core.perfil
            </h2>
            <h3 className="text-4xl font-extrabold text-slate-100 tracking-tight mt-1">Sobre Mí</h3>
          </div>

          <div className="font-mono text-slate-400 text-sm leading-relaxed space-y-4 max-w-2xl bg-slate-950/40 border border-slate-900 p-6">
            <p>
              <span className="text-cyan-400">&gt;</span> Estudiante apasionado por la ingeniería y la optimización de procesos mediante código limpio. Me especializo en estructurar soluciones de software punta a punta, desde el diseño de bases de datos relacionales hasta interfaces interactivas y dinámicas.
            </p>
            <p>
              <span className="text-cyan-400">&gt;</span> Mi enfoque combina rigor lógico y abstracción analítica, permitiéndome abordar problemas complejos de simulación de flujos y desarrollo móvil con una fuerte orientación a la eficiencia y escalabilidad.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}