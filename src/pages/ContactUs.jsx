import './styles/contactUs.css'
//Components
import { useEffect } from 'react';
import SliderSection from '../components/SliderSection/SliderSection';
//Images
import map from '../assets/map.png'

const ContactUs = () => {

    useEffect(() => {
        if (!document.getElementById('bitrix-script')) {
            const script = document.createElement('script');
            script.id = 'bitrix-script';
            script.src = 'https://cdn.bitrix24.es/b12381291/crm/form/loader_2.js';
            script.async = true;
            script.setAttribute('data-b24-form', 'inline/2/bcc3ie');
            script.setAttribute('data-skip-moving', 'true');
            document.getElementById('bitrix-form-container').appendChild(script);
        }
    }, []);

    return(
        <>
        <section className="container-fluid d-flex flex-column justify-content-start align-items-center contact-Container">
            <div className='container'>
                <div className='row contact__DataContainer'>
                    <div className='col-12 col-lg-6 p-3 d-flex flex-column gap-3 justify-content-center'>
                        <h3 className='contactSectionBadge'>CONTACT SALES</h3>
                        <h1 className='contactSectionTitle'>Let's talk</h1>
                        <h3 className='contactSectionSubtitle'>Start a conversation with our sales team and discover customized solutions for your business.</h3>                        
                    </div>
                    <div className='col-12 col-lg-6 d-flex justify-content-center align-items-center'>
                        <div id="bitrix-form-container"></div>
                    </div>
                </div>            
            </div>
            
        </section>
        
        <div className='location__Container'>
            <div className='container'>
                <div className='row location__DataContainer'>
                    <div className='col-12 col-lg-6 d-flex flex-column justify-content-center gap-5'>
                        <div className='address__Container'>
                            <h3 className='address__Title'>
                                Commercial Contact
                            </h3>
                            <p className='address__Data'>
                            + 54 9264 5869785
                            <br></br>
                            info@minexus.com.ar
                            </p>
                        </div>
                        <div className='address__Container'>
                            <h3 className='address__Title'>
                                CODIN Support
                            </h3>
                            <p className='address__Data'>
                            + 54 911 3892 9134,
                            <br></br>
                            Soporte@minexus.com.ar
                            </p>
                        </div>
                        <div className='address__Container'>
                            <h3 className='address__Title'>
                                Our offices
                            </h3>
                            <p className='address__Data'>
                            Libertador General San Martin 1890 Oeste
                            <br></br>
                            (5400) San Juan
                            San Juan, Argentina
                            </p>
                        </div>
                    </div>
                    <div className='col-12 col-lg-6'>
                        <img className='location__Image' src={map} alt='Location Map'/>
                    </div>
                </div>
            </div>
        </div>
        <SliderSection 
        Badge={"OUR CLIENTS"}
        Title={"Already growing with us"}
        Text={"Minexus catalyzes the success of the most dynamic start-ups and established compaies."}
        />
        <br></br>
        </>
    )
    
}

export default ContactUs