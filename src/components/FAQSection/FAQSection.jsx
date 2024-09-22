import './fAQSection.css'

import { useTranslation } from 'react-i18next'

const FAQSection = ({ Badge, Title }) => {

    const { t, i18n } = useTranslation();

    return (
        <>
        <div className='faq__MainContainer d-flex flex-column justify-content-center align-items-center'>          
            <div className='faq__TextContainer d-flex flex-column justify-content-center align-items-center'>
                <h3 className='faq__Badge'>{Badge}</h3>
                <h1 className='faq__Title'>{Title}</h1>
            </div>
            
            <div className='faq__FaqContainer'>

                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed faq__Question" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                {t('faqQuestion1')}
                            </button>
                            </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                            {t('faqAnswer1')}
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed faq__Question" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            {t('faqQuestion2')}
                        </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                            {t('faqAnswer2')}
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed faq__Question" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        {t('faqQuestion3')}
                        </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                            {t('faqAnswer3')}
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed faq__Question" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseThree">
                            {t('faqQuestion4')}
                        </button>
                        </h2>
                        <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                            {t('faqAnswer4')}
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed faq__Question" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseThree">
                            {t('faqQuestion5')}
                        </button>
                        </h2>
                        <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                            {t('faqAnswer5')}
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed faq__Question" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseThree">
                            {t('faqQuestion6')}
                        </button>
                        </h2>
                        <div id="flush-collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                {t('faqAnswer6')}
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed faq__Question" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseThree">
                            {t('faqQuestion7')}
                        </button>
                        </h2>
                        <div id="flush-collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                {t('faqAnswer7')}
                            </div>
                        </div>
                    </div>
                    
                </div>
            
            </div>
        </div>
        </>
    )
}

export default FAQSection