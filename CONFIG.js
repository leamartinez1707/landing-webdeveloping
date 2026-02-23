// ARCHIVO DE CONFIGURACIÓN - ACTUALIZAR CON TUS DATOS REALES
// Este archivo debe ser actualizado con tu información personal/empresarial
// No commitar información sensible a Git sin usar .env

export const CONFIG = {
    // === INFORMACIÓN PERSONAL ===
    BUSINESS_NAME: 'Martínez Studio | Soluciones Digitales',
    AUTHOR_NAME: 'Leandro Martínez',
    SITE_URL: 'https://www.martinezstudio.com.uy', // ← ACTUALIZAR CON TU DOMINIO

    // === CONTACTO ===
    CONTACT: {
        EMAIL: 'leandromartinez.dev@gmail.com', // ← ACTUALIZAR
        PHONE: '+598 9 5220 063', // ← ACTUALIZAR
        WHATSAPP: '+598952200', // ← ACTUALIZAR CON NÚMERO REAL
        ADDRESS: 'Uruguay', // ← ACTUALIZAR SI TIENES DIRECCIÓN FÍSICA
    },

    // === REDES SOCIALES ===
    SOCIAL: {
        LINKEDIN: 'https://www.linkedin.com/company/martinez-studio-uy/', // ← ACTUALIZAR
        GITHUB: 'https://github.com/leamartinez1707', // ← ACTUALIZAR
        INSTAGRAM: 'https://www.instagram.com/martinezstudio_uy/', // ← ACTUALIZAR
    },

    // === IMÁGENES Y MEDIA ===
    IMAGES: {
        // Estas DEBEN ser URLs públicas (no rutas locales)
        OG_IMAGE: 'https://www.martinezstudio.com.uy/og-image.jpg', // ← CREAR Y SUBIR IMAGEN 1200x630px
        LOGO: 'https://www.martinezstudio.com.uy/logo.svg', // ← SI TIENES LOGO
        FAVICON: '/favicon-32x32.png',
        TOUCH_ICON: '/apple-touch-icon.png',
    },

    // === EMAIL JS (para formulario de contacto) ===
    EMAIL_JS: {
        SERVICE_ID: import.meta.env.VITE_SERVICE_ID, // ← OBTENER DE EmailJS
        TEMPLATE_ID: import.meta.env.VITE_TEMPLATE_ID, // ← OBTENER DE EmailJS
        PUBLIC_KEY: import.meta.env.VITE_PUBLIC_KEY, // ← OBTENER DE EmailJS
    },

    // === ANALYTICS ===
    ANALYTICS: {
        GOOGLE_ANALYTICS_ID: '', // ← ACTUALIZAR CON TU GA4 ID (ej: G-XXXXXXXXXX)
        GOOGLE_SITE_VERIFICATION: '', // ← DE Google Search Console
    },

    // === LOCALIZACIÓN ===
    DEFAULT_LOCALE: 'es', // Idioma por defecto
    DEFAULT_REGION: 'UY', // Región por defecto (Uruguay)
    SUPPORTED_LOCALES: ['es_UY', 'es_AR', 'es_CL', 'es_MX', 'es_CO', 'es_PE'],

    // === CONFIGURACIÓN TÉCNICA ===
    SITE_CONFIG: {
        THEME_COLOR: '#0066cc',
        BACKGROUND_COLOR: '#ffffff',
        LANGUAGE: 'es', // HTML lang attribute
        CONTENT_LANGUAGE: 'es',
    },

    // === GEO TARGETING (para schema.org) ===
    GEO: {
        LATITUDE: '-34.9011', // Montevideo, Uruguay
        LONGITUDE: '-56.1645', // Montevideo, Uruguay
    },

    // === INFORMACIÓN EMPRESARIAL ===
    BUSINESS: {
        TYPE: 'LocalBusiness', // o ProfessionalService
        INDUSTRY: 'Software Development',
        SERVICES: [
            'Web Development',
            'Software Development',
            'Process Automation',
            'Business Management Systems',
        ],
        PRICE_RANGE: '$$', // $, $$, $$$, $$$$
    },

    // === POLÍTICA Y LEGAL ===
    LEGAL: {
        PRIVACY_POLICY_URL: '',  // ← CREAR Y PUBLICAR
        TERMS_URL: '',           // ← CREAR Y PUBLICAR
        COOKIES_POLICY_URL: '',  // ← CREAR Y PUBLICAR
    },

    // === DESPLIEGUE ===
    DEPLOYMENT: {
        PLATFORM: 'vercel', // 'netlify', 'vercel', 'selfhosted'
        ENVIRONMENT: 'production',
    },
};

// === INSTRUCCIONES DE CONFIGURACIÓN ===
/*

1. INFORMACIÓN GENERAL
   - Actualiza BUSINESS_NAME, AUTHOR_NAME con tu nombre
   - Actualiza SITE_URL con tu dominio real
   - Esto debe coincidir en todos los archivos

2. CONTACTO
   - WHATSAPP: Tu número de WhatsApp completo (ej: +598XXXXXXXXX)
   - EMAIL: Email comercial
   - PHONE: Número de teléfono (opcional)

3. REDES SOCIALES
   - Actualiza URLs completas a tus perfiles redes sociales
   - Si no tienes alguna, deja la URL como placeholder o vacía

4. IMÁGENES (IMPORTANTE PARA SEO)
   - OG_IMAGE: Crea una imagen 1200x630px para redes sociales
   - Súbela a tu servidor y actualiza la URL
   - Esta imagen aparecerá al compartir el enlace en redes
   
5. EMAIL JS (Formulario de Contacto)
   - Ve a https://www.emailjs.com
   - Crea una cuenta FREE
   - Configura tu email provider (Gmail, Outlook, etc)
   - Copia: SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY
   - Pégalos aquí

6. GOOGLE ANALYTICS
   - Ve a https://analytics.google.com
   - Crea una propiedad GA4
   - Copia el ID (ej: G-XXXXXXXXXX)
   - Actualiza GOOGLE_ANALYTICS_ID

7. GOOGLE SEARCH CONSOLE
   - Ve a https://search.google.com/search-console
   - Agrega tu dominio
   - Verifica propiedad
   - Copia el verification meta tag
   - Actualiza GOOGLE_SITE_VERIFICATION

8. NETLIFY/VERCEL
   - Conecta tu repositorio Git
   - Configura variables de entorno
   - Usa archivo .env para variables sensibles

9. VALIDAR CAMBIOS
   - Ejecuta: npm run build
   - Verifica que no haya errores
   - Haz push a tu repositorio
   - El sitio se desplegará automáticamente

*/

// === VARIABLES DE ENTORNO (.env) ===
// 
// .env.local (NO SUBIR A GIT - agregar a .gitignore)
// VITE_WHATSAPP_NUMBER=+598XXXXXXXXX
// VITE_EMAIL=contacto@leandromartinez.dev
// VITE_EMAILJS_SERVICE_ID=your_service_id
// VITE_EMAILJS_TEMPLATE_ID=your_template_id
// VITE_EMAILJS_PUBLIC_KEY=your_public_key
// VITE_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
//

export default CONFIG;
