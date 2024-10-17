import './sliderSection.css'
//Images Slider 1
import energy from '../../assets/topSlider/360Energylogo.png'
import danone from '../../assets/topSlider/Danone.png'
import dhl from '../../assets/topSlider/dhl.png'
import dls from '../../assets/topSlider/dls.png'
import eco from '../../assets/topSlider/Eco.png'
import exar from '../../assets/topSlider/Exar.png'
import fortuna from '../../assets/topSlider/Fortuna.png'
import gmp from '../../assets/topSlider/GMP.png'
import icbc from '../../assets/topSlider/ICBC.png'
import josemaria from '../../assets/topSlider/JoseMaria.png'
import lake from '../../assets/topSlider/Lake.png'
import lundin from '../../assets/topSlider/Lundin.png'
import orocobre from '../../assets/topSlider/Orocobre.png'
import panamerican from '../../assets/topSlider/panamericansilver.png'
import sales from '../../assets/topSlider/Sales.png'
import techint from '../../assets/topSlider/Techint.png'
import tenaris from '../../assets/topSlider/Tenaris.png'


//Images Slider 2
import allkem from '../../assets/bottomSlider/allkem.png'
import anglogold from '../../assets/bottomSlider/anglogold.png'
import barrick from '../../assets/bottomSlider/barrick.png'
import cbb from '../../assets/bottomSlider/cbb.png'
import EPSELogo from '../../assets/bottomSlider/EPSELogo.png'
import eramet from '../../assets/bottomSlider/eramet.png'
import fmc from '../../assets/bottomSlider/fmc.png'
import GalanLithiumLogo from '../../assets/bottomSlider/GalanLithiumLogo.png'
import glencore from '../../assets/bottomSlider/glencore.png'
import livent from '../../assets/bottomSlider/Livent.png'
import lundinmining from '../../assets/bottomSlider/lundinmininglogo.png'
import mansfield from '../../assets/bottomSlider/Mansfield.png'
import mara from '../../assets/bottomSlider/Mara-logo-mobile.png'
import riotinto from '../../assets/bottomSlider/RiotintoLogo.png'
import ssr from '../../assets/bottomSlider/SSRMining.png'
import ternium from '../../assets/bottomSlider/Ternium.png'


const SliderSection = ({ Badge, Title, Text }) => {
    return (
        <div className="container-fluid sliderSection__Container">
            <div className='container'>
                <div className='row d-flex justify-content-center'>
                    <h3 className='sliderSection__Badge'>{Badge}</h3>
                    <h3 className='sliderSection__Title'>{Title}</h3>
                    <p className='sliderSection__Text'>{Text}</p>
                </div>                
            <section className="slide-option">        
                <div id="infinite-left" className="highway-slider">
                    <div className="container highway-barrier">
                        <ul className="highway-lane">
                            <li className="highway-car">
                                <span className="fab">
                                    <img src={energy} alt="Image 1" className="clientlogosSlider "/>
                                 </span>
                            </li>
                            <li className="highway-car">
                                <span className="fab">
                                    <img src={danone} alt="Image 1" className="clientlogosSlider "/>
                                 </span>
                            </li>
                            <li className="highway-car">
                                <span className="fab">
                                    <img src={dhl} alt="Image 2" className="clientlogosSlider "/>
                                </span>
                            </li>
                            <li className="highway-car">
                                <span className="fab">
                                    <img src={dls} alt="Image 3" className="clientlogosSlider"/>
                                </span>
                            </li>
                            <li className="highway-car">
                                <span className="fab">
                                    <img src={eco} alt="Image 4" className="clientlogosSlider"/>
                                </span>
                            </li>
                            <li className="highway-car">
                                <span className="fab">
                                    <img src={exar} alt="Image 5" className="clientlogosSlider"/>
                                </span>        
                            </li>
                            <li className="highway-car">
                                <span className="fab">
                                    <img src={fortuna} alt="Image 6" className="clientlogosSlider"/>
                                </span>
                            </li>
                            <li className="highway-car">
                                <span className="fab">
                                    <img src={gmp} alt="Image 7" className="clientlogosSlider "/>
                                </span>
                            </li>
                            <li className="highway-car">
                                <span className="fab">
                                    <img src={icbc} alt="Image 8" className="clientlogosSlider"/>
                                </span>
                            </li>
                            <li className="highway-car">
                                <span className="fab">
                                    <img src={josemaria} alt="Image 8" className="clientlogosSlider"/>
                                </span>
                            </li>
                            <li className="highway-car">
                                <span className="fab">
                                    <img src={lake} alt="Image 9" className="clientlogosSlider"/>
                                </span>
                            </li>
                            <li className="highway-car">
                                <span className="fab">
                                    <img src={lundin} alt="Image 10" className="clientlogosSlider"/>
                                </span>
                            </li>                                                
                            <li className="highway-car">
                                <span className="fab">
                                    <img src={orocobre} alt="Image 10" className="clientlogosSlider"/>
                                </span>
                            </li> 
                            <li className="highway-car">
                                <span className="fab">
                                    <img src={panamerican} alt="Image 10" className="clientlogosSlider"/>
                                </span>
                            </li>                       
                            <li className="highway-car">
                                <span className="fab">
                                    <img src={sales} alt="Image 10" className="clientlogosSlider"/>
                                </span>
                            </li>                  
                            <li className="highway-car">
                                <span className="fab">
                                    <img src={techint} alt="Image 10" className="clientlogosSlider"/>
                                </span>
                            </li>                    
                            <li className="highway-car">
                                <span className="fab">
                                    <img src={tenaris} alt="Image 10" className="clientlogosSlider"/>
                                </span>
                            </li>                         
                        </ul>
                    </div>
                </div>
            </section> 

            {/* BOTTOM SLIDER */}
                
            <section className="slide-option">        
                <div id="infinite-right" className="highway-slider">
                    <div className="container highway-barrier">
                        <ul className="highway-lane">
                            <li className="highway-car">
                                <span className="fab">
                                    <img src={allkem} alt="Image 1" className="clientlogosSlider"/>
                                </span>
                            </li>
                            <li className="highway-car">
                                <span className="fab">
                                    <img src={anglogold} alt="Image 2" className="clientlogosSlider"/>
                                </span>
                            </li>
                            <li className="highway-car">
                                <span className="fab">
                                    <img src={barrick} alt="Image 3" className="clientlogosSlider"/>
                                </span>
                            </li>
                            <li className="highway-car">
                                <span className="fab">
                                    <img src={cbb} alt="Image 4" className="clientlogosSlider"/>
                                </span>
                            </li>
                            <li className="highway-car">
                                <span className="fab">
                                    <img src={EPSELogo} alt="Image 5" className="clientlogosSlider"/>
                                </span>
                            </li>
                            <li className="highway-car">
                                <span className="fab">
                                    <img src={eramet} alt="Image 6" className="clientlogosSlider"/>
                                </span>
                            </li>
                            <li className="highway-car">
                                <span className="fab">
                                    <img src={fmc} alt="Image 7" className="clientlogosSlider"/>
                                </span>
                            </li>
                            <li className="highway-car">
                                <span className="fab">
                                    <img src={GalanLithiumLogo} alt="Image 8" className="clientlogosSlider"/>
                                </span>
                            </li>
                            <li className="highway-car">
                                <span className="fab">
                                    <img src={glencore} alt="Image 9" className="clientlogosSlider"/>
                                </span>
                            </li>
                            <li className="highway-car">
                                <span className="fab">
                                    <img src={livent} alt="Image 10" className="clientlogosSlider"/>
                                </span>
                            </li>    
                            <li className="highway-car">
                                <span className="fab">
                                    <img src={lundinmining} alt="Image 10" className="clientlogosSlider"/>
                                </span>
                            </li>   
                            <li className="highway-car">
                                <span className="fab">
                                    <img src={mansfield} alt="Image 10" className="clientlogosSlider"/>
                                </span>
                            </li>   
                            <li className="highway-car">
                                <span className="fab">
                                    <img src={mara} alt="Image 10" className="clientlogosSlider"/>
                                </span>
                            </li>   
                            <li className="highway-car">
                                <span className="fab">
                                    <img src={riotinto} alt="Image 10" className="clientlogosSlider"/>
                                </span>
                            </li>                   
                            <li className="highway-car">
                                <span className="fab">
                                    <img src={ssr} alt="Image 10" className="clientlogosSlider"/>
                                </span>
                            </li>                   
                            <li className="highway-car">
                                <span className="fab">
                                    <img src={ternium} alt="Image 10" className="clientlogosSlider"/>
                                </span>
                            </li>                   
                        </ul>
                    </div>
                </div>
            </section> 
                
                
            </div>
        </div>
    )
}

export default SliderSection;