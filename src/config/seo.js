// Configuración centralizada de SEO y metadatos
// Este archivo contiene las keywords, descripciones y configuraciones SEO

export const seoConfig = {
    // Información general del sitio
    site: {
        name: 'Martínez Studio | Soluciones Digitales',
        description: 'Soluciones digitales profesionales para talleres, pymes y emprendimientos. Sistemas de gestión, desarrollo de software a medida y automatización de procesos. Uruguay y Latinoamérica.',
        url: 'https://www.martinezstudio.com.uy',
        image: 'https://www.martinezstudio.com.uy/og-image.jpg',
        author: 'Leandro Martínez',
        language: 'es',
    },

    // Keywords principales para cada región/servicio
    keywords: {
        main: [
            'software para talleres uruguay',
            'desarrollo web uruguay',
            'sistema de gestión talleres',
            'aplicaciones web latinoamérica',
            'desarrollador web freelance',
            'software a medida',
            'automatización procesos',
            'sistema gestión clientes',
            'software pymes',
            'soluciones digitales',
            'gestion de talleres',
            'gestion de servicios',
            'software para negocios',
            'servicio tecnico'
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
                talleres: [
                    'software talleres',
                    'sistema gestión talleres',
                    'software mecanica',
                    'app para talleres',
                    'control trabajos taller',
                ],
                pymes: [
                    'software pymes',
                    'sistema pymes',
                    'app pequeños negocios',
                    'automatización pymes',
                ],
                emprendimientos: [
                    'software emprendimientos',
                    'app emprendedores',
                    'herramientas startup',
                ],
            },
        },
    },

    // Servicios principales con descripciones SEO
    services: [
        {
            id: 'sistemas-talleres',
            name: 'Sistemas para Talleres',
            description: 'Control total de tu operación de taller con gestión de clientes, trabajos, inventario y presupuestos.',
            keywords: ['sistema talleres', 'gestión talleres', 'software taller mecanico', 'control trabajos'],
        },
        {
            id: 'automatizacion',
            name: 'Automatización de Procesos',
            description: 'Reduce trabajo manual y automatiza tareas repetitivas en tu negocio.',
            keywords: ['automatización procesos', 'workflow', 'integración sistemas', 'automatización negocio'],
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
        'como crear una app para mi taller',
        'software gratuito para gestionar clientes',
        'sistema de facturación para talleres',
        'app control trabajos taller',
        'software gestión inventario talleres',
        'sistema presupuestos automatizado',
        'como automatizar mi negocio',
        'alternativa erp para pymes',
        'soluciones digitales emprendimientos',
    ],
};

// Función helper para obtener meta tags
export const getMetaTags = (page = 'home') => {
    const baseTitle = 'Leandro Martínez | Soluciones Digitales';
    const baseDescription = seoConfig.site.description;

    const pageMeta = {
        home: {
            title: `${baseTitle} - Software para Talleres y Pymes`,
            description: baseDescription,
            keywords: seoConfig.keywords.main.join(', '),
        },
        servicios: {
            title: `Servicios - ${baseTitle}`,
            description: 'Sistemas para talleres, automatización de procesos y desarrollo de software a medida.',
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
