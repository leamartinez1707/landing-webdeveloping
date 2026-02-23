# Guía de SEO - Landing Page Leandro Martínez

## 📌 Resumen de Mejoras SEO Implementadas

### 1. **Meta Tags Optimizados** ✅
Se han mejorado significativamente los meta tags en `index.html`:
- **Título**: Incluye palabras clave principales + localización
- **Meta Description**: Optimizado para Uruguay y Latinoamérica
- **Keywords**: Palabras clave específicas para tu público objetivo
- **Meta robots**: Configurado correctamente para indexación
- **Content-Language**: Especificado como español

### 2. **Open Graph Tags** ✅
Agregados para mejor compartición en redes sociales:
- `og:title`, `og:description`, `og:url`
- `og:locale` configurado para múltiples regiones (es_UY, es_AR, es_CL, es_MX)
- Etiquetas de Twitter card para X/Twitter

### 3. **Datos Estructurados (JSON-LD)** ✅
Agregados dos tipos de structured data:
- **LocalBusiness Schema**: Identifica el negocio a nivel local
- **ProfessionalService Schema**: Define servicios profesionales
- Incluye información de areas de cobertura geográfica

### 4. **Archivos de Rastreo** ✅
Creados para optimización en motores de búsqueda:

#### `robots.txt`
- Permite rastreo de todo el contenido público
- Prohíbe carpetas privadas (si existen)
- Define velocidad de rastreo
- Apunta al sitemap

#### `sitemap.xml`
- Incluye todas las secciones principales
- Especifica prioridad y frecuencia de cambios
- Útil para que Google indexe rápidamente

### 5. **Headers HTTP Optimizados** ✅
Archivo `_headers` (para Netlify/Vercel):
- **X-Content-Type-Options**: Previene MIME sniffing
- **X-Frame-Options**: Previene clickjacking
- **Content-Language**: Declara español como idioma
- **Referrer-Policy**: Protege privacidad del usuario

### 6. **Redireccionamientos SEO** ✅
Archivo `_redirects`:
- Redirige www → no-www (evita contenido duplicado)
- Redirige HTTP → HTTPS (seguridad + SEO)
- SPA routing preservado para anchor links

### 7. **PWA Manifest Mejorado** ✅
`site.webmanifest` actualizado con:
- Nombre y descripción completo
- Color tema coherente (#0066cc)
- Categorías de aplicación

### 8. **Configuración SEO Centralizada** ✅
Nuevo archivo `src/config/seo.js`:
- Keywords por región y sector
- Metadata para servicios
- Información de contacto
- Helper functions para acceso fácil

---

## 🎯 Keywords Principales Implementados

### Palabras Clave por Región:
| Uruguay | Argentina | Chile | Mexico | Colombia |
|---------|-----------|-------|--------|----------|
| desarrollo web uruguay | desarrollo web argentina | desarrollo web chile | desarrollo web mexico | desarrollo web colombia |
| software uruguay | software argentina | software chile | software mexico | software colombia |
| programador uruguay | programador argentina | programador chile | programador mexico | programador colombia |

### Por Sector/Servicio:
- **Talleres**: sistema gestión talleres, software mecanica, app control trabajos
- **Pymes**: software pymes, automatización pymes, sistema pymes
- **Emprendimientos**: software emprendimientos, herramientas startup

### Long-tail Keywords (Búsquedas Específicas):
- "como crear una app para mi taller"
- "software gratuito para gestionar clientes"
- "sistema facturación para talleres"
- "automatizar procesos negocio"

---

## 📊 Próximos Pasos para Mejorar SEO

### Inmediato (1-2 semanas):

1. **Agregar Imagen OG**
   ```html
   <meta property="og:image" content="https://leandromartinez.dev/og-image.jpg">
   <meta property="og:image:width" content="1200">
   <meta property="og:image:height" content="630">
   ```
   - Crear imagen 1200x630px para compartir en redes
   - Optimarla al máximo (< 200KB)

2. **Actualizar URLs de Contacto**
   Reemplazar placeholders en:
   - `index.html`: URLs de contacto en LocalBusiness Schema
   - `src/config/seo.js`: Números de WhatsApp, email, teléfono
   - Componentes de contacto: LinkedIn, GitHub, Twitter

3. **Validar en Google Search Console**
   - Ir a Google Search Console
   - Agregar propiedad: `https://leandromartinez.dev`
   - Enviar sitemap.xml
   - Solicitar rastreo de homepage

4. **Google Business Profile** (si aplica)
   - Crear perfil para Uruguay
   - Completar información de negocio
   - Agregar categorías relevantes

### Corto Plazo (1 mes):

5. **Optimizar Imágenes**
   - Usar WebP en lugar de PNG/JPEG
   - Mantener < 100KB por imagen
   - Agregar alt text descriptivo con keywords
   - Ejemplo: `alt="Sistema gestión talleres software"`

6. **Crear Contenido Extra**
   - Blog post: "Cómo elegir software para tu taller"
   - Guía: "10 beneficios de automatizar procesos"
   - FAQ: Preguntas frecuentes sobre servicios
   - Cada uno optimizado con keywords

7. **Link Building**
   - Buscar directorios de empresas Uruguay
   - Contactar blogs de emprendimiento
   - Guest posts en sitios relevantes

8. **Mejorar Core Web Vitals**
   - Hacer tests en PageSpeed Insights
   - Optimizar LCP (Largest Contentful Paint)
   - Reducir CLS (Cumulative Layout Shift)
   - Mejorar FID (First Input Delay)

### Mediano Plazo (3 meses):

9. **Internacionalización**
   - Agregar hreflang tags en header
   - Crear versiones regionales si es necesario
   - SEO local para cada país

10. **Estrategia de Backlinks**
    - Contactar a empresas que hablen de desarrollo web
    - Conseguir menciones en medios tech
    - Links desde directorios profesionales

11. **Review Management**
    - Solicitar reviews en Google
    - Responder a todas las reviews
    - Agregar testimonios al sitio

12. **Actualizar Contenido Regularmente**
    - Revisar meta tags cada trimestre
    - Actualizar sitemap.xml si hay cambios
    - Agregar nuevos servicios/proyectos

---

## 🔍 Herramientas para Monitorear SEO

### Gratuitas:
- **Google Search Console**: Monitoreo de indexación y rankings
- **Google Analytics**: Tráfico y comportamiento de usuarios
- **PageSpeed Insights**: Velocidad y Web Vitals
- **Ubersuggest (Free)**: Keywords y competencia
- **Ahrefs Webmaster Tools**: Análisis de enlaces

### De Pago (Recomendadas):
- **SEMrush**: Análisis completo de SEO
- **Ahrefs**: Backlinks y keywords
- **Moz Pro**: Ranking tracker y site crawl
- **Keywords Everywhere**: Herramienta de keywords

### En Desarrollo:
```bash
# Validar HTML
npm install --save-dev html-validator

# Validar Meta tags
npm install --save-dev meta-checker
```

---

## ✅ Checklist Mensual de SEO

```markdown
- [ ] Revisar Google Search Console (clicks, impressions, CTR)
- [ ] Checar rankings de keywords principales
- [ ] Validar que no haya errores de rastreo en GSC
- [ ] Revisar Core Web Vitals en PageSpeed Insights
- [ ] Comprobar que sitemap.xml esté actualizado
- [ ] Revisar robots.txt y _redirects
- [ ] Hacer crawl del sitio con Screaming Frog
- [ ] Validar que no haya broken links
- [ ] Revisar anchor texts internos
- [ ] Actualizar contenido si es necesario
- [ ] Responder comentarios/reviews
- [ ] Analizar tráfico en Google Analytics
```

---

## 🚀 Próximas Funcionalidades para Agregar

### Al Sitio Principal:
1. **Blog/Noticias** - Crear contenido regular
2. **Knowledge Base** - Preguntas frecuentes detalladas
3. **Testimonios/Results** - Case studies de clientes
4. **Comparador de Soluciones** - Frente a competencia
5. **Calculadora de ROI** - Mostrar beneficios

### Técnicas:
1. **Schema.org Extendido** - AggregateOffer, Review, etc.
2. **Pagination** - Si se agregan más servicios
3. **Lazy Loading** - Imágenes optimizadas
4. **Infinite Scroll o Pagination** - Si hay lista larga
5. **Breadcrumbs** - Para navegación (si es SPA compleja)

---

## 📱 SEO Técnico por Plataforma

### Si Despliega en **Netlify**:
- ✅ `_headers` y `_redirects` se aplican automáticamente
- ✅ HTTPS habilitado por defecto
- ✅ Compresión gzip automática
- ✅ CDN global incluido

### Si Despliega en **Vercel**:
- ✅ Vercel Headers y Redirects soportados
- ✅ HTTPS habilitado
- ✅ Optimización de imágenes integrada
- ✅ Analytics disponible

### Si Despliega en **Servidor Propio**:
- ⚠️ Asegurar HTTPS con SSL certificate
- ⚠️ Configurar Gzip en nginx/apache
- ⚠️ Agregar cache headers
- ⚠️ Setup correcto de robots.txt

---

## 🌐 URLs Importantes

Actualizar estas URLs en los archivos de configuración:

```javascript
// En index.html y src/config/seo.js
const SITE_URL = 'https://leandromartinez.dev'
const CONTACT_PHONE = '+598 XXXXXXXXX'
const CONTACT_EMAIL = 'contacto@leandromartinez.dev'
const LINKEDIN = 'https://linkedin.com/in/leandromartinez'
const GITHUB = 'https://github.com/leandromartinez'
const TWITTER = 'https://twitter.com/leandromartinez'
```

---

## 📞 Soporte y Consultas

Para preguntas sobre SEO o para reportar problemas:
1. Revisar esta guía primero
2. Consultar documentación oficial (Google, Moz, Ahrefs)
3. Hacer test en herramientas mencionadas
4. Documentar cambios en Git

---

**Última actualización**: 23/02/2026
**Responsable**: Leandro Martínez
**Status**: Optimización SEO Completada (Phase 1)
