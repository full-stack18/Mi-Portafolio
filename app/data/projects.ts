export interface Proyecto {
  id: number;
  titulo: string;
  descripcion: string;
  tecnologias: string[];
  github?: string;
  enlace?: string;
}

export const misProyectos: Proyecto[] = [
  {
    id: 1,
    titulo: "Simulación de Sistemas - Vivanda",
    descripcion: "Desarrollo de un proyecto de simulación de sistemas para analizar y optimizar los flujos de atención de la cadena de supermercados Vivanda.",
    tecnologias: ["Java", "Simulación", "MySQL", "Análisis de Datos"],
  },
  {
    id: 2,
    titulo: "App Móvil de Panadería",
    descripcion: "Diseño y planificación de una aplicación móvil para la gestión de productos y pedidos en una panadería local.",
    tecnologias: ["React", "Node.js", "JavaScript"],
  },
  {
    id: 3,
    titulo: "Gestión de Inventario PHP",
    descripcion: "Sistema de gestión integrado con bases de datos relacionales, utilizando consultas SQL complejas (ALTER TABLE, ENUM).",
    tecnologias: ["PHP", "phpMyAdmin", "Bootstrap", "MySQL"],
  }
];