import { motion } from "motion/react"
import useViewportAmount from "../hooks/useViewportAmount";

const services = [
    {
        title: "Landing page profesional",
        description: "Ideal para campañas publicitarias o presentar tu negocio en una sola página moderna y efectiva.",
        icon: "🌐",
    },
    {
        title: "Tienda online lista para vender",
        description: "Armamos tu e-commerce con carrito, pagos, WhatsApp, y lo que necesites para empezar a facturar.",
        icon: "🛒",
    },
    {
        title: "MVP personalizado",
        description: "¿Tenés una idea de app o plataforma? Te ayudo a validar con una versión inicial hecha a medida.",
        icon: "⚙️",
    },
    {
        title: "Rediseño de sitios existentes",
        description: "Si tu web se ve antigua o no está funcionando como debería, la mejoramos y actualizamos.",
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
            <motion.h2
                className="text-4xl font-extrabold mb-12 text-gray-800 will-change-transform"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                ¿Qué puedo hacer por vos?
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                {services.map((service, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: idx * 0.2 }}
                        viewport={{ once: true, amount: 0.5 }}
                        whileHover={{ scale: 1.03 }}
                        className="bg-white border border-gray-200 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all will-change-transform"
                        style={{ minHeight: '250px' }}
                    >

                        <div className="text-5xl mb-6 text-blue-600">{service.icon}</div>
                        <h3 className="text-2xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    </motion.div>
                ))}
            </div>
        </motion.section>

    );
};

export default Services;
