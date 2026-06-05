'use client';
import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  // 1. Usamos useMotionValue en lugar de useState para no bloquear a React
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // 2. Aplicamos un efecto "spring" para que el movimiento sea fluido
  const springConfig = { damping: 28, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      // 3. Actualizamos los valores directamente sin re-renderizar el componente
      cursorX.set(e.clientX - 12);
      cursorY.set(e.clientY - 12);
    };
    
    // 4. Añadimos passive: true para mejorar el rendimiento del scroll
    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 border-[1.5px] border-cyan-500 rounded-full pointer-events-none z-[100]"
      // 5. Inyectamos los valores del spring directamente en el estilo
      style={{ x: cursorXSpring, y: cursorYSpring }}
    />
  );
}