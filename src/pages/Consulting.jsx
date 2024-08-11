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
import Background from '../assets/Gradient Background.png'
import Procurment from '../assets/Procurement Outsurcing.png'
import SAPimg from '../assets/ServiceCardsImg/Consulting/SAP.png'
import Purchase from '../assets/ServiceCardsImg/Consulting/Purchase.png'
import Sourcing from '../assets/ServiceCardsImg/Consulting/Sourcing.png'
import Warehouse from '../assets/ServiceCardsImg/Consulting/Warehouse.png'
import Audits from '../assets/ServiceCardsImg/Consulting/Audits.png'
import MRPimg from '../assets/ServiceCardsImg/Consulting/MRP.png'

const ConsultingPage = () => {
    return (
        <>
            <HeroWithImage
            Badge={"CONSULTING"}
            Title={"Boost your Business with Specialized Consulting"}
            Subtitle={"Our vision is to provide customised solutions that drive operational efficiency, add value and optimise your company's supply chain."}
            Button={<HeroBtn text={"Take Advantage"} />}
            link={""}
            ImgLink={Consulting}
            alt={"Consulting Image"}
            backgroundImage={Background}
            />
            <div className='consulting__FeaturesContainer d-flex flex-column gap-5'>
                <FeatureImgL
                Badge={"CATALOGING WITH US"}
                Title={"Procurement Outsourcing, domestic and global"}
                Subtitle={"Integral optimisation of procurement processes to maximise value and efficiency without the need to increase the number of employees in your company. "}
                Button={<BlueBtn text={"Let's talk"}/>}
                link={""}
                ImgLink={Procurment}
                alt={"Procurement Outsourcing"}
                background={"linear-gradient(rgba(83, 231, 156, 0.08), rgba(83, 231, 156, 0))"}
                />
            </div>

            <ServiceFeatureCenter
                Badge={"CONSULTING"}
                Title={"Our specialized services"}
                Subtitle={"Minexus offers a wide range of consulting services designed to boost the efficiency and operational effectiveness of your company's supply chain:"}
            />
                <div className='row d-flex justify-content-center align-items-center codin__ServiceCards-Container'>
                    <div className='col d-flex justify-content-center align-items-center'>
                        <ServiceCard
                        img={SAPimg}
                        title={"Supplier Mapping"}
                        text={"Gain a clear view of your supply chain and optimize supplier selection"}
                        />
                    </div>
                    <div className='col d-flex justify-content-center align-items-center codin__ServiceCards-MiddleColumn'>
                        <ServiceCard
                        img={Purchase}
                        title={"Performance Evaluation"}
                        text={"Gain a clear view of your supply chain and optimize supplier selection"}
                        />
                    </div>
                    <div className='col d-flex justify-content-center align-items-center'>
                        <ServiceCard
                        img={Sourcing}
                        title={"Contractors Control"}
                        text={"Gain a clear view of your supply chain and optimize supplier selection"}
                        />
                    </div>
                </div>
                <div className='row d-flex justify-content-center align-items-center codin__ServiceCards-Container'>
                    <div className='col d-flex justify-content-center align-items-center'>
                        <ServiceCard
                        img={Warehouse}
                        title={"Data Quality Management"}
                        text={"Make informed decisions with accurate, high-quality data."}
                        />
                    </div>
                    <div className='col d-flex justify-content-center align-items-center codin__ServiceCards-MiddleColumn'>
                        <ServiceCard
                        img={Audits}
                        title={"Prequalification, Restricted Lists and Conflicts of Interest"}
                        text={"Minimize risk and ensure excellence with a comprehensive prequalification process."}
                        />
                    </div>
                    <div className='col d-flex justify-content-center align-items-center'>
                        <ServiceCard
                        img={MRPimg}
                        title={"Contract Management and Certification"}
                        text={"Streamline contract administration and ensure certification with standardized processes."}
                        />
                    </div>
                </div>
                <JoinSection />
        </>
    )
}

export default ConsultingPage