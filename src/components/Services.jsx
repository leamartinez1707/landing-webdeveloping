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
            className="py-20 px-6 bg-white text-center will-change-transform border-b border-gray-200"
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
                    className="text-4xl font-bold mb-4 text-gray-900 will-change-transform"
                >
                    Servicios
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            className="bg-white border border-gray-300 p-7 rounded-md shadow-lg hover:shadow-xl transition-all will-change-transform flex flex-col h-full"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-3xl mb-4">{service.icon}</div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2 border-b border-gray-200 pb-2">{service.title}</h3>
                            <div className="mb-4">
                                <p className="text-gray-700 text-base font-normal mb-2">{service.description}</p>
                            </div>
                            <ul className="mb-4 text-gray-500 text-sm list-disc list-inside">
                                {service.benefits.map((b, i) => (
                                    <li key={i}>{b}</li>
                                ))}
                            </ul>
                            <a href="#contacto" className="inline-block bg-blue-800 text-white px-5 py-2 rounded-md font-medium shadow hover:bg-blue-900 transition-colors duration-200 text-sm mt-auto border border-blue-900">Solicitar info</a>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </motion.section>
    );
};

export default Services;
