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
import backgroundGreen from '../assets/Cataloguing - Gradient Background.png'
import CatalogingModel from '../assets/Cataloguing model.png'
import Workshop from '../assets/ServiceCardsImg/Cataloging/Workshop.png'
import Debugging from '../assets/ServiceCardsImg/Cataloging/Debugging.png'
import Purchase from '../assets/ServiceCardsImg/Cataloging/Purchase.png'
import ADCimg from '../assets/ServiceCardsImg/Cataloging/ADC.png'
import AdvancedDocument from '../assets/Advanced Document Automation.png'
import AlikemLogo from '../assets/logosClients/allkemLogo.png'
import EnergyLogo from '../assets/logosClients/360EnergyLogo.png'
import ExarLogo from '../assets/logosClients/ExarLogo.png'


const carouselItems1 = [
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
            key="stadarization2"
            badge="STANDARIZATION"
            title="16,500 items"
            text="Minexus conducted an intensive workshop with the client to review and improve the cataloging procedure. A new form and unification of cataloging users was proposed. In addition, new cataloging standards, standardization of descriptions, masters of units of measure, manufacturers and standardized abbreviations were delivered."
        />,
        <CaseStudyCard
            key="stadarization3"
            badge="STANDARIZATION"
            title="32% items"
            text="required group or class updating."
        />           
    ],
    [
        <CaseStudyCard
            key="dataEnrichment"
            badge="DATA ENRICHMENT"
            title="46% materials"
            text="lacked part number, manufacturer or characteristics, which can be enriched."
        />,
        <CaseStudyCard
            key="executionTime"
            badge="EXECUTION TIME"
            title="1 Month"
            text="of Workshops"
            title2="4 Months"
            text2="of debugging."
        />           
    ]  
];

const carouselItems2 = [
    [
        <CaseStudyCard
            key="solution3"
            badge="SOLUTION"
            title="New standardization and cataloging procedure"
            text="Minexus worked with the client providing tools for the correct classification and description of materials and services. New item groups and service classes were proposed according to the client's operation."
        />,
        <CaseStudyCard
            key="standardization2"  
            badge="STANDARDIZATION"
            title="~4,500 materials"
            text="Materials from SAP, Excel lists of some inventories and spare parts lists from different areas were purified and standardized."
        />
    ],
    [
        <CaseStudyCard
            key="material1"
            badge="MATERIALS"
            title="66%"
            text="were recommended to be migrated to ERP."
            title2="13%"
            text2="were upgraded in their unit of measure"
        />,
        <CaseStudyCard
            key="duplicates"  
            badge="DUPLICATES IDENTIFICATION"
            title="30% items"
            text="possible duplicates were identified."
        />
    ],
    [
        <CaseStudyCard
            key="recomendations"
            badge="ADDITIONAL RECOMMENDATIONS"
            text="Batches were recommended to be created for handling coils of the same material, and serializers were recommended to be used to assign different serial numbers to the same material to avoid duplicates."
        />,
        <CaseStudyCard
            key="executionTime2"  
            badge="EXECUTION TIME"
            title="1.5 Months"
            text="of Workshops"
            title2="1.5 Months"
            text2="of debugging."
        />
    ],
    [
        <CaseStudyCard
            key="continuity"
            badge="CONTINUITY"
            title="A/B/M Service Cataloguing"
            text="After the good results of the cataloging workshop, the client decided to continue with the Add, Cancel and Modify service of cataloging materials and services with Minexus."
        />
        
    ]
];

const carouselItems3 = [
    [
        <CaseStudyCard
            key="solution4"
            badge="SOLUTION"
            title="New standardization and cataloging procedure"
            text="A new cataloging procedure was created with forms and master records. A correct classification was established, creating new Item Groups, Material Types and Valuation Categories."
        />,
        <CaseStudyCard
            key="standardization3" 
            badge="STANDARDIZATION"
            title="~33,200 materials"
            text="were purified and standardized  reducing them to seven types, according to customer uses."
        />
    ],
    [
        <CaseStudyCard
            key="material2"
            badge="MATERIALS"
            title="43%"
            text="were reclassified on new types"
            title2="90%"
            text2="were upgraded in their Valuation Category"
        />,
        <CaseStudyCard
            key="standarization4"
            badge="STANDARDIZATION OF DESCRIPTION"
            title="65% of materials"
            text="possible duplicates were identified."            
        />
    ],
    [
        <CaseStudyCard
            key="executionTime3"
            badge="EXECUTION TIME"
            title="1 Month"
            text="of Workshops"
            title2="5.5 Months"
            text2="of debugging."
        />,
        <CaseStudyCard
            key="continuity2"
            badge="CONTINUITY"
            title="A/B/M Service Cataloguing"
            text="After the good results of the cataloging workshop, the client decided to continue with the Add, Cancel and Modify service of cataloging materials and services with Minexus."            
        />
    ]
];

const Cataloging = () => {
    return (
        <>
        <HeroWithImage
        Badge={"CATALOGING"}
        Title={"Transform your Stock with Advanced Cataloguing"}
        Subtitle={"We focus on providing immediate solutions that optimise the accuracy and efficiency of your catalogues, thus supporting continuous improvement and strategic decision making."}
        Button={<HeroBtn text={"Discover how"}/>}
        link={""}
        ImgLink={cataloging}
        alt={"Cataloging Image"}
        background="linear-gradient(#009D5F 50%, #FAFAFF 100%)"
        />
        <div className='d-flex justify-content-center'>
        <div className='cataloging__FeaturesContainer d-flex flex-column gap-5'>
            <FeatureImgR
            Badge={"ADAPTED TO EVERY NEED"}
            Title={"Cataloging Model and Standard"}
            Subtitle={"We use a standard methodology to collect additional attribute information through our platform, ensuring consistent and efficient cataloging."}
            Button={<BlueBtn text={"Talk to sales"} />}
            link={""}
            ImgLink={CatalogingModel}
            alt={"Cataloging model"}
            background={"linear-gradient(#fff, #fff)"}
            />
            <ServiceFeatureCenter
            Badge={"CATALOGING"}
            Title={"Our specialized services"}
            Subtitle={"We offer four different services specialised in catalogue optimisation and standardisation to improve the management of materials and services according to the maturity of your company's catalogue:"}
            />
            <div className='row d-flex justify-content-center align-items-start cataloging__ServiceCards-Container'>
                    <div className='col d-flex justify-content-center align-items-center'>
                        <ServiceCard
                        img={Workshop}
                        title={"Workshop Diagnosis and recommendation"}
                        text={"We conduct a thorough analysis of the client's operations, including the study of existing data and interviews with key users, to provide customized recommendations."}
                        background="rgba(0, 157, 95, 1)"
                        />
                    </div>
                    <div className='col d-flex justify-content-center align-items-center'>
                        <ServiceCard
                        img={Debugging}
                        title={"Debugging and Normalization"}
                        text={"We offer a tool that automates the categorization and normalization of material/product descriptions, facilitating data management and maintenance."}
                        background="rgba(0, 157, 95, 1)"
                        />
                    </div>
                    <div className='col d-flex justify-content-center align-items-center'>
                        <ServiceCard
                        img={Purchase}
                        title={"Purchase Descriptions Enrichment"}
                        text={"We enrich purchase descriptions with customer-validated data, which is automatically integrated into the ERP following a jointly defined process."}
                        background="rgba(0, 157, 95, 1)"
                        />
                    </div>
                    <div className='col d-flex justify-content-center align-items-center'>
                        <ServiceCard
                        img={ADCimg}
                        title={"ADC Process for New Materials"}
                        text={"We establish an Additions, Deletions and Chances (ADC) process for new materials, promoting standardization and continuous updating of the catalog."}
                        background="rgba(0, 157, 95, 1)"
                        />
                    </div>
            </div>
            <FeatureImgL
            Badge={"PROCESS STREAMLINING"}
            Title={"Advanced Document Automation"}
            Subtitle={"Using Artificial Intelligence, we speed up document review and significantly reduce errors, ensuring fast and accurate verification of the documentation provided."}
            Button={<BlueBtn text={"Discover our products"} />}
            ImgLink={AdvancedDocument}
            alt={"Advanced Document Automation"}
            background={"linear-gradient(rgba(83, 231, 156, 0.08), rgba(83, 231, 156, 0))"}
            />
            <CaseStudy
            badge={"CASE STUDY"}
            imgLogo={AlikemLogo}
            alt={"Allkem Logo"}
            title={"How Aliken Transformed Data Handling"}
            text={"Allkem was facing significant challenges in cataloging and purging materials, which affected operational efficiency and data accuracy."}
            carouselItems={carouselItems1}
            id={"1"}
            />
            <CaseStudy
            badge={"CASE STUDY"}
            imgLogo={EnergyLogo}
            alt={"360 Energy Logo"}
            title={"360 Energy's Cataloging Transformation"}
            text={"360 Energy was facing challenges in the standardization and cataloging of materials and services, which affected the accurate classification and description of these."}
            carouselItems={carouselItems2}
            id={"2"}
            />
            <CaseStudy
            badge={"CASE STUDY"}
            imgLogo={ExarLogo}
            alt={"Exar Logo"}
            title={"Exar's Data Overhaul"}
            text={"Exar faced challenges in the standardization and cataloging of materials and services, which affected their accurate classification and description."}
            carouselItems={carouselItems3}
            id={"3"}
            />
        </div>
        </div>
        <SliderSection 
        Badge={"OUR CLIENTS"}
        Title={"Already growing with us"}
        Text={"Minexus catalyzes the success of the most dynamic start-ups and established compaies."}
        />        
        <JoinSection />
        </>
    )
}

export default Cataloging