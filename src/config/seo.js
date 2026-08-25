// Configuración centralizada de SEO y metadatos
// Este archivo contiene las keywords, descripciones y configuraciones SEO

export const seoConfig = {
    // Información general del sitio
    site: {
        name: 'Martínez Studio | Soluciones Digitales',
        description: 'Landing pages, sitios multipágina, software a medida y agentes de automatización con n8n para negocios que buscan crecer con claridad. Uruguay y Latinoamérica.',
        url: 'https://www.martinezstudio.com.uy',
        image: 'https://www.martinezstudio.com.uy/og-image.jpg',
        author: 'Leandro Martínez',
        language: 'es',
    },

    // Keywords principales para cada región/servicio
    keywords: {
        main: [
            'landing page uruguay',
            'desarrollo web uruguay',
            'sitios multipagina',
            'aplicaciones web latinoamérica',
            'desarrollador web freelance',
            'software a medida',
            'automatización con n8n',
            'agentes de automatización',
            'sistema gestión clientes',
            'soluciones digitales',
            'diseño de landing pages',
            'software para negocios',
            'desarrollo frontend'
        ],
        regional: {
            uruguay: [
                'desarrollo web uruguay',
                'programador uruguay',
                'software uruguay',
                'app development montevideo',
                'agencia digital uruguay',
            ],
            latinoamerica: [
                'desarrollo web latinoamérica',
                'software latinoamérica',
                'aplicaciones web argentina',
                'software chile',
                'desarrollo mexico',
            ],
            bysector: {
                landingPages: [
                    'landing page uruguay',
                    'diseño de landing pages',
                    'sitios multipagina',
                    'pagina web para negocios',
                ],
                softwareAMedida: [
                    'software a medida',
                    'desarrollo software personalizado',
                    'sistema de gestión a medida',
                    'app custom',
                ],
                automatizacion: [
                    'automatización con n8n',
                    'agentes de automatización',
                    'workflows n8n',
                    'integración de herramientas',
                ],
            },
        },
    },

    // Servicios principales con descripciones SEO
    services: [
        {
            id: 'landing-pages',
            name: 'Landing Pages y Sitios Multipágina',
            description: 'Landing pages y sitios de varias páginas enfocados en conversión, confianza y crecimiento de negocio.',
            keywords: ['landing page', 'sitio multipagina', 'diseño de landing pages', 'pagina web para negocios'],
        },
        {
            id: 'automatizacion-n8n',
            name: 'Automatización con n8n',
            description: 'Agentes y flujos de automatización con n8n que conectan tus herramientas y eliminan tareas manuales repetitivas.',
            keywords: ['automatización con n8n', 'agentes de automatización', 'workflow', 'integración sistemas'],
        },
        {
            id: 'desarrollo-medida',
            name: 'Desarrollo de Software a Medida',
            description: 'Software construido exactamente para los requisitos de tu negocio.',
            keywords: ['software medida', 'desarrollo software personalizado', 'app custom', 'solución software'],
        },
    ],

    // Regiones objetivo
    regions: [
        {
            code: 'UY',
            name: 'Uruguay',
            locale: 'es_UY',
            coordinates: { lat: -34.9011, lng: -56.1645 },
        },
        {
            code: 'AR',
            name: 'Argentina',
            locale: 'es_AR',
            coordinates: { lat: -38.4161, lng: -63.6167 },
        },
        {
            code: 'CL',
            name: 'Chile',
            locale: 'es_CL',
            coordinates: { lat: -35.6751, lng: -71.5430 },
        },
        {
            code: 'MX',
            name: 'Mexico',
            locale: 'es_MX',
            coordinates: { lat: 23.6345, lng: -102.5528 },
        },
        {
            code: 'CO',
            name: 'Colombia',
            locale: 'es_CO',
            coordinates: { lat: 4.5709, lng: -74.2973 },
        },
        {
            code: 'PE',
            name: 'Peru',
            locale: 'es_PE',
            coordinates: { lat: -9.1900, lng: -75.0152 },
        },
    ],

    // Contacto y redes sociales
    contact: {
        whatsapp: '+598952200',
        email: 'leandromartinez.dev@gmail.com',
        phone: '+598 9 5220 063',
        linkedin: 'https://linkedin.com/in/leandromartinez',
        github: 'https://github.com/leandromartinez',
        twitter: 'https://twitter.com/leandromartinez',
    },

    // Metadata para redes sociales
    social: {
        og: {
            type: 'website',
            locale: 'es_UY',
            localityAlternates: ['es_AR', 'es_CL', 'es_MX', 'es_CO', 'es_PE'],
        },
        twitter: {
            handle: '@leandromartinez',
            card: 'summary_large_image',
        },
    },

    // Palabras clave long-tail (búsquedas específicas)
    longTailKeywords: [
        'como crear una landing page para mi negocio',
        'cuanto cuesta una landing page en uruguay',
        'desarrollo de software a medida para empresas',
        'automatizar procesos con n8n',
        'agente de automatización para whatsapp y email',
        'sistema de gestión a medida',
        'como automatizar mi negocio',
        'freelance desarrollo web uruguay',
        'soluciones digitales para emprendimientos',
    ],
};

// Función helper para obtener meta tags
export const getMetaTags = (page = 'home') => {
    const baseTitle = 'Martínez Studio | Soluciones Digitales';
    const baseDescription = seoConfig.site.description;

    const pageMeta = {
        home: {
            title: `${baseTitle} - Landing Pages y Software a Medida`,
            description: baseDescription,
            keywords: seoConfig.keywords.main.join(', '),
        },
        servicios: {
            title: `Servicios - ${baseTitle}`,
            description: 'Landing pages, software a medida y automatización de procesos con n8n.',
            keywords: seoConfig.services.map(s => s.keywords).flat().join(', '),
        },
        portfolio: {
            title: `Portfolio - ${baseTitle}`,
            description: 'Proyectos realizados y casos de éxito en desarrollo web y software.',
            keywords: 'portfolio, proyectos, casos de éxito, trabajos realizados',
        },
        contacto: {
            title: `Contacto - ${baseTitle}`,
            description: 'Contacta con Leandro para consultar sobre tus proyectos digitales.',
            keywords: 'contacto, cotización, consulta, presupuesto',
        },
    };

    return pageMeta[page] || pageMeta.home;
};

export default seoConfig;
