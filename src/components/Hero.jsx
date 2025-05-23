import { motion } from "motion/react";
import WhatsappIcon from "./Icons/WhatsApp"

const Hero = () => {
  return (
    <motion.section
      id="inicio"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-white via-blue-50 to-blue-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 leading-tight"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Webs que venden.
        <br />
        <span className="text-blue-600">Soluciones rápidas</span> para <br />emprendedores y empresas pequeñas.
      </motion.h1>

      <motion.p
        className="text-lg text-gray-700 mb-8 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Soy <strong>Leandro Martinez</strong>, desarrollador web. Ayudo a emprendedores y pequeñas empresas a tener su sitio web profesional o software personalizado, sin vueltas ni costos excesivos.
      </motion.p>

      <motion.a
        href="https://api.whatsapp.com/send?phone=59895220063&text=Hola%20Leandro!%20 Me contacto%20para%20consultar%20sobre%20una%20web%20o%20tienda."
        target="_blank"
        className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-lg font-medium transition-all shadow-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <WhatsappIcon className="size-8" />
        Quiero mi web / tienda
      </motion.a>
    </motion.section>

  );
};

export default Hero;
