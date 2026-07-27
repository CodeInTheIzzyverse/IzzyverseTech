import Button from '@/components/UI/Button/Button';
import './Contact.scss';
import useSEO from '@/hooks/useSEO';
import { useState, type ChangeEvent, type FocusEvent, type FormEvent } from 'react';
import { SOCIAL } from '@/constants/social';

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Contact = () => {
    useSEO({
        title: 'Contacto',
        description: '¿Tienes dudas o necesitas soporte técnico inmediato? Ponte en contacto conmigo a través de WhatsApp, email o redes sociales.',
        keywords: 'contacto soporte tecnico, ayuda pc, soporte remoto bogota, redes sociales izzyverse tech'
    });

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [touched, setTouched] = useState<Record<string, boolean>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

    const validateField = (name: string, value: string): string => {
        switch (name) {
            case 'name':
                if (!value.trim()) return 'El nombre es obligatorio.';
                if (value.trim().length < 2) return 'El nombre debe tener al menos 2 letras.';
                return '';
            case 'email':
                if (!value.trim()) return 'El email es obligatorio.';
                if (!EMAIL_REGEX.test(value)) return 'Ingresa un correo electrónico válido.';
                return '';
            case 'subject':
                if (!value.trim()) return 'El asunto es obligatorio.';
                if (value.trim().length < 3) return 'El asunto debe tener al menos 3 caracteres.';
                return '';
            case 'message':
                if (!value.trim()) return 'El mensaje es obligatorio.';
                if (value.trim().length < 10) return 'El mensaje debe contener al menos 10 caracteres.';
                return '';
            default:
                return '';
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));

        // Validar en tiempo real a medida que el usuario escribe
        const error = validateField(id, value);
        setErrors((prev) => ({ ...prev, [id]: error }));
    };

    const handleBlur = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id } = e.target;
        setTouched((prev) => ({ ...prev, [id]: true }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        // Validar todos los campos al intentar enviar
        const newErrors: FormErrors = {
            name: validateField('name', formData.name),
            email: validateField('email', formData.email),
            subject: validateField('subject', formData.subject),
            message: validateField('message', formData.message),
        };

        setErrors(newErrors);
        setTouched({ name: true, email: true, subject: true, message: true });

        // Si existen errores, no proceder con el fetch
        const hasErrors = Object.values(newErrors).some((err) => err !== '');
        if (hasErrors) return;

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus({ type: 'success', text: '¡Mensaje enviado con éxito! Te responderé pronto.' });
                setFormData({ name: '', email: '', subject: '', message: '' });
                setTouched({});
            } else {
                setSubmitStatus({ type: 'error', text: data.message || 'Error al enviar el mensaje.' });
            }
        } catch {
            setSubmitStatus({ type: 'error', text: 'Ocurrió un problema de conexión. Inténtalo más tarde.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="contactPage">
            <section className="contactPage__hero">
                <h1>Ponte en <span>Contacto</span></h1>
                <p>¿Tienes dudas? Estoy aquí para ayudarte a resolver cualquier problema tecnológico.</p>
            </section>

            <section className="contactPage__contact">
                <article className="contactPage__contact-data">
                    <aside>
                        <h2>Información de contacto</h2>

                        <div className="contactPage__contact-list">
                            <a className="contactPage__contact-item contactPage__contact-item--link" href={`mailto:${SOCIAL.email}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path fill="currentColor" d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2" />
                                </svg>
                            </a>

                            <a className="contactPage__contact-item contactPage__contact-item--link" href={SOCIAL.whatsapp} target="_blank" rel="noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path fill="currentColor" d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23c-1.48 0-2.93-.39-4.19-1.15l-.3-.17l-3.12.82l.83-3.04l-.2-.32a8.2 8.2 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31c-.22.25-.87.86-.87 2.07c0 1.22.89 2.39 1 2.56c.14.17 1.76 2.67 4.25 3.73c.59.27 1.05.42 1.41.53c.59.19 1.13.16 1.56.1c.48-.07 1.46-.6 1.67-1.18s.21-1.07.15-1.18c-.07-.1-.23-.16-.48-.27c-.25-.14-1.47-.74-1.69-.82c-.23-.08-.37-.12-.56.12c-.16.25-.64.81-.78.97c-.15.17-.29.19-.53.07c-.26-.13-1.06-.39-2-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.12-.24-.01-.39.11-.5c.11-.11.27-.29.37-.44c.13-.14.17-.25.25-.41c.08-.17.04-.31-.02-.43c-.06-.11-.56-1.35-.77-1.84c-.2-.48-.4-.42-.56-.43c-.14 0-.3-.01-.47-.01" />
                                </svg>
                            </a>
                        </div>
                    </aside>

                    <aside>
                        <h2>Horarios y atención</h2>

                        <p>Atiendo de lunes a sábado, aunque no tengo un horario fijo porque estoy en la universidad con clases. La disponibilidad puede cambiar según la semana y el tipo de servicio.</p>
                        <p>Los domingos no atiendo.</p>
                    </aside>

                    <aside>
                        <h2>Áreas de atención</h2>
                        <p>Solo atiendo en Guayabal, El Poblado, Ciudad del Río, Belén, Fátima y Laureles.</p>
                        <p>El envío depende del lugar y de si la persona lo trae o si yo voy por el equipo.</p>
                    </aside>

                    <aside>
                        <h2>Sígueme</h2>

                        <div className='contactPage__contact-social'>
                            <a href="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" />
                                </svg>
                            </a>

                            <a href="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path fill="currentColor" d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02" />
                                </svg>
                            </a>

                            <a href={SOCIAL.youtube} target="_blank" rel="noreferrer" aria-label="YouTube">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path fill="currentColor" d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73" />
                                </svg>
                            </a>

                            <a href={SOCIAL.kofi} target="_blank" rel="noreferrer" aria-label="Ko-fi">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512">
                                    <path d="M0 0h512v512H0z" fill="none" />
                                    <path fill="currentColor" d="M204.7 461.3c-74.5 0-135.1-33.4-170.6-93.9C2.5 314.3 0 256.9 0 192.7c0-38 11.5-71.2 33.1-95.8C53 74.3 81.2 59.6 112.5 55.6c37.2-4.7 83.3-5.1 131.4-5.1c78.2 0 100.3.9 131 4.1c41 4.1 75.3 19.4 99.6 44.2c24.5 25.2 37.6 58.9 37.6 97.4v7.7c0 65.8-44 120.8-105.2 135.8c-4.6 10.7-10.2 21.5-16.9 32.1l-.2.3c-21.6 33.4-72.3 89.3-169.5 89.3z" />
                                    <path fill="#ff5a16" d="M116.1 223.7c0 28.6 16 53.2 36.3 72.6c13.6 13.1 34.9 26.7 49.4 35.4c4.4 2.4 8.7 3.9 13.6 3.9c5.8 0 10.6-1.4 14.5-3.9c14.5-8.7 35.8-22.3 48.9-35.4c20.8-19.4 36.8-44 36.8-72.6c0-31-23.2-58.6-56.7-58.6c-19.9 0-33.4 10.1-43.6 24.2c-9.2-14-23.2-24.2-43.1-24.2c-33.8 0-56.1 27.6-56.1 58.6" />
                                </svg>
                            </a>
                        </div>
                    </aside>
                </article>

                <article className="contactPage__contact-form">
                    <form onSubmit={handleSubmit} noValidate>
                        <div className="contactPage__contact-group">
                            <label htmlFor="name">Nombre <span>*</span></label>
                            <input
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Pepito Perez"
                            />
                            {touched.name && errors.name && <span className="error-message">{errors.name}</span>}
                        </div>

                        <div className="contactPage__contact-group">
                            <label htmlFor="email">Email <span>*</span></label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="pepito@email.com"
                            />
                            {touched.email && errors.email && <span className="error-message">{errors.email}</span>}
                        </div>

                        <div className="contactPage__contact-group">
                            <label htmlFor="subject">Asunto <span>*</span></label>
                            <input
                                type="text"
                                id="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Quiero armarme un PC"
                            />
                            {touched.subject && errors.subject && <span className="error-message">{errors.subject}</span>}
                        </div>

                        <div className="contactPage__contact-group">
                            <label htmlFor="message">Mensaje <span>*</span></label>
                            <textarea
                                id="message"
                                value={formData.message}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Específicamente deseo..."
                            />
                            {touched.message && errors.message && <span className="error-message">{errors.message}</span>}
                        </div>

                        {submitStatus && (
                            <p className={`form-feedback ${submitStatus.type}`}>
                                {submitStatus.text}
                            </p>
                        )}

                        <Button disabled={isSubmitting}>
                            {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                        </Button>
                    </form>
                </article>
            </section>

            <section className="contactPage__map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22437.383356647617!2d-75.60007492516654!3d6.20999762157735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4429da26e7d92d%3A0xf5ef8a3f48a52631!2sGuayabal%2C%20Medell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1784860475823!5m2!1ses!2sco"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
            </section>
        </main>
    )
}

export default Contact;