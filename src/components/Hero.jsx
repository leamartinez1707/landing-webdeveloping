import { motion } from "motion/react";
import WhatsappIcon from "./Icons/WhatsApp";

const Hero = () => {
  return (
    <motion.section
      id="inicio"
      className="relative overflow-hidden border-b border-[var(--line)] pb-24 pt-20 md:pb-28 md:pt-28"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="pointer-events-none absolute -left-14 top-16 h-56 w-56 rounded bg-[rgba(47,93,138,0.18)] blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-8 h-72 w-72 rounded bg-[rgba(29,62,92,0.14)] blur-3xl" />

      <div className="site-container relative grid min-h-[72dvh] gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <span className="eyebrow">webs y software a medida para negocios reales</span>
          <h1 className="section-title mt-5 text-[var(--ink)]">
            Diseño y desarrollo experiencias web que
            <span className="text-[var(--accent)]"> generan confianza y ventas</span>.
          </h1>
          <p className="section-lead">
            Mi nombre es Leandro Martínez. <br /> Trabajo con independientes y negocios chicos que necesitan una landing de alto impacto o un software a medida para ordenar operaciones, captar leads (clientes) y escalar sin perder claridad.
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
              className="inline-flex items-center justify-center gap-2 rounded border border-[var(--line)] px-6 py-3 text-sm font-semibold text-[var(--ink)] hover:border-[var(--accent)] hover:bg-[rgba(47,93,138,0.1)]"
            >
              <WhatsappIcon className="h-6 w-6" />
              Escribir por WhatsApp
            </a>
          </div>
        </motion.div>

        <motion.aside
          className="frosted relative overflow-hidden rounded-[var(--radius-sm)] p-7"
          style={{ borderStyle: "dashed" }}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
        >
          <div className="flex items-start justify-between gap-3 border-b border-dashed border-[var(--line)] pb-4">
            <div>
              <p className="metric-number text-xs uppercase tracking-[0.08em] text-[var(--muted)]">Orden de trabajo</p>
              <p className="metric-number mt-1 text-lg font-semibold text-[var(--ink)]">N.º 004821</p>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[rgba(44,140,130,0.14)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.06em] text-[var(--signal)]">
              <span className="h-2 w-2 rounded-full bg-[var(--signal)]" />
              Completado
            </span>
          </div>

          <dl className="mt-5 space-y-3 text-sm">
            <div className="flex items-baseline justify-between gap-3">
              <dt className="text-[var(--muted)]">Cliente</dt>
              <dd className="font-medium text-[var(--ink)]">Mistyle Uruguay</dd>
            </div>
            <div className="flex items-baseline justify-between gap-3">
              <dt className="text-[var(--muted)]">Servicio</dt>
              <dd className="font-medium text-[var(--ink)]">Bicicleta eléctrica</dd>
            </div>
            <div className="flex items-baseline justify-between gap-3">
              <dt className="text-[var(--muted)]">Sistema</dt>
              <dd className="font-medium text-[var(--ink)]">UruFix</dd>
            </div>
          </dl>

          <div className="mt-6 rounded border border-[var(--line)] bg-[rgba(255,255,255,0.62)] p-4">
            <p className="text-sm font-medium text-[var(--muted)]">Servicios gestionados</p>
            <p className="metric-number mt-1 text-3xl font-semibold text-[var(--ink)]">+7.500</p>
            <p className="mt-1 text-sm text-[var(--muted)]">Sistema real en producción — urufix.com</p>
          </div>
        </motion.aside>
      </div>
    </motion.section>
  );
};
export default Hero;
