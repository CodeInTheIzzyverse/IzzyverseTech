import { PATHS } from "@/constants/routes";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import './Footer.scss';

const Footer = () => {
    return (
        <footer>
            <section className="footer__content">
                <article className="footer__content-brand">
                    <Link to={PATHS.HOME}>
                        <span>Izzyverse</span><span className="footer__brand--accent">Tech</span>
                    </Link>

                    <p>Laboratorio tecnológico especializado en soporte técnico profesional, optimización y consultoría.</p>
                </article>

                <article className="footer__content-services">
                    <h3>Servicios</h3>

                    <nav className="footer__content-nav">
                        <ul>
                            <li>
                                <HashLink smooth to="/services#computers">Computadores</HashLink>
                            </li>
                            <li>
                                <HashLink smooth to="/services#mobile">Celulares</HashLink>
                            </li>
                            <li>
                                <HashLink smooth to="/services#net">Redes % WiFi</HashLink>
                            </li>
                        </ul>
                    </nav>
                </article>

                <article className="footer__content-explore">
                    <h3>Explorar</h3>

                    <nav className="footer__content-nav">
                        <ul>
                            <li>
                                <Link
                                    to={PATHS.FAQ}
                                >
                                    Preguntas Frecuentes
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to={PATHS.CONTACT}
                                >
                                    Contacto
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </article>
            </section>

            <section className="footer__copy">
                <article>
                    LATENCY: 14MS <span>|</span> SYSTEM: STABLE <span>|</span> LOCATION: REMOTE / PRESENTIAL
                </article>

                <article>
                    © 2026 IZZYVERSE TECH — ENGINEERED FOR EXCELLENCE
                </article>
            </section>
        </footer>
    )
}

export default Footer;