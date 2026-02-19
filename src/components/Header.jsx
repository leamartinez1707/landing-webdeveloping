import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
      initial={{ backgroundColor: "rgba(255, 255, 255, 0)" }}
      animate={{
        backgroundColor: scrolled ? "rgba(248, 249, 250, 0.95)" : "rgba(255, 255, 255, 0)",
        backdropFilter: scrolled ? "blur(10px)" : "blur(0px)",
        boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.08)" : "0 0 0 rgba(0,0,0,0)",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full z-50 will-change-transform"
      style={{ borderBottom: scrolled ? '1px solid rgba(0, 102, 204, 0.1)' : '1px solid transparent' }}
    >
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center will-change-transform"
      >
        <a href="/">
          <h1 className="text-xl md:text-2xl font-bold cursor-pointer" style={{ color: '#0a1f24' }}>
            Martínez <span style={{ color: '#0066cc' }}>Studio</span>
          </h1>
        </a>

        {/* Menú desktop */}
        <nav className="space-x-6 hidden md:flex">
          {[
            { name: "Inicio", href: "#inicio" },
            { name: "Qué hacemos", href: "#que-hacemos" },
            { name: "UruFix", href: "#urufix" },
            { name: "Contacto", href: "#contacto" }
          ].map((section) => (
            <a
              key={section.href}
              href={section.href}
              className="transition-all duration-200 font-medium hover:scale-105"
              style={{ color: scrolled ? '#0a1f24' : '#333333' }}
              onMouseEnter={(e) => e.target.style.color = '#0066cc'}
              onMouseLeave={(e) => e.target.style.color = scrolled ? '#0a1f24' : '#333333'}
              onClick={handleLinkClick}
            >
              {section.name}
            </a>
          ))}
        </nav>

        {/* Botón hamburguesa móvil */}
        <button
          className="md:hidden focus:outline-none"
          style={{ color: '#0066cc' }}
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </motion.div>

      {/* Menú móvil */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="md:hidden px-6 pb-6 space-y-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {[
              { name: "Inicio", href: "#inicio" },
              { name: "Qué hacemos", href: "#que-hacemos" },
              { name: "UruFix", href: "#urufix" },
              { name: "Contacto", href: "#contacto" }
            ].map((section) => (
              <a
                key={section.href}
                href={section.href}
                className="block py-2 font-medium transition-colors"
                style={{ color: '#0a1f24' }}
                onClick={handleLinkClick}
                onMouseEnter={(e) => e.target.style.color = '#0066cc'}
                onMouseLeave={(e) => e.target.style.color = '#0a1f24'}
              >
                {section.name}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;

