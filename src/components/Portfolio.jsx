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
            className="py-20 px-4 text-center will-change-transform relative overflow-hidden"
            style={{ backgroundColor: '#0a1f24' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount }}
        >
            {/* Efectos decorativos de fondo */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full blur-3xl" 
                     style={{ backgroundColor: 'rgba(32, 219, 209, 0.15)' }}></div>
            </div>

            <motion.div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    className="inline-block px-6 py-2 rounded-full mb-4 border"
                    style={{ 
                        backgroundColor: 'rgba(32, 219, 209, 0.1)', 
                        borderColor: '#20dbd1'
                    }}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <span className="text-sm font-semibold tracking-wider" style={{ color: '#20dbd1' }}>
                        PÁGINAS WEB QUE HABLAN POR SÍ SOLAS
                    </span>
                </motion.div>

                <motion.h2
                    className="text-4xl md:text-5xl font-bold mb-4 will-change-transform"
                    style={{ color: '#e0f2f1' }}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Proyectos <span className="gradient-text">destacados</span>
                </motion.h2>
                <p className="text-lg max-w-2xl mx-auto mb-10" style={{ color: '#b2dfdb' }}>
                    Proyectos diseñados para impactar y conectar con tu audiencia.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            viewport={{ once: true, amount }}
                            className="rounded-2xl overflow-hidden transition-all flex flex-col h-full group"
                            style={{ 
                                backgroundColor: 'rgba(18, 112, 110, 0.15)',
                                borderWidth: '2px',
                                borderColor: 'rgba(32, 219, 209, 0.3)'
                            }}
                            whileHover={{ 
                                y: -10,
                                borderColor: '#20dbd1',
                                boxShadow: '0 20px 40px rgba(32, 219, 209, 0.2)'
                            }}
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <span 
                                    className="absolute top-4 left-4 px-4 py-2 rounded-full text-xs font-bold tracking-wider"
                                    style={{ 
                                        backgroundColor: '#20dbd1',
                                        color: '#0a1f24'
                                    }}
                                >
                                    {project.type}
                                </span>
                            </div>
                            <div className="p-6 flex flex-col flex-1 justify-between">
                                <div>
                                    <h3 className="text-xl font-bold mb-3" style={{ color: '#20dbd1' }}>
                                        {project.title}
                                    </h3>
                                    <p className="text-base mb-6" style={{ color: '#b2dfdb' }}>
                                        {project.description}
                                    </p>
                                </div>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-3 rounded-full font-semibold transition-all text-center block group-hover:scale-105"
                                    style={{ 
                                        backgroundColor: 'rgba(32, 219, 209, 0.2)',
                                        color: '#20dbd1',
                                        borderWidth: '2px',
                                        borderColor: '#20dbd1'
                                    }}
                                >
                                    Ver proyecto →
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </motion.section>

    );
};

export default Portfolio;
