import { motion } from "motion/react";

const projects = [
    {
        title: "Landing para consultora de marketing",
        description: "Diseño moderno, con animaciones, sección de servicios y formulario de contacto.",
        image: "https://source.unsplash.com/800x600/?website,marketing",
        link: "#",
    },
    {
        title: "E-commerce de indumentaria",
        description: "Tienda online funcional con carrito, pasarela de pagos y contacto por WhatsApp.",
        image: "https://source.unsplash.com/800x600/?clothing,store",
        link: "#",
    },
    {
        title: "MVP para sistema de reservas",
        description: "App inicial para reservar turnos en línea para una peluquería, conectada a base de datos.",
        image: "https://source.unsplash.com/800x600/?calendar,app",
        link: "#",
    },
];

const Portfolio = () => {
    return (
        <motion.section
            id="portfolio"
            className="py-20 px-6 bg-white text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <motion.h2
                className="text-4xl font-extrabold mb-12 text-gray-800"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Algunos de mis proyectos
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {projects.map((project, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: idx * 0.2 }}
                        viewport={{ once: true, amount: 0.3 }}
                        whileHover={{ scale: 1.02 }}
                        className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-5 text-left">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                            <p className="text-gray-600 mb-4">{project.description}</p>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 font-medium hover:underline"
                            >
                                Ver más →
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>

    );
};

export default Portfolio;
