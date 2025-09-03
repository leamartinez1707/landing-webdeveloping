import { motion } from "motion/react";
import useViewportAmount from "../hooks/useViewportAmount";

const projects = [
    {
        title: "Software a medida para gestión de servicios técnicos",
        description: "Plataforma personalizada para automatizar procesos y gestionar clientes de forma eficiente. Integración de reportes y panel de administración.",
        image: "https://res.cloudinary.com/dofgqtm9r/image/upload/v1747969872/monopatines_project_unfd1k.png",
        link: "https://avelinoacevedo.com.uy/",
        type: "Software a medida",
    },
    {
        title: "Landing Page para tienda de muebles",
        description: "Página de alto impacto visual, catálogo de productos, integración con WhatsApp y formulario de contacto optimizado para conversión.",
        image: "https://res.cloudinary.com/dofgqtm9r/image/upload/v1747969105/todomuebles_project.png",
        link: "https://todomueblesuy.vercel.app/home",
        type: "Landing Page",
    },
    {
        title: "E-commerce para tienda de monopatines y bicicletas eléctricas",
        description: "Tienda online con carrito, gestión de productos, pagos y experiencia de usuario moderna. Panel de control para administración fácil.",
        image: "https://res.cloudinary.com/dofgqtm9r/image/upload/v1747969519/wix_project.png",
        link: "https://www.mistyle.com.uy/",
        type: "E-commerce",
    },
];

const Portfolio = () => {

    const amount = useViewportAmount();
    return (
        <motion.section
            id="portfolio"
            className="py-20 px-4 bg-white text-center will-change-transform border-b border-gray-200"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount }}
        >
            <motion.h2
                className="text-4xl font-bold mb-4 text-gray-900 will-change-transform"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Proyectos destacados
            </motion.h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
                Descubre cómo ayudo a negocios y emprendedores a crecer con soluciones digitales modernas, seguras y pensadas para vender más. Cada proyecto está adaptado a las necesidades reales de cada cliente.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 max-w-7xl mx-auto">
                {projects.map((project, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: idx * 0.2 }}
                        viewport={{ once: true, amount }}
                        className="bg-white rounded-md overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-200 flex flex-col h-full"
                    >
                        <div className="relative group">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-95"
                            />
                            <span className="absolute top-4 left-4 bg-blue-800 text-white text-xs font-semibold px-3 py-1 rounded shadow tracking-wide">{project.type}</span>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
                        </div>
                        <div className="p-7 flex flex-col flex-1 justify-between">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2 border-b border-gray-200 pb-2">{project.title}</h3>
                            <div className="mb-6">
                                <p className="text-gray-700 text-base font-normal mb-2">{project.description}</p>
                            </div>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-blue-800 text-white px-5 py-2 rounded font-semibold shadow hover:bg-blue-900 transition-colors duration-200 text-base border border-blue-900"
                            >
                                Ver proyecto
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>

    );
};

export default Portfolio;
