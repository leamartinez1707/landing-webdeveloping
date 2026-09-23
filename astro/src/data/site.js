export const site = {
  name: "Martínez Studio",
  brand: "Martínez Studio",
  domain: "https://www.martinezstudio.com.uy",
  title: "Martínez Studio | Landing pages y software a medida",
  description:
    "Desarrollo landing pages, sitios web y software a medida para pymes: gestión de inventario, reservas, restaurantes y automatizaciones de WhatsApp e Instagram.",
  keywords:
    "landing page, desarrollo web uruguay, software a medida, automatización whatsapp, bot instagram, gestión de inventario, software para restaurantes, software de reservas, página web para pymes, desarrollo frontend, tienda online shopify",
  author: "Martínez Studio",
  locale: "es_UY",
  email: "leandromartinez.dev@gmail.com",
  phone: "+598 95 220 063",
  whatsappNumber: "59895220063",
  whatsapp:
    "https://api.whatsapp.com/send?phone=59895220063&text=Hola%2C%20quiero%20consultar%20por%20una%20web%20o%20automatizaci%C3%B3n.",
  linkedin: "https://www.linkedin.com/in/leandromartinezuy",
  coordinates: { lat: -34.9011, lng: -56.1645 },
};

export const nav = [
  { id: "inicio", label: "Inicio" },
  { id: "servicios", label: "Servicios y precios" },
  { id: "proceso", label: "Proceso" },
  { id: "proyectos", label: "Proyectos" },
  { id: "contacto", label: "Contacto" },
];

// Precios reales de referencia. "Automatización" es un paquete nuevo y
// todavía no tiene precio de mercado definido.
export const services = [
  {
    title: "Página web básica",
    description:
      "Una sola página con secciones internas, adaptada a tu marca y a todos los dispositivos. Perfecta para emprendedores o proyectos nuevos que están arrancando su presencia digital.",
    features: [
      "Diseño alineado a tu marca",
      "1 página con secciones internas",
      "Adaptada a todos los dispositivos",
      "Formulario o botón de contacto",
      "Integración con redes sociales",
      "Botón de WhatsApp",
      "Hosting y dominio incluidos el primer año",
    ],
    price: "USD 190",
    delivery: "7 a 14 días",
    featured: true,
    badge: "más vendida",
  },
  {
    title: "Página web completa",
    description:
      "Sitio de hasta 5 páginas para que tu negocio tenga presencia completa en la web: más espacio para contar quién sos, qué ofrecés y por qué elegirte.",
    features: [
      "Diseño alineado a tu identidad",
      "Hasta 5 páginas: Inicio, Nosotros, Servicios, Proyectos y Contacto",
      "SEO y conexión con redes",
      "Navegación intuitiva y rápida",
      "Formulario o botón de contacto",
      "Botón de WhatsApp",
      "Hosting y dominio incluidos el primer año",
    ],
    price: "USD 330",
    delivery: "10 a 20 días",
  },
  {
    title: "Tienda online Shopify",
    description:
      "Tienda profesional en Shopify, con diseño adaptado a tu marca y lista para empezar a vender sin complicaciones.",
    features: [
      "Tienda Shopify profesional",
      "Diseño adaptado a tu marca",
      "Hasta 20 productos incluidos",
      "Capacitación incluida",
      "Lista para comenzar a vender",
    ],
    price: "USD 740",
    delivery: "3 a 4 semanas",
  },
  {
    title: "Automatización",
    description:
      "Un bot que responde en WhatsApp o Instagram, sincronización de stock entre tu local y tu ecommerce, y tareas manuales que pasan a cargarse solas. Proyectos con integraciones más complejas (WhatsApp Business API oficial, múltiples sistemas) se cotizan según alcance tras la primera charla.",
    features: [
      "Bot de respuestas automáticas en WhatsApp o Instagram",
      "Sincronización de inventario con tu ecommerce",
      "Automatización de turnos, pedidos o planillas",
      "Configuración y capacitación incluida",
    ],
    price: "Desde USD 250",
    delivery: "2 a 4 semanas",
  },
  {
    title: "Software a medida",
    description:
      "Un sistema propio para cómo trabaja tu negocio: seguimiento de clientes, turnos o cualquier proceso que hoy resolvés con planillas.",
    examples: ["Gestión de inventario", "Gestión de restaurantes", "Sistema de reservas", "Software para gimnasio", "Agenda para barberias"],
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
    result: "Presencia digital con portfolio filtrable y contacto directo por WhatsApp.",
    link: "https://todomueblesuy.vercel.app/home",
  },
  {
    slug: "mistyle",
    title: "E-commerce para movilidad eléctrica",
    description:
      "Rediseño completo con catálogo optimizado y experiencia mobile-first orientada a cierre.",
    type: "E-commerce",
    result: "Catálogo reorganizado y checkout simplificado para comprar desde el celular.",
    link: "https://www.mistyle.com.uy/",
  },
  {
    slug: "urufix",
    title: "UruFix: plataforma de gestión para servicios técnicos",
    description:
      "Sistema desarrollado para la gestión técnica de una flota de monopatines eléctricos: turnos, historial técnico y seguimiento de clientes.",
    type: "Software a medida",
    result: "De procesos manuales en planillas a un sistema centralizado de seguimiento de órdenes de trabajo.",
    link: "https://avelinoacevedo.com.uy/",
  },
  {
    slug: "stock-sync",
    title: "Sincronización de stock multicanal",
    description:
      "Automatización que conecta la base de datos interna (AWS) de un negocio con su cuenta de Mercado Libre, actualizando el stock disponible automáticamente y evitando ventas de productos sin disponibilidad.",
    type: "Automatización",
    result: "Elimina la carga manual y el desfasaje de stock entre canales de venta.",
    link: "#",
  },
];

export const socials = [
  { label: "LinkedIn", href: site.linkedin },
  {
    label: "WhatsApp",
    href: "https://api.whatsapp.com/send?phone=59895220063&text=Hola,%20quiero%20consultar%20por%20un%20proyecto.",
  },
];
