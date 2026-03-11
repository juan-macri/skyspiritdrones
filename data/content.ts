export type Categoria = "inmobiliaria" | "construccion" | "paisajes";

export interface Trabajo {
  id: string;
  titulo: string;
  cliente?: string;
  ubicacion: string;
  categoria: Categoria;
  descripcion: string;
  destacado: boolean;
  videoUrl?: string; // YouTube/Vimeo embed URL
  thumbnail: string; // /images/trabajos/...
  fecha: string; // "2024-03"
  tags: string[];
}

export interface Sesion {
  id: string;
  titulo: string;
  ubicacion: string;
  descripcion: string;
  videoUrl?: string;
  thumbnail: string;
  fecha: string;
  tags: string[];
}

export const trabajos: Trabajo[] = [
  {
    id: "casa-palermo-2024",
    titulo: "Residencia en Palermo",
    cliente: "Inmobiliaria del ejemplo",
    ubicacion: "Palermo, Buenos Aires",
    categoria: "inmobiliaria",
    descripcion: "Fotografía y video aéreo de propiedad residencial premium en Palermo. Capturas en golden hour para resaltar los espacios exteriores y la terraza.",
    destacado: true,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Reemplazar con video real
    thumbnail: "/images/placeholder-property.jpg",
    fecha: "2024-06",
    tags: ["residencial", "palermo", "golden hour", "terraza"],
  },
  {
    id: "obra-nordelta-2024",
    titulo: "Seguimiento de obra — Nordelta",
    cliente: "Constructora del ejemplo",
    ubicacion: "Nordelta, Buenos Aires",
    categoria: "construccion",
    descripcion: "Relevamiento aéreo semanal del avance de obra para constructora. Documentación fotográfica y video para reportes de progreso.",
    destacado: true,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Reemplazar con video real
    thumbnail: "/images/placeholder-construction.jpg",
    fecha: "2024-03",
    tags: ["construccion", "nordelta", "seguimiento", "relevamiento"],
  },
  {
    id: "departamento-recoleta",
    titulo: "Departamento en Recoleta",
    ubicacion: "Recoleta, Buenos Aires",
    categoria: "inmobiliaria",
    descripcion: "Video aéreo de propiedad de lujo en Recoleta. Tomas del edificio, entorno y vistas panorámicas del barrio.",
    destacado: false,
    thumbnail: "/images/placeholder-property.jpg",
    fecha: "2023-11",
    tags: ["departamento", "recoleta", "lujo", "panoramica"],
  },
];

export const sesiones: Sesion[] = [
  {
    id: "tigre-delta-2024",
    titulo: "Delta del Tigre",
    ubicacion: "Tigre, Buenos Aires",
    descripcion: "Vuelo al amanecer sobre los canales del Delta del Tigre. Niebla matinal, lanchas y la quietud del río en uno de los paisajes más únicos de la provincia.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Reemplazar con video real
    thumbnail: "/images/placeholder-landscape.jpg",
    fecha: "2024-07",
    tags: ["delta", "tigre", "amanecer", "naturaleza", "rio"],
  },
  {
    id: "caba-nocturno",
    titulo: "Buenos Aires Nocturno",
    ubicacion: "Ciudad Autónoma de Buenos Aires",
    descripcion: "La ciudad desde arriba en la noche. Luces del Obelisco, la Reserva Ecológica y el Río de la Plata al fondo.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Reemplazar con video real
    thumbnail: "/images/placeholder-city.jpg",
    fecha: "2024-04",
    tags: ["caba", "nocturno", "city", "obelisco", "luces"],
  },
];

export const categorias = [
  { id: "todas", label: "Todos" },
  { id: "inmobiliaria", label: "Inmobiliarias" },
  { id: "construccion", label: "Construcción" },
  { id: "paisajes", label: "Paisajes" },
];

export const faqItems = [
  {
    pregunta: "¿En qué zonas de Buenos Aires operás?",
    respuesta: "Opero principalmente en CABA y Gran Buenos Aires (norte, sur, oeste). Para zonas más alejadas como la Costa Atlántica o el interior de la provincia, consultame — dependiendo del proyecto puedo trasladarme.",
  },
  {
    pregunta: "¿Qué tipo de dron usás?",
    respuesta: "Trabajo con drones DJI de la serie Pro, con cámara estabilizada en cardán de 3 ejes. Grabo en 4K a 60fps con capacidad de tomas en RAW para edición profesional.",
  },
  {
    pregunta: "¿Cuánto tiempo lleva una sesión de fotos/video?",
    respuesta: "Una sesión estándar para inmobiliaria dura entre 1 y 2 horas en locación. Las fotos editadas se entregan en 48hs hábiles, y los videos en 5 a 7 días hábiles.",
  },
  {
    pregunta: "¿Qué necesito tener en cuenta para la sesión?",
    respuesta: "El dron necesita espacio abierto para despegar y aterrizar. Para propiedades, lo ideal es una mañana despejada (menos viento) y que la propiedad esté ordenada. Coordino el día y horario en función de la luz solar.",
  },
  {
    pregunta: "¿Trabajás con inmobiliarias que necesitan fotos periódicas?",
    respuesta: "Sí, ofrezco tarifas especiales para inmobiliarias con volumen de trabajo recurrente. Si manejás varias propiedades por mes, hablemos de un acuerdo a medida.",
  },
  {
    pregunta: "¿Hacés seguimiento fotográfico de obras?",
    respuesta: "Sí. El seguimiento de obra es uno de los servicios más solicitados. Coordino visitas periódicas (semanal, quincenal o mensual) para documentar el avance desde el aire, con informes fotográficos organizados.",
  },
  {
    pregunta: "¿Cómo es el proceso para contratar una sesión?",
    respuesta: "Escribime por WhatsApp o email con los detalles del proyecto (ubicación, tipo de propiedad, qué necesitás). Te respondo con una propuesta y si acordamos, coordinamos fecha y horario. Simple.",
  },
  {
    pregunta: "¿Los archivos tienen marca de agua?",
    respuesta: "No. Una vez confirmado el trabajo y realizado el pago, entrego los archivos finales sin marca de agua para uso comercial.",
  },
];
