import './serviceCard.css'

const ServiceCard = ({ img, alt, title, text }) => {
    return (
        <div className="serviceCard__Container d-flex flex-column">
            <img className='serviceCardImg' src={img} alt={alt} />
            <h2 className='serviceCardTitle'>{title}</h2>
            <p className='serviceCardText'>{text}</p>
        </div>
    )
}

export default ServiceCard