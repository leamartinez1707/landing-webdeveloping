import { motion } from "motion/react";
import { CheckCircle, Settings, TrendingUp, Users } from "lucide-react";
import useViewportAmount from "../hooks/useViewportAmount";

const UruFix = () => {
    const amount = useViewportAmount();

    const benefits = [
        {
            icon: Users,
            title: "Gestión de clientes",
            description: "Acceso rápido a datos profesionales y contactos de cada cliente"
        },
        {
            icon: Settings,
            title: "Orden de trabajo completa",
            description: "Presupuesto, cronograma, materiales y seguimiento en un lugar"
        },
        {
            icon: TrendingUp,
            title: "Análisis de rentabilidad",
            description: "Reportes detallados de ganancia por trabajo y cliente"
        },
        {
            icon: CheckCircle,
            title: "Control en tiempo real",
            description: "Visualiza el estado de tus trabajos desde cualquier dispositivo"
        }
    ];

    return (
        <motion.section
            id="urufix"
            className="py-24 px-6 will-change-transform relative overflow-hidden"
            style={{
                background: 'linear-gradient(135deg, #f0f4f8 0%, #ffffff 100%)',
                borderTop: '1px solid rgba(0, 102, 204, 0.1)',
                borderBottom: '1px solid rgba(0, 102, 204, 0.1)'
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount }}
        >
            {/* Efectos decorativos */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
                <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full blur-3xl"
                    style={{ backgroundColor: '#0066cc' }}></div>
            </div>

            <motion.div
                className="max-w-6xl mx-auto relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount }}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Contenido izquierdo */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true, amount }}
                    >
                        <motion.div
                            className="inline-block px-6 py-2 rounded-full mb-6 border"
                            style={{
                                backgroundColor: 'rgba(0, 102, 204, 0.15)',
                                borderColor: '#0066cc'
                            }}
                        >
                            <span className="text-sm font-semibold tracking-wider" style={{ color: '#1a3a52' }}>
                                ⚡ NUESTRO PRODUCTO PRINCIPAL
                            </span>
                        </motion.div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#0a1f24' }}>
                            <span style={{ color: '#0066cc' }}>UruFix</span>: Sistema de gestión para talleres
                        </h2>

                        <p className="text-lg mb-8" style={{ color: '#555555' }}>
                            La solución integral para talleres, mecánicas y negocios de servicios técnicos que quieren profesionalizar su operación y aumentar rentabilidad.
                        </p>

                        <p className="text-base mb-8" style={{ color: '#666666' }}>
                            UruFix automatiza el flujo de trabajo completo: desde presupuestos hasta la gestión de clientes, permitiéndote enfocarte en lo que realmente importa: hacer crecer tu negocio.
                        </p>

                        <motion.a
                            href="https://api.whatsapp.com/send?phone=59895220063&text=Hola!%20Quiero%20conocer%20m%C3%A1s%20sobre%20UruFix"
                            target="_blank"
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-lg font-semibold transition-all shadow-lg text-lg"
                            style={{
                                backgroundColor: '#0066cc',
                                color: '#ffffff'
                            }}
                            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 102, 204, 0.4)' }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Probar ahora en WhatsApp
                        </motion.a>
                    </motion.div>

                    {/* Grid de características derecha */}
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true, amount }}
                    >
                        {benefits.map((benefit, idx) => {
                            const IconComponent = benefit.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    className="p-6 rounded-xl"
                                    style={{
                                        backgroundColor: '#ffffff',
                                        borderWidth: '1px',
                                        borderColor: 'rgba(0, 102, 204, 0.2)',
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                                    }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 + (idx * 0.1) }}
                                    viewport={{ once: true, amount }}
                                    whileHover={{
                                        y: -5,
                                        boxShadow: '0 12px 24px rgba(0, 102, 204, 0.15)'
                                    }}
                                >
                                    <IconComponent size={32} style={{ color: '#0066cc', marginBottom: '12px' }} />
                                    <h3 className="font-bold text-lg mb-2" style={{ color: '#0a1f24' }}>
                                        {benefit.title}
                                    </h3>
                                    <p className="text-sm" style={{ color: '#666666' }}>
                                        {benefit.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </motion.div>
        </motion.section>
    );
};

export default UruFix;
