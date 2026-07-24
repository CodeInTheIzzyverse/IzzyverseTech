import ServiceCard from '@/components/UI/Card/ServiceCard';
import './Services.scss';
import { services } from "@/data/services";
import { servicesCategories } from "@/data/servicesCategories";
import useSEO from '@/hooks/useSEO';

const Services = () => {
    useSEO({
        title: 'Servicios',
        description: 'Explora mis servicios de soporte técnico para computadores, celulares, redes y consultoría tecnológica personalizada.',
        keywords: 'mantenimiento pc, reparacion celulares, configuracion wifi, soporte tecnico remoto, asesoria tecnologica'
    });

    return (
        <main className="servicesPage">
            <section className='servicesPage__hero'>
                <h1>Mis <span>Servicios</span></h1>
                <p>Soluciones tecnológicas integrales para cada necesidad de tu vida digital.</p>
            </section>

            <section className='servicesPage__servicesSections'>
                {servicesCategories.map((category) => {
                    const categoryServices = services.filter((service) => service.categoryId === category.id);
                    const sectionId = category.id === 1 ? 'computers' : category.id === 2 ? 'mobile' : 'net';

                    return (
                        <article className="servicesPage__servicesSection" id={sectionId} key={category.id}>
                            <div className="servicesPage__header">
                                <span dangerouslySetInnerHTML={{ __html: category.icon }} />
                                <h2>{category.title}</h2>
                            </div>

                            <div className="servicesPage__grid">
                                {categoryServices.map((service) => (
                                    <ServiceCard key={service.title} {...service} />
                                ))}
                            </div>
                        </article>
                    )
                })}
            </section>
        </main>
    )
}

export default Services;