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
      titulo: "Sistema de Simulación de Procesos",
      descripcion: "Modelado y simulación de flujos de atención y optimización de recursos para cadenas de suministro y atención al cliente.",
      tecnologias: ["Java", "Simulación", "Data Analysis"],
      github: "https://github.com/tu-usuario/simulacion"
    },
    {
      id: 2,
      titulo: "EcoHome Mobile App",
      descripcion: "Aplicación móvil enfocada en la gestión eficiente y sostenible de recursos del hogar.",
      tecnologias: ["React Native", "JavaScript", "Node.js"],
      github: "https://github.com/tu-usuario/ecohome"
    }
  ];