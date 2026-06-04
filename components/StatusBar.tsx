'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Fira_Code } from 'next/font/google';

const codeFont = Fira_Code({ subsets: ['latin'] });

export default function StatusBar() {
  const { scrollYProgress } = useScroll();
  const [progress, setProgress] = useState(0);
  const [time, setTime] = useState('');
  const [section, setSection] = useState('init');

  // Rastrea el porcentaje de scroll y la sección actual
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setProgress(Math.round(latest * 100));
    
    // Lógica simple para cambiar el nombre de la sección según el scroll
    if (latest < 0.2) setSection('init');
    else if (latest < 0.8) setSection('proyectos_destacados');
    else setSection('contacto');
  });

  // Reloj en tiempo real
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('es-PE', { 
        hour: '2-digit', 
        minute: '2-digit', 
        hour12: false,
        timeZone: 'America/Lima'
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`fixed bottom-0 left-0 w-full bg-[#0a0a0a]/90 backdrop-blur-sm border-t border-slate-800/80 text-slate-500 z-50 px-4 py-2 flex justify-between items-center text-[10px] sm:text-xs tracking-widest uppercase ${codeFont.className}`}>
      
      {/* LADO IZQUIERDO: Modo y Sección */}
      <div className="flex items-center gap-4">
        <span className="text-cyan-400 font-bold border border-cyan-500/30 px-2 py-0.5 bg-cyan-500/10 hidden sm:inline-block">
          [MODE: SYS.READY]
        </span>
        <span>
          // {section}
        </span>
      </div>

      {/* LADO DERECHO: Música, Progreso y Reloj */}
      <div className="flex items-center gap-4 sm:gap-6">
        <span className="hidden md:inline hover:text-cyan-400 cursor-pointer transition-colors truncate max-w-[200px]">
          ♪ Spotify - Oasis
        </span>
        
        {/* COMPONENTE NUMÉRICO CORREGIDO */}
        <div className="flex items-center gap-2">
          <span className="w-12 text-right whitespace-nowrap tabular-nums">{progress}%</span>
          <span className="hidden sm:inline">-</span>
          <div className="hidden sm:block w-24 h-[1px] bg-slate-800 relative">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-cyan-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        
        {/* Reloj */}
        <span>{time}</span>
        
        {/* Botones decorativos de terminal */}
        <div className="hidden sm:flex items-center gap-1">
          <button className="border border-slate-700 hover:border-cyan-500 hover:text-cyan-400 px-1.5 transition-colors">S</button>
          <button className="border border-slate-700 hover:border-cyan-500 hover:text-cyan-400 px-1.5 transition-colors">?</button>
        </div>
      </div>

    </div>
  );
}