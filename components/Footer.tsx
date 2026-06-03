import React from 'react';

export default function Footer() {
  return (
    <footer id="contacto" className="bg-slate-950 border-t border-slate-900 text-slate-500 py-8 text-center text-sm">
      <div className="max-w-6xl mx-auto px-4 space-y-2">
        <p>© {new Date().getFullYear()} Juan Pedro Chaupin. Todos los derechos reservados.</p>
        <p className="text-slate-600">Construido con Next.js, Tailwind CSS y Cursor.</p>
      </div>
    </footer>
  );
}