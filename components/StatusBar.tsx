'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Fira_Code } from 'next/font/google';
import { Play } from 'lucide-react';

const codeFont = Fira_Code({ subsets: ['latin'] });

export default function StatusBar() {
  const { scrollYProgress } = useScroll();
  const [progress, setProgress] = useState(0);
  const [time, setTime] = useState('');
  const [section, setSection] = useState('inicio'); // Cambiado a 'inicio'

  // 1. Mantenemos solo el cálculo del progreso de la barra en base al scroll global
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setProgress(Math.round(latest * 100));
  });

  // 2. Nuevo Effect para observar qué sección está visible en pantalla (IntersectionObserver)
  useEffect(() => {
    // AHORA: Busca tanto secciones como el footer que tengan un ID
    const sections = document.querySelectorAll('section[id], footer[id]');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);
  
  // ... (El useEffect del reloj se mantiene igual)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('es-PE', { 
        hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'America/Lima'
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
        
        {/* REPRODUCTOR CON SÍMBOLO PLAY */}
        <div className="hidden md:flex items-center gap-2 cursor-pointer group max-w-[300px]">
          <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors">♪</span>
          <span className="text-slate-500 group-hover:text-cyan-400 transition-colors">Spotify</span>
          
          <span className="text-slate-700">|</span>
          
          <span className="text-slate-400 group-hover:text-slate-300 transition-colors truncate">
            Oasis
          </span>
          
          {/* Aquí agregamos el icono de Play con 'fill-current' para que sea un triángulo sólido */}
          <Play className="w-3 h-3 text-slate-600 group-hover:text-cyan-500 transition-colors shrink-0 fill-current" />
          
          <span className="text-slate-200 group-hover:text-white transition-colors truncate">
            Wonderwall
          </span>
        </div>
        
        {/* Progreso del Scroll */}
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
        
        {/* Botones decorativos */}
        <div className="hidden sm:flex items-center gap-1">
          <button className="border border-slate-700 hover:border-cyan-500 hover:text-cyan-400 px-1.5 transition-colors">S</button>
          <button className="border border-slate-700 hover:border-cyan-500 hover:text-cyan-400 px-1.5 transition-colors">?</button>
        </div>
      </div>

    </div>
  );
}