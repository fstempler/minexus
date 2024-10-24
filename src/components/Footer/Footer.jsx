import './footer.css'
//Components
import BlueBtn from '../Buttons/blueBtn';
import SubscribeForm from '../SubscribeForm/SubscribeForm';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
//Images
import FooterImg from '../../assets/FooterImg.png'
import telIcon from '../../assets/telIcon.png'
import mailIcon from '../../assets/mailIcon.png'
import xIcon from '../../assets/xIcon.png'
import linkedInIcon from '../../assets/linkedInIcon.png'
import aaip from '../../assets/aaip.png'

import { useTranslation } from 'react-i18next'

const Footer = () => {    

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

    const location = useLocation();

    useEffect(() => {
        if (location.hash === '#qualityPolicies') {
            const element = document.getElementById('qualityPolicies');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    }, [location]);

    return (
        <div className='footer__MainContainer'>
            {/* START TODAY SECTION */}
            <div className='row startToday__Container'>
                <div className='col-12 col-sm-6 d-flex justify-content-center align-items-start flex-column gap-3 startToday__TextContainer'>
                    <h2 className='startToday__Title'>{t('FooterStartTitle')}</h2>
                    <p className='startToday__Text'>{t('FooterStartText')}</p>
                    <Link to="/contactUs"><BlueBtn text={t('FooterStartCTA')} icon={ <i className="bi bi-arrow-right"></i> }/></Link>
                </div>
                <div className='col-12 col-sm-6 d-flex justify-content-end'>
                    <img src={FooterImg} alt="Footer Image" className='startToday__Image'/>
                </div>
            </div>
            {/* FOOTER SECTION */}
            <div className='row footer__Container'>
                <div className='col col-lg-4 footer__ContactInfo-Container'>
                    <h2 className='footer__Title'>{t('FooterColumn1Title')}</h2>
                    <SubscribeForm />
                    <ul className='footer__ContactInfo-List'>
                        <li className='footer__ContactInfo'><img src={telIcon} alt="" className='footer__ContactInfo-Icon' />+54 9 11 3892 9134</li>
                        <Link to="mailto:https://x.com/minexussa"><li className='footer__ContactInfo'><img src={mailIcon} alt="" className='footer__ContactInfo-Icon' />info@minexus.com.ar </li></Link>
                        <Link to="https://x.com/minexussa" target='_blank'><li className='footer__ContactInfo'><img src={xIcon} alt="" className='footer__ContactInfo-Icon' />@minexussa</li></Link>
                        <Link to="https://www.linkedin.com/company/minexus/" target='_blank'><li className='footer__ContactInfo'><img src={linkedInIcon} alt="" className='footer__ContactInfo-Icon' />/minexus</li></Link>
                        <li className='footer__ContactInfo'><img src={aaip} alt="" className='footer__ContactInfo-Image' /></li>
                    </ul>
                </div>
                
                <div className='col col-lg-4 footer__SiteLinks-Container'>
                    <h2 className='footer__Title'>Minexus</h2>
                    <ul className='footer__SiteLinks-List'>
                        <li className='footer__SiteLinks'><Link to='/' className=''>{t('FooterColumn2HomeLink')}</Link></li>
                        <hr className='footer__SiteLinks-Line'></hr>
                        <li className='footer__SiteLinks'><Link to='/codin' className=''>CODIN</Link></li>
                        <hr className='footer__SiteLinks-Line'></hr>
                        <li className='footer__SiteLinks'><Link to='/cataloging' className=''>{t('cataloging')}</Link></li>
                        <hr className='footer__SiteLinks-Line'></hr>
                        <li className='footer__SiteLinks'><Link to='/consulting' className=''>{t('Consulting')}</Link></li>
                        <hr className='footer__SiteLinks-Line'></hr>
                        <li className='footer__SiteLinks'><Link to='/aboutUs' className=''>{t('aboutUs')}</Link></li>
                        <hr className='footer__SiteLinks-Line'></hr>
                        <li className='footer__SiteLinks'><Link to='/' className=''>Blog</Link></li>
                        <hr className='footer__SiteLinks-Line'></hr>
                        <li className='footer__SiteLinks'><Link to='/contactUs' className=''>{t('FooterColumn2ContactLink')}</Link></li>
                        <hr className='footer__SiteLinks-Line'></hr>
                        <li className='footer__SiteLinks'><Link to='' className=''>ES EN</Link></li>
                    </ul>
                </div>
                <div className='col  col-lg-4 footer__ContactForm-Container'>
                    <h2 className='footer__Title'>{t('FooterColumn2ContactLink')}</h2>
                    <div id="bitrix-form-container"></div>
                    
                </div>
                <div className='row mt-5'>
                    <ul className='d-flex justify-content-center nav flex-column flex-sm-row align-items-center'>
                        <li className='footer__Copyright'><a href='' className='footer__Copyright-Link'>Copyright © 2024 Minexus </a></li>
                        <div className='footer__Copyright-Separator'></div>
                        <li className='footer__Copyright'><a href='' className='footer__Copyright-Link'>{t('FooterRowTerms')}</a></li>
                        <div className='footer__Copyright-Separator'></div>
                        <li className='footer__Copyright'><Link to='aboutUs/#qualityPolicies' className='footer__Copyright-Link'>{t('FooterRowPrivacy')}</Link></li>
                        <div className='footer__Copyright-Separator'></div>
                        <li className='footer__Copyright'><a href='' className='footer__Copyright-Link'>{t('FooterRowCV')}</a></li>
                        <div className='footer__Copyright-Separator'></div>
                        <li className='footer__Copyright'><a href='' className='footer__Copyright-Link'>{t('FooterRowCookie')}</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;