import './partnersSection.css'
//Images
import pdp from '../../assets/pdp.png'
import dunSeal from '../../assets/dunSeal.png'
import aws from '../../assets/aws.png'
import iram from '../../assets/iram.png'

const PartnerSection = () => {
    return (
        <div className='partnersSection__MainContainer'>
            <div className='row d-flex justify-content-center'>
            <div className='col col-lg-4'>
                <h3 className='partnerSection__Badge'>STRATEGIC PARTNERS</h3>
                <h1 className='partnerSection__Title'>We transfer the quality of our partners to all our services.</h1>
                <p className='partnerSection__Text'>We integrate quality and trust in each one of our services, committing ourselves to excellence for our clients.</p>                
            </div>
            <div className='col col-lg-8 d-flex justify-content-center'>
                <img className="partnerSection__Image" src={pdp} alt="PDP Dirección Nacional de Proteccion de Datos Federales" />
                <img className="partnerSection__Image" src={dunSeal} alt="Dun & Bradstreet Verified" />
                <img className="partnerSection__Image" src={aws} alt="AWS" />
                <img className="partnerSection__Image" src={iram} alt="IRAM" />
            </div>
        </div>
        </div>
        
    )
}

export default PartnerSection