import { motion } from "motion/react"
import { Rocket, Wrench, Gem, Settings } from "lucide-react";
import useViewportAmount from "../hooks/useViewportAmount";

const services = [
    {
        title: "Landing Page",
        subtitle: "1 página con secciones internas",
        price: "U$S 180",
        description: "Diseño alineado a tu marca.",
        features: [
            "Diseño alineado a tu marca",
            "1 página con secciones internas",
            "Adaptada a todos los dispositivos",
            "Formulario o botón de contacto",
            "Integración con redes sociales",
            "Botón de WhatsApp",
            "Hosting y dominio incluidos el primer año"
        ],
        highlighted: true,
        icon: Rocket,
        badge: "MÁS VENDIDA"
    },
    {
        title: "Sitio web básico",
        subtitle: "Hasta 5 secciones",
        price: "U$S 300",
        description: "Diseño alineado a tu identidad.",
        features: [
            "Diseño alineado a tu identidad",
            "Hasta 5 secciones (Inicio, Servicios, Contacto, etc.)",
            "SEO y conexión con redes",
            "Navegación intuitiva y rápida",
            "Formulario o botón de contacto",
            "Botón de whatsapp",
            "Hosting y dominio incluidos el primer año"
        ],
        highlighted: false,
        icon: Wrench,
        badge: null
    },
    {
        title: "Sitio web avanzado",
        subtitle: "Hasta 10 secciones o más",
        price: "U$S 570",
        description: "Diseño y desarrollo a medida.",
        features: [
            "Diseño y desarrollo a medida",
            "Hasta 10 secciones o más",
            "Blog, catálogo u otro",
            "SEO y conexión con redes",
            "Formulario o botón de contacto",
            "Botón de whatsapp",
            "Hosting y dominio incluidos el primer año"
        ],
        highlighted: false,
        icon: Gem,
        badge: null
    },
    {
        title: "Software personalizado",
        subtitle: "Soluciones a medida",
        price: "Cotizar",
        description: "Pensado para marcas que buscan expandirse.",
        features: [
            "Automatización de tareas",
            "Reportes personalizados",
            "Integración con tus herramientas",
            "Panel de administración",
            "Soporte técnico continuo",
            "Escalable y seguro"
        ],
        highlighted: false,
        icon: Settings,
        badge: null
    }
];

const Services = () => {
    const amount = useViewportAmount()
    return (
        <motion.section
            id="servicios"
            className="py-20 px-6 text-center will-change-transform relative overflow-hidden"
            style={{ backgroundColor: '#050f12' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount }}
        >
            {/* Efectos decorativos de fondo */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
                <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl" 
                     style={{ backgroundColor: 'rgba(23, 165, 157, 0.1)' }}></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl" 
                     style={{ backgroundColor: 'rgba(32, 219, 209, 0.1)' }}></div>
            </div>

            <motion.div
                className="max-w-7xl mx-auto relative z-10"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <motion.div
                    className="inline-block px-6 py-2 rounded-full mb-4 border"
                    style={{ 
                        backgroundColor: 'rgba(32, 219, 209, 0.1)', 
                        borderColor: '#20dbd1'
                    }}
                >
                    <span className="text-sm font-semibold tracking-wider" style={{ color: '#20dbd1' }}>
                        ¡WEBS PARA POTENCIAR TU MARCA!
                    </span>
                </motion.div>

                <motion.h2
                    className="text-4xl md:text-5xl font-bold mb-4 will-change-transform"
                    style={{ color: '#e0f2f1' }}
                >
                    Páginas web <span className="gradient-text">a medida</span>
                </motion.h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                    {services.map((service, idx) => {
                        const IconComponent = service.icon;
                        return (
                        <motion.div
                            key={idx}
                            className="p-8 rounded-2xl transition-all will-change-transform flex flex-col h-full relative overflow-hidden group"
                            style={{ 
                                backgroundColor: service.highlighted ? 'rgba(32, 219, 209, 0.15)' : 'rgba(18, 112, 110, 0.1)',
                                borderWidth: '2px',
                                borderColor: service.highlighted ? '#20dbd1' : 'rgba(32, 219, 209, 0.3)'
                            }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.15 }}
                            viewport={{ once: true }}
                            whileHover={{ 
                                y: -10,
                                borderColor: '#20dbd1',
                                boxShadow: '0 20px 40px rgba(32, 219, 209, 0.2)'
                            }}
                        >
                            {service.badge && (
                                <div 
                                    className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold"
                                    style={{ 
                                        backgroundColor: '#20dbd1',
                                        color: '#0a1f24'
                                    }}
                                >
                                    {service.badge}
                                </div>
                            )}
                            
                            <div className="mb-4 animate-float group-hover:scale-110 transition-transform flex justify-center">
                                <IconComponent size={56} style={{ color: '#20dbd1' }} />
                            </div>
                            
                            <h3 className="text-2xl font-bold mb-2" style={{ color: 'white' }}>
                                {service.title}
                            </h3>
                            
                            <p className="text-sm mb-4 font-medium" style={{ color: '#b2dfdb' }}>
                                {service.subtitle}
                            </p>
                            
                            <div className="mb-6">
                                <span className="text-4xl font-bold" style={{ color: service.highlighted ? '#20dbd1' : '#17a59d' }}>
                                    {service.price}
                                </span>
                                {service.price !== "Cotizar" && (
                                    <span className="text-sm ml-2" style={{ color: '#80cbc4' }}>Desde</span>
                                )}
                            </div>

                            <div className="w-full h-px mb-6" style={{ backgroundColor: 'rgba(32, 219, 209, 0.3)' }}></div>
                            
                            <ul className="mb-6 text-left space-y-3 flex-grow">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#b2dfdb' }}>
                                        <span style={{ color: '#20dbd1' }}>✓</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            
                            <a 
                                href="https://api.whatsapp.com/send?phone=59895220063&text=Hola!%20Me%20interesa%20el%20servicio%20de%20" 
                                className="w-full py-3 rounded-full font-semibold transition-all text-center block"
                                style={{ 
                                    backgroundColor: service.highlighted ? '#20dbd1' : 'rgba(32, 219, 209, 0.2)',
                                    color: service.highlighted ? '#0a1f24' : 'white',
                                    borderWidth: '2px',
                                    borderColor: '#20dbd1'
                                }}
                            >
                                Consultar
                            </a>
                        </motion.div>
                    )})}
                </div>
            </motion.div>
        </motion.section>
    );
};

export default Services;
