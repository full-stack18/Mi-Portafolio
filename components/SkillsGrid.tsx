"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { misHabilidades } from '@/app/data/constants';
import { fadeInUp, staggerContainer } from '@/app/data/animations';

export default function SkillsGrid() {
  return (
<section id="habilidades" className="py-24 bg-slate-950 text-white px-4 border-t border-slate-800/80 relative z-20">
<div className="max-w-5xl mx-auto px-6 w-full">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="border-l-2 border-cyan-500 pl-4 mb-16"
        >
          <h2 className="font-mono text-sm text-slate-500 uppercase tracking-widest">
            <span className="text-cyan-500">0x02</span> // stack.tecnologico
          </h2>
          <h3 className="text-4xl font-extrabold text-slate-100 tracking-tight mt-1">Habilidades</h3>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer(0.1)}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {misHabilidades.map((cat, idx) => (
            <motion.div 
              key={idx}
              variants={fadeInUp}
              className="bg-slate-900/40 border border-slate-800/80 p-6 hover:border-cyan-500/30 transition-all group"
            >
              <h4 className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-4 font-bold border-b border-slate-800 pb-2">
                // {cat.categoria}
              </h4>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((skill) => (
                  <span 
                    key={skill}
                    className="px-2.5 py-1 text-xs font-mono bg-slate-950 text-slate-400 border border-slate-900 group-hover:border-slate-800 group-hover:text-slate-300 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}