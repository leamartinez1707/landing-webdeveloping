import { motion } from "motion/react"
import useViewportAmount from "../hooks/useViewportAmount";

const services = [
    {
        title: "Landing Start",
        description: "Una pagina enfocada en conversion. Ideal para validar oferta, captar contactos y mostrar autoridad.",
        price: "USD 350",
        delivery: "7 a 14 dias",
        benefits: ["Copy y estructura orientada a ventas", "Diseño responsive premium", "Formulario y WhatsApp integrados"],
        featured: false,
    },
    {
        title: "Landing Growth",
        description: "Sitio multipagina para empresas que necesitan profundidad comercial y narrativa completa del servicio.",
        price: "USD 550",
        delivery: "2 a 4 semanas",
        benefits: ["Arquitectura de 4 a 6 secciones clave", "SEO tecnico base y performance", "Panel editable para contenidos"],
        featured: true,
    },
    {
        title: "Software a medida",
        description: "Construccion de herramientas internas o productos SaaS para automatizar procesos y escalar operaciones.",
        price: "Desde USD 1.800",
        delivery: "Roadmap por fases",
        benefits: ["Discovery funcional y tecnico", "MVP y mejoras incrementales", "Soporte de evolucion y mantenimiento"],
        featured: false,
    },
];

const Services = () => {
    const amount = useViewportAmount()

    return (
        <motion.section
            id="servicios"
            className="border-b border-[var(--line)] py-20 md:py-24"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount }}
        >
            <motion.div
                className="site-container"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="max-w-3xl">
                    <span className="eyebrow">servicios</span>
                    <h2 className="section-title mt-4 text-[var(--ink)]">Paquetes claros para decidir rapido</h2>
                    <p className="section-lead">
                        Cada propuesta tiene alcance definido, tiempos reales y precio transparente. Si tu proyecto necesita algo fuera de paquete, armamos una cotizacion especifica.
                    </p>
                </div>

                <div className="mt-12 grid gap-6 lg:grid-cols-3">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            className={`group flex h-full flex-col rounded-[var(--radius-sm)] border p-7 transition-all ${service.featured
                                ? "border-[var(--accent)] bg-[rgba(44,111,100,0.12)] shadow-[0_20px_35px_rgba(31,90,80,0.18)]"
                                : "border-[var(--line)] bg-[rgba(248,248,243,0.76)] hover:-translate-y-1 hover:shadow-[0_16px_28px_rgba(24,46,42,0.12)]"
                                }`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            viewport={{ once: true }}
                        >
                            {service.featured && (
                                <p className="mb-4 inline-flex w-fit rounded bg-[var(--accent)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-white">
                                    recomendada
                                </p>
                            )}

                            <h3 className="text-3xl leading-tight text-[var(--ink)]">{service.title}</h3>
                            <p className="mt-3 text-sm text-[var(--muted)]">{service.description}</p>

                            <div className="mt-5 rounded border border-[var(--line)] bg-[rgba(255,255,255,0.72)] p-4">
                                <p className="text-sm text-[var(--muted)]">Inversion</p>
                                <p className="metric-number mt-1 text-2xl font-semibold text-[var(--ink)]">{service.price}</p>
                                <p className="mt-1 text-sm text-[var(--muted)]">Entrega: {service.delivery}</p>
                            </div>

                            <ul className="mt-5 space-y-2 text-sm text-[var(--muted)]">
                                {service.benefits.map((b, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="mt-1 h-2 w-2 rounded bg-[var(--accent)]" />
                                        <span>{b}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#contacto"
                                className="mt-auto inline-flex items-center justify-center rounded border border-[var(--accent)] px-5 py-2 text-sm font-semibold text-[var(--accent-strong)] hover:bg-[var(--accent)] hover:text-white"
                            >
                                Solicitar propuesta
                            </a>
                        </motion.div>
                    ))}
                </div>

                <p className="mt-6 text-sm text-[var(--muted)]">
                    Precios de referencia en USD. Incluyen discovery inicial, desarrollo, QA y acompanamiento en el lanzamiento.
                </p>
            </motion.div>
        </motion.section>
    );
};

export default Services;
