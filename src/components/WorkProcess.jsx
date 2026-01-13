import { motion } from "motion/react";
import { FileText, Palette, Monitor, Smartphone, Headphones, TrendingUp } from "lucide-react";
import useViewportAmount from "../hooks/useViewportAmount";

const steps = [
    {
        number: "01",
        title: "Contenido",
        description: "Nos aseguramos de que cada elemento de tu contenido cuente la historia de tu marca de forma impactante y efectiva, conectando con tu audiencia.",
        icon: FileText
    },
    {
        number: "02",
        title: "Branding",
        description: "Respetamos tu estilo y diseño. Desde los colores y tipografías hasta la comunicación visual, todo se adapta para mantener la coherencia de tu imagen.",
        icon: Palette
    },
    {
        number: "03",
        title: "Diseño UX",
        description: "Diseñamos sitios web con enfoque en UX, asegurando una navegación fácil, atractiva y eficiente que mejora la experiencia del usuario y fortalece tu marca.",
        icon: Monitor
    },
    {
        number: "04",
        title: "Diseño responsivo",
        description: "Tu web se adaptará a cualquier pantalla, brindando una experiencia fluida y profesional en todo momento. Mejora la navegación y potencia tus conversiones.",
        icon: Smartphone
    },
    {
        number: "05",
        title: "Soporte continuo",
        description: "Te brindamos asistencia permanente para que tu web funcione sin interrupciones. Resolvemos dudas, optimizamos y aseguramos su rendimiento.",
        icon: Headphones
    },
    {
        number: "06",
        title: "Optimización SEO",
        description: "Mejoramos tu posicionamiento en buscadores para que más clientes te encuentren. Atrae tráfico de calidad y destaca frente a la competencia.",
        icon: TrendingUp
    }
];

const WorkProcess = () => {
    const amount = useViewportAmount();

    return (
        <motion.section
            id="proceso"
            className="py-20 px-6 relative overflow-hidden"
            style={{ backgroundColor: '#050f12' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount }}
        >
            {/* Efectos decorativos */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full blur-3xl"
                    style={{ backgroundColor: 'rgba(23, 165, 157, 0.15)' }}></div>
                <div className="absolute bottom-1/3 right-0 w-96 h-96 rounded-full blur-3xl"
                    style={{ backgroundColor: 'rgba(32, 219, 209, 0.15)' }}></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="inline-block px-6 py-2 rounded-full mb-4 border"
                        style={{
                            backgroundColor: 'rgba(32, 219, 209, 0.1)',
                            borderColor: '#20dbd1'
                        }}
                    >
                        <span className="text-sm font-semibold tracking-wider" style={{ color: '#20dbd1' }}>
                            NUESTRO PROCESO PARA CREAR TU PÁGINA WEB OPTIMIZADA
                        </span>
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#ffffff' }}>
                        Nuestro <span className="gradient-text">método de trabajo</span>
                    </h2>
                    <p className="text-lg max-w-3xl mx-auto" style={{ color: '#c0c0c0' }}>
                        Cada proyecto es único, pero seguimos un proceso probado para garantizar resultados excepcionales
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {steps.map((step, index) => {
                        const IconComponent = step.icon;
                        return (
                            <motion.div
                                key={index}
                                className="p-8 rounded-2xl transition-all h-full"
                                style={{
                                    backgroundColor: 'rgba(18, 112, 110, 0.15)',
                                    borderWidth: '2px',
                                    borderColor: 'rgba(32, 219, 209, 0.3)'
                                }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{
                                    y: -8,
                                    borderColor: '#20dbd1',
                                    boxShadow: '0 20px 40px rgba(32, 219, 209, 0.2)'
                                }}
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                                        <IconComponent size={40} style={{ color: '#20dbd1' }} />
                                    </span>
                                    <span className="text-3xl font-bold" style={{ color: '#20dbd1' }}>
                                        {step.number}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold mb-3" style={{ color: '#20dbd1' }}>
                                    {step.title}
                                </h3>
                                <p style={{ color: '#b2dfdb' }}>{step.description}</p>
                            </motion.div>
                        )
                    })}
                </div>

                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                >
                    <a
                        href="https://api.whatsapp.com/send?phone=59895220063&text=Hola!%20Me%20gustaría%20conocer%20más%20sobre%20el%20proceso%20de%20trabajo."
                        target="_blank"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-lg font-semibold transition-all"
                        style={{
                            backgroundColor: '#20dbd1',
                            color: '#0a1f24'
                        }}
                    >
                        Iniciar mi proyecto
                    </a>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default WorkProcess; 