import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MailIcon from './Icons/Mail';
import PhoneIcon from './Icons/PhoneIcon';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Para cerrar menú al hacer click en link (en móvil)
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <motion.header
      initial={{ backgroundColor: "rgba(255, 255, 255, 0)", boxShadow: "0px 0px 0px rgba(0,0,0,0)" }}
      animate={{
        backgroundColor: scrolled ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0)",
        boxShadow: scrolled ? "0 4px 12px rgba(0,0,0,0.1)" : "0px 0px 0px rgba(0,0,0,0)",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full z-50 will-change-transform"
    >
      <AnimatePresence>
        {!scrolled && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-black will-change-transform"
          >
            <div className="flex items-center text-white max-w-6xl justify-center md:justify-normal mx-auto py-1 px-6 gap-x-2">
              <MailIcon className="hidden sm:block w-5 h-5" />
              <p className="text-sm md:text-lg">leandromartinez.dev@gmail.com</p>
              <span className="text-sm md:text-base">|</span>
              <PhoneIcon className="hidden sm:block w-5 h-5" />
              <p className="text-sm md:text-lg">095220063</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center will-change-transform"
      >
        <a href="/">
          <h1 className="text-xl font-bold text-blue-600 cursor-pointer">Leandro Martínez</h1>
        </a>

        {/* Menú desktop */}
        <nav className="space-x-4 hidden md:flex">
          {["inicio", "servicios", "portfolio", "contacto"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              onClick={handleLinkClick}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </nav>

        {/* Botón hamburguesa móvil */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            // <XIcon className="w-6 h-6" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // <MenuIcon className="w-6 h-6" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>

          )}
        </button>
      </motion.div>

      {/* Menú móvil desplegable */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white shadow-lg overflow-hidden will-change-transform "
          >
            <div className="flex flex-col max-w-6xl mx-auto px-6 py-4 space-y-4">
              {["inicio", "servicios", "portfolio", "contacto"].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className="text-gray-700 hover:text-blue-600 text-lg"
                  onClick={handleLinkClick}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
