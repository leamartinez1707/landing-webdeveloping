import { motion } from "motion/react";
import WhatsappIcon from "./Icons/WhatsApp";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="py-16 text-center will-change-transform relative overflow-hidden"
      style={{ 
        backgroundColor: '#0a1f24',
        borderTop: '1px solid rgba(0, 102, 204, 0.3)'
      }}
    >
      {/* Efecto decorativo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full blur-3xl" 
             style={{ backgroundColor: '#0066cc' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Logo/Nombre */}
        <motion.h3 
          className="text-2xl font-bold mb-4"
          whileHover={{ scale: 1.05 }}
        >
          <span style={{ color: '#ffffff' }}>Martínez</span> <span style={{ color: '#0066cc' }}>Studio</span>
        </motion.h3>
        
        <p className="text-base mb-8 max-w-2xl mx-auto" style={{ color: '#c0c0c0' }}>
          Creamos sistemas profesionales que transforman negocios técnicos en operaciones eficientes y rentables.
        </p>

        {/* Links rápidos */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {[
            { name: "Inicio", href: "#inicio" },
            { name: "Qué hacemos", href: "#que-hacemos" },
            { name: "UruFix", href: "#urufix" },
            { name: "Contacto", href: "#contacto" }
          ].map((section) => (
            <a
              key={section.href}
              href={section.href}
              className="transition-all duration-200 font-medium hover:scale-105"
              style={{ color: '#ffffff' }}
              onMouseEnter={(e) => e.target.style.color = '#0066cc'}
              onMouseLeave={(e) => e.target.style.color = '#ffffff'}
            >
              {section.name}
            </a>
          ))}
        </div>

        {/* Contacto */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
          <a 
            href="mailto:leandromartinez.dev@gmail.com" 
            className="transition-colors duration-200"
            style={{ color: '#c0c0c0' }}
            onMouseEnter={(e) => e.target.style.color = '#0066cc'}
            onMouseLeave={(e) => e.target.style.color = '#c0c0c0'}
          >
            ✉️ leandromartinez.dev@gmail.com
          </a>
          <span style={{ color: '#0066cc' }}>|</span>
          <a 
            href="tel:095220063" 
            className="transition-colors duration-200"
            style={{ color: '#c0c0c0' }}
            onMouseEnter={(e) => e.target.style.color = '#0066cc'}
            onMouseLeave={(e) => e.target.style.color = '#c0c0c0'}
          >
            📞 +598 95 220 063
          </a>
        </div>

        {/* CTA WhatsApp */}
        <motion.a
          href="https://api.whatsapp.com/send?phone=59895220063&text=Hola!%20Quiero%20saber%20m%C3%A1s%20sobre%20sus%20sistemas"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-3 rounded-lg font-semibold transition-all shadow-lg text-base group"
          style={{ 
            backgroundColor: '#0066cc', 
            color: '#ffffff'
          }}
          whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0, 102, 204, 0.4)' }}
          whileTap={{ scale: 0.95 }}
        >
          <WhatsappIcon className="size-5 group-hover:rotate-12 transition-transform" />
          Conversemos
        </motion.a>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <p style={{ color: '#888888' }} className="text-sm">
            © 2024 Martínez Studio. Sistemas profesionales para negocios reales.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

