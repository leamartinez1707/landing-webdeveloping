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

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <motion.header
      initial={{ backgroundColor: "rgba(10, 31, 36, 0)" }}
      animate={{
        backgroundColor: scrolled ? "rgba(10, 31, 36, 0.95)" : "rgba(10, 31, 36, 0)",
        backdropFilter: scrolled ? "blur(10px)" : "blur(0px)",
        boxShadow: scrolled ? "0 4px 20px rgba(32, 219, 209, 0.1)" : "0 0 0 rgba(0,0,0,0)",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full z-50 will-change-transform"
      style={{ borderBottom: scrolled ? '1px solid rgba(32, 219, 209, 0.2)' : '1px solid transparent' }}
    >
      <AnimatePresence>
        {!scrolled && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="will-change-transform"
            style={{
              background: 'linear-gradient(135deg, #12353d, #124e50)'
            }}
          >
            <div className="flex items-center max-w-6xl justify-center md:justify-normal mx-auto py-2 px-6 gap-x-3"
              style={{ color: '#e0f2f1' }}>
              <MailIcon className="hidden sm:block w-5 h-5" style={{ color: '#20dbd1' }} />
              <a href="mailto:leandromartinez.dev@gmail.com" className="text-sm md:text-base hover:underline">leandromartinez.dev@gmail.com</a>
              <span className="text-sm md:text-base" style={{ color: '#20dbd1' }}>|</span>
              <PhoneIcon className="hidden sm:block w-5 h-5" style={{ color: '#20dbd1' }} />
              <p className="text-sm md:text-base">+598 95 220 063</p>
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
          <h1 className="text-xl md:text-2xl font-bold cursor-pointer gradient-text">
            Martinez Studio
          </h1>
        </a>

        {/* Menú desktop */}
        <nav className="space-x-6 hidden md:flex">
          {["inicio", "servicios", "portfolio", "contacto"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="transition-all duration-200 font-medium hover:scale-105"
              style={{ color: '#e0f2f1' }}
              onMouseEnter={(e) => e.target.style.color = '#20dbd1'}
              onMouseLeave={(e) => e.target.style.color = '#e0f2f1'}
              onClick={handleLinkClick}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </nav>

        {/* Botón hamburguesa móvil */}
        <button
          className="md:hidden focus:outline-none"
          style={{ color: '#20dbd1' }}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
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
            className="md:hidden overflow-hidden will-change-transform"
            style={{
              backgroundColor: 'rgba(10, 31, 36, 0.98)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 4px 20px rgba(32, 219, 209, 0.1)'
            }}
          >
            <div className="flex flex-col max-w-6xl mx-auto px-6 py-4 space-y-4">
              {["inicio", "servicios", "portfolio", "contacto"].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className="text-lg font-medium transition-colors"
                  style={{ color: '#e0f2f1' }}
                  onMouseEnter={(e) => e.target.style.color = '#20dbd1'}
                  onMouseLeave={(e) => e.target.style.color = '#e0f2f1'}
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
