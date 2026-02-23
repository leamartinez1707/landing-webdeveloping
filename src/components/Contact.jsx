import { useRef, useState } from "react";
import { motion } from "motion/react";
import emailjs from "@emailjs/browser";
import useViewportAmount from "../hooks/useViewportAmount";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Enviando...");

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("Mensaje enviado con éxito 🎉");
          form.current.reset();
        },
        () => {
          setStatus("Error al enviar. Probá nuevamente.");
        }
      );
  };

  const amount = useViewportAmount();
  return (
    <motion.section
      id="contacto"
      className="py-24 px-6 will-change-transform relative overflow-hidden"
      style={{
        backgroundColor: '#f8f9fa',
        borderTop: '1px solid rgba(0, 102, 204, 0.1)'
      }}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount }}
    >
      {/* Efectos decorativos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-md blur-3xl"
          style={{ backgroundColor: '#20dbd1' }}></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="inline-block px-6 py-2 rounded-md mb-6 mx-auto"
          style={{
            display: 'table'
          }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="font-semibold tracking-wider" style={{ color: '#1a3a52' }}>
            PONTE EN CONTACTO
          </span>
        </motion.div>

        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4 text-center will-change-transform"
          style={{ color: '#0a1f24' }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Empecemos tu <span style={{ color: '#0066cc' }}>transformación digital</span>
        </motion.h2>
        <motion.p
          className="max-w-2xl mx-auto text-center mb-12 text-lg will-change-transform"
          style={{ color: '#555555' }}
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Cuéntanos qué necesita tu negocio. Nos reuniremos para entender tu situación y proponer la solución ideal.
        </motion.p>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="grid gap-6 p-10 rounded-2xl"
          style={{
            backgroundColor: '#ffffff',
            borderWidth: '1px',
            borderColor: 'rgba(32, 219, 209, 0.2)',
            boxShadow: '0 8px 24px rgba(0,0,0,0.08)'
          }}
        >
          <motion.label
            htmlFor="name"
            className="font-semibold will-change-transform"
            style={{ color: '#0a1f24' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Nombre
          </motion.label>
          <motion.input
            type="text"
            name="name"
            placeholder="Tu nombre"
            required
            className="p-4 rounded-md focus:outline-none transition will-change-transform"
            style={{
              backgroundColor: '#f8f9fa',
              borderWidth: '1px',
              borderColor: 'rgba(32, 219, 209, 0.3)',
              color: '#0a1f24'
            }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            viewport={{ once: true }}
          />

          <input
            type="date"
            name="date"
            value={new Date().toISOString().split("T")[0]}
            className="hidden"
            readOnly
          />

          <motion.label
            htmlFor="email"
            className="font-semibold will-change-transform"
            style={{ color: '#0a1f24' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Email
          </motion.label>
          <motion.input
            type="email"
            name="email"
            placeholder="Tu email"
            required
            className="p-4 rounded-md focus:outline-none transition will-change-transform"
            style={{
              backgroundColor: '#f8f9fa',
              borderWidth: '1px',
              borderColor: 'rgba(32, 219, 209, 0.3)',
              color: '#0a1f24'
            }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            viewport={{ once: true }}
          />

          <motion.label
            htmlFor="message"
            className="font-semibold will-change-transform"
            style={{ color: '#0a1f24' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Mensaje breve
          </motion.label>
          <motion.textarea
            name="message"
            placeholder="Tu mensaje"
            rows="5"
            required
            className="p-4 rounded-md focus:outline-none transition resize-none will-change-transform"
            style={{
              backgroundColor: '#f8f9fa',
              borderWidth: '1px',
              borderColor: 'rgba(32, 219, 209, 0.3)',
              color: '#0a1f24'
            }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            viewport={{ once: true }}
          />

          <motion.button
            type="submit"
            className="py-4 rounded-md font-semibold transition will-change-transform"
            style={{
              backgroundColor: '#0066cc',
              color: '#ffffff'
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 102, 204, 0.4)' }}
            transition={{ duration: 0.3, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Enviar mensaje
          </motion.button>

          {status && (
            <motion.p
              className="text-center mt-4 font-medium will-change-transform"
              style={{ color: '#0066cc' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {status}
            </motion.p>
          )}
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;

