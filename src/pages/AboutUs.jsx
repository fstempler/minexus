import './styles/about.css'

//Components
import HeroNoImage from '../components/HeroNoImage/heroNoImage'


const AboutUs = () => {
    return (
        <>
        <HeroNoImage 
        Kicker={"ABOUT US"}
        Title={"Commitment to Excellence in Supply Chain Solutions"}
        Subtitle={"MINEXUS commits to ethics, trust, and continuous improvement for client and partner empowerment."}
        Button={""}
        />
        <div className='aboutUs__Main-Container'>
        <div className='container aboutUs__Mission-Container'>
            <div className='row'>
                <div className='col d-flex justify-content-center align-items-center'>
                    <h2 className='aboutUs__Title'>Mission</h2>
                </div>
                <div className='col'>
                    <p className='aboutUs__Text'>To be strategic allies of our clients, providing high value-added services of Development and Integral Management of suppliers and materials. Supported by disruptive technologies for the optimal and automatic meeting of operators and suppliers of all industries.</p>
                </div>
            </div>
        </div>
        <div className='aboutUs__Vision-MainContainer'>
            <div className='container aboutUs__Vision-Container'>
                <div className='row'>
                    <div className='col d-flex justify-content-center align-items-center'>
                        <h2 className='aboutUs__Title'>Vision</h2>
                    </div>
                    <div className='col'>
                        <p className='aboutUs__Text'>By the year 2030, to position ourselves in the top 5 suppliers and materials platforms for the B2B market in LATAM. To become the strategic functional complement of ERPs to achieve maximum transparency, efficiency and visibility in our industrial development community.  </p>
                    </div>
                </div>
            </div>
        
        <div className='aboutUs__Values-Container d-flex flex-column justify-content-center align-items-center gap-5'>
            <h2 className='aboutUs__Title'>Our Values</h2>
                <div className='row d-flex justify-content-center align-items-start mt-3'>
                        <div className='col d-flex flex-column justify-content-center align-items-start'>
                            <h2 className='values__Title'>Responsible Company</h2>
                            <p className='aboutUs__Text'>
                                "Ethics, trust, respect for the environment and corporate social responsibility are non-negotiable maxims of our organization that we try to prioritize in our relationships with our customers and suppliers who want to be part of our community."
                            </p>
                        </div>
                        <div className='col d-flex flex-column justify-content-center align-items-start'>
                            <h2 className='values__Title'>The Value of People</h2>
                            <p className='aboutUs__Text'>
                            "We strive to create a healthy and safe workplace that encourages our employees to develop their knowledge and skills. We recognize the performance of our talents as one of the pillars of our organization's sustained success."
                            </p>
                        </div>
                        <div className='col d-flex flex-column justify-content-center align-items-start'>
                            <h2 className='values__Title'>Outstanding services</h2>
                            <p className='aboutUs__Text'>
                            "Continuous improvement in every aspect, reaching the highest standard in our services to contribute decisively to improve the quality of encounter of our supplier partners and our producer partners."
                            </p>
                        </div>
                        <div className='col d-flex  flex-column justify-content- align-items-start'>
                            <h2 className='values__Title'>Simplicity</h2>
                            <p className='aboutUs__Text'>
                            "We discard things that are unimportant and do not add real value in our clients' operations. We focus on finding practicality and robustness in the processes we optimize."
                            </p>
                        </div>
                </div>
        </div>
        </div>

        <div className='aboutUs__Vision-MainContainer'>
            <div className='container aboutUs__Quality-Container'>
                <div className='row'>
                    <div className='col d-flex justify-content-center align-items-center'>
                        <h2 className='aboutUs__Title' id='qualityPolicies'>Quality Policies</h2>
                    </div>
                    <div className='col'>
                        <p className='aboutUs__Text'>MINEXUS, our purpose is to provide integral solutions in the area of Supply Chain for all industries. To this end, we have focused our strategy on the development of innovative, flexible and reliable services. 
                            <br></br>
                            Siendo nuestros  principales objetivos: 
                            <br></br>
                            To satisfy our clients with quality solutions and services, adequate to their requirements, needs and complementing the functionalities of their Management Software. 
                            <br></br>
                            To provide timely and accessible solutions, with high added value that mitigate risks, reduce time and costs in the operations of our customers.
                            <br></br>
                            Promote a positive environment of development, participation and training for our talents, as well as the technological innovation of our applicable resources.
                            <br></br>
                            Comply with regulatory requirements as well as current and applicable legal requirements. 
                            <br></br>
                            Improve the performance and effectiveness of our C.G.S. continuously, promoting the participation of all the people who form MINEXUS to achieve the commitment of all in the pursuit of excellence. 
                            <br></br>
                            This policy is disseminated, understood and accepted by the Organization and other interested parties; and its adequacy is subject to periodic review.</p>

                    </div>
                </div>
            </div>       
        
        </div>
        </div>

        </>
    )
}

export default AboutUs