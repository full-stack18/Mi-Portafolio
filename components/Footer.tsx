'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Fira_Code, Dancing_Script } from 'next/font/google';
// Línea 6 - elimina lucide-react completamente
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const codeFont = Fira_Code({ subsets: ['latin'] });
const signatureFont = Dancing_Script({ subsets: ['latin'], weight: '700' });

// 2. Añadimos más redes con sus respectivos colores hex
const redesSociales = [
  { 
    name: 'Email', 
    href: 'mailto:tu-correo@gmail.com', 
    icon: <FaEnvelope className="w-6 h-6" />, 
    hoverClass: 'group-hover:bg-[#EA4335] group-hover:border-[#EA4335] group-hover:text-white' 
  },
  { 
    name: 'LinkedIn', 
    href: 'https://linkedin.com/in/tu-perfil', 
    icon: <FaLinkedin className="w-6 h-6" />, 
    hoverClass: 'group-hover:bg-[#0A66C2] group-hover:border-[#0A66C2] group-hover:text-white' 
  },
  { 
    name: 'Github', 
    href: 'https://github.com/tu-usuario', 
    icon: <FaGithub className="w-6 h-6" />, 
    hoverClass: 'group-hover:bg-[#ffffff] group-hover:border-[#ffffff] group-hover:text-black' 
  },
  { 
    name: 'Instagram', 
    href: 'https://github.com/tu-usuario', 
    icon: <FaInstagram className="w-6 h-6" />, 
    hoverClass: 'group-hover:text-white',
    gradient: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fd5949 45%, #d6249f 60%, #285AEB 90%)'
  },
  { 
    name: 'Whatsapp', 
    href: 'https://github.com/tu-usuario', 
    icon: <FaWhatsapp className="w-6 h-6" />, 
    hoverClass: 'group-hover:bg-[#0EF057] group-hover:border-[#0EF057] group-hover:text-white' 
  }
];

export default function Footer() {
  return (
    // 3. Añadimos min-h-[70vh] y flex flex-col para controlar la altura
    <footer id="contacto" className="bg-[#0a0a0a] text-white pt-24 pb-12 px-4 border-t border-slate-800/80 relative z-20 min-h-[70vh] flex flex-col">
      {/* Añadimos flex-1 para que ocupe el resto del espacio disponible */}
      <div className="max-w-6xl  mx-auto w-full flex-1 flex flex-col">
        
        {/* ENCABEZADO TERMINAL */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-3 mb-16 border-l-2 border-cyan-500 pl-4"
        >
          <h2 className="font-mono text-sm text-slate-500 uppercase tracking-widest">
            <span className="text-cyan-500">0x02</span> // system.contacto
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 items-start mb-12">
          
          {/* LADO IZQUIERDO: Título y Firma */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between h-full space-y-12"
          >
            <div>
              <h3 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-100 mb-6">
                Contactame
              </h3>
              <p className="text-slate-400 font-mono text-sm max-w-sm leading-relaxed">
                Siempre estoy abierto a discutir nuevos proyectos, ideas creativas o visiones para el futuro.
              </p>
            </div>
            
            {/* LA FIRMA: AQUÍ CAMBIAS EL TEXTO */}
            <div className="mt-8">
              <span className={`${signatureFont.className} text-5xl md:text-6xl text-slate-300 opacity-80 hover:opacity-100 hover:text-cyan-400 transition-all cursor-default`}>
                Juan
              </span>
            </div>
          </motion.div>

          {/* LADO DERECHO: Redes Sociales Cuadradas */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 md:items-end"
          >
            {redesSociales.map((red) => (
              <a 
                key={red.name}
                href={red.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-6 w-fit"
              >
                {/* Cuadro del ícono con animación de color */}
                <div 
  className={`flex items-center justify-center w-12 h-12 border border-white/5 bg-white/[0.02] text-neutral-500 transition-all duration-300 ${red.hoverClass}`}
  onMouseEnter={e => { 
    if (red.gradient) {
      e.currentTarget.style.background = red.gradient;
      e.currentTarget.style.border = 'none'; // Cambiamos transparent por 'none' para que no pinte nada de borde
      e.currentTarget.style.color = 'white';
    }
  }}
  onMouseLeave={e => { 
    if (red.gradient) {
      e.currentTarget.style.background = '';
      e.currentTarget.style.border = ''; // Restaura el borde original (border-white/5)
      e.currentTarget.style.color = '';
    }
  }}
>
  {red.icon}
</div>
                {/* Texto al costado indicando la red */}
                <span className="font-mono text-sm tracking-widest uppercase text-slate-500 group-hover:text-cyan-400 transition-colors duration-300 w-24">
                  {red.name}
                </span>
              </a>
            ))}
          </motion.div>

        </div>

        {/* COPYRIGHT HASTA EL FONDO */}
        {/* 4. Usamos mt-auto para empujar esta caja hasta abajo, separándola de la firma obligatoriamente */}
        <div className="mt-1 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-slate-600 uppercase tracking-widest">
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