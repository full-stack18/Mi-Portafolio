import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-800 text-white z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          JP.Dev
        </div>
        <div className="flex gap-6 text-sm font-medium text-slate-300">
          <a href="#inicio" className="hover:text-cyan-400 transition-colors">Inicio</a>
          <a href="#proyectos" className="hover:text-cyan-400 transition-colors">Proyectos</a>
          <a href="#contacto" className="hover:text-cyan-400 transition-colors">Contacto</a>
        </div>
      </div>
    </nav>
  );
}