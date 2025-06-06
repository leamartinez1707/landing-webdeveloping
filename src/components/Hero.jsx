import { motion } from "motion/react";
import WhatsappIcon from "./Icons/WhatsApp"

const Hero = () => {
  return (
    <motion.section
      id="inicio"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-white via-blue-50 to-blue-300 will-change-transform"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 leading-tight will-change-transform"
        >
          Transforma tu negocio con
          <br />
          <span className="text-blue-600">soluciones digitales</span> que
          <br />generan resultados reales
        </motion.h1>

        <motion.p
          className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Soy <strong>Leandro Martinez</strong>, desarrollador web especializado en crear soluciones digitales que ayudan a emprendedores y pequeñas empresas a crecer. Desde landing pages hasta sistemas personalizados, todo diseñado para resolver tus problemas específicos.
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
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-lg font-medium transition-transform shadow-lg will-change-transform"
          >
            <WhatsappIcon className="size-8" />
            Quiero mi solución digital
          </motion.a>

          <motion.a
            href="#portfolio"
            className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 px-6 py-3 rounded-full text-lg font-medium transition-transform shadow-lg will-change-transform border border-gray-200"
          >
            Ver casos de éxito
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
