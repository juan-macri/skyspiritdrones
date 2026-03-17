export type Categoria = "inmobiliaria" | "construccion" | "paisajes" | "hoteleria";
export type MediaTipo = "youtube" | "vimeo" | "instagram" | "none";

export interface Trabajo {
  id: string;
  titulo: string;
  cliente?: string;
  ubicacion: string;
  categoria: Categoria;
  descripcion: string;
  destacado: boolean;
  mediaUrl?: string;   // YouTube/Vimeo embed URL o URL del reel de Instagram
  mediaTipo?: MediaTipo;
  thumbnail: string;
  fecha: string;       // "2024-03"
  tags: string[];
}

export interface Sesion {
  id: string;
  titulo: string;
  ubicacion: string;
  descripcion: string;
  mediaUrl?: string;
  mediaTipo?: MediaTipo;
  thumbnail: string;
  fecha: string;
  tags: string[];
}

export const trabajos: Trabajo[] = [
  {
    id: "propiedad-ciudad-jardin-map",
    titulo: "Propiedad en Ciudad Jardín",
    cliente: "Inmobiliaria MAP",
    ubicacion: "Ciudad Jardín, El Palomar, Buenos Aires",
    categoria: "inmobiliaria",
    descripcion: "Reel aéreo de propiedad en Ciudad Jardín para Inmobiliaria MAP. Capturas de la propiedad y su entorno.",
    destacado: false,
    mediaUrl: "https://www.instagram.com/p/DTvrUxjElxx/",
    mediaTipo: "instagram",
    thumbnail: "/images/placeholder-property.jpg",
    fecha: "2025-07",
    tags: ["ciudad jardin", "el palomar", "inmobiliaria map", "propiedad", "gran buenos aires", "drone gba"],
  },

  {
    id: "edificio-n3-villa-bosch",
    titulo: "Edificio N3 — Villa Bosch",
    cliente: "Inmobiliaria Paola Montelongo",
    ubicacion: "Villa Bosch, Tres de Febrero, Buenos Aires",
    categoria: "construccion",
    descripcion: "Reel con tomas aéreas del Edificio N3 en Villa Bosch para Inmobiliaria Paola Montelongo. Capturas del edificio y su entorno en el partido de Tres de Febrero.",
    destacado: false,
    mediaUrl: "https://www.instagram.com/reel/DTypAoQDHe7/",
    mediaTipo: "instagram",
    thumbnail: "/images/placeholder-property.jpg",
    fecha: "2025-07",
    tags: ["edificio n3", "villa bosch", "tres de febrero", "inmobiliaria", "paola montelongo", "gran buenos aires", "reel inmobiliario", "drone gba"],
  },
  {
    id: "casa-ramos-mejia-scagliola",
    titulo: "Casa en Ramos Mejía",
    cliente: "Inmobiliaria Scagliola",
    ubicacion: "Ramos Mejía, La Matanza, Buenos Aires",
    categoria: "inmobiliaria",
    descripcion: "Reel aéreo de casa en Ramos Mejía para Inmobiliaria Scagliola. Capturas de la propiedad y su entorno en el partido de La Matanza.",
    destacado: false,
    mediaUrl: "https://www.instagram.com/reel/DM02gV_RPz3/",
    mediaTipo: "instagram",
    thumbnail: "/images/placeholder-property.jpg",
    fecha: "2025-05",
    tags: ["ramos mejia", "la matanza", "inmobiliaria scagliola", "casa", "gran buenos aires", "reel inmobiliario", "drone gba"],
  },
  {
    id: "proex-el-palomar",
    titulo: "Constructora Proex — El Palomar",
    cliente: "Constructora Proex",
    ubicacion: "El Palomar, Morón, Buenos Aires",
    categoria: "construccion",
    descripcion: "Reel aéreo para Constructora Proex en El Palomar. Capturas del desarrollo y su entorno en el partido de Morón.",
    destacado: false,
    mediaUrl: "https://www.instagram.com/reel/DMIclQUshQx/",
    mediaTipo: "instagram",
    thumbnail: "/images/placeholder-property.jpg",
    fecha: "2025-06",
    tags: ["proex", "el palomar", "moron", "constructora", "desarrollo inmobiliario", "gran buenos aires", "reel construccion", "drone gba"],
  },
  {
    id: "edificio-mena-ii-villa-bosch",
    titulo: "Edificio Mena II — Villa Bosch",
    cliente: "Inmobiliaria Paola Montelongo",
    ubicacion: "Villa Bosch, Tres de Febrero, Buenos Aires",
    categoria: "construccion",
    descripcion: "Reel con tomas aéreas del Edificio Mena II en Villa Bosch para Inmobiliaria Paola Montelongo. Capturas del edificio, su entorno y los accesos del partido de Tres de Febrero.",
    destacado: false,
    mediaUrl: "https://www.instagram.com/reel/DLVn57WSmag/",
    mediaTipo: "instagram",
    thumbnail: "/images/placeholder-property.jpg",
    fecha: "2025-06",
    tags: ["edificio mena ii", "villa bosch", "tres de febrero", "inmobiliaria", "paola montelongo", "gran buenos aires", "reel inmobiliario", "drone gba"],
  },
  {
    id: "casa-martin-coronado-map",
    titulo: "Casa en Martín Coronado",
    cliente: "Inmobiliaria MAP",
    ubicacion: "Martín Coronado, Tres de Febrero, Buenos Aires",
    categoria: "inmobiliaria",
    descripcion: "Reel aéreo de casa en Martín Coronado para Inmobiliaria MAP. Capturas de la propiedad y su entorno en el partido de Tres de Febrero.",
    destacado: false,
    mediaUrl: "https://www.instagram.com/reel/DK0Ux8VhSdV/",
    mediaTipo: "instagram",
    thumbnail: "/images/placeholder-property.jpg",
    fecha: "2025-05",
    tags: ["martin coronado", "tres de febrero", "inmobiliaria map", "casa", "gran buenos aires", "reel inmobiliario", "drone gba"],
  },
  {
    id: "complejo-el-arbol-san-miguel-del-monte",
    titulo: "Complejo El Árbol — San Miguel del Monte",
    cliente: "Complejo El Árbol",
    ubicacion: "San Miguel del Monte, Buenos Aires",
    categoria: "hoteleria",
    descripcion: "Video aéreo del Complejo El Árbol en San Miguel del Monte, a orillas de la laguna. Capturas del complejo, sus instalaciones y el entorno natural del partido de Monte.",
    destacado: false,
    mediaUrl: "https://www.youtube.com/embed/LQY-JOXcSWU",
    mediaTipo: "youtube",
    thumbnail: "/images/placeholder-property.jpg",
    fecha: "2025-03",
    tags: ["complejo el arbol", "san miguel del monte", "laguna monte", "buenos aires", "turismo", "complejo turistico", "video aereo", "drone buenos aires", "naturaleza"],
  },
  {
    id: "complejo-los-leones-carlos-keen",
    titulo: "Complejo Los Leones - Carlos Keen",
    cliente: "Complejo Los Leones",
    ubicacion: "Carlos Keen, Luján, Buenos Aires",
    categoria: "hoteleria",
    descripcion: "Video aéreo del Complejo Los Leones en Carlos Keen, el pueblo más antiguo de la provincia de Buenos Aires. Capturas del complejo, sus instalaciones y el entorno rural del partido de Luján.",
    destacado: false,
    mediaUrl: "https://www.youtube.com/embed/NqTGCC8akoU",
    mediaTipo: "youtube",
    thumbnail: "/images/placeholder-property.jpg",
    fecha: "2024-02",
    tags: ["complejo los leones", "carlos keen", "lujan", "buenos aires", "turismo rural", "estancia", "video aereo", "drone buenos aires", "pueblo historico"],
  },
  {
    id: "hotel-huinid-bariloche",
    titulo: "Hotel Huinid - Bariloche",
    cliente: "Hotel Huinid",
    ubicacion: "San Carlos de Bariloche, Río Negro",
    categoria: "hoteleria",
    descripcion: "Video aéreo del Hotel Huinid en Bariloche, con vistas al lago Nahuel Huapi y la cordillera. Capturas que muestran el entorno natural único del complejo.",
    destacado: true,
    mediaUrl: "https://www.youtube.com/embed/efAfZWvY9Mw",
    mediaTipo: "youtube",
    thumbnail: "/images/placeholder-property.jpg",
    fecha: "2021-12",
    tags: ["hotel huinid", "bariloche", "patagonia", "nahuel huapi", "cordillera", "video aereo hotel", "rio negro", "turismo bariloche", "drone patagonia"],
  },
];

export const sesiones: Sesion[] = [
  {
    id: "praia-do-forte",
    titulo: "Praia Do Forte",
    ubicacion: "Praia Do Forte, Salvador de Bahía, Brasil",
    descripcion: "Vuelo sobre la playa ubicada frente al hotel Iberostar Waves Bahia.",
    mediaUrl: "https://www.instagram.com/p/DVZd7EdDuml/",
    mediaTipo: "instagram",
    thumbnail: "/images/placeholder-landscape.jpg",
    fecha: "2026-02",
    tags: ["praia do forte", "bahia", "brasil", "iberostar", "iberostar waves bahia", "hotel todo incluido", "resort bahia", "video aereo hotel", "drone resort", "viaje brasil", "playa bahia"],
  },
  {
    id: "villa-bosch-hyperlapse",
    titulo: "Hyperlapse — Atardecer en Villa Bosch",
    ubicacion: "Villa Bosch, Tres de Febrero, Buenos Aires",
    descripcion: "Hyperlapse aéreo al atardecer sobre la estación Villa Bosch y el bosque de eucaliptos del partido de Tres de Febrero.",
    mediaUrl: "https://www.instagram.com/p/DPPHt05DgVQ/",
    mediaTipo: "instagram",
    thumbnail: "/images/placeholder-landscape.jpg",
    fecha: "2025-09",
    tags: ["hyperlapse", "villa bosch", "tres de febrero", "gran buenos aires", "atardecer", "bosque eucaliptos", "estacion tren", "paisaje urbano", "drone gba"],
  },
  {
    id: "estacion-villa-bosch-recuperacion",
    titulo: "Recuperación de la Estación Villa Bosch",
    ubicacion: "Villa Bosch, Tres de Febrero, Buenos Aires",
    descripcion: "Reel del anuncio de la recuperación de la Estación Villa Bosch por el Intendente de Tres de Febrero. Un momento histórico para el barrio capturado desde el aire.",
    mediaUrl: "https://www.instagram.com/reel/DNQ-IahOGzP/",
    mediaTipo: "instagram",
    thumbnail: "/images/placeholder-landscape.jpg",
    fecha: "2025-06",
    tags: ["villa bosch", "tres de febrero", "estacion villa bosch", "recuperacion", "intendente", "evento", "drone gba", "historia local"],
  },
];

export const categorias = [
  { id: "todas", label: "Todos" },
  { id: "inmobiliaria", label: "Inmobiliarias" },
  { id: "construccion", label: "Construcción" },
  { id: "hoteleria", label: "Hotelería" },
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
