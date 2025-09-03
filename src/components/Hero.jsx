import { motion } from "motion/react";
import WhatsappIcon from "./Icons/WhatsApp"

const Hero = () => {
  return (
    <motion.section
      id="inicio"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden will-change-transform border-b border-gray-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <img
        src="/hero_background.jpg"
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-70"
        style={{ pointerEvents: 'none' }}
      />
      <motion.div
        className="max-w-4xl mx-auto relative z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6 text-black leading-tight will-change-transform drop-shadow-lg"
        >
          Impulsa <span className="text-white">tu negocio</span> con
          <br />
          <span className="text-blue-600">soluciones digitales </span>profesionales
          <br /> que generan confianza y resultados
        </motion.h1>

        <motion.p
          className="text-lg text-blue-600 mb-8 max-w-2xl mx-auto drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Soy <strong className="text-white">Leandro Martinez</strong>, desarrollador web orientado a empresas y emprendimientos que buscan crecer con tecnología confiable y soluciones a medida. Mi enfoque es profesional, seguro y adaptado a tus necesidades reales.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <motion.a
            href="https://api.whatsapp.com/send?phone=59895220063&text=Hola%20Leandro!%20 Me contacto%20para%20consultar%20sobre%20una%20web%20o%20tienda."
            target="_blank"
            className="flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded font-semibold transition-transform shadow-lg will-change-transform border border-blue-900 backdrop-blur-md"
          >
            <WhatsappIcon className="size-8" />
            Solicitar asesoría empresarial
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
export default Hero;
