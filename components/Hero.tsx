"use client";

import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { VT323, Fira_Code } from 'next/font/google';
import Image from 'next/image';

const pixelFont = VT323({ weight: '400', subsets: ['latin'] });
const codeFont = Fira_Code({ subsets: ['latin'] });

import {  
  SiJavascript, SiPhp, SiReact, SiNodedotjs, SiMysql 
} from '@icons-pack/react-simple-icons';
import { FaJava } from 'react-icons/fa';

const tecnologias = [
  { name: 'Java', logo: <FaJava className="w-6 h-6" color="#EA2D42" /> },
  { name: 'JavaScript', logo: <SiJavascript className="w-6 h-6" color="#F7DF1E" /> },
  { name: 'PHP', logo: <SiPhp className="w-6 h-6" color="#777BB4" /> },
  { name: 'React', logo: <SiReact className="w-6 h-6" color="#61DAFB" /> },
  { name: 'Node.js', logo: <SiNodedotjs className="w-6 h-6" color="#339933" /> },
  { name: 'MySQL', logo: <SiMysql className="w-6 h-6" color="#00758F" /> }
];

const trenInfinito = [...tecnologias, ...tecnologias];

// ==========================================
// COMPONENTE 1: EFECTO GLITCH PARA TEXTO
// ==========================================
const GlitchText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState(text);
  const chars = "█▓▒░<>{}[]01!@#$"; 

  const handleMouseEnter = () => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) =>
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) clearInterval(interval);
      iteration += 1 / 3; 
    }, 30);
  };

  return (
    <span 
      onMouseEnter={handleMouseEnter} 
      className="cursor-crosshair inline-block transition-transform duration-100"
    >
      {displayText}
    </span>
  );
};

// ==========================================
// COMPONENTE 2: BOTÓN CON EFECTO SCANNER (Codedgar Hover)
// ==========================================
const ScannerButton = ({ href, text, isPrimary }: { href: string, text: string, isPrimary?: boolean }) => {
  // Aplicamos tus colores dependiendo de si es el botón principal o secundario
  const baseStyles = isPrimary 
    ? "bg-cyan-500 text-slate-950 font-bold shadow-[0_0_15px_rgba(6,182,212,0.15)]" 
    : "bg-transparent border border-slate-700 text-slate-300 hover:bg-slate-900";
  
  const bracketColor = isPrimary ? "border-cyan-300" : "border-cyan-500";

  return (
    <motion.a 
      whileTap={{ scale: 0.95 }}
      href={href} 
      className={`relative group px-6 py-3 font-mono text-sm uppercase tracking-widest transition-colors ${baseStyles}`}
    >
      <span className="relative z-10">{text}</span>

      {/* Corchetes animándose hacia afuera al hacer hover */}
      <span className={`absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 ${bracketColor} opacity-0 group-hover:-top-2 group-hover:-left-2 group-hover:opacity-100 transition-all duration-300 ease-out`}></span>
      <span className={`absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 ${bracketColor} opacity-0 group-hover:-top-2 group-hover:-right-2 group-hover:opacity-100 transition-all duration-300 ease-out`}></span>
      <span className={`absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 ${bracketColor} opacity-0 group-hover:-bottom-2 group-hover:-left-2 group-hover:opacity-100 transition-all duration-300 ease-out`}></span>
      <span className={`absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 ${bracketColor} opacity-0 group-hover:-bottom-2 group-hover:-right-2 group-hover:opacity-100 transition-all duration-300 ease-out`}></span>
    </motion.a>
  );
};


export default function Hero() {
  const { scrollY } = useScroll();
  
  // EFECTO PARALLAX
  const yText = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);
  const yImage = useTransform(scrollY, [0, 500], [0, 50]);
  const opacityImage = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section id="inicio" className="min-h-screen flex flex-col justify-center bg-slate-950 text-white pt-40 px-6 md:px-12 overflow-hidden relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
        
        {/* TEXTO */}
        <motion.div 
          style={{ y: yText, opacity: opacityText }}
          className="space-y-6 text-center md:text-left order-2 md:order-1"
        >
          <motion.h1 
             initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
             className="text-4xl md:text-6xl font-extrabold tracking-tight"
          >
            Hola, soy{" "}
            <span className={`bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent ${pixelFont.className} text-5xl md:text-7xl`}>              
              <GlitchText text="Juan Pedro" />
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-slate-400 max-w-xl"
          >
            Estudiante de Ingeniería de Sistemas y Desarrollador Software. Me apasiona construir soluciones web modernas, eficientes y optimizadas.
          </motion.p>
          
          {/* BOTONES CON ANIMACIÓN SCANNER REPLICADA */}
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }}
            className="flex justify-center md:justify-start gap-4 pt-2"
          >
            <ScannerButton href="#proyectos" text="[ Ver_Proyectos ]" isPrimary={true} />
            <ScannerButton href="#contacto" text="Contáctame" />
          </motion.div>
        </motion.div>

        {/* IMAGEN DE PERFIL */}
        <motion.div 
          style={{ y: yImage, opacity: opacityImage }}
          className="flex justify-center order-1 md:order-2"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 border border-slate-700 bg-slate-900 p-1 group">
            <div className="relative w-full h-full overflow-hidden">
              <Image 
                src="/tu-foto.jpg" 
                alt="Juan Pedro" 
                fill
                style={{ objectFit: 'cover' }}
                className="grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                sizes="(max-width: 768px) 256px, 320px"
                priority
              />
            </div>
            {/* Esquinas fijas cyan en la imagen que se expanden hacia adentro */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-500 z-10 transition-all group-hover:w-full group-hover:h-full opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-500 z-10 transition-all group-hover:w-full group-hover:h-full opacity-50"></div>
          </div>
        </motion.div>
      </div>

      {/* TREN INFINITO */}
      <div className="max-w-3xl mx-auto w-full pt-24 pb-12 mt-12 relative overflow-hidden z-10">
        <div className="absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none" />

        <p className={`text-center text-xs font-bold tracking-widest text-slate-500 uppercase mb-8 ${codeFont.className}`}>
        {`// system.dependencies.load()`}
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
                className="flex items-center gap-3 px-5 py-2.5 bg-slate-900/50 border border-slate-800 transition-all duration-300 cursor-pointer grayscale opacity-50 hover:grayscale-0 hover:opacity-100 hover:border-cyan-500 hover:bg-slate-800 group"
              >
                <div className="flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  {tech.logo}
                </div>
                <span className="font-mono text-xs uppercase tracking-wider text-slate-400 group-hover:text-cyan-400 transition-colors duration-300">
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