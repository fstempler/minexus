import './styles/consulting.css'

//components
import HeroWithImage from '../components/HeroWithImage/HeroWithImage'
import HeroBtn from '../components/Buttons/heroBtn'
import FeatureImgL from '../components/FeatureImgL/FeatureImgL'
import BlueBtn from '../components/Buttons/blueBtn'
import ServiceFeatureCenter from '../components/ServiceFeatureCenter/ServiceFeatureCenter'
import ServiceCard from '../components/ServiceCards/ServiceCard'
import JoinSection from '../components/JoinSection/JoinSection'
//Images
import Consulting from '../assets/Consulting.png'
import Background from '../assets/Consulting - Gradient Background.png'
import Procurment from '../assets/Procurement Outsurcing.png'
import SAPimg from '../assets/ServiceCardsImg/Consulting/SAP.png'
import Purchase from '../assets/ServiceCardsImg/Consulting/Purchase.png'
import Sourcing from '../assets/ServiceCardsImg/Consulting/Sourcing.png'
import Warehouse from '../assets/ServiceCardsImg/Consulting/Warehouse.png'
import Audits from '../assets/ServiceCardsImg/Consulting/Audits.png'
import MRPimg from '../assets/ServiceCardsImg/Consulting/MRP.png'

import { useTranslation } from 'react-i18next'

const ConsultingPage = () => {

    const { t, i18n } = useTranslation();

    return (
        <>
            <HeroWithImage
            Badge={t('consultingModelBadge')}
            Title={t('consultingModelTitle')}
            Subtitle={t('consultingModelText')}
            Button={<HeroBtn text={t('consultingModelCTA')} />}
            link={""}
            ImgLink={Consulting}
            alt={"Consulting Image"}
            background="linear-gradient(#263A97 50%, #FAFAFF 100%)"
            />
            <div className='d-flex justify-content-center'>
            <div className='consulting__FeaturesContainer d-flex flex-column gap-5'>
                <FeatureImgL
                Badge={t('consultingOutsourcingBadge')}
                Title={t('consultingOutsourcingTitle')}
                Subtitle={t('consultingOutsourcingText')}
                Button={<BlueBtn text={t('talkCTA')}/>}
                link={""}
                ImgLink={Procurment}
                alt={"Procurement Outsourcing"}
                background={"linear-gradient(rgba(83, 231, 156, 0.08), rgba(83, 231, 156, 0))"}
                />

            <ServiceFeatureCenter
                Badge={t('consultingServicesBadge')}
                Title={t('consultingServicesTitle')}
                Subtitle={t('consultingServicesText')}
            />
                <div className='row d-flex justify-content-center align-items-center codin__ServiceCards-Container'>
                    <div className='col d-flex align-items-center'>
                        <ServiceCard
                        img={SAPimg}
                        title={t('consultingServicesCard1Title')}
                        text={t('consultingServicesCard1Text')}
                        background="rgba(38, 58, 151, 1)"
                        />
                    </div>
                    <div className='col d-flex justify-content-center align-items-center codin__ServiceCards-MiddleColumn'>
                        <ServiceCard
                        img={Purchase}
                        title={t('consultingServicesCard2Title')}
                        text={t('consultingServicesCard2Text')}
                        background="rgba(38, 58, 151, 1)"
                        />
                    </div>
                    <div className='col d-flex justify-content-center align-items-center'>
                        <ServiceCard
                        img={Sourcing}
                        title={t('consultingServicesCard3Title')}
                        text={t('consultingServicesCard3Text')}
                        background="rgba(38, 58, 151, 1)"
                        />
                    </div>
                </div>
                <div className='row d-flex justify-content-center align-items-center codin__ServiceCards-Container'>
                    <div className='col d-flex justify-content-center align-items-center'>
                        <ServiceCard
                        img={Warehouse}
                        title={t('consultingServicesCard4Title')}
                        text={t('consultingServicesCard4Text')}
                        background="rgba(38, 58, 151, 1)"
                        />
                    </div>
                    <div className='col d-flex justify-content-center align-items-center codin__ServiceCards-MiddleColumn'>
                        <ServiceCard
                        img={Audits}
                        title={t('consultingServicesCard5Title')}
                        text={t('consultingServicesCard5Text')}
                        background="rgba(38, 58, 151, 1)"
                        />
                    </div>
                    <div className='col d-flex justify-content-center align-items-center'>
                        <ServiceCard
                        img={MRPimg}
                        title={t('consultingServicesCard6Title')}
                        text={t('consultingServicesCard6Text')}
                        background="rgba(38, 58, 151, 1)"
                        />
                    </div>
                </div>
                <JoinSection />

            </div>

            </div>
        </>
    )
}

export default ConsultingPage