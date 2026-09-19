export const site = {
  name: "Leandro Martínez",
  brand: "Martinez Studio",
  domain: "https://www.martinezstudio.com.uy",
  title: "Leandro Martínez | Landing pages y software a medida",
  description:
    "Desarrollo landing pages de una página o multipágina y software a medida para empresas. Proyectos reales, precios claros y enfoque en conversión.",
  keywords:
    "landing page, desarrollo web uruguay, software a medida, diseño ux, página web para negocios, desarrollo frontend",
  author: "Leandro Martínez",
  locale: "es_UY",
  email: "leandromartinez.dev@gmail.com",
  phone: "+598 95 220 063",
  whatsapp:
    "https://api.whatsapp.com/send?phone=59895220063&text=Hola%20Leandro%2C%20quiero%20consultar%20por%20una%20web%20o%20automatizaci%C3%B3n.",
  linkedin: "https://www.linkedin.com/in/leandromartinezuy",
  github: "https://github.com/leamartinez1707",
  coordinates: { lat: -34.9011, lng: -56.1645 },
};

export const nav = [
  { id: "inicio", label: "Inicio" },
  { id: "servicios", label: "Servicios y precios" },
  { id: "proceso", label: "Proceso" },
  { id: "proyectos", label: "Proyectos" },
  { id: "contacto", label: "Contacto" },
];

// Precios reales de referencia (paquetes de solo web). El paquete combinado
// con automatización es nuevo y todavía no tiene precio de mercado definido.
export const services = [
  {
    title: "Web esencial",
    description:
      "Landing clara, rápida y que aparece cuando alguien te busca en Google. Sin plantillas genéricas ni textos de relleno.",
    price: "USD 350",
    delivery: "7 a 14 días",
  },
  {
    title: "Web + automatización",
    description:
      "Tu web sumada a un asistente que responde consultas de WhatsApp aunque estés durmiendo, y a automatizaciones que hacen que turnos, pedidos y planillas se carguen solos.",
    price: "Desde USD (a definir)",
    delivery: "2 a 4 semanas",
    featured: true,
  },
  {
    title: "A medida",
    description:
      "Para cuando necesitás algo más grande: un sistema interno, varios procesos conectados o un agente de IA hecho a medida de cómo trabaja tu negocio.",
    price: "Desde USD 1.800",
    delivery: "Roadmap por fases",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Charlamos",
    description: "Me contás qué tarea te está comiendo tiempo y a quién le vendés.",
    time: "Día 1",
  },
  {
    number: "02",
    title: "Propuesta clara",
    description:
      "Te mando un plan concreto: qué hacemos, cuánto tarda y cuánto cuesta. Sin sorpresas después.",
    time: "Días 2-4",
  },
  {
    number: "03",
    title: "Construyo",
    description: "Armo tu web o automatización y te voy mostrando avances reales, no mockups.",
    time: "Semana 2",
  },
  {
    number: "04",
    title: "Entrega y acompañamiento",
    description:
      "Queda funcionando y te explico cómo usarlo. Si algo falla en los primeros días, lo arreglo yo.",
    time: "Semana 3",
  },
];

export const portfolio = [
  {
    slug: "todomuebles",
    title: "Landing comercial para estudio de interiores",
    description:
      "Sitio de una página con portfolio visual, formulario filtrado y llamado a acción directo.",
    type: "Landing page",
    result: "+31.8% de consultas calificadas",
    link: "https://todomueblesuy.vercel.app/home",
  },
  {
    slug: "mistyle",
    title: "E-commerce para movilidad eléctrica",
    description:
      "Rediseño completo con catálogo optimizado y experiencia mobile-first orientada a cierre.",
    type: "E-commerce",
    result: "Tiempo promedio en página: 3m 18s",
    link: "https://www.mistyle.com.uy/",
  },
  {
    slug: "urufix",
    title: "Plataforma de operaciones para servicios técnicos",
    description:
      "Sistema interno para turnos, historial técnico y seguimiento de clientes en tiempo real.",
    type: "Software a medida",
    result: "+47.2% de tareas cerradas por semana",
    link: "https://avelinoacevedo.com.uy/",
  },
];

export const socials = [
  { label: "LinkedIn", href: site.linkedin },
  { label: "GitHub", href: site.github },
  {
    label: "WhatsApp",
    href: "https://api.whatsapp.com/send?phone=59895220063&text=Hola%20Leandro,%20quiero%20consultar%20por%20un%20proyecto.",
  },
];
