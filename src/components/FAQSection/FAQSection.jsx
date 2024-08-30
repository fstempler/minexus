import './fAQSection.css'

const FAQSection = ({ Badge, Title }) => {
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
                                What is the SLA for document review?
                            </button>
                            </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                        The average review time is 24 hours from the time the document is uploaded by the provider until it is reviewed and its final status "accepted" or rejected. In case of rejection, the reasons are indicated so that the supplier can take immediate action.</div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed faq__Question" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            What are the support hours?
                        </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                            The support team is available from 8am to 8pm 365 days a year.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed faq__Question" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        Are there multiple mapping or supplier registration archetypes that you can suggest?
                        </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                Yes, there are multiple archetypes in the mapping and registration of suppliers according to the needs of each client.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed faq__Question" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseThree">
                            Are there specific filters to search for suppliers?
                        </button>
                        </h2>
                        <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                Yes, there are filters by locality, province, chamber, category, purchasing sub-section, fiscal domicile to prioritize local purchases.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed faq__Question" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseThree">
                            Do you have PMs assigned to the project to monitor the progress of the service?
                        </button>
                        </h2>
                        <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                Yes, a Project Manager is assigned for each project with weekly follow-up meetings to monitor progress and help as needed.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed faq__Question" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseThree">
                            Does the service have reporting available?
                        </button>
                        </h2>
                        <div id="flush-collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                Yes, reporting of all types of data uploaded to the platform and customized according to each client's requirements.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed faq__Question" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseThree">
                            Are the reasons for rejection of documentation reported?
                        </button>
                        </h2>
                        <div id="flush-collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                Yes, the reasons for rejection are defined in a tabulated manner so that the supplier can act immediately on the documentation without the need to call support.
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