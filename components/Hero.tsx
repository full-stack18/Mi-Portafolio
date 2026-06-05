"use client";

import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import Image from 'next/image';
import { VT323 } from 'next/font/google';

const pixelFont = VT323({ weight: '400', subsets: ['latin'] });

import {  
  SiJavascript, SiPhp, SiReact, SiNodedotjs, SiMysql 
} from '@icons-pack/react-simple-icons';
import { FaJava } from 'react-icons/fa';
import MagneticWrapper from './MagneticWrapper';

const tecnologias = [
  { name: 'Java', logo: <FaJava className="w-6 h-6" color="#EA2D42" /> },
  { name: 'JavaScript', logo: <SiJavascript className="w-6 h-6" color="#F7DF1E" /> },
  { name: 'PHP', logo: <SiPhp className="w-6 h-6" color="#777BB4" /> },
  { name: 'React', logo: <SiReact className="w-6 h-6" color="#61DAFB" /> },
  { name: 'Node.js', logo: <SiNodedotjs className="w-6 h-6" color="#339933" /> },
  { name: 'MySQL', logo: <SiMysql className="w-6 h-6" color="#00758F" /> }
];

const trenInfinito = [...tecnologias, ...tecnologias];

const GlitchText = ({ text }: { text: string }) => {
  const textRef = useRef<HTMLSpanElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const chars = "█▓▒░<>{}[]01!@#$"; 

  const handleMouseEnter = () => {
    let iteration = 0;
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (!textRef.current) return;
      
      textRef.current.innerText = text
        .split("")
        .map((letter, index) => {
          if (index < iteration) return text[index];
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      if (iteration >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        if (textRef.current) textRef.current.innerText = text;
      }
      iteration += 1 / 3; 
    }, 30);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <span 
      ref={textRef}
      onMouseEnter={handleMouseEnter} 
      className="cursor-crosshair inline-block transition-transform duration-100"
    >
      {text}
    </span>
  );
};

const ScannerButton = ({ href, text, isPrimary }: { href: string, text: string, isPrimary?: boolean }) => {
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
      <span className={`absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 ${bracketColor} opacity-0 group-hover:-top-2 group-hover:-left-2 group-hover:opacity-100 transition-all duration-300 ease-out`}></span>
      <span className={`absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 ${bracketColor} opacity-0 group-hover:-top-2 group-hover:-right-2 group-hover:opacity-100 transition-all duration-300 ease-out`}></span>
      <span className={`absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 ${bracketColor} opacity-0 group-hover:-bottom-2 group-hover:-left-2 group-hover:opacity-100 transition-all duration-300 ease-out`}></span>
      <span className={`absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 ${bracketColor} opacity-0 group-hover:-bottom-2 group-hover:-right-2 group-hover:opacity-100 transition-all duration-300 ease-out`}></span>
    </motion.a>
  );
};

export default function Hero() {
  const { scrollY } = useScroll();
  
  const yText = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);
  const yImage = useTransform(scrollY, [0, 500], [0, 50]);
  const opacityImage = useTransform(scrollY, [0, 400], [1, 0]);

  // --- LÓGICA DE SISTEMA: EFECTO 3D TILT ---
  const mouseX = useMotionValue(0.5); 
  const mouseY = useMotionValue(0.5);

  const springConfig = { damping: 25, stiffness: 300 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothMouseY, [0, 1], [15, -15]);
  const rotateY = useTransform(smoothMouseX, [0, 1], [-15, 15]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const xPct = (event.clientX - rect.left) / rect.width;
    const yPct = (event.clientY - rect.top) / rect.height;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <section id="inicio" className="min-h-screen flex flex-col justify-center bg-slate-950 text-white pt-40 px-6 md:px-12 overflow-hidden relative">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10 w-full px-6">
        
        <motion.div 
          style={{ y: yText, opacity: opacityText }}
          className="space-y-6 text-center md:text-left order-2 md:order-1"
        >
          <motion.h1 
             initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
             className="text-4xl md:text-6xl font-extrabold tracking-tight"
          >
            Hola, soy{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent font-pixel text-5xl md:text-7xl">              
              <GlitchText text="Juan Pedro" />
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-slate-400 max-w-xl"
          >
            Estudiante de Ingeniería de Sistemas y Desarrollador Software. Me apasiona construir soluciones web modernas, eficientes y optimizadas.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }}
            className="flex justify-center md:justify-start gap-4 pt-2"
          >
            <MagneticWrapper> 
                    <ScannerButton href="#proyectos" text="[ Ver_Proyectos ]" isPrimary={true} />
            </MagneticWrapper>
            <MagneticWrapper> 
                    <ScannerButton href="#contacto" text="Contáctame" />
            </MagneticWrapper>
          </motion.div>
        </motion.div>

        {/* --- COLUMNA DE LA IMAGEN (EFECTO 3D TILT) --- */}
        <motion.div 
          style={{ y: yImage, opacity: opacityImage }}
          className="flex justify-center order-1 md:order-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div 
            className="relative w-72 h-[22rem] md:w-80 md:h-[28rem] perspective-[1000px]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d"
              }}
              className="relative w-full h-full border border-slate-700 bg-slate-900 p-1 group transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] cursor-crosshair"
            >
              
              <div className="relative w-full h-full overflow-hidden">
                
                {/* La imagen original */}
                <Image 
                  src="/tu-foto.jpg" 
                  alt="Juan Pedro" 
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 768px) 256px, 320px"
                  priority
                />

                {/* Overlay tipo Grid estático (muy suave) */}
                <div 
                  className="absolute inset-0 z-10 pointer-events-none opacity-20 group-hover:opacity-10 transition-opacity duration-500 mix-blend-overlay"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(transparent, transparent 2px, rgba(6,182,212,0.3) 2px, rgba(6,182,212,0.3) 4px)'
                  }}
                />

                {/* === 1. ESCÁNER DE CARGA INICIAL === */}
                <motion.div
                  className="absolute left-0 right-0 w-full h-[2px] bg-cyan-400 shadow-[0_0_20px_4px_rgba(6,182,212,0.8)] z-20 pointer-events-none"
                  initial={{ top: "110%", opacity: 1 }}
                  animate={{ top: "-10%", opacity: 0 }}
                  transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
                />

                {/* === 2. ESCÁNER SUTIL AL PASAR EL RATÓN === */}
                <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <motion.div 
                    className="absolute left-0 right-0 w-full h-[2px] bg-cyan-400/50 shadow-[0_0_15px_2px_rgba(6,182,212,0.5)]"
                    initial={{ top: "-10%" }} 
                    animate={{ top: "110%" }}
                    transition={{
                      duration: 3,
                      ease: "linear",
                      repeat: Infinity,
                      repeatType: "reverse" 
                    }}
                  />
                </div>

              </div>

              {/* Esquinas decorativas */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-500 z-30 transition-all group-hover:w-6 group-hover:h-6 opacity-50" style={{ transform: "translateZ(20px)" }}></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-500 z-30 transition-all group-hover:w-6 group-hover:h-6 opacity-50" style={{ transform: "translateZ(20px)" }}></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-500 z-30 transition-all group-hover:w-6 group-hover:h-6 opacity-50" style={{ transform: "translateZ(20px)" }}></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyan-500 z-30 transition-all group-hover:w-6 group-hover:h-6 opacity-50" style={{ transform: "translateZ(20px)" }}></div>

            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="max-w-3xl mx-auto w-full pt-24 pb-12 mt-12 relative overflow-hidden z-10">
        <div className="absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none" />

        <p className="text-center text-xs font-bold tracking-widest text-slate-500 uppercase mb-8 font-code">
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