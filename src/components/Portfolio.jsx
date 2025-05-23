import { motion } from "motion/react";
import useViewportAmount from "../hooks/useViewportAmount";

const projects = [
    {
        title: "Software a medida para gestión de servicios tecnicos",
        description: "Plataforma para gestión de servicios técnicos, automatización de procesos y gestión de clientes.",
        image: "https://res.cloudinary.com/dofgqtm9r/image/upload/v1747969872/monopatines_project_unfd1k.png",
        link: "https://avelinoacevedo.com.uy/",
    },
    {
        title: "Landing Page para tienda de muebles",
        description: "Diseño moderno, sección de productos, Whatsapp API y formulario de contacto.",
        image: "https://res.cloudinary.com/dofgqtm9r/image/upload/v1747969105/todomuebles_project.png",
        link: "https://todomueblesuy.vercel.app/home",
    },
    {
        title: "E-commerce para tienda de monopatines y bicicletas eléctricas",
        description: "E-commerce con carrito de compras, gestión de productos y pagos.",
        image: "https://res.cloudinary.com/dofgqtm9r/image/upload/v1747969519/wix_project.png",
        link: "https://www.mistyle.com.uy/",
    },
];

const Portfolio = () => {

    const amount = useViewportAmount();
    return (
        <motion.section
            id="portfolio"
            className="py-20 px-6 bg-white text-center will-change-transform"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount }}
        >
            <motion.h2
                className="text-4xl font-extrabold mb-12 text-gray-800 will-change-transform"
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
                        viewport={{ once: true, amount }}
                        className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-transform border will-change-transform"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-fill"
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
