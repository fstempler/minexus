import './joinSection.css'
import mockup from '../../assets/macbook mockup 1.png'
import SubscribeForm from '../SubscribeForm/SubscribeForm'
import { useTranslation } from 'react-i18next'

const JoinSection = () => {

    const { t, i18n } = useTranslation();

    return (
        <div className='container joinSection__MainContainer'>
            <div className='row joinSection__DataContainer'>
                <div className='col-12 col-md-8 d-flex align-items-left flex-column justify-content-center joinSection__TextContainer order-1'>
                    <h2 className='joinSection__Title'>{t('JoinSectionTitle')}</h2>
                    <p className='joinSection__Text'>{t('JoinSectionText1')}<br></br>{t('JoinSectionText2')}</p>
                    
                    <SubscribeForm />
                </div>
                <div className='col-12 col-md-4 order-sm-1 d-flex align-items-center'>                    
                    <img className="joinSection__Image" src={mockup} alt="Minexus" />
                </div>
            </div>
        </div>
    )
}

export default JoinSection;