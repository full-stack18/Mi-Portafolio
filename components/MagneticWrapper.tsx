"use client";

import React, { useState, useRef, MouseEvent } from 'react';
import { motion } from 'framer-motion';

export default function MagneticWrapper({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    // Calcular el centro del elemento
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Obtener la distancia respecto al centro
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    // Reducir la fuerza magnética multiplicando por un factor (ej. 0.3)
    setPosition({ x: distanceX * 0.3, y: distanceY * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}