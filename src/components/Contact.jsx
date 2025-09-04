import { useRef, useState } from "react";
import { motion } from "motion/react";
import emailjs from "@emailjs/browser";
import SocialMedia from "./SocialMedia";
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
      className="py-20 bg-white px-6 will-change-transform border-b border-gray-200"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount }}
    >
      <motion.h2
        className="text-4xl font-bold mb-4 text-center text-gray-900 will-change-transform"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Contactame
      </motion.h2>
      <motion.p
        className="max-w-xl mx-auto text-center mb-12 text-gray-600 text-lg will-change-transform"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        ¿Tenés alguna idea, consulta o proyecto? ¡No dudes en escribirme! Estoy para ayudarte a darle vida a tu presencia online.
      </motion.p>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-2xl mx-auto grid gap-6 bg-white p-10 rounded-2xl shadow-lg"
      >
        <motion.label
          htmlFor="name"
          className="font-semibold text-gray-700 will-change-transform"
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
          className="border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition will-change-transform"
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
          className="font-semibold text-gray-700 will-change-transform"
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
          className="border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition will-change-transform"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          viewport={{ once: true }}
        />

        <motion.label
          htmlFor="message"
          className="font-semibold text-gray-700 will-change-transform"
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
          className="border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none will-change-transform"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          viewport={{ once: true }}
        />

        <motion.button
          type="submit"
          className="bg-blue-800 text-white py-4 rounded font-semibold hover:bg-blue-900 transition will-change-transform border border-blue-900"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          viewport={{ once: true }}
        >
          Enviar mensaje
        </motion.button>

        {status && (
          <motion.p
            className="text-center mt-4 text-green-600 font-medium will-change-transform"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {status}
          </motion.p>
        )}
      </form>
      <SocialMedia />
    </motion.section>

  );
};

export default Contact;
