import { motion } from "motion/react"
import useViewportAmount from "../hooks/useViewportAmount";

const services = [
    {
        title: "Landing Page Profesional",
        description: "Convierte visitantes en clientes con una página web moderna y optimizada para ventas. Ideal para presentar tu negocio y captar leads de calidad.",
        benefits: ["Diseño moderno y responsive", "Optimizada para conversiones", "Integración con redes sociales"],
        icon: "🌐",
    },
    {
        title: "E-commerce Personalizado",
        description: "Tu tienda online lista para vender, con todas las herramientas necesarias para gestionar pedidos y pagos de manera eficiente.",
        benefits: ["Carrito de compras optimizado", "Múltiples métodos de pago", "Panel de administración intuitivo"],
        icon: "🛒",
    },
    {
        title: "Sistemas a Medida",
        description: "Automatiza tus procesos de negocio con software personalizado que se adapta a tus necesidades específicas y mejora tu productividad.",
        benefits: ["Automatización de tareas", "Reportes personalizados", "Integración con tus herramientas"],
        icon: "⚙️",
    },
    {
        title: "Transformación Digital",
        description: "Moderniza tu presencia online con un rediseño completo que mejora la experiencia de tus clientes y aumenta tu visibilidad.",
        benefits: ["Diseño actualizado", "Mejora de rendimiento", "Optimización SEO"],
        icon: "🎨",
    },
];

const Services = () => {
    const amount = useViewportAmount()
    return (
        <motion.section
            id="servicios"
            className="py-20 px-6 bg-gradient-to-b from-white via-blue-100 to-white text-center will-change-transform"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount }}
        >
            <motion.div
                className="max-w-6xl mx-auto"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <motion.h2
                    className="text-4xl font-extrabold mb-4 text-gray-800 will-change-transform"
                >
                    Soluciones que impulsan tu negocio
                </motion.h2>

                <motion.p
                    className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
                >
                    Cada proyecto es único. Trabajamos juntos para crear la solución perfecta que resuelva tus desafíos específicos y ayude a tu negocio a crecer.
                </motion.p>

                <div className="grid md:grid-cols-2 gap-10">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: idx * 0.2, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.5 }}
                            className="bg-white border border-gray-200 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all will-change-transform"
                            style={{ minHeight: 300, willChange: 'transform, opacity' }}
                        >
                            <div className="text-5xl mb-6 text-blue-600">{service.icon}</div>
                            <h3 className="text-2xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                            <ul className="text-left space-y-2">
                                {service.benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-center text-gray-700">
                                        <span className="text-green-500 mr-2">✓</span>
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </motion.section>
    );
};

export default Services;
