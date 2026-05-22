import { motion } from "motion/react";
import WhatsappIcon from "./Icons/WhatsApp";

const Hero = () => {
  // const highlights = [
  //   { value: "32", label: "proyectos entregados" },
  //   { value: "4.9/5", label: "promedio de valoracion" },
  //   { value: "7 dias", label: "primer MVP funcional" },
  // ];

  return (
    <motion.section
      id="inicio"
      className="relative overflow-hidden border-b border-[var(--line)] pb-24 pt-20 md:pb-28 md:pt-28"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="pointer-events-none absolute -left-14 top-16 h-56 w-56 rounded bg-[rgba(44,111,100,0.18)] blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-8 h-72 w-72 rounded bg-[rgba(31,90,80,0.14)] blur-3xl" />

      <div className="site-container relative grid min-h-[72dvh] gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <span className="eyebrow">soluciones digitales para negocios reales</span>
          <h1 className="section-title mt-5 text-[var(--ink)]">
            Diseño y desarrollo experiencias web que
            <span className="text-[var(--accent)]"> generan confianza y ventas</span>.
          </h1>
          <p className="section-lead">
            Mi nombre es Leandro Martinez. <br /> Trabajo con independientes y negocios chicos que necesitan una landing de alto impacto o un software a medida para ordenar operaciones, captar leads (clientes) y escalar sin perder claridad.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--accent-strong)]"
            >
              Quiero una propuesta
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=59895220063&text=Hola%20Leandro,%20quiero%20consultar%20por%20una%20landing%20o%20software%20a%20medida."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded border border-[var(--line)] px-6 py-3 text-sm font-semibold text-[var(--ink)] hover:border-[var(--accent)] hover:bg-[rgba(44,111,100,0.1)]"
            >
              <WhatsappIcon className="h-6 w-6" />
              Escribir por WhatsApp
            </a>
          </div>

          {/* <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {highlights.map((item) => (
              <article key={item.label} className="rounded border border-[var(--line)] bg-[rgba(248,248,243,0.66)] p-4">
                <p className="metric-number text-xl font-semibold text-[var(--ink)]">{item.value}</p>
                <p className="mt-1 text-sm text-[var(--muted)]">{item.label}</p>
              </article>
            ))}
          </div> */}
        </motion.div>

        <motion.aside
          className="frosted rounded-[var(--radius-sm)] p-7"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
        >
          <p className="text-sm uppercase tracking-[0.08em] text-[var(--muted)]">Disponibilidad actual</p>
          <p className="mt-2 text-3xl font-semibold leading-tight text-[var(--ink)]">2 cupos para iniciar en junio</p>
          <p className="mt-4 text-sm text-[var(--muted)]">
            Trabajo en bloques semanales. Cada entrega incluye objetivos de negocio, decisiones de UX y soporte para lanzamiento.
          </p>

          <div className="mt-7 space-y-4">
            <div className="rounded border border-[var(--line)] bg-[rgba(255,255,255,0.62)] p-4">
              <p className="text-sm font-medium text-[var(--muted)]">Landing page desde</p>
              <p className="metric-number mt-1 text-2xl font-semibold text-[var(--ink)]">USD 350</p>
              <p className="mt-1 text-sm text-[var(--muted)]">Entrega estimada: 7 a 14 dias</p>
            </div>
            <div className="rounded border border-[var(--line)] bg-[rgba(255,255,255,0.62)] p-4">
              <p className="text-sm font-medium text-[var(--muted)]">Software a medida desde</p>
              <p className="metric-number mt-1 text-2xl font-semibold text-[var(--ink)]">USD 1.800</p>
              <p className="mt-1 text-sm text-[var(--muted)]">Roadmap en fases y release continuo</p>
            </div>
          </div>
        </motion.aside>
      </div>
    </motion.section>
  );
};
export default Hero;
