import React from 'react';

export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-slate-950 text-white pt-16 px-4">
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
          Hola, soy{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Juan Pedro
          </span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Estudiante de Ingeniería de Sistemas y Desarrollador Software. Me apasiona construir soluciones web modernas, eficientes y optimizadas.
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <a
            href="#proyectos"
            className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold rounded-lg shadow-lg shadow-cyan-500/20 transition-all transform hover:-translate-y-0.5"
          >
            Ver Proyectos
          </a>
          <a
            href="#contacto"
            className="px-6 py-3 bg-slate-850 hover:bg-slate-800 border border-slate-700 text-white font-semibold rounded-lg transition-all transform hover:-translate-y-0.5"
          >
            Contáctame
          </a>
        </div>
      </div>
    </section>
  );
}