import { motion } from "motion/react";
import { CONFIG } from "../../CONFIG";

const brandName = CONFIG.BUSINESS_NAME.split("|")[0].trim();

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-[var(--footer-bg)] py-10 text-[var(--footer-ink)]"
    >
      <div className="site-container grid gap-8 md:grid-cols-3 md:items-end">
        <div>
          <p className="text-xl font-semibold tracking-[-0.01em] text-[var(--footer-ink-strong)]">{brandName}</p>
          <p className="mt-2 text-sm text-[var(--footer-muted)]">Landing pages y software a medida para negocios que buscan crecer con claridad.</p>
        </div>

        <nav className="flex flex-wrap gap-4 text-sm text-[var(--footer-ink)]">
          <a href="#inicio" className="hover:text-white">Inicio</a>
          <a href="#servicios" className="hover:text-white">Servicios</a>
          <a href="#proyectos" className="hover:text-white">Proyectos</a>
          <a href="#contacto" className="hover:text-white">Contacto</a>
          <a href="/privacy.html" className="hover:text-white">Privacidad</a>
          <a href="/terms.html" className="hover:text-white">Términos</a>
        </nav>

        <div className="md:text-right">
          <a
            href="#inicio"
            className="inline-flex rounded border border-[var(--footer-border)] px-4 py-2 text-sm font-semibold text-[var(--footer-ink)] hover:border-[var(--footer-border-hover)] hover:text-white"
          >
            Volver arriba
          </a>
          <p className="mt-3 text-xs text-[var(--footer-copyright)]">&copy; {new Date().getFullYear()} {brandName}</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
