import { motion } from "motion/react";
import useViewportAmount from "../hooks/useViewportAmount";

const projects = [
    {
        title: "UruFix — gestión de servicios técnicos",
        description: "Sistema para talleres de servicios técnicos (autos, motos, bicis, celulares) que se personaliza por rubro: turnos, historial técnico y seguimiento de clientes en tiempo real.",
        image: "/projects/urufix.webp",
        link: "https://www.urufix.com",
        type: "Software a medida · SaaS",
        result: "+7.500 servicios gestionados · en producción con Mistyle Uruguay",
    },
    {
        title: "E-commerce para movilidad eléctrica",
        description: "Rediseño completo con catálogo optimizado y experiencia mobile-first orientada a cierre.",
        image: "/projects/mistyle.webp",
        link: "https://www.mistyle.com.uy/",
        type: "E-commerce",
        result: "Sitio publicado, en producción",
    },
    {
        title: "Landing comercial para estudio de interiores",
        description: "Sitio de una página con portfolio visual, formulario filtrado y llamado a acción directo.",
        image: "/projects/todomuebles.webp",
        link: "https://todomueblesuy.vercel.app/home",
        type: "Proyecto de práctica",
        result: "Diseño y desarrollo end-to-end",
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
                        Estos proyectos reflejan el tipo de trabajo que hago: objetivos concretos, decisiones de UX claras y ejecución técnica sin ruido.
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
                            className={`overflow-hidden rounded-[var(--radius-sm)] border border-[var(--line)] bg-[rgba(241,245,246,0.75)] ${
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
                                    <span className="absolute left-4 top-4 rounded bg-[rgba(29,62,92,0.9)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.07em] text-white">
                                        {project.type}
                                    </span>
                                    {project.type === "Software a medida · SaaS" ? (
                                        <span
                                            className="metric-number absolute right-4 top-4 rounded border-2 border-[var(--signal)] px-3 py-1 text-xs font-bold uppercase tracking-[0.1em] text-[var(--signal)]"
                                            style={{ backgroundColor: "rgba(241,245,246,0.9)", transform: "rotate(-4deg)" }}
                                        >
                                            Caso real
                                        </span>
                                    ) : project.type === "Proyecto de práctica" ? (
                                        <span
                                            className="metric-number absolute right-4 top-4 rounded border border-dashed border-[var(--muted)] px-3 py-1 text-xs font-bold uppercase tracking-[0.1em] text-[var(--muted)]"
                                            style={{ backgroundColor: "rgba(241,245,246,0.9)", transform: "rotate(-4deg)" }}
                                        >
                                            Práctica
                                        </span>
                                    ) : null}
                                </div>

                                <div className="flex h-full flex-col p-6">
                                    <p className="text-xs uppercase tracking-[0.09em] text-[var(--muted)]">{project.type}</p>
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
