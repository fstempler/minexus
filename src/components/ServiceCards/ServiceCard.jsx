import './serviceCard.css'

const ServiceCard = ({ img, alt, title, text, title2, text2, background }) => {
    const sectionStyle = {
        background: background || 'none',
    };

    return (
        <div className="serviceCard__Container d-flex flex-column justify-content-evenly align-items-start">
            <div className='serviceCardImg__Container' style={sectionStyle}> 
            <img className='serviceCardImg' src={img} alt={alt}/>    
            </div>            
            <h2 className='serviceCardTitle'>{title}</h2>
            <p className='serviceCardText'>{text}</p>            
        </div>
    )
}

export default ServiceCard