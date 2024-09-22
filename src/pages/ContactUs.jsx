import './styles/contactUs.css'
//Components
import { useEffect } from 'react';
import SliderSection from '../components/SliderSection/SliderSection';
//Images
import map from '../assets/map.png'

import { useTranslation } from 'react-i18next'

const ContactUs = () => {

    const { t, i18n } = useTranslation();

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
                        <h3 className='contactSectionBadge'>{t('contactBadge')}</h3>
                        <h1 className='contactSectionTitle'>{t('contactTitle')}</h1>
                        <h3 className='contactSectionSubtitle'>{t('contactSubtitle')}</h3>                        
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
                                {t('contactCommercial')}
                            </h3>
                            <p className='address__Data'>
                            + 54 9264 5869785
                            <br></br>
                            info@minexus.com.ar
                            </p>
                        </div>
                        <div className='address__Container'>
                            <h3 className='address__Title'>
                                {t('contactSupport')}
                            </h3>
                            <p className='address__Data'>
                            + 54 911 3892 9134,
                            <br></br>
                                soporte@minexus.com.ar
                            </p>
                        </div>
                        <div className='address__Container'>
                            <h3 className='address__Title'>
                                {t('contactOffices')}
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
                        {/* <img className='location__Image' src={map} alt='Location Map'/> */}
                        <iframe className="contactUs__Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.724461629647!2d-68.55517872353177!3d-31.531726901838198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x968141b4cc63761d%3A0x6adb5885c1bfaac3!2sAv.%20Libertador%20Gral.%20San%20Mart%C3%ADn%201890%2C%20J5400%20San%20Juan!5e0!3m2!1ses!2sar!4v1725373656311!5m2!1ses!2sar"                          
                        style={{ border:0 }} 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">                            
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
        <SliderSection
            Badge={t('SliderBadge')}
            Title={t('SliderTitle')}
            Text={t('SliderText')}
            />
        <br></br>
        </>
    )
    
}

export default ContactUs