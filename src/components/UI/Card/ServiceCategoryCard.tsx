import "./ServiceCategoryCard.scss";
import type ServicesCategory from "@/types/ServicesCategory";

const ServiceCategoryCard = (card: ServicesCategory) => {
    return (
        <article className="serviceCategoryCard">
            <span
                className="serviceCategoryCard__icon"
                dangerouslySetInnerHTML={{ __html: card.icon }}
            />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
        </article>
    )
}

export default ServiceCategoryCard;