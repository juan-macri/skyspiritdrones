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
    pregunta: "¿Por qué usar tomas con dron para una propiedad o proyecto?",
    respuesta: "Las tomas aéreas permiten mostrar el entorno, la escala y la ubicación de un lugar de forma clara e impactante. Esto mejora la presentación del proyecto y ayuda a destacarlo frente a otras publicaciones.",
  },
  {
    pregunta: "¿Qué tipo de trabajos realizás?",
    respuesta: "Realizo filmaciones y fotografías aéreas con dron para proyectos inmobiliarios, desarrollos urbanos, turismo, hotelería y contenido promocional para redes sociales. El objetivo es mostrar espacios, entorno y escala desde perspectivas que no se logran desde tierra.",
  },
  {
    pregunta: "¿En qué zonas trabajás?",
    respuesta: "Trabajo principalmente en Capital Federal y en la provincia de Buenos Aires. También puedo desplazarme a otras localidades si el proyecto lo requiere.",
  },
  {
    pregunta: "¿El servicio incluye edición del material?",
    respuesta: "Podés elegir entre recibir el material en crudo o solicitar la edición de un video final listo para publicar en redes sociales o sitios institucionales.",
  },
  {
    pregunta: "¿Cuánto dura una sesión y cuándo se entrega el material?",
    respuesta: "Una sesión estándar para inmobiliarias dura entre 1 y 2 horas en locación. Las fotos se entregan dentro de las 72 horas hábiles y los videos editados entre 5 y 7 días hábiles.",
  },
  {
    pregunta: "¿Cuánto cuesta una filmación con dron?",
    respuesta: "El costo depende del tipo de proyecto, el material a entregar (tomas en crudo, fotos o video editado) y la contratación de sesiones o paquetes. Contactame con los detalles y te envío una propuesta acorde a lo que necesitás.",
  },
  {
    pregunta: "¿Qué pasa si hay mal clima?",
    respuesta: "El viento fuerte, la lluvia u otras condiciones climáticas adversas pueden afectar la seguridad del vuelo y la calidad de las tomas. En esos casos, la sesión se reprograma sin costo adicional.",
  },
  {
    pregunta: "¿Se puede volar en cualquier lugar?",
    respuesta: "No siempre. Algunas zonas tienen restricciones, como áreas cercanas a aeropuertos o espacios con limitaciones específicas. Antes de cada trabajo evalúo la viabilidad del vuelo.",
  },
  {
    pregunta: "¿Trabajás con inmobiliarias que necesitan contenido de forma periódica?",
    respuesta: "Sí. Ofrezco tarifas especiales para inmobiliarias con volumen de trabajo recurrente. Si manejás varias propiedades por mes, podemos coordinar un acuerdo a medida.",
  },
  {
    pregunta: "¿Realizás seguimiento fotográfico de obras?",
    respuesta: "Sí. El seguimiento de obra es uno de los servicios más solicitados. Coordino visitas periódicas (semanales, quincenales o mensuales) para documentar el avance desde el aire con registros fotográficos organizados.",
  },
  {
    pregunta: "¿Los archivos tienen marca de agua?",
    respuesta: "No. Una vez confirmado el trabajo y realizado el pago, entrego los archivos finales sin marca de agua para su uso comercial.",
  },
  {
    pregunta: "¿Cómo es el proceso para contratar una sesión?",
    respuesta: "Podés escribirme por WhatsApp o email con los detalles del proyecto (ubicación, tipo de propiedad y material necesario). Te envío una propuesta y, si avanzamos, coordinamos fecha y horario.",
  }
];
