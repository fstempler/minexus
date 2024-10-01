/* eslint-disable react/jsx-key */
//Style
import './styles/home.css'
//Images
import SupplyChain from '../assets/Supply Chain Management.png'
import AdvancedDocumentAutomation from '../assets/Advanced Document Automation.png'
import ERPIntegration from '../assets/ERP Integration.png' 
import ERPIntegrationMobile from '../assets/ERPs Connected to Minexus_Mobile.png' 
import AlikemLogo from '../assets/logosClients/allkemLogo.png'
import CodinBack from '../assets/Card-bg-CODIN.png'
import CataloguingBack from '../assets/Card-bg-Cataloguing.png'
import ConsultingBack from '../assets/Card-bg-Consulting.png'
//Buttons
import HeroBtn from '../components/Buttons/heroBtn'
import CardBtn from '../components/Buttons/cardBtn'
import BlueBtn from '../components/Buttons/blueBtn'
//Components
import HeroNoImage from '../components/HeroNoImage/heroNoImage'
import HeroCard from '../components/HomePageCards/homePageCard'
import CodinLogo from '../assets/CODIN Logo.png'
import CataloguingLogo from '../assets/Cataloguing Logo.png'
import ConsultingLogo from '../assets/Consulting Logo.png'
import FeatureImgR from '../components/FeatureImgR/FeatureImgR'
import FeatureImgLGreen from '../components/FeatureImgLGreen/FeatureImgLGreen'
import FeatureCenter from '../components/FeatureCenter/FeatureCenter'
import SliderSection from '../components/SliderSection/SliderSection'
import CaseStudy from '../components/CaseStudy/CaseStudy'
import CaseStudyCard from '../components/CaseStudy/CaseStudyCard/CaseStudyCard'
import PartnerSection from '../components/PartnersSection/PartnersSection'
import JoinSection from '../components/JoinSection/JoinSection'
import BlogSection from '../components/BlogSection/BlogSection'
import { useTranslation } from 'react-i18next'




const Home = () => {
    
    const { t, i18n } = useTranslation();

    const carouselItems = [
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

    return(
        <>
        <HeroNoImage 
        Kicker={t('homeKicker')}
        Title={t('homeTitle')}
        Subtitle={t('homeSubtitle')}
        Button={<HeroBtn text={t('productsCTA')} />}
        />
        <div className='container-fluid homeCards__Container row'>
        
                    <HeroCard
                    backgroundImage={CodinBack}
                    categoryLogo={CodinLogo}
                    title={"CODIN"}
                    subtitle={t('homeCardCodinSubtitle')}
                    textData1={t('homeCardCodinline1')}
                    textData2={t('homeCardCodinline2')}
                    textData3={t('homeCardCodinline3')}
                    button={<CardBtn text={t('solutionsCTA')}/>}
                    iconColor={"#1C97B0"}
                    link={"/codin"}
                    />
        
        
                    <HeroCard
                    backgroundImage={CataloguingBack}
                    categoryLogo={CataloguingLogo}
                    title={t('homeCardCatalogingTitle')}
                    subtitle={t('homeCardCatalogingSubtitle')}
                    textData1={t('homeCardCatalogingline1')}
                    textData2={t('homeCardCatalogingline2')}
                    textData3={t('homeCardCatalogingline3')}
                    button={<CardBtn text={t('homeCardCatalogingCTA')}/>}
                    iconColor={"#009D5F"}
                    link={"/cataloging"}
                    />
        
        
                    <HeroCard
                    backgroundImage={ConsultingBack}
                    categoryLogo={ConsultingLogo}
                    title={t('homeCardConsultingTitle')}
                    subtitle={t('homeCardConsultingSubtitle')}
                    textData1={t('homeCardConsultingline1')}
                    textData2={t('homeCardConsultingline2')}
                    textData3={t('homeCardConsultingline3')}
                    button={<CardBtn text={t('talkCTA')}/>}
                    iconColor={"#263A97"}
                    link={"/consulting"}
                    />
        
        </div>
        <div className='d-flex justify-content-center'>
        <div className='home__FeaturesContainer d-flex flex-column gap-5 justify-content-center align-items-center'>
            <FeatureImgR
            ImgLink={SupplyChain}
            alt={"Supply Chain Management"}
            Badge={t('homeSupplierBadge')}
            Title={t('homeSupplierTitle')}
            Subtitle={t('homeSupplierText')}
            link={"http://www.google.com"}
            Button={<BlueBtn text={t('solutionsCTA')}/>}
            />
            <FeatureImgLGreen
            ImgLink={AdvancedDocumentAutomation}
            alt={"Advanced Document Automation"}
            Badge={t('homeAutomationBadge')}
            Title={t('homeAutomationTitle')}
            Subtitle={t('homeAutomationText')}
            link={"http://www.google.com"}
            Button={<BlueBtn text={t('productsCTA')}/>}
            />
            <FeatureCenter
            Badge={t('homeERPBadge')}
            Title={t('homeERPTitle')}
            Subtitle={t('homeERPText')}
            link={"http://www.google.com"}
            Button={<BlueBtn text={t('homeERPCTA')}/>}
            ImgLink={ERPIntegration}
            alt={"ERP Integration"}
            ImgLinkMobile={ERPIntegrationMobile}
            />
            <SliderSection
            Badge={t('SliderBadge')}
            Title={t('SliderTitle')}
            Text={t('SliderText')}
            />
            <CaseStudy
            badge={t('caseStudyBadge')}
            imgLogo={AlikemLogo}
            alt={"Allkem Logo"}
            title={t('caseStudyAlikenTitle')}
            text={t('caseStudyAlikenText')}
            carouselItems={carouselItems}
            id={"1"}
            />
            <PartnerSection />
            <JoinSection />
            <BlogSection />
        </div>
        </div>
        </>
    )
}

export default Home