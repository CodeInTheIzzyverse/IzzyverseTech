import Button from '@/components/UI/Button/Button';
import './Contact.scss';
import useSEO from '@/hooks/useSEO';

const Contact = () => {
    useSEO({
        title: 'Contacto',
        description: '¿Tienes dudas o necesitas soporte técnico inmediato? Ponte en contacto conmigo a través de WhatsApp, email o redes sociales.',
        keywords: 'contacto soporte tecnico, ayuda pc, soporte remoto bogota, redes sociales izzyverse tech'
    });

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
                            <div className="contactPage__contact-item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path fill="currentColor" d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2" />
                                </svg>
                                <div>
                                    <span>Email</span>
                                    <p>dev.izzyverse@gmail.com</p>
                                </div>
                            </div>

                            <div className="contactPage__contact-item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path fill="currentColor" d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23c-1.48 0-2.93-.39-4.19-1.15l-.3-.17l-3.12.82l.83-3.04l-.2-.32a8.2 8.2 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31c-.22.25-.87.86-.87 2.07c0 1.22.89 2.39 1 2.56c.14.17 1.76 2.67 4.25 3.73c.59.27 1.05.42 1.41.53c.59.19 1.13.16 1.56.1c.48-.07 1.46-.6 1.67-1.18s.21-1.07.15-1.18c-.07-.1-.23-.16-.48-.27c-.25-.14-1.47-.74-1.69-.82c-.23-.08-.37-.12-.56.12c-.16.25-.64.81-.78.97c-.15.17-.29.19-.53.07c-.26-.13-1.06-.39-2-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.12-.24-.01-.39.11-.5c.11-.11.27-.29.37-.44c.13-.14.17-.25.25-.41c.08-.17.04-.31-.02-.43c-.06-.11-.56-1.35-.77-1.84c-.2-.48-.4-.42-.56-.43c-.14 0-.3-.01-.47-.01" />
                                </svg>
                                <div>
                                    <span>WhatsApp</span>
                                    <p>+57 319 4327423</p>
                                </div>
                            </div>
                        </div>
                    </aside>

                    <aside>
                        <h2>Horarios de atención</h2>

                        <ul>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path fill="currentColor" d="M12 20c4.4 0 8-3.6 8-8s-3.6-8-8-8s-8 3.6-8 8s3.6 8 8 8m0-18c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2m3.3 14.2L14 17l-3-5.2V7h1.5v4.4z" />
                                </svg>
                                <p>Lunes - Viernes: 9:00 AM - 6:00 PM</p>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path fill="currentColor" d="M12 20c4.4 0 8-3.6 8-8s-3.6-8-8-8s-8 3.6-8 8s3.6 8 8 8m0-18c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2m3.3 14.2L14 17l-3-5.2V7h1.5v4.4z" />
                                </svg>
                                <p>Sábado: 10:00 AM - 2:00 PM</p>
                            </li>
                        </ul>

                        <p>Nota: Con algunas excepciones (estoy en la universidad)</p>
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

                            <a href="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path fill="currentColor" d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73" />
                                </svg>
                            </a>
                        </div>
                    </aside>
                </article>

                <article className="contactPage__contact-form">
                    <form action="">
                        <div className="contactPage__contact-group">
                            <label htmlFor="name">Nombre</label>
                            <input type="text" id='name' placeholder='Pepito Perez' />
                        </div>

                        <div className="contactPage__contact-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id='email' placeholder='pepito@email.com' />
                        </div>

                        <div className="contactPage__contact-group">
                            <label htmlFor="subjet">Asunto</label>
                            <input type="text" id='subjet' placeholder='Quiero armarme un PC' />
                        </div>

                        <div className="contactPage__contact-group">
                            <label htmlFor="subjet">Mensaje</label>
                            <textarea id='subjet' placeholder='Específicamente deseo...' />
                        </div>

                        <Button>Enviar Mensaje</Button>
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