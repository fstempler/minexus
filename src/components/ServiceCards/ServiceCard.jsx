import './serviceCard.css'

const ServiceCard = ({ img, alt, title, text, background }) => {
    const sectionStyle = {
        background: background || 'none',
    };

    return (
        <div className="serviceCard__Container d-flex flex-column justify-content-evenly align-items-start">
            <img className='serviceCardImg' src={img} alt={alt} style={sectionStyle}/>
            <h2 className='serviceCardTitle'>{title}</h2>
            <p className='serviceCardText'>{text}</p>
        </div>
    )
}

export default ServiceCard