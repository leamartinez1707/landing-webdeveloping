import { motion } from "motion/react";
import useViewportAmount from "../hooks/useViewportAmount";

const steps = [
    {
        number: "01",
        title: "Consulta Inicial",
        description: "Analizamos tus necesidades y objetivos para entender mejor tu proyecto y proponer la mejor solución.",
        icon: "💬"
    },
    {
        number: "02",
        title: "Planificación",
        description: "Desarrollamos una estrategia detallada y un plan de acción personalizado para tu proyecto.",
        icon: "📋"
    },
    {
        number: "03",
        title: "Desarrollo",
        description: "Creamos tu solución digital con las mejores prácticas y tecnologías actuales.",
        icon: "⚡"
    },
    {
        number: "04",
        title: "Entrega y Soporte",
        description: "Implementamos tu proyecto y te brindamos soporte continuo para asegurar su éxito.",
        icon: "🚀"
    }
];

const WorkProcess = () => {
    const amount = useViewportAmount();

    return (
        <motion.section
            id="proceso"
            className="py-20 px-6 bg-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount }}
        >
            <div className="max-w-6xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-extrabold mb-4 text-gray-800">
                        Cómo trabajamos juntos
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Un proceso claro y transparente para asegurar el éxito de tu proyecto
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="relative"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 h-full">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-4xl">{step.icon}</span>
                                    <span className="text-2xl font-bold text-blue-600">{step.number}</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-gray-900">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </div>
                            
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-200">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full absolute -top-1 right-0"></div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                >
                    <a
                        href="https://api.whatsapp.com/send?phone=59895220063&text=Hola%20Leandro!%20Me%20gustaría%20conocer%20más%20sobre%20tu%20proceso%20de%20trabajo."
                        target="_blank"
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-medium transition-colors"
                    >
                        Iniciar mi proyecto
                    </a>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default WorkProcess; 