import logo from '../../assets/Logo/Minexus Logo.svg'
//style
import "./navbar.css"
//components
import ContactBtn from '../Buttons/contactBtn'
import BlueBtnNav from '../Buttons/blueBtnNav'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
//<>
const navbar = () =>{

    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLanguage = i18n.language === 'es' ? 'en' : 'es';
        i18n.changeLanguage(newLanguage);
    };

    const location = useLocation();

    useEffect(() => {
        window-scrollTo(0, 0);
    }, [location]);

    return (
        <nav className="navbar navbar-expand-lg bg-body-primary d-flex align-items-center navbar__Container fixed-top">
            <div className="container-fluid container-sm">
                <Link className="navbar-brand" to="/"><img src={logo} className='minexus__Logo' alt="Minexus Logo" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center gap-5">
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle navbar__Btn" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {t('services')}
                            </Link>
                                <ul className="dropdown-menu navbar__dropdown">
                                    <li className='d-flex justify-content-center align-items-center pt-2'><Link className="dropdown-item dropdown__Button" to="/codin">CODIN</Link></li>
                                    <li><hr className="dropdown-divider navbar__line"></hr></li>
                                    <li className='d-flex justify-content-center align-items-center'><Link className="dropdown-item dropdown__Button" to="/cataloging">{t('cataloging')}</Link></li>
                                    <li><hr className="dropdown-divider navbar__line"></hr></li>
                                    <li className='d-flex justify-content-center align-items-center pb-2'><Link className="dropdown-item dropdown__Button" to="/consulting">{t('Consulting')}</Link></li>
                                 </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link navbar__Btn" aria-current="page" to="/aboutus">{t('aboutUs')}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link navbar__Btn" to="/resources">{t('resources')}</Link>
                        </li>
                        <li className="nav-item">
                        <button className="nav-link navbar__LgBtn" onClick={toggleLanguage}>
                                <span className={`language-option ${i18n.language === 'es' ? 'active' : 'inactive'}`}>ES</span> / 
                                <span className={`language-option ${i18n.language === 'en' ? 'active' : 'inactive'}`}>EN</span>
                            </button>
                        </li>
                        <li className="nav-item btn__Container">
                            <Link className="nav-link" to="/contactUs"><ContactBtn icon={ <i className="bi bi-headset"></i> } text={t('contactSales')} /></Link>
                            <Link className="nav-link" to="/"><BlueBtnNav text={t('codinAccess')} /></Link>                            
                        </li>
                        <li className="nav-item">
                            
                        </li>
                        
                        
                    </ul>
                    
                </div>
            </div>
        </nav>
    )
}

export default navbar