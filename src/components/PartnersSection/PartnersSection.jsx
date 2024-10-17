import './partnersSection.css'
//Images
import pdp from '../../assets/pdp.png'
import dunSeal from '../../assets/dunSeal.png'
import aws from '../../assets/aws.png'
import iram from '../../assets/iram.png'
import { useTranslation } from 'react-i18next'

const PartnerSection = () => {

    const { t, i18n } = useTranslation();

    return (
        <div className='partnersSection__MainContainer'>
            <div className='row d-flex justify-content-center'>
            <div className='col col-lg-4'>
                <h3 className='partnerSection__Badge'>{t('homeStrategicBadge')}</h3>
                <h1 className='partnerSection__Title'>{t('homeStrategicTitle')}</h1>
                <p className='partnerSection__Text'>{t('homeStrategicText')}</p>                
            </div>
            <div className='col col-lg-8 d-flex justify-content-center align-items-center partnerSection__Images-Container'>
                <img className="partnerSection__Image" src={pdp} alt="PDP Dirección Nacional de Proteccion de Datos Federales" />
                <img className="partnerSection__Image-Dun" src={dunSeal} alt="Dun & Bradstreet Verified" />
                <img className="partnerSection__Image" src={aws} alt="AWS" />
                <img className="partnerSection__Image" src={iram} alt="IRAM" />
            </div>
        </div>
        </div>
        
    )
}

export default PartnerSection