import logo from '../../assets/Logo/Minexus Logo.png'
//style
import "./navbar.css"
//components
import ContactBtn from '../Buttons/contactBtn'
//<>
const navbar = () =>{
    return (
        <nav className="navbar navbar-expand-lg bg-body-primary p-3 px-5 d-flex align-items-center">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src={logo} alt="Minexus Logo" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle navbar__Btn" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Services
                            </a>
                                <ul className="dropdown-menu navbar__dropdown">
                                    <li><a className="dropdown-item navbar__Btn" href="#">CODIN</a></li>
                                    <li><hr className="dropdown-divider navbar__line"></hr></li>
                                    <li><a className="dropdown-item navbar__Btn" href="#">Cataloging</a></li>
                                    <li><hr className="dropdown-divider navbar__line"></hr></li>
                                    <li><a className="dropdown-item navbar__Btn" href="#">Consulting</a></li>
                                 </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navbar__Btn" aria-current="page" href="#">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navbar__Btn" href="#">Resources</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><ContactBtn icon={ <i className="bi bi-headset"></i> } text={ "Contact Sales" } /></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navbar__BlueBtn" href="#">CODIN Access <span><i className="bi bi-arrow-right icon navbar__Arrow" /></span></a>
                        </li>
                        
                        
                    </ul>
                    
                </div>
            </div>
        </nav>
    )
}

export default navbar