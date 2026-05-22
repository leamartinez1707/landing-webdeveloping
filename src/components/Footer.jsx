import { motion } from "motion/react";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-[#1d2826] py-10 text-[#dbe2df]"
    >
      <div className="site-container grid gap-8 md:grid-cols-3 md:items-end">
        <div>
          <p className="text-xl font-semibold tracking-[-0.01em] text-white">Leandro Martinez</p>
          <p className="mt-2 text-sm text-[#b8c4bf]">Landing pages y software a medida para negocios que buscan crecer con claridad.</p>
        </div>

        <nav className="flex flex-wrap gap-4 text-sm text-[#dbe2df]">
          <a href="#inicio" className="hover:text-white">Inicio</a>
          <a href="#servicios" className="hover:text-white">Servicios</a>
          <a href="#proyectos" className="hover:text-white">Proyectos</a>
          <a href="#contacto" className="hover:text-white">Contacto</a>
          <a href="/privacy.html" className="hover:text-white">Privacidad</a>
          <a href="/terms.html" className="hover:text-white">Terminos</a>
        </nav>

        <div className="md:text-right">
          <a
            href="#inicio"
            className="inline-flex rounded border border-[#4f6d65] px-4 py-2 text-sm font-semibold text-[#dbe2df] hover:border-[#8db0a7] hover:text-white"
          >
            Volver arriba
          </a>
          <p className="mt-3 text-xs text-[#9eb0ab]">&copy; {new Date().getFullYear()} Leandro Martinez</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
