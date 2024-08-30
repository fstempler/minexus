import './caseStudyCard.css'

const CaseStudyCard = ({ badge, title, text, title2, text2 }) =>{
    return (
        <div className='container caseStudyCard__Container d-flex justify-content-center align-items-center'>
            <div className='row'>
                <div className='col-12'>
                    <h3 className='caseStudyCard__Badge'>{badge}</h3>                
                    <h2 className='caseStudyCard__Title'>{title}</h2>
                    <hr></hr>
                    <p className='caseStudyCard__Text'>{text}</p>
                    <h2 className='caseStudyCard__Title'>{title2}</h2>                    
                    <p className='caseStudyCard__Text'>{text2}</p>
                </div>
            </div>            
        </div>
    )
}

export default CaseStudyCard 
