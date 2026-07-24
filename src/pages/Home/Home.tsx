import Badge from "@/components/UI/Badge/Badge";
import Button from "@/components/UI/Button/Button";
import { PATHS } from "@/constants/routes";
import { servicesCategories } from "@/data/servicesCategories";
import { Link } from "react-router-dom";
import banner from "@/assets/images/banner.png";
import "./Home.scss";
import ServiceCategoryCard from "@/components/UI/Card/ServiceCategoryCard";
import useSEO from "@/hooks/useSEO";
import { SOCIAL } from "@/constants/social";

const Home = () => {
    useSEO({
        title: 'Inicio',
        description: 'Soluciones profesionales de hardware y software en Izzyverse Tech. Mantenimiento, optimización y asesoría experta en tecnología.',
        keywords: 'soporte tecnico, reparacion pc, mantenimiento computadores, optimizacion windows, izzyverse tech, bogota'
    });

    return (
        <main className="homePage">
            <section className="homePage__hero">
                <article className="homePage__hero-content">
                    <Badge>Laboratorio Tecnológico</Badge>
                    <h1>Resolución experta de <span>problemas digitales</span></h1>
                    <p>Soporte técnico profesional de hardware y software con enfoque en mantenimiento preventivo, optimización y consultoría personalizada.</p>
                    <Button>
                        <Link to={PATHS.SERVICES}>
                            Ver servicios
                        </Link>
                    </Button>
                </article>

                <article className="homePage__hero-image">
                    <img src={banner} alt="Banner" />
                </article>
            </section>

            <section className="homePage__services">
                <h2>Servicios Destacados</h2>
                <p>Especialidades diseñadas para potenciar tu productividad.</p>

                <article className="homePage__services-grid">
                    {servicesCategories.map((serviceCategory) => (
                        <ServiceCategoryCard key={serviceCategory.id} {...serviceCategory} />
                    ))}
                </article>
            </section>

            <section className="homePage__why">
                <h2>¿Por qué elegir Izzyverse Tech?</h2>

                <div className="homePage__why-container">
                    <article className="homePage__why-reasons">
                        <div className="homePage__why-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path fill="currentColor" d="M11 15H6l7-14v8h5l-7 14z" />
                            </svg>

                            <div>
                                <h3>Rapidez & Eficacia</h3>
                                <p>Diagnósticos precisos y reparaciones en tiempo récord.</p>
                            </div>
                        </div>

                        <div className="homePage__why-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path fill="currentColor" d="M21 11c0 5.55-3.84 10.74-9 12c-5.16-1.26-9-6.45-9-12V5l9-4l9 4zm-9 10c3.75-1 7-5.46 7-9.78V6.3l-7-3.12L5 6.3v4.92C5 15.54 8.25 20 12 21" />
                            </svg>

                            <div>
                                <h3>Garantía Real</h3>
                                <p>Todos los servicios cuentan con respaldo y seguimiento post-venta.</p>
                            </div>
                        </div>

                        <div className="homePage__why-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z" />
                            </svg>

                            <div>
                                <h3>Trato Cercano</h3>
                                <p>Explicaciones claras, sin tecnicismos innecesarios.</p>
                            </div>
                        </div>
                    </article>

                    <article className="homePage__why-data">
                        <h2>5+</h2>
                        <p>Años experiencia</p>
                    </article>
                </div>
            </section>

            <section className="homePage__work">
                <h2>Cómo Trabajamos</h2>
                <p>Un proceso transparente y profesional de principio a fin.</p>

                <article className="homePage__work-container">
                    <div className="homePage__work-item">
                        <span>01</span>
                        <h3>Agendamiento</h3>
                        <p>Solicitas tu cita a través de mi web o WhatsApp.</p>
                    </div>
                    <div className="homePage__work-item">
                        <span>02</span>
                        <h3>Diagnóstico</h3>
                        <p>Evaluo tu equipo detalladamente para encontrar la raíz del problema.</p>
                    </div>
                    <div className="homePage__work-item">
                        <span>03</span>
                        <h3>Reparación</h3>
                        <p>Procedo con la solución técnica utilizando herramientas de alta gama.</p>
                    </div>
                    <div className="homePage__work-item">
                        <span>04</span>
                        <h3>Entrega</h3>
                        <p>Te entrego tu equipo optimizado y con garantía de satisfacción.</p>
                    </div>
                </article>
            </section>

            <section className="homePage__cta">
                <h2>¿Listo para optimizar tu tecnología?</h2>
                <p>Agenda tu cita hoy mismo y deja tus equipos en manos expertas.</p>
                <Button variant="quaternary">
                    <a target="_blank" href={SOCIAL.whatsapp}>
                        Agendar Cita
                    </a>
                </Button>
            </section>
        </main>
    )
}

export default Home;