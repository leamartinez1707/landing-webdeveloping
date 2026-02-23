import { motion } from "motion/react";
import { FileX, TrendingDown, MessageCircleWarning, PackageX, AlertCircle } from "lucide-react";
import useViewportAmount from "../hooks/useViewportAmount";

const PainPoints = () => {
  const amount = useViewportAmount();

  const problems = [
    {
      icon: FileX,
      text: "Presupuestos en papel o por WhatsApp que se pierden"
    },
    {
      icon: TrendingDown,
      text: "No sabés cuánto ganás realmente por cada trabajo"
    },
    {
      icon: MessageCircleWarning,
      text: "Clientes preguntando el estado del trabajo todo el tiempo"
    },
    {
      icon: PackageX,
      text: "Desorden en materiales, tiempos y prioridades"
    },
    {
      icon: AlertCircle,
      text: "Falta de control sobre lo que realmente pasa en tu negocio"
    }
  ];

  return (
    <motion.section
      id="problemas"
      className="py-20 px-6 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
        borderTop: '1px solid rgba(0, 102, 204, 0.1)',
        borderBottom: '1px solid rgba(0, 102, 204, 0.1)'
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount }}
    >
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12"
          style={{ color: '#0a1f24' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount }}
        >
          ¿Tu taller <span style={{ color: '#0066cc' }}>funciona así</span>?
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true, amount }}
        >
          {problems.map((problem, idx) => {
            const IconComponent = problem.icon;
            return (
              <motion.div
                key={idx}
                className="flex items-start gap-4 p-6 rounded-md text-left"
                style={{
                  backgroundColor: '#ffffff',
                  borderWidth: '1px',
                  borderColor: 'rgba(220, 38, 38, 0.15)',
                  boxShadow: '0 2px 8px rgba(220, 38, 38, 0.08)'
                }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true, amount }}
                whileHover={{
                  boxShadow: '0 8px 20px rgba(220, 38, 38, 0.12)',
                  borderColor: 'rgba(220, 38, 38, 0.3)'
                }}
              >
                <IconComponent size={28} style={{ color: '#dc2626', flexShrink: 0, marginTop: '2px' }} />
                <p className="text-lg" style={{ color: '#555555' }}>
                  {problem.text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true, amount }}
        >
          <p className="text-2xl md:text-3xl font-semibold mb-4" style={{ color: '#0a1f24' }}>
            <span style={{ color: '#0066cc' }}>UruFix</span> ordena todo en un solo lugar.
          </p>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#666666' }}>
            Sistema profesional diseñado específicamente para talleres que quieren crecer sin caos
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PainPoints;
