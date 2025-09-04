import { motion } from "motion/react";

const Footer = () => {
  return (
    <motion.footer
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.3 }}
    className="bg-blue-900 text-white py-8 text-center will-change-transform border-t border-blue-800"
    >
    <p className="text-base font-semibold">&copy; {new Date().getFullYear()} Leandro Martinez - Soluciones Web Empresariales</p>
    <p className="text-sm text-blue-200 mt-2">Contacto: <a href="mailto:leandromartinez.dev@gmail.com" className="underline">leandromartinez.dev@gmail.com</a> | <a href="tel:095220063" className="underline">095220063</a></p>
    </motion.footer>
  );
};

export default Footer;
