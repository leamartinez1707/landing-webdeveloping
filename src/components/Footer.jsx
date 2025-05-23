import { motion } from "motion/react";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Leandro Martinez - Todos los derechos reservados</p>
        <p className="text-xs text-gray-400 mt-1">Diseño y desarrollo por mí mismo 💻</p>
      </footer>
    </motion.footer>
  );
};

export default Footer;
