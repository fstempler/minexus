import './caseStudy.css'
import logo from '../../assets/logosClients/allkemLogo.png'
import arrow from '../../assets/caseStudyArrow.png'
import CaseStudyCard from './CaseStudyCard/CaseStudyCard'

const CaseStudy = ({ badge, imgLogo, alt  }) => {
    return (
        <div className='container caseStudy__MainContaidner'>
            <div className='row caseStudy__ContentContainer'>
                <div className='col-sm-12 col-xl-4 d-flex flex-column gap-3 justify-content-center align-items-center'>
                    <div className='row'>
                        <div className='col-12 col-xl-8'>
                            <h3 className='caseStudy__Badge'>CASE STUDY</h3>
                            <img className='caseStudy__Logo' src={logo} alt='Allkem Logo'/>
                            <h2 className='caseStudy__Title'>How Aliken Transformed Data Handling</h2>
                            <p className='caseStudy__Text'>Allkem was facing significant challenges in cataloging and purging materials, which affected operational efficiency and data accuracy.</p>
                        </div>
                        <div className='col-12 col-xl-4 d-flex align-items-center p-5'>
                            <img className='caseStudy__arrow' src={arrow} alt='Arrow'/>
                        </div>
                    </div>
                    
                </div>
                <div className='col-sm-12 col-xl-8 caseStudy__SliderContainer'>
                    <div id="carouselExample" className="carousel slide">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className='carousel-wrapper d-flex flex-row gap-3'>
                                        <CaseStudyCard
                                            badge={"SOLUTION"}                                    
                                            title={"Material Cataloging and Debugging Workshop"}     
                                            text={"Minexus conducted an intensive workshop with the client to review and improve the cataloging procedure. A new form and unification of cataloging users was proposed. In addition, new cataloging standards, standardization of descriptions, masters of units of measure, manufacturers and standardized abbreviations were delivered."}   
                                        />
                                        <CaseStudyCard
                                            badge={"STANDARIZATION"}                                    
                                            title={"16,500 items"}     
                                            text={"Descriptions, units of measure, item groups and classes were standardized and translated into English."}   
                                        />
                                        
                                    </div>
                                    
                                </div>
                                <div className="carousel-item">
                                    <div className='carousel-wrapper d-flex flex-row gap-3'>
                                        <CaseStudyCard
                                            badge={"SOLUTION"}                                    
                                            title={"Material Cataloging and Debugging Workshop"}     
                                            text={"Minexus conducted an intensive workshop with the client to review and improve the cataloging procedure. A new form and unification of cataloging users was proposed. In addition, new cataloging standards, standardization of descriptions, masters of units of measure, manufacturers and standardized abbreviations were delivered."}   
                                        />
                                        
                                        
                                    </div>
                                    
                                </div>
                                
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

export default CaseStudy