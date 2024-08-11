import logo from '../../assets/Logo/Minexus Logo.png'
//style
import "./navbar.css"
//components
import ContactBtn from '../Buttons/contactBtn'
import { Link } from 'react-router-dom'
//<>
const navbar = () =>{
    return (
        <nav className="navbar navbar-expand-lg bg-body-primary p-3 px-5 d-flex align-items-center">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img src={logo} alt="Minexus Logo" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle navbar__Btn" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Services
                            </Link>
                                <ul className="dropdown-menu navbar__dropdown">
                                    <li><Link className="dropdown-item navbar__Btn" to="/codin">CODIN</Link></li>
                                    <li><hr className="dropdown-divider navbar__line"></hr></li>
                                    <li><Link className="dropdown-item navbar__Btn" to="/cataloging">Cataloging</Link></li>
                                    <li><hr className="dropdown-divider navbar__line"></hr></li>
                                    <li><Link className="dropdown-item navbar__Btn" to="/consulting">Consulting</Link></li>
                                 </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link navbar__Btn" aria-current="page" to="/aboutus">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link navbar__Btn" to="/">Resources</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link navbar__LgBtn" to="/">ES EN</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/"><ContactBtn icon={ <i className="bi bi-headset"></i> } text={ "Contact Sales" } /></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link navbar__BlueBtn" to="/">CODIN Access <span><i className="bi bi-arrow-right icon navbar__Arrow" /></span></Link>
                        </li>
                        
                        
                    </ul>
                    
                </div>
            </div>
        </nav>
    )
}

export default navbar