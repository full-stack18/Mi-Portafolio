import React from 'react';
import { misProyectos } from '../app/data/projects'; // Ajusta la ruta si pusiste 'data' en otro lado

export default function ProjectsSection() {
  return (
    <section id="proyectos" className="py-20 bg-slate-950 text-white px-4 border-t border-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Proyectos Destacados
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Una selección de los trabajos académicos y proyectos personales que he desarrollado recientemente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {misProyectos.map((proyecto) => (
            <div 
              key={proyecto.id} 
              className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                  {proyecto.titulo}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {proyecto.descripcion}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {proyecto.tecnologias.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 text-xs font-medium bg-slate-800 text-cyan-400 rounded-full border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4 pt-6">
                {proyecto.github && (
                  <a 
                    href={proyecto.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-slate-300 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    Código fuente →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}