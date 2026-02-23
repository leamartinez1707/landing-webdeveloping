import { motion } from "motion/react"
import { Wrench, Zap, BarChart3 } from "lucide-react";
import useViewportAmount from "../hooks/useViewportAmount";

const services = [
    {
        title: "Sistemas para talleres",
        subtitle: "Control total de tu operación",
        description: "Ordena clientes, tareas, inventario y presupuestos en un solo lugar.",
        features: [
            "Gestión de clientes y contactos",
            "Control de trabajos y órdenes",
            "Seguimiento en tiempo real",
            "Reportes de rentabilidad",
            "Notificaciones automáticas",
            "Acceso desde cualquier dispositivo"
        ],
        highlighted: true,
        icon: Wrench,
        badge: "POPULAR"
    },
    {
        title: "Automatización de procesos",
        subtitle: "Reduce trabajo manual",
        description: "Automatiza tareas repetitivas y ahorra tiempo en operaciones diarias.",
        features: [
            "Workflow personalizado",
            "Integración con tus herramientas",
            "Generación automática de reportes",
            "Notificaciones y alertas",
            "Sincronización de datos",
            "Backups automáticos"
        ],
        highlighted: false,
        icon: Zap,
        badge: null
    },
    {
        title: "Desarrollo de software a medida",
        subtitle: "Soluciones específicas",
        description: "Software construido exactamente para los requisitos de tu negocio.",
        features: [
            "Análisis personalizado",
            "Desarrollo profesional",
            "Soporte técnico continuo",
            "Escalabilidad garantizada",
            "Seguridad empresarial",
            "Capacitación incluida"
        ],
        highlighted: false,
        icon: BarChart3,
        badge: null
    }
];

const Services = () => {
    const amount = useViewportAmount()
    return (
        <motion.section
            id="que-hacemos"
            className="py-24 px-6 text-center will-change-transform relative overflow-hidden"
            style={{
                backgroundColor: '#f8f9fa',
                borderTop: '1px solid rgba(32, 219, 209, 0.1)'
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount }}
        >
            {/* Efectos decorativos de fondo sutil */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
                <div className="absolute top-0 left-1/4 w-96 h-96 rounded-md blur-3xl"
                    style={{ backgroundColor: '#0066cc' }}></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-md blur-3xl"
                    style={{ backgroundColor: '#1a3a52' }}></div>
            </div>

            <motion.div
                className="max-w-7xl mx-auto relative z-10"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <motion.div
                    className="inline-block px-6 py-2 rounded-md mb-6"                >
                    <span className="font-semibold tracking-wider" style={{ color: '#0066cc' }}>
                        QUÉ HACEMOS
                    </span>
                </motion.div>

                <motion.h2
                    className="text-4xl md:text-5xl font-bold mb-4 will-change-transform"
                    style={{ color: '#0a1f24' }}
                >
                    Sistemas para <span style={{ color: '#0066cc' }}>negocios reales</span>
                </motion.h2>

                <motion.p
                    className="text-lg mb-16 max-w-2xl mx-auto"
                    style={{ color: '#555555' }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Digitalizamos, automatizamos y profesionalizamos la operación de tu negocio con software especializado.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    {services.map((service, idx) => {
                        const IconComponent = service.icon;
                        return (
                            <motion.div
                                key={idx}
                                className="p-8 rounded-2xl transition-all will-change-transform flex flex-col h-full relative overflow-hidden"
                                style={{
                                    backgroundColor: service.highlighted ? '#ffffff' : '#ffffff',
                                    borderWidth: '2px',
                                    borderColor: service.highlighted ? '#0066cc' : 'rgba(0, 102, 204, 0.2)',
                                    boxShadow: service.highlighted
                                        ? '0 8px 24px rgba(0, 102, 204, 0.15)'
                                        : '0 4px 12px rgba(0,0,0,0.05)'
                                }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: idx * 0.15 }}
                                viewport={{ once: true }}
                                whileHover={{
                                    y: -8,
                                    boxShadow: '0 16px 32px rgba(32, 219, 209, 0.2)'
                                }}
                            >
                                {service.badge && (
                                    <div
                                        className="absolute top-4 right-4 px-3 py-1 rounded-md text-xs font-bold"
                                        style={{
                                            backgroundColor: '#0066cc',
                                            color: '#ffffff'
                                        }}
                                    >
                                        {service.badge}
                                    </div>
                                )}

                                <div className="mb-6 flex justify-center">
                                    <div
                                        className="p-4 rounded-md"
                                        style={{
                                            backgroundColor: 'rgba(0, 102, 204, 0.15)'
                                        }}
                                    >
                                        <IconComponent size={40} style={{ color: '#0066cc' }} />
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold mb-2" style={{ color: '#0a1f24' }}>
                                    {service.title}
                                </h3>

                                <p className="text-base mb-6 font-medium" style={{ color: '#666666' }}>
                                    {service.subtitle}
                                </p>

                                <p className="text-sm mb-8" style={{ color: '#888888' }}>
                                    {service.description}
                                </p>

                                <ul className="mb-8 text-left space-y-3 flex-grow">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm" style={{ color: '#555555' }}>
                                            <span style={{ color: '#0066cc', fontSize: '18px', lineHeight: '1' }}>✓</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href="https://api.whatsapp.com/send?phone=59895220063&text=Hola!%20Quiero%20saber%20m%C3%A1s%20sobre%20"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-3 rounded-md font-semibold transition-all text-center block"
                                    style={{
                                        backgroundColor: service.highlighted ? '#0066cc' : 'rgba(0, 102, 204, 0.2)',
                                        color: service.highlighted ? '#ffffff' : '#0066cc'
                                    }}
                                >
                                    Consultar opciones
                                </a>
                            </motion.div>
                        )
                    })}
                </div>
            </motion.div>
        </motion.section>
    );
};

export default Services;
