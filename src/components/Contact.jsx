import { useState } from "react";
import { motion } from "motion/react";
import emailjs from "@emailjs/browser";
import SocialMedia from "./SocialMedia";
import useViewportAmount from "../hooks/useViewportAmount";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const nextErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      nextErrors.name = "Escribi un nombre valido.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Ingresa un email valido.";
    }

    if (!formData.service) {
      nextErrors.service = "Selecciona el tipo de proyecto.";
    }

    if (!formData.message.trim() || formData.message.trim().length < 20) {
      nextErrors.message = "Contame un poco mas. Minimo 20 caracteres.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setSubmitting(true);
    setStatus({ type: "loading", message: "Enviando mensaje..." });

    try {
      const serviceId = import.meta.env.VITE_SERVICE_ID;
      const templateId = import.meta.env.VITE_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS no esta configurado en este entorno.");
      }

      await emailjs.send(serviceId, templateId, {
        name: formData.name,
        email: formData.email,
        service: formData.service,
        budget: formData.budget || "No especificado",
        message: formData.message,
        date: new Date().toISOString().split("T")[0],
      }, publicKey);

      setStatus({ type: "success", message: "Mensaje enviado. Te respondere dentro de las proximas 24 horas." });
      setFormData({
        name: "",
        email: "",
        service: "",
        budget: "",
        message: "",
      });
      setErrors({});
    } catch {
      setStatus({ type: "error", message: "No se pudo enviar el formulario. Escribime por WhatsApp para una respuesta inmediata." });
    } finally {
      setSubmitting(false);
    }
  };

  const amount = useViewportAmount();

  return (
    <motion.section
      id="contacto"
      className="border-b border-[var(--line)] py-20 md:py-24"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount }}
    >
      <div className="site-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="eyebrow">contacto</span>
          <h2 className="section-title mt-4 text-[var(--ink)]">Contame que estas construyendo</h2>
          <p className="section-lead">
            Si ya tenes objetivo comercial, te propongo la mejor estructura. Si estas arrancando, te ayudo a definir alcance, tiempos y prioridad de inversion.
          </p>

          <div className="frosted mt-8 rounded-[var(--radius-sm)] p-6">
            <p className="text-sm uppercase tracking-[0.08em] text-[var(--muted)]">Canales directos</p>
            <ul className="mt-4 space-y-3 text-sm text-[var(--muted)]">
              <li>Email: leandromartinez.dev@gmail.com</li>
              <li>Telefono: +598 95 220 063</li>
              <li>Horario: lunes a viernes, 09:00 - 18:00 UY</li>
            </ul>
          </div>
        </motion.div>

        <form
          onSubmit={sendEmail}
          noValidate
          className="frosted grid gap-4 rounded-[var(--radius-sm)] p-7"
        >
          <label htmlFor="name" className="text-sm font-semibold text-[var(--ink)]">Nombre</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ejemplo: Lucia Fernandez"
            className="rounded border border-[var(--line)] bg-[rgba(255,255,255,0.76)] px-4 py-3 text-sm"
          />
          {errors.name && <p className="text-sm text-red-700">{errors.name}</p>}

          <label htmlFor="email" className="text-sm font-semibold text-[var(--ink)]">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="tuemail@empresa.com"
            className="rounded border border-[var(--line)] bg-[rgba(255,255,255,0.76)] px-4 py-3 text-sm"
          />
          {errors.email && <p className="text-sm text-red-700">{errors.email}</p>}

          <label htmlFor="service" className="text-sm font-semibold text-[var(--ink)]">Tipo de proyecto</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="rounded border border-[var(--line)] bg-[rgba(255,255,255,0.76)] px-4 py-3 text-sm"
          >
            <option value="">Selecciona una opcion</option>
            <option value="Landing de una pagina">Landing de una pagina</option>
            <option value="Sitio de multiples paginas">Sitio de multiples paginas</option>
            <option value="Software a medida">Software a medida</option>
            <option value="No estoy seguro">No estoy seguro</option>
          </select>
          {errors.service && <p className="text-sm text-red-700">{errors.service}</p>}

          <label htmlFor="budget" className="text-sm font-semibold text-[var(--ink)]">Presupuesto estimado (opcional)</label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="rounded border border-[var(--line)] bg-[rgba(255,255,255,0.76)] px-4 py-3 text-sm"
          >
            <option value="">Prefiero definirlo en llamada</option>
            <option value="USD 350 - 900">USD 350 - 900</option>
            <option value="USD 500 - 1.800">USD 500 - 1.800</option>
            <option value="Mas de USD 1.800">Mas de USD 1.800</option>
          </select>

          <label htmlFor="message" className="text-sm font-semibold text-[var(--ink)]">Necesidad principal</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Contame objetivos, plazos y contexto de tu negocio"
            rows="5"
            className="resize-none rounded border border-[var(--line)] bg-[rgba(255,255,255,0.76)] px-4 py-3 text-sm"
          />
          {errors.message && <p className="text-sm text-red-700">{errors.message}</p>}

          <button
            type="submit"
            disabled={submitting}
            className="mt-2 rounded bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white hover:bg-[var(--accent-strong)] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {submitting ? "Enviando..." : "Enviar consulta"}
          </button>

          {status.message && (
            <p className={`text-sm font-medium ${status.type === "error" ? "text-red-700" : "text-[var(--accent-strong)]"}`}>
              {status.message}
            </p>
          )}
        </form>
      </div>

      <div className="site-container">
        <SocialMedia />
      </div>
    </motion.section>

  );
};

export default Contact;
