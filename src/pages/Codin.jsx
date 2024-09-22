import './styles/codin.css'
//Components
import Header from '../components/HeroWithImage/HeroWithImage'
import HeroBtn from '../components/Buttons/heroBtn'
import FeatureImgL from '../components/FeatureImgL/FeatureImgL'
import BlueBtn from '../components/Buttons/blueBtn'
import FeatureImgR from '../components/FeatureImgR/FeatureImgR'
import FeatureImgLGreen from '../components/FeatureImgLGreen/FeatureImgLGreen'
import ServiceFeatureCenter from '../components/ServiceFeatureCenter/ServiceFeatureCenter'
import ServiceCard from '../components/ServiceCards/ServiceCard'
import SliderSection from '../components/SliderSection/SliderSection'
import JoinSection from '../components/JoinSection/JoinSection'
import FAQSection from '../components/FAQSection/FAQSection'
//Images
import CodinImg from '../assets/CODIN img.png'
import VirtualCommunity from '../assets/Virtual Community.png'
import SupplyChain from '../assets/Supply Chain Management.png'
import AssuredAccuracy from '../assets/Asured Accuracy.png'
import SupplierMapping from '../assets/ServiceCardsImg/Codin/SupplierMapping.png'
import PerformanceEvaluation from '../assets/ServiceCardsImg/Codin/PerformanceEvaluation.png'
import ContractorsControl from '../assets/ServiceCardsImg/Codin/ContractorsControl.png'
import DataQuality from '../assets/ServiceCardsImg/Codin/DataQuality.png'
import Prequalification from '../assets/ServiceCardsImg/Codin/Prequalification.png'
import Contract from '../assets/ServiceCardsImg/Codin/Contract.png'

import { useTranslation } from 'react-i18next'


const Codin = () => {

    const { t, i18n } = useTranslation();

    return (
        <>
            <Header            
            Badge={"CODIN"}
            Title={t('codinHeroTitle')}
            Subtitle={t('codinHeroText')}
            Button={<HeroBtn text={t('codinHeroCTA')}/>}
            link={"http://www.google.com"}
            ImgLink={CodinImg}
            alt={"CODIN Image"}
            background="linear-gradient(#1c97b0 50%, #FAFAFF 100%)"
            />
            <div className='d-flex justify-content-center'>
            <div className='codin__FeaturesContainer d-flex flex-column gap-5'>
                <FeatureImgL
                Badge={t('codinIndustrialBadge')}
                Title={t('codinIndustrialTitle')}
                Subtitle={t('codinIndustrialText')}
                Button={<BlueBtn text={"Discover our products"}/>}
                link={"http://www.google.com"}
                ImgLink={VirtualCommunity}
                alt={"Virtual Community"}
                />
                <FeatureImgR
                Badge={t('codinSupplyBadge')}
                Title={t('codinSupplyTitle')}
                Subtitle={t('codinSupplyText')}
                Button={<BlueBtn text={t('solutionsCTA')}/>}
                link={"http://www.google.com"}
                ImgLink={SupplyChain}
                alt={"Supply Chain Management"}
                background="linear-gradient(rgba(60, 103, 255, 0.08), rgba(60, 103, 255, 0))"
                />
                <FeatureImgLGreen
                Badge={t('codinAccuracyBadge')}
                Title={t('codinAccuracyTitle')}
                Subtitle={t('codinAccuracyText')}
                Button={<BlueBtn text={t('solutionsCTA')}/>}
                ImgLink={AssuredAccuracy}
                alt={"Assured Accuracy"}
                />
                <ServiceFeatureCenter
                Badge={t('codinExperienceBadge')}
                Title={t('codinExperienceTitle')}
                Subtitle={t('codinExperienceText')}
                />
                <div className='row d-flex justify-content-center align-items-center codin__ServiceCards-Container'>
                    <div className='col d-flex justify-content-center align-items-center'>
                        <ServiceCard
                        img={SupplierMapping}
                        title={t('codinExperienceCard1Title')}
                        text={t('codinExperienceCard1Text')}
                        background="rgba(28, 151, 176, 1)"
                        />
                    </div>
                    <div className='col d-flex justify-content-center align-items-center codin__ServiceCards-MiddleColumn'>
                        <ServiceCard
                        img={PerformanceEvaluation}
                        title={t('codinExperienceCard2Title')}
                        text={t('codinExperienceCard2Text')}
                        background="rgba(28, 151, 176, 1)"
                        />
                    </div>
                    <div className='col d-flex justify-content-center align-items-center'>
                        <ServiceCard
                        img={ContractorsControl}
                        title={t('codinExperienceCard3Title')}
                        text={t('codinExperienceCard3Title')}
                        background="rgba(28, 151, 176, 1)"
                        />
                    </div>
                </div>
                <div className='row d-flex justify-content-center align-items-center codin__ServiceCards-Container'>
                    <div className='col d-flex justify-content-center align-items-center'>
                        <ServiceCard
                        img={DataQuality}
                        title={t('codinExperienceCard4Title')}
                        text={t('codinExperienceCard4Title')}
                        background="rgba(28, 151, 176, 1)"
                        />
                    </div>
                    <div className='col d-flex justify-content-center align-items-center codin__ServiceCards-MiddleColumn'>
                        <ServiceCard
                        img={Prequalification}
                        title={t('codinExperienceCard5Title')}
                        text={t('codinExperienceCard5Title')}
                        background="rgba(28, 151, 176, 1)"
                        />
                    </div>
                    <div className='col d-flex justify-content-center align-items-center'>
                        <ServiceCard
                        img={Contract}
                        title={t('codinExperienceCard6Title')}
                        text={t('codinExperienceCard6Title')}
                        background="rgba(28, 151, 176, 1)"
                        />
                    </div>
                </div>
                <SliderSection
                Badge={t('SliderBadge')}
                Title={t('SliderTitle')}
                Text={t('SliderText')}
                />
                <JoinSection />
            </div>
            </div>
            <FAQSection
            Badge={"CODIN"}
            Title={t('faq')}
            />
            
        </>
    )
}

export default Codin