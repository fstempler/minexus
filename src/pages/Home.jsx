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

const carouselItems = [
    [
        <CaseStudyCard
            key="solition1"
            badge="SOLUTION"
            title="Material Cataloging and Debugging Workshop"
            text="Minexus conducted an intensive workshop with the client to review and improve the cataloging procedure. A new form and unification of cataloging users was proposed. In addition, new cataloging standards, standardization of descriptions, masters of units of measure, manufacturers and standardized abbreviations were delivered."
        />,
        <CaseStudyCard
            key="standarization1"
            badge="STANDARDIZATION"
            title="16,500 items"
            text="Descriptions, units of measure, item groups and classes were standardized and translated into English."
        />
    ],
    [
        <CaseStudyCard
            key="solution2"
            badge="SOLUTION"
            title="Material Cataloging and Debugging Workshop"
            text="Minexus conducted an intensive workshop with the client to review and improve the cataloging procedure. A new form and unification of cataloging users was proposed. In addition, new cataloging standards, standardization of descriptions, masters of units of measure, manufacturers and standardized abbreviations were delivered."
        />
    ]
];

const Home = () => {
    return(
        <>
        <HeroNoImage 
        Kicker={"INTEGRAL SUPPLY CHAIN SOLUTIONS"}
        Title={"Your Strategic Ally in Sourcing & Operations"}
        Subtitle={"Elevate your business with solutions that integrate design, inventory control and expertise in leading systems such as Oracle and SAP."}
        Button={<HeroBtn text={"Discover our products"} />}
        />
        <div className='container-fluid'>
            <div className='row homeCards__Container'>
                <div className='col'>
                    <HeroCard
                    backgroundImage={CodinBack}
                    categoryLogo={CodinLogo}
                    title={"CODIN"}
                    subtitle={"Industrial Development Community"}
                    textData1={"Speed up revisions"}
                    textData2={"Performance evaluation"}
                    textData3={"Contractors control"}
                    button={<CardBtn text={"See our solutions"}/>}
                    iconColor={"#1C97B0"}
                    link={"http://www.google.com"}
                    />
                </div>
                <div className='col'>
                    <HeroCard
                    backgroundImage={CataloguingBack}
                    categoryLogo={CataloguingLogo}
                    title={"Cataloguing"}
                    subtitle={"Find out how to accurately  and efficiently sort your data. "}
                    textData1={"Description Standarization"}
                    textData2={"Data Analysis"}
                    textData3={"Standarization"}
                    button={<CardBtn text={"Discover Cataloguing"}/>}
                    iconColor={"#009D5F"}
                    link={"http://www.google.com"}
                    />
                </div>
                <div className='col'>
                    <HeroCard
                    backgroundImage={ConsultingBack}
                    categoryLogo={ConsultingLogo}
                    title={"Consulting"}
                    subtitle={"With 10 years experienced experts in each subject."}
                    textData1={"Procurement outsourcing"}
                    textData2={"Warehouse Operation"}
                    textData3={"Inventory Control "}
                    button={<CardBtn text={"Let's talk"}/>}
                    iconColor={"#263A97"}
                    link={"http://www.google.com"}
                    />
                </div>
            </div>
        </div>
        <div className='home__FeaturesContainer d-flex flex-column gap-5'>
            <FeatureImgR
            ImgLink={SupplyChain}
            alt={"Supply Chain Management"}
            Badge={"SUPPLY CHAIN MANAGEMENT"}
            Title={"Intelligent Supplier Connection"}        
            Subtitle={"We strengthen the connection between customers and suppliers using disruptive technologies such as Blockchain and AI. Our goal is to achieve optimal, automatic and reliable supply chain management."}
            link={"http://www.google.com"}
            Button={<BlueBtn text={"See our solutions"}/>}
            />
            <FeatureImgLGreen
            ImgLink={AdvancedDocumentAutomation}
            alt={"Advanced Document Automation"}
            Badge={"PROCESS STREAMLINING"}
            Title={"Advanced Document Automation"}
            Subtitle={"Using Artificial Intelligence, we speed up document review and significantly reduce errors, ensuring fast and accurate verification of the documentation provided."}
            link={"http://www.google.com"}
            Button={<BlueBtn text={"Discover our products"}/>}
            />
            <FeatureCenter
            Badge={"ERP INTEGRATION"}
            Title={"Simplified management of your company"}
            Subtitle={"Enables seamless data synchronization, optimizing operational and procurement processes."}
            link={"http://www.google.com"}
            Button={<BlueBtn text={"Discover Cataloging"}/>}
            ImgLink={ERPIntegration}
            alt={"ERP Integration"}
            ImgLinkMobile={ERPIntegrationMobile}
            />
            <SliderSection
            Badge={"OUR CLIENTS"}
            Title={"Already growing with us"}
            Text={"Minexus catalyzes the success of the most dynamic start-ups and established compaies."}
            />
            <CaseStudy
            badge={"CASE STUDY"}
            imgLogo={AlikemLogo}
            alt={"Allkem Logo"}
            title={"How Aliken Transformed Data Handling"}
            text={"Allkem was facing significant challenges in cataloging and purging materials, which affected operational efficiency and data accuracy."}
            carouselItems={carouselItems}
            />
            <PartnerSection />
            <JoinSection />
            <BlogSection />
        </div>
        
        </>
    )
}

export default Home