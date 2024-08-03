//Components
import Navbar from './components/Navbar/navbar'
import HeroWithImage from './components/HeroWithImage/HeroWithImage'
import HeroNoImage from './components/HeroNoImage/heroNoImage'
import HeroBtn from './components/Buttons/heroBtn'
import HomePageCard from './components/HomePageCards/homePageCard'
import CardBtn from './components/Buttons/cardBtn'
import FeatureImgR from './components/FeatureImgR/FeatureImgR'
import BlueBtn from './components/Buttons/blueBtn'
import FeatureImgL from './components/FeatureImgL/FeatureImgL'
import FeatureImgLGreen from './components/FeatureImgLGreen/FeatureImgLGreen'
import FeatureCenter from './components/FeatureCenter/FeatureCenter'
import SliderSection from './components/SliderSection/SliderSection'
import CaseStudy from './components/CaseStudy/CaseStudy'
import PartnerSection from './components/PartnersSection/PartnersSection'
import JoinSection from './components/JoinSection/JoinSection'
import BlogSection from './components/BlogSection/BlogSection'
import Footer from './components/Footer/Footer'
//Pages
//Images
import Background1 from './assets/Gradient Background.png'
import HeroImg from './assets/CODIN img.png'
import SupplyChainManagement from './assets/Supply Chain Management.png'
import DataOptimization from './assets/Data Optimization.png'
import AdvancedDocumentAutomation from './assets/Advanced Document Automation.png'
import ERPintegration from './assets/ERP Integration.png'
import ERPintegrationMobile from './assets/ERPs Connected to Minexus_Mobile.png'
//styles
import './App.css'

function App() {
  

  return (
    <>
    <Navbar />    
    <HeroWithImage
    Tag={"Connecting Industries Smartly"}
    Title={"CODIN"}
    Subtitle={"We strengthen the connection between customers and suppliers using disruptive technologies such as Blockchain and AI. Our goal is to achieve optimal, automatic and reliable supply chain management."}
    Button={<HeroBtn text={"See our solutions"}/>}
    link={"http://www.google.com"}
    ImgLink={HeroImg}
    alt={"CODING"}
    backgroundImage={Background1}
    />

    <FeatureImgR
    Tag={"Intelligent Supplier Connection"}
    Title={"SUPPLY CHAIN MANAGEMENT"}
    Subtitle={"We strengthen the connection between customers and suppliers using disruptive technologies such as Blockchain and AI. Our goal is to achieve optimal, automatic and reliable supply chain management."}
    Button={<BlueBtn text={"Discover CODIN"} icon={ <i className="bi bi-arrow-right"></i> }/>}
    link={"http://www.google.com"}
    ImgLink={SupplyChainManagement}
    alt={"Supply Chain Management"}    
    />

    <FeatureImgLGreen
    Tag={"Advanced Document Automation"}
    Title={"PROCESS STREAMLINING"}
    Subtitle={"Using Artificial Intelligence, we speed up document review and significantly reduce errors, ensuring fast and accurate verification of the documentation provided."}
    Button={<BlueBtn text={"Discover our products"} icon={ <i className="bi bi-arrow-right"></i> }/>}
    link={"http://www.google.com"}
    ImgLink={AdvancedDocumentAutomation}
    alt={"AdvancedDocumentAutomation"}    
    />

    <FeatureImgL
    Tag={"Manage your data to make the right decisions."}
    Title={"DATA OPTIMIZATION"}
    Subtitle={"Using Artificial Intelligence, we speed up document review and significantly reduce errors, ensuring fast and accurate verification of the documentation provided."}
    Button={<BlueBtn text={"See how"} icon={ <i className="bi bi-arrow-right"></i> }/>}
    link={"http://www.google.com"}
    ImgLink={DataOptimization}
    alt={"Supply Chain Management"}    
    />

    <FeatureCenter
      Tag={"Simplified management of your company"}
      Title={"DATA OPTIMIZATION"}
      Subtitle={"Enables seamless data synchronization, optimizing operational and procurement processes."}
      Button={<BlueBtn text={"Discover Cataloging"} icon={ <i className="bi bi-arrow-right"></i> }/>}
      link={"http://www.google.com"}
      ImgLink={ERPintegration}
      ImgLinkMobile={ERPintegrationMobile}
      alt={"Supply Chain Management"}    
    />  
    <SliderSection
      Title={"OUR CLIENTS"}
      Subtitle={"Already growing with us"}
      Text={"Minexus catalyzes the success of the most dynamic start-ups and established compaies."}
    />  
    <CaseStudy />
    <PartnerSection />
    <JoinSection />
    <BlogSection />
    <Footer />

    </>
    
  )
}

export default App
