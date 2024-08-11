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
import HeroBackground from '../assets/Gradient Background.png'
import VirtualCommunity from '../assets/Virtual Community.png'
import SupplyChain from '../assets/Supply Chain Management.png'
import AssuredAccuracy from '../assets/Asured Accuracy.png'
import SupplierMapping from '../assets/ServiceCardsImg/Codin/SupplierMapping.png'
import PerformanceEvaluation from '../assets/ServiceCardsImg/Codin/PerformanceEvaluation.png'
import ContractorsControl from '../assets/ServiceCardsImg/Codin/ContractorsControl.png'
import DataQuality from '../assets/ServiceCardsImg/Codin/DataQuality.png'
import Prequalification from '../assets/ServiceCardsImg/Codin/Prequalification.png'
import Contract from '../assets/ServiceCardsImg/Codin/Contract.png'


const Codin = () => {
    return (
        <>
            <Header            
            Badge={"CODIN"}
            Title={"Connecting Industries Smartly"}
            Subtitle={"Our platform transforms review times. With artificial intelligence we accelerate processes and minimize errors."}
            Button={<HeroBtn text={"Discover CODIN"}/>}
            link={"http://www.google.com"}
            ImgLink={CodinImg}
            alt={"CODIN Image"}
            backgroundImage={HeroBackground}
            />
            <div className='codin__FeaturesContainer d-flex flex-column gap-5'>
                <FeatureImgL
                Badge={"INDUSTRIAL CONECTIVITY"}
                Title={"Linking Suppliers in a Virtual Community"}
                Subtitle={"CODIN creates a collaborative space for suppliers and industrialists, fostering communication and joint development in an integrated virtual environment."}
                Button={<BlueBtn text={"Discover our products"}/>}
                link={"http://www.google.com"}
                ImgLink={VirtualCommunity}
                alt={"Virtual Community"}
                />
                <FeatureImgR
                Badge={"SUPPLY CHAIN MANAGEMENT"}
                Title={"Intelligent Supplier Connection"}
                Subtitle={"We strengthen the connection between customers and suppliers using disruptive technologies such as Blockchain and AI. Our goal is to achieve optimal, automatic and reliable supply chain management."}
                Button={<BlueBtn text={"See our solutions"}/>}
                link={"http://www.google.com"}
                ImgLink={SupplyChain}
                alt={"Supply Chain Management"}
                background="linear-gradient(rgba(60, 103, 255, 0.08), rgba(60, 103, 255, 0))"
                />
                <FeatureImgLGreen
                Badge={"INDUSTRIAL CONNECTIVITY"}
                Title={"Assured Accuracy"}
                Subtitle={"Our technology identifies and highlights errors in minutes, allowing suppliers to quickly correct and secure approval of their documentation."}
                Button={<BlueBtn text={"See our solutions"}/>}
                ImgLink={AssuredAccuracy}
                alt={"Assured Accuracy"}
                />
                <ServiceFeatureCenter
                Badge={"THE CODIN EXPERIENCE"}
                Title={"Efficient Management"}
                Subtitle={"Ensure excellence and compliance at every stage with a platform that simplifies management and continuously improves data quality."}
                />
                <div className='row d-flex justify-content-center align-items-center codin__ServiceCards-Container'>
                    <div className='col d-flex justify-content-center align-items-center'>
                        <ServiceCard
                        img={SupplierMapping}
                        title={"Supplier Mapping"}
                        text={"Gain a clear view of your supply chain and optimize supplier selection"}
                        />
                    </div>
                    <div className='col d-flex justify-content-center align-items-center codin__ServiceCards-MiddleColumn'>
                        <ServiceCard
                        img={PerformanceEvaluation}
                        title={"Performance Evaluation"}
                        text={"Gain a clear view of your supply chain and optimize supplier selection"}
                        />
                    </div>
                    <div className='col d-flex justify-content-center align-items-center'>
                        <ServiceCard
                        img={ContractorsControl}
                        title={"Contractors Control"}
                        text={"Gain a clear view of your supply chain and optimize supplier selection"}
                        />
                    </div>
                </div>
                <div className='row d-flex justify-content-center align-items-center codin__ServiceCards-Container'>
                    <div className='col d-flex justify-content-center align-items-center'>
                        <ServiceCard
                        img={DataQuality}
                        title={"Data Quality Management"}
                        text={"Make informed decisions with accurate, high-quality data."}
                        />
                    </div>
                    <div className='col d-flex justify-content-center align-items-center codin__ServiceCards-MiddleColumn'>
                        <ServiceCard
                        img={Prequalification}
                        title={"Prequalification, Restricted Lists and Conflicts of Interest"}
                        text={"Minimize risk and ensure excellence with a comprehensive prequalification process."}
                        />
                    </div>
                    <div className='col d-flex justify-content-center align-items-center'>
                        <ServiceCard
                        img={Contract}
                        title={"Contract Management and Certification"}
                        text={"Streamline contract administration and ensure certification with standardized processes."}
                        />
                    </div>
                </div>
                <SliderSection 
                Badge={"OUR CLIENTS"}
                Title={"Already growing with us"}
                Text={"Minexus catalyzes the success of the most dynamic start-ups and established compaies."}
                />
                <JoinSection />
            </div>
            <FAQSection
            Badge={"CODIN"}
            Title={"Frequently Asked Questions"}
            />
            
        </>
    )
}

export default Codin