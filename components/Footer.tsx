'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { fadeInUp } from '@/app/data/animations';


const redesSociales = [
  { 
    name: 'Email', 
    href: 'mailto:2411020036@undc.edu.pe', 
    icon: <FaEnvelope className="w-4 h-4" />, 
    hoverClass: 'group-hover:bg-[#EA4335] group-hover:border-[#EA4335] group-hover:text-white' 
  },
  { 
    name: 'LinkedIn', 
    href: 'https://www.linkedin.com/in/chaupin-sota-juan-pedro-2bb916332/', 
    icon: <FaLinkedin className="w-4 h-4" />, 
    hoverClass: 'group-hover:bg-[#0A66C2] group-hover:border-[#0A66C2] group-hover:text-white' 
  },
  { 
    name: 'Github', 
    href: 'https://github.com/full-stack18', 
    icon: <FaGithub className="w-4 h-4" />, 
    hoverClass: 'group-hover:bg-[#ffffff] group-hover:border-[#ffffff] group-hover:text-black' 
  },
  { 
    name: 'Instagram', 
    href: 'https://www.instagram.com/juan.xor_/', 
    icon: <FaInstagram className="w-4 h-4" />, 
    hoverClass: 'group-hover:text-white',
    gradient: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fd5949 45%, #d6249f 60%, #285AEB 90%)'
  },
  { 
    name: 'Whatsapp', 
    href: 'https://wa.me/933874644', 
    icon: <FaWhatsapp className="w-4 h-4" />, 
    hoverClass: 'group-hover:bg-[#0EF057] group-hover:border-[#0EF057] group-hover:text-white' 
  }
];

export default function Footer() {
  const [hoveredNet, setHoveredNet] = useState<string | null>(null);

  return (
    <footer  id="contacto" className="bg-[#0a0a0a] text-white pt-24 pb-12 px-4 border-t border-slate-800/80 relative z-20 min-h-[70vh] flex flex-col">
      <div   className="max-w-6xl mx-auto w-full flex-1 flex flex-col">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-3 mb-16 border-l-2 border-cyan-500 pl-4"
        >
          <h2 className="font-mono text-sm text-slate-500 uppercase tracking-widest">
            <span className="text-cyan-500">0x05</span> // system.contacto
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 items-start mb-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between h-full space-y-12"
          >
            <div>
              <h3 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-100 mb-6">
                Contáctame
              </h3>
              <p className="text-slate-400 font-mono text-sm max-w-sm leading-relaxed">
                Siempre estoy abierto a discutir nuevos proyectos, ideas creativas o visiones para el futuro.
              </p>
            </div>
            
            <div className="mt-8">
              <span className="font-signature text-5xl md:text-6xl text-slate-300 opacity-80 hover:opacity-100 hover:text-cyan-400 transition-all cursor-default">
                Juan
              </span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 md:items-end"
          >
            {redesSociales.map((red) => {
              const isHovered = hoveredNet === red.name;
              return (
                <a 
                  key={red.name}
                  href={red.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-6 w-fit"
                  onMouseEnter={() => setHoveredNet(red.name)}
                  onMouseLeave={() => setHoveredNet(null)}
                >
                  <div 
                    className={`flex items-center justify-center w-10 h-10 border transition-all duration-300 ${
                      isHovered && !red.gradient ? red.hoverClass : 'border-white/5 bg-white/[0.02] text-neutral-500'
                    }`}
                    style={
                      isHovered && red.gradient 
                        ? { background: red.gradient, border: 'none', color: 'white' } 
                        : {}
                    }
                  >
                    {red.icon}
                  </div>
                  <span className="font-mono text-sm tracking-widest uppercase text-slate-500 group-hover:text-cyan-400 transition-colors duration-300 w-24">
                    {red.name}
                  </span>
                </a>
              );
            })}
          </motion.div>

        </div>

        <div className="mt-auto pt-8 border-t border-slate-800/80 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-slate-600 uppercase tracking-widest">
          <span className="hover:text-cyan-500 transition-colors cursor-default">
            &copy; 2026 JP.Dev
          </span>
          <span className="hidden md:inline hover:text-cyan-400 transition-colors">
            // Construido con intención
          </span>
        </div>

      </div>
    </footer>
  );
}