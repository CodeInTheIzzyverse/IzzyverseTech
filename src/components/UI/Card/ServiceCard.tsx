import type Service from "@/types/Service";
import './ServiceCard.scss';

const ServiceCard = (card: Service) => {
    return (
        <article className="serviceCard">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
        </article>
    )
}

export default ServiceCard;