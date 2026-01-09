import { motion } from "motion/react";
import { Rocket, Star, Target, Lightbulb } from "lucide-react";
import WhatsappIcon from "./Icons/WhatsApp"

const Hero = () => {
  return (
    <motion.section
      id="inicio"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden will-change-transform"
      style={{ backgroundColor: '#0a1f24' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Efectos de fondo decorativos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full opacity-10 blur-3xl animate-pulse-slow"
          style={{ backgroundColor: '#20dbd1' }}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-10 blur-3xl animate-pulse-slow"
          style={{ backgroundColor: '#17a59d', animationDelay: '1s' }}></div>
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
            backgroundColor: 'rgba(32, 219, 209, 0.1)',
            borderColor: '#20dbd1'
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <span className="text-sm font-semibold tracking-wider" style={{ color: '#ffffff' }}>
            ✨ MARTINEZ STUDIO
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight will-change-transform"
          style={{ color: '#e0f2f1' }}
        >
          Diseñamos tu{" "}
          <span className="gradient-text">página web</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl mb-4 max-w-4xl mx-auto font-light"
          style={{ color: '#b2dfdb' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Diseñamos páginas web estratégicas y experiencias digitales que potencian tu marca y mejoran su posicionamiento en el mercado online.
        </motion.p>

        <motion.p
          className="text-base md:text-lg mb-10 max-w-2xl mx-auto"
          style={{ color: '#80cbc4' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Soluciones web para emprendedores y negocios que buscan crecer en el mundo digital
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <motion.a
            href="https://api.whatsapp.com/send?phone=59895220063&text=Hola!%20Me%20interesa%20crear%20mi%20página%20web"
            target="_blank"
            className="flex items-center gap-3 px-8 py-4 rounded-full font-semibold transition-all shadow-lg will-change-transform text-lg group"
            style={{
              backgroundColor: '#20dbd1',
              color: '#0a1f24'
            }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(32, 219, 209, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            <WhatsappIcon className="size-6 group-hover:rotate-12 transition-transform" />
            + INFO
          </motion.a>
          <motion.a
            href="#servicios"
            className="px-8 py-4 rounded-full font-semibold transition-all border-2 text-lg"
            style={{
              borderColor: '#20dbd1',
              color: '#20dbd1',
              backgroundColor: 'transparent'
            }}
            whileHover={{
              backgroundColor: 'rgba(32, 219, 209, 0.1)',
              scale: 1.05
            }}
            whileTap={{ scale: 0.95 }}
          >
            Ver servicios
          </motion.a>
        </motion.div>

        {/* Estadísticas */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          {[
            { icon: Rocket, label: 'Compromiso', value: '' },
            { icon: Star, label: 'Experiencia', value: '' },
            { icon: Target, label: 'Impacto', value: '' },
            { icon: Lightbulb, label: 'Innovación', value: '' }
          ].map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={idx}
                className="p-12 rounded-2xl text-center backdrop-blur-sm"
                style={{
                  backgroundColor: 'rgba(18, 112, 110, 0.2)',
                  borderWidth: '1px',
                  borderColor: 'rgba(32, 219, 209, 0.3)'
                }}
                whileHover={{
                  backgroundColor: 'rgba(18, 112, 110, 0.3)',
                  scale: 1.05
                }}
              >
                <div className="mb-2 animate-float flex justify-center" style={{ animationDelay: `${idx * 0.2}s` }}>
                  <IconComponent size={60} style={{ color: '#20dbd1' }} />
                </div>
                <h3 className="font-bold text-xl" style={{ color: '#20dbd1' }}>{stat.value}</h3>
                <p className="text-sm" style={{ color: '#b2dfdb' }}>{stat.label}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
export default Hero;
