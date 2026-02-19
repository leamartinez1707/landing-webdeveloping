import { motion } from "motion/react";
import { Zap, Code, BarChart3 } from "lucide-react";
import WhatsappIcon from "./Icons/WhatsApp"

const Hero = () => {
  return (
    <motion.section
      id="inicio"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden will-change-transform"
      style={{ 
        background: 'linear-gradient(135deg, #f8f9fa 0%, #f0f4f8 100%)'
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Efectos de fondo sutiles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-1/4 w-96 h-96 rounded-full opacity-5 blur-3xl"
          style={{ backgroundColor: '#0066cc' }}></div>
        <div className="absolute bottom-32 right-1/4 w-96 h-96 rounded-full opacity-5 blur-3xl"
          style={{ backgroundColor: '#1a3a52' }}></div>
      </div>

      <motion.div
        className="max-w-6xl mx-auto relative z-10 mt-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <motion.div
          className="inline-block px-6 py-2 rounded-full mb-6 border"
          style={{
            backgroundColor: 'rgba(0, 102, 204, 0.15)',
            borderColor: '#0066cc'
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <span className="text-sm font-semibold tracking-wider" style={{ color: '#1a3a52' }}>
            ⚙️ SISTEMAS PARA NEGOCIOS REALES
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight will-change-transform"
          style={{ color: '#0a1f24' }}
        >
          Digitalizá tu taller y{" "}
          <span style={{ color: '#0066cc' }}>recuperá el control</span> <br /> de tu negocio
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl mb-4 max-w-4xl mx-auto font-light"
          style={{ color: '#333333' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Dejá atrás el desorden, los presupuestos en papel y la falta de control. <br />
          <strong>UruFix</strong> ordena tu taller en un solo sistema profesional.
        </motion.p>

        <motion.p
          className="text-base md:text-lg mb-10 max-w-2xl mx-auto"
          style={{ color: '#555555' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Sistema de gestión diseñado para <strong>talleres, mecánicas y negocios técnicos</strong> que quieren crecer sin caos
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <motion.a
            href="#urufix"
            className="flex items-center gap-3 px-8 py-4 rounded-lg font-semibold transition-all shadow-lg will-change-transform text-lg group"
            style={{
              backgroundColor: '#0066cc',
              color: '#ffffff'
            }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 102, 204, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            <Zap className="size-5 group-hover:rotate-12 transition-transform" />
            Ver cómo funciona UruFix
          </motion.a>
          <motion.a
            href="https://api.whatsapp.com/send?phone=59895220063&text=Hola!%20Quiero%20saber%20m%C3%A1s%20sobre%20sus%20sistemas"
            target="_blank"
            className="flex items-center gap-3 px-8 py-4 rounded-lg font-semibold transition-all border-2 text-lg"
            style={{
              borderColor: '#0066cc',
              color: '#0066cc',
              backgroundColor: 'transparent'
            }}
            whileHover={{
              backgroundColor: 'rgba(0, 102, 204, 0.1)',
              scale: 1.05
            }}
            whileTap={{ scale: 0.95 }}
          >
            <WhatsappIcon className="size-5 group-hover:rotate-12 transition-transform" />
            Hablar por WhatsApp
          </motion.a>
        </motion.div>

        {/* Features destacadas */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          {[
            { icon: Code, label: 'Software a medida', desc: 'Adaptado a tu negocio' },
            { icon: Zap, label: 'Automatización', desc: 'Menos manual, más eficiencia' },
            { icon: BarChart3, label: 'Métricas reales', desc: 'Control y visibilidad' }
          ].map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={idx}
                className="p-6 rounded-xl text-center backdrop-blur-sm"
                style={{
                  backgroundColor: '#ffffff',
                  borderWidth: '1px',
                  borderColor: 'rgba(0, 102, 204, 0.2)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
                }}
                whileHover={{
                  boxShadow: '0 12px 24px rgba(32, 219, 209, 0.15)',
                  y: -5
                }}
              >
                <div className="mb-3 flex justify-center">
                  <IconComponent size={40} style={{ color: '#0066cc' }} />
                </div>
                <h3 className="font-bold text-lg" style={{ color: '#0a1f24' }}>{feature.label}</h3>
                <p className="text-sm mt-2" style={{ color: '#666666' }}>{feature.desc}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
export default Hero;
