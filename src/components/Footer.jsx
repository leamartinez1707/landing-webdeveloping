import { motion } from "motion/react";
import WhatsappIcon from "./Icons/WhatsApp";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="py-12 text-center will-change-transform relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(135deg, #12353d, #124e50)',
        borderTop: '1px solid rgba(32, 219, 209, 0.3)'
      }}
    >
      {/* Efecto decorativo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full blur-3xl" 
             style={{ backgroundColor: '#20dbd1' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Logo/Nombre */}
        <motion.h3 
          className="text-2xl font-bold mb-4 gradient-text"
          whileHover={{ scale: 1.05 }}
        >
          Martinez Studio
        </motion.h3>
        
        <p className="text-base mb-6 max-w-2xl mx-auto" style={{ color: '#b2dfdb' }}>
          Diseñamos páginas web estratégicas que potencian tu marca en el mercado online
        </p>

        {/* Links rápidos */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {["inicio", "servicios", "portfolio", "contacto"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="transition-all duration-200 font-medium hover:scale-105"
              style={{ color: '#e0f2f1' }}
              onMouseEnter={(e) => e.target.style.color = '#20dbd1'}
              onMouseLeave={(e) => e.target.style.color = '#e0f2f1'}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>

        {/* Contacto */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
          <a 
            href="mailto:leandromartinez.dev@gmail.com" 
            className="transition-colors duration-200"
            style={{ color: '#b2dfdb' }}
            onMouseEnter={(e) => e.target.style.color = '#20dbd1'}
            onMouseLeave={(e) => e.target.style.color = '#b2dfdb'}
          >
            ✉️ leandromartinez.dev@gmail.com
          </a>
          <span style={{ color: '#20dbd1' }}>|</span>
          <a 
            href="tel:095220063" 
            className="transition-colors duration-200"
            style={{ color: '#b2dfdb' }}
            onMouseEnter={(e) => e.target.style.color = '#20dbd1'}
            onMouseLeave={(e) => e.target.style.color = '#b2dfdb'}
          >
            📞 095220063
          </a>
        </div>

        {/* CTA WhatsApp */}
        <motion.a
          href="https://api.whatsapp.com/send?phone=59895220063&text=Hola!%20Me%20interesa%20crear%20mi%20página%20web"
          target="_blank"
          className="inline-flex items-center gap-3 px-8 py-3 rounded-full font-semibold transition-all shadow-lg text-base group"
          style={{ 
            backgroundColor: '#20dbd1', 
            color: '#0a1f24'
          }}
          whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(32, 219, 209, 0.4)' }}
          whileTap={{ scale: 0.95 }}
        >
          <WhatsappIcon className="size-5 group-hover:rotate-12 transition-transform" />
          Contactar por WhatsApp
        </motion.a>

        {/* Copyright */}
        <div className="mt-8 pt-8" style={{ borderTop: '1px solid rgba(32, 219, 209, 0.2)' }}>
          <p className="text-sm" style={{ color: '#80cbc4' }}>
            &copy; {new Date().getFullYear()} Martinez Studio - Todos los derechos reservados
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
