import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4">
            {/* Botón de WhatsApp */}
            <motion.a
                href="https://api.whatsapp.com/send?phone=59895220063&text=Hola!%20Me%20interesa%20crear%20mi%20página%20web"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all group"
                style={{
                    backgroundColor: "#25D366",
                }}
                whileHover={{
                    scale: 1.1,
                    boxShadow: "0 0 30px rgba(37, 211, 102, 0.5)",
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
            >
                <MessageCircle size={28} style={{ color: "#ffffff" }} />
            </motion.a>

            {/* Botón de Scroll to Top */}
            <AnimatePresence>
                {showScrollTop && (
                    <motion.button
                        onClick={scrollToTop}
                        className="flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all"
                        style={{
                            backgroundColor: "#20dbd1",
                        }}
                        whileHover={{
                            scale: 1.1,
                            boxShadow: "0 0 30px rgba(32, 219, 209, 0.5)",
                        }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, scale: 0, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0, y: 20 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    >
                        <ArrowUp size={28} style={{ color: "#0a1f24" }} />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FloatingButtons;
