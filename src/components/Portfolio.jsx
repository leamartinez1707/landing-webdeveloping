import { motion } from "motion/react";
import useViewportAmount from "../hooks/useViewportAmount";

const projects = [
    {
        title: "Plataforma de operaciones para servicios tecnicos",
        description: "Sistema interno para turnos, historial tecnico y seguimiento de clientes en tiempo real.",
        image: "https://res.cloudinary.com/dofgqtm9r/image/upload/v1747969872/monopatines_project_unfd1k.png",
        link: "https://avelinoacevedo.com.uy/",
        type: "Software a medida",
        result: "+47.2% de tareas cerradas por semana",
    },
    {
        title: "Landing comercial para estudio de interiores",
        description: "Sitio de una pagina con portfolio visual, formulario filtrado y llamado a accion directo.",
        image: "https://res.cloudinary.com/dofgqtm9r/image/upload/v1747969105/todomuebles_project.png",
        link: "https://todomueblesuy.vercel.app/home",
        type: "Landing Page",
        result: "+31.8% de consultas calificadas",
    },
    {
        title: "E-commerce para movilidad electrica",
        description: "Rediseño completo con catalogo optimizado y experiencia mobile-first orientada a cierre.",
        image: "https://res.cloudinary.com/dofgqtm9r/image/upload/v1747969519/wix_project.png",
        link: "https://www.mistyle.com.uy/",
        type: "E-commerce",
        result: "Tiempo promedio en pagina: 3m 18s",
    },
];

const Portfolio = () => {

    const amount = useViewportAmount();
    return (
        <motion.section
            id="proyectos"
            className="border-b border-[var(--line)] py-20 md:py-24"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount }}
        >
            <div className="site-container">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-3xl"
                >
                    <span className="eyebrow">proyectos</span>
                    <h2 className="section-title mt-4 text-[var(--ink)]">Resultados visibles en negocios de distintos rubros</h2>
                    <p className="section-lead">
                        Estos proyectos reflejan el tipo de trabajo que hago: objetivos concretos, decisiones de UX claras y ejecucion tecnica sin ruido.
                    </p>
                </motion.div>

                <div className="mt-12 grid gap-6 md:grid-cols-2">
                    {projects.map((project, idx) => (
                        <motion.article
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.16 }}
                            viewport={{ once: true, amount }}
                            className={`overflow-hidden rounded-[var(--radius-sm)] border border-[var(--line)] bg-[rgba(248,248,243,0.75)] ${
                                idx === 0 ? "md:col-span-2" : ""
                            }`}
                        >
                            <div className={`grid ${idx === 0 ? "lg:grid-cols-[1.2fr_0.8fr]" : ""}`}>
                                <div className="relative overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={`Captura del proyecto ${project.title}`}
                                        className={`w-full object-cover transition-transform duration-500 hover:scale-[1.03] ${idx === 0 ? "h-80" : "h-64"}`}
                                    />
                                    <span className="absolute left-4 top-4 rounded bg-[rgba(31,90,80,0.9)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.07em] text-white">
                                        {project.type}
                                    </span>
                                </div>

                                <div className="flex h-full flex-col p-6">
                                    <p className="text-xs uppercase tracking-[0.09em] text-[var(--muted)]">Caso real</p>
                                    <h3 className="mt-2 text-3xl leading-tight text-[var(--ink)]">{project.title}</h3>
                                    <p className="mt-3 text-sm text-[var(--muted)]">{project.description}</p>

                                    <p className="metric-number mt-5 rounded border border-[var(--line)] bg-[rgba(255,255,255,0.72)] px-4 py-3 text-sm font-medium text-[var(--ink)]">
                                        {project.result}
                                    </p>

                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-auto inline-flex w-fit items-center rounded border border-[var(--accent)] px-5 py-2 text-sm font-semibold text-[var(--accent-strong)] hover:bg-[var(--accent)] hover:text-white"
                                    >
                                        Ver proyecto
                                    </a>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </motion.section>

    );
};

export default Portfolio;
