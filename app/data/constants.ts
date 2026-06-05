export interface SkillCategory {
    categoria: string;
    items: string[];
  }
  
  export interface TimelineItem {
    periodo: string;
    titulo: string;
    institucion: string;
    descripcion: string;
  }
  
  export const misHabilidades: SkillCategory[] = [
    {
      categoria: "Desarrollo Core & Backend",
      items: ["Java", "PHP", "Node.js", "Python"]
    },
    {
      categoria: "Frontend & Diseño",
      items: ["React", "JavaScript", "TypeScript", "Tailwind CSS", "Bootstrap"]
    },
    {
      categoria: "Arquitectura & Datos",
      items: ["MySQL", "phpMyAdmin", "SQLite / Room", "Firebase", "Docker", "Git"]
    }
  ];
  
  export const miEducacion: TimelineItem[] = [
    {
      periodo: "2026 - Presente",
      titulo: "Ingeniería de Sistemas (5to Ciclo)",
      institucion: "Universidad Nacional de Cañete",
      descripcion: "Enfoque en desarrollo lógico, arquitectura de software, gestión avanzada de base de datos relacionales y optimización de flujos de simulación de sistemas complejos."
    },
    {
      periodo: "Proyectos Clave",
      titulo: "Desarrollador de Soluciones Web & Móviles",
      institucion: "Proyectos Académicos y Autónomos",
      descripcion: "Modelado de simulaciones lógicas (Vivanda de Asia), planificación y desarrollo de aplicaciones móviles con arquitectura MVVM y persistencia local, e integración continua usando Git."
    }
  ];