import './caseStudy.css'
import arrow from '../../assets/caseStudyArrow.png'


const CaseStudy = ({ badge, imgLogo, alt, title, text, carouselItems }) => {
    return (
        <div className='container caseStudy__MainContaidner'>
            <div className='row caseStudy__ContentContainer'>
                <div className='col-sm-12 col-xl-4 d-flex flex-column gap-5 justify-content-center align-items-center'>
                    <div className='row'>
                        <div className='col-12 col-xl-8'>
                            <h3 className='caseStudy__Badge'>{badge}</h3>
                            <img className='caseStudy__Logo' src={imgLogo} alt={alt}/>
                            <h2 className='caseStudy__Title'>{title}</h2>
                            <p className='caseStudy__Text'>{text}</p>
                        </div>
                        {/* <div className='col-12 col-xl-4 d-flex align-items-center p-5'>
                            <img className='caseStudy__arrow' src={arrow} alt='Arrow'/>
                        </div> */}
                    </div>
                </div>
                <div className='col-sm-12 col-xl-8 caseStudy__SliderContainer'>
                    <div id="carouselExample" className="carousel slide">
                        <div className="carousel-inner">
                            {carouselItems.map((item, index) => (
                                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                                    <div className='carousel-wrapper d-flex flex-row gap-3'>
                                        {item}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaseStudy;
