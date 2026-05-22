import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const sections = [
  { id: "inicio", label: "Inicio" },
  { id: "servicios", label: "Servicios y precios" },
  { id: "proceso", label: "Proceso" },
  { id: "proyectos", label: "Proyectos" },
  { id: "contacto", label: "Contacto" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers = sections
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean)
      .map((element) => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveId(entry.target.id);
            }
          },
          { threshold: 0.45 }
        );

        observer.observe(element);
        return observer;
      });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-20"
    >
      <div className="border-b border-[var(--line)] bg-[rgba(244,244,239,0.92)] backdrop-blur-lg">
        <div className="site-container flex h-9 items-center justify-between text-xs text-[var(--muted)]">
          <p>Leandro Martinez · Desarrollo web y software a medida</p>
          <p className="hidden sm:block metric-number">Respuesta inicial: &lt; 24h</p>
        </div>
      </div>

      <motion.div
      animate={{
        backgroundColor: scrolled ? "rgba(244,244,239,0.96)" : "rgba(244,244,239,0.78)",
        boxShadow: scrolled
          ? "0 10px 30px rgba(24, 46, 42, 0.12)"
          : "0 0 0 rgba(24, 46, 42, 0)",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="border-b border-[var(--line)]"
    >
        <div className="site-container flex items-center justify-between py-4">
          <a href="#inicio" className="group">
            <p className="text-xl font-semibold tracking-[-0.02em] text-[var(--ink)]">
              Leandro
              <span className="ml-1 text-[var(--accent)]">Martinez</span>
            </p>
            <p className="text-xs tracking-[0.08em] uppercase text-[var(--muted)]">Web & software studio</p>
          </a>

          <nav className="hidden lg:flex items-center gap-2">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={handleLinkClick}
                aria-current={activeId === section.id ? "page" : undefined}
                className={`rounded px-4 py-2 text-sm font-medium ${
                  activeId === section.id
                    ? "bg-[var(--accent)] text-white"
                    : "text-[var(--muted)] hover:bg-[rgba(44,111,100,0.12)] hover:text-[var(--ink)]"
                }`}
              >
                {section.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contacto"
              className="hidden md:inline-flex rounded border border-[var(--accent)] px-4 py-2 text-sm font-semibold text-[var(--accent-strong)] hover:bg-[var(--accent)] hover:text-white"
            >
              Pedir propuesta
            </a>

            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded border border-[var(--line)] text-[var(--ink)] lg:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Abrir o cerrar menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="border-b border-[var(--line)] bg-[rgba(248,248,243,0.98)] px-4 py-4 lg:hidden"
          >
            <div className="site-container flex flex-col gap-2">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`rounded px-3 py-2 text-sm ${
                    activeId === section.id
                      ? "bg-[rgba(44,111,100,0.18)] font-semibold text-[var(--ink)]"
                      : "text-[var(--muted)]"
                  }`}
                  onClick={handleLinkClick}
                >
                  {section.label}
                </a>
              ))}

              <a
                href="#contacto"
                className="mt-2 inline-flex justify-center rounded bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white"
                onClick={handleLinkClick}
              >
                Agendar llamada de 20 min
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
