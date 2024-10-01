/* eslint-disable react/jsx-key */
import './styles/cataloging.css'

//components
import HeroWithImage from '../components/HeroWithImage/HeroWithImage'
import HeroBtn from '../components/Buttons/heroBtn'
import FeatureImgR from '../components/FeatureImgR/FeatureImgR'
import BlueBtn from '../components/Buttons/blueBtn'
import ServiceFeatureCenter from '../components/ServiceFeatureCenter/ServiceFeatureCenter'
import ServiceCard from '../components/ServiceCards/ServiceCard'
import FeatureImgL from '../components/FeatureImgL/FeatureImgL'
import CaseStudy from '../components/CaseStudy/CaseStudy'
import CaseStudyCard from '../components/CaseStudy/CaseStudyCard/CaseStudyCard'
import SliderSection from '../components/SliderSection/SliderSection'
import JoinSection from '../components/JoinSection/JoinSection'
//images
import cataloging from '../assets/Cataloguing.png'
import CatalogingModel from '../assets/Cataloguing model.png'
import Workshop from '../assets/ServiceCardsImg/Cataloging/Workshop.png'
import Debugging from '../assets/ServiceCardsImg/Cataloging/Debugging.png'
import Purchase from '../assets/ServiceCardsImg/Cataloging/Purchase.png'
import ADCimg from '../assets/ServiceCardsImg/Cataloging/ADC.png'
import AdvancedDocument from '../assets/Advanced Document Automation.png'
import AlikemLogo from '../assets/logosClients/allkemLogo.png'
import EnergyLogo from '../assets/logosClients/360EnergyLogo.png'
import ExarLogo from '../assets/logosClients/ExarLogo.png'

import { useTranslation } from 'react-i18next'

const Cataloging = () => {

    const { t, i18n } = useTranslation();
    
    const carouselItems1 = [
        [
            <CaseStudyCard
                key="solition1"
                badge={t('caseStudyAlikenCard1Badge')}
                title={t('caseStudyAlikenCard1Title')}
                text={t('caseStudyAlikenCard1Text')}
            />,
            <CaseStudyCard
                key="standarization1"
                badge={t('caseStudyAlikenCard2Badge')}
                title={t('caseStudyAlikenCard2Title')}
                text={t('caseStudyAlikenCard2Text')}
            />
        ],
        [
            <CaseStudyCard
                key="stadarization2"
                badge={t('caseStudyAlikenCard3Badge')}
                title={t('caseStudyAlikenCard3Title')}
                text={t('caseStudyAlikenCard3Text')}
            />,
            <CaseStudyCard
                key="stadarization3"
                badge={t('caseStudyAlikenCard4Badge')}
                title={t('caseStudyAlikenCard4Title')}
                text={t('caseStudyAlikenCard4Text')}
            />           
        ],
        [
            <CaseStudyCard
                key="executionTime"
                badge={t('caseStudyAlikenCard5Badge')}
                title={t('caseStudyAlikenCard5Title')}
                text={t('caseStudyAlikenCard5Text')}
                title2={t('caseStudyAlikenCard5Title2')}
                text2={t('caseStudyAlikenCard5Text2')}
            />           
        ]  
    ];
    
    const carouselItems2 = [
        [
            <CaseStudyCard
                key="solution3"
                badge={t('caseStudy360EnergyCard1Badge')}
                title={t('caseStudy360EnergyCard1Title')}
                text={t('caseStudy360EnergyCard1Text')}
            />,
            <CaseStudyCard
                key="standardization2"  
                badge={t('caseStudy360EnergyCard2Badge')}
                title={t('caseStudy360EnergyCard2Title')}
                text={t('caseStudy360EnergyCard2Text')}
            />
        ],
        [
            <CaseStudyCard
                key="material1"
                badge={t('caseStudy360EnergyCard3Badge')}
                title={t('caseStudy360EnergyCard3Title1')}
                text={t('caseStudy360EnergyCard3Text1')}
                title2={t('caseStudy360EnergyCard3Title2')}
                text2={t('caseStudy360EnergyCard3Text2')}
            />,
            <CaseStudyCard
                key="duplicates"  
                badge={t('caseStudy360EnergyCard4Badge')}
                title={t('caseStudy360EnergyCard4Title')}
                text={t('caseStudy360EnergyCard4Text')}
            />
        ],
        [
            <CaseStudyCard
                key="recomendations"
                badge={t('caseStudy360EnergyCard5Badge')}
                text={t('caseStudy360EnergyCard5Text')}
            />,
            <CaseStudyCard
                key="executionTime2"  
                badge={t('caseStudy360EnergyCard6Badge')}
                title={t('caseStudy360EnergyCard6Title1')}
                text={t('caseStudy360EnergyCard6Text1')}
                title2={t('caseStudy360EnergyCard6Title2')}
                text2={t('caseStudy360EnergyCard6Text2')}
            />
        ],
        [
            <CaseStudyCard
                key="continuity"
                badge={t('caseStudy360EnergyCard7Badge')}
                title={t('caseStudy360EnergyCard7Title')}
                text={t('caseStudy360EnergyCard7Text')}
            />
            
        ]
    ];
    
    const carouselItems3 = [
        [
            <CaseStudyCard
                key="solution4"
                badge={t('caseStudyExarCard1Badge')}
                title={t('caseStudyExarCard1Title')}
                text={t('caseStudyExarCard1Text')}
            />,
            <CaseStudyCard
                key="standardization3" 
                badge={t('caseStudyExarCard2Badge')}
                title={t('caseStudyExarCard2Title')}
                text={t('caseStudyExarCard2Text')}
            />
        ],
        [
            <CaseStudyCard
                key="material2"
                badge={t('caseStudyExarCard3Badge')}
                title={t('caseStudyExarCard3Title1')}
                text={t('caseStudyExarCard3Text1')}
                title2={t('caseStudyExarCard3Title2')}
                text2={t('caseStudyExarCard3Text2')}
            />,
            <CaseStudyCard
                key="standarization4"
                badge={t('caseStudyExarCard4Badge')}
                title={t('caseStudyExarCard4Title')}
                text={t('caseStudyExarCard4Text')}
            />
        ],
        [
            <CaseStudyCard
                key="executionTime3"
                badge={t('caseStudyExarCard5Badge')}
                title={t('caseStudyExarCard5Title1')}
                text={t('caseStudyExarCard5Text1')}
                title2={t('caseStudyExarCard5Title2')}
                text2={t('caseStudyExarCard5Text2')}
            />,
            <CaseStudyCard
                key="continuity2"
                badge={t('caseStudyExarCard6Badge')}
                title={t('caseStudyExarCard6Title')}
                text={t('caseStudyExarCard6Text')}
            />
        ]
    ];

    return (
        <>
        <HeroWithImage
        Badge={t('catalogingHeroBadge')}
        Title={t('catalogingHeroTitle')}
        Subtitle={t('catalogingHeroText')}
        Button={<HeroBtn text={t('catalogingHeroCTA')}/>}
        link={""}
        ImgLink={cataloging}
        alt={"Cataloging Image"}
        background="linear-gradient(#009D5F 50%, #FAFAFF 100%)"
        />
        <div className='d-flex justify-content-center'>
        <div className='cataloging__FeaturesContainer d-flex flex-column gap-5'>
            <FeatureImgR
            Badge={t('catalogingModelBadge')}
            Title={t('catalogingModelTitle')}
            Subtitle={t('catalogingModelText')}
            Button={<BlueBtn text={t('catalogingModelCTA')} />}
            link={""}
            ImgLink={CatalogingModel}
            alt={"Cataloging model"}
            background={"linear-gradient(#fff, #fff)"}
            />
            <ServiceFeatureCenter
            Badge={t('catalogingServicesBadge')}
            Title={t('catalogingServicesTitle')}
            Subtitle={t('catalogingServicesText')}
            />
            <div className='row d-flex justify-content-center align-items-start cataloging__ServiceCards-Container'>
                    <div className='col d-flex justify-content-center align-items-center'>
                        <ServiceCard
                        img={Workshop}
                        title={t('catalogingServicesCard1Title')}
                        text={t('catalogingServicesCard1Text')}
                        background="rgba(0, 157, 95, 1)"
                        />
                    </div>
                    <div className='col d-flex justify-content-center align-items-center'>
                        <ServiceCard
                        img={Debugging}
                        title={t('catalogingServicesCard2Title')}
                        text={t('catalogingServicesCard2Text')}
                        background="rgba(0, 157, 95, 1)"
                        />
                    </div>
                    <div className='col d-flex justify-content-center align-items-center'>
                        <ServiceCard
                        img={Purchase}
                        title={t('catalogingServicesCard3Title')}
                        text={t('catalogingServicesCard3Text')}
                        background="rgba(0, 157, 95, 1)"
                        />
                    </div>
                    <div className='col d-flex justify-content-center align-items-center'>
                        <ServiceCard
                        img={ADCimg}
                        title={t('catalogingServicesCard4Title')}
                        text={t('catalogingServicesCard4Text')}
                        background="rgba(0, 157, 95, 1)"
                        />
                    </div>
            </div>
            <FeatureImgL
            Badge={t('catalogingProcessBadge')}
            Title={t('catalogingProcessTitle')}
            Subtitle={t('catalogingProcessText')}
            Button={<BlueBtn text={t('productsCTA')} />}
            ImgLink={AdvancedDocument}
            alt={"Advanced Document Automation"}
            background={"linear-gradient(rgba(83, 231, 156, 0.08), rgba(83, 231, 156, 0))"}
            />
            <CaseStudy
            badge={t('caseStudyBadge')}
            imgLogo={AlikemLogo}
            alt={"Allkem Logo"}
            title={t('caseStudyAlikenTitle')}
            text={t('caseStudyAlikenText')}
            carouselItems={carouselItems1}
            id={"1"}
            />
            <CaseStudy
            badge={t('caseStudyBadge')}
            imgLogo={EnergyLogo}
            alt={"360 Energy Logo"}
            title={t('caseStudy360EnergyTitle')}
            text={t('caseStudy360EnergyText')}
            carouselItems={carouselItems2}
            id={"2"}
            />
            <CaseStudy
            badge={t('caseStudyBadge')}
            imgLogo={ExarLogo}
            alt={"Exar Logo"}
            title={t('caseStudyExarTitle')}
            text={t('caseStudyExarText')}
            carouselItems={carouselItems3}
            id={"3"}
            />
        </div>
        </div>
        <SliderSection
            Badge={t('SliderBadge')}
            Title={t('SliderTitle')}
            Text={t('SliderText')}
        />
        <JoinSection />
        </>
    )
}

export default Cataloging