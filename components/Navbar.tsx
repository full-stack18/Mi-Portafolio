import React from 'react';
import { VT323 } from 'next/font/google';

const pixelFont = VT323({ weight: '400', subsets: ['latin'] });

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0a0a0a]/80 backdrop-blur-md border-b border-slate-800/80 text-white z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <span className={`text-2xl font-bold tracking-wider text-cyan-400 ${pixelFont.className}`}>
          JP.Dev
        </span>
        <div className="flex gap-6 text-sm font-mono uppercase tracking-widest text-slate-500">
          <a href="#inicio" className="hover:text-cyan-400 transition-colors">Inicio</a>
          <a href="#proyectos" className="hover:text-cyan-400 transition-colors">Proyectos</a>
          <a href="#contacto" className="hover:text-cyan-400 transition-colors">Contacto</a>
        </div>
      </div>
    </nav>
  );
}