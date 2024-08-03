import './caseStudyCard.css'

const CaseStudyCard = ({ badge, title, text }) =>{
    return (
        <div className='container caseStudyCard__Container d-flex justify-content-center align-items-center'>
            <div className='row'>
                <div className='col-12'>
                    <h3 className='caseStudyCard__Badge'>{badge}</h3>                
                    <h2 className='caseStudyCard__Title'>{title}</h2>
                    <hr></hr>
                    <p className='caseStudyCard__Text'>{text}</p>
                </div>
            </div>            
        </div>
    )
}

export default CaseStudyCard 
