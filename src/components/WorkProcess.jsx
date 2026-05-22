import { motion } from "motion/react";
import useViewportAmount from "../hooks/useViewportAmount";

const steps = [
    {
        number: "01",
        title: "Diagnostico comercial",
        description: "Revisamos tu oferta, mercado y objetivo del sitio para priorizar lo que realmente impacta en conversion.",
        time: "Dia 1"
    },
    {
        number: "02",
        title: "Arquitectura y diseño",
        description: "Defino estructura, tono visual y jerarquia de contenidos para que la navegacion sea clara y confiable.",
        time: "Dias 2-4"
    },
    {
        number: "03",
        title: "Desarrollo y QA",
        description: "Construyo cada seccion con foco en velocidad, accesibilidad y escalabilidad, incluyendo revisiones en distintos dispositivos.",
        time: "Semana 2"
    },
    {
        number: "04",
        title: "Lanzamiento y mejora",
        description: "Publicamos, medimos comportamiento real y dejamos un plan de mejoras para iterar con datos.",
        time: "Semana 3"
    }
];

const WorkProcess = () => {
    const amount = useViewportAmount();

    return (
        <motion.section
            id="proceso"
            className="border-b border-[var(--line)] py-20 md:py-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount }}
        >
            <div className="site-container grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                <motion.div
                    className="lg:sticky lg:top-32"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <span className="eyebrow">metodologia</span>
                    <h2 className="section-title mt-4 text-[var(--ink)]">Un proceso preciso, sin friccion ni ruido</h2>
                    <p className="section-lead">
                        Trabajo con hitos semanales para que siempre sepas en que etapa estamos, que se va a entregar y como se mide el avance.
                    </p>

                    <div className="frosted mt-8 rounded-[var(--radius-sm)] p-5 text-left">
                        <p className="text-sm uppercase tracking-[0.08em] text-[var(--muted)]">Incluye</p>
                        <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
                            <li>Sesion inicial de enfoque comercial</li>
                            <li>Feedback estructurado por entregables</li>
                            <li>Checklist de lanzamiento y soporte post entrega</li>
                        </ul>
                    </div>
                </motion.div>

                <div className="space-y-5">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="relative rounded-[var(--radius-sm)] border border-[var(--line)] bg-[rgba(248,248,243,0.72)] p-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.12 }}
                            viewport={{ once: true }}
                        >
                            <div className="absolute right-6 top-6 rounded border border-[var(--line)] px-3 py-1 text-xs font-medium text-[var(--muted)]">
                                {step.time}
                            </div>
                            <div className="pr-20">
                                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded bg-[rgba(44,111,100,0.16)] text-lg font-semibold text-[var(--accent-strong)]">
                                    {step.number}
                                </div>
                                <h3 className="text-3xl leading-tight text-[var(--ink)]">{step.title}</h3>
                                <p className="mt-3 text-sm text-[var(--muted)]">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default WorkProcess; 