import './sliderSection.css'
//Images Slider 1
import dance from '../../assets/topSlider/fortunaLogo.png'
import tenaris from '../../assets/topSlider/tenarisLogo.png'
import danone from '../../assets/topSlider/danoneLogo.png'
import orocobre from '../../assets/topSlider/orocobreLogo.png'
import gmp from '../../assets/topSlider/gmpLogo.png'
import dls from '../../assets/topSlider/dlsLogo.png'
import dhl from '../../assets/topSlider/dhlLogo.png'
import exar from '../../assets/topSlider/exarLogo.png'
import lake from '../../assets/topSlider/lakeLogo.png'
import lundin from '../../assets/topSlider/lundinLogo.png'
import icbc from '../../assets/topSlider/icbcLogo.png'
//Images Slider 1
import eco from '../../assets/bottomSlider/ecoLogo.png'
import sales from '../../assets/bottomSlider/salesLogo.png'
import josemaria from '../../assets/bottomSlider/josemariaLogo.png'
import eramet from '../../assets/bottomSlider/erametLogo.png'
import hochschild from '../../assets/bottomSlider/hochschildLogo.png'
import ternium from '../../assets/bottomSlider/terniumLogo.png'
import barrick from '../../assets/bottomSlider/barrickLogo.png'
import fmc from '../../assets/bottomSlider/fmcLogo.png'
import panAmerican from '../../assets/bottomSlider/panAmericanLogo.png'
import livent from '../../assets/bottomSlider/liventLogo.png'
import cbb from '../../assets/bottomSlider/cbbLogo.png'
import mansfield from '../../assets/bottomSlider/mansfieldLogo.png'
import allkem from '../../assets/bottomSlider/allkemLogo.png'
import techint from '../../assets/bottomSlider/techintLogo.png'


const SliderSection = ({ Badge, Title, Text }) => {
    return (
        <div className="container-fluid sliderSection__Container">
            <div className='container'>
                <div className='row d-flex justify-content-center row-gap-3'>
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
                                    <img src={dance} alt="Image 1" className="clientlogosSlider "/>
                                 </span>
                            </li>
                            <li className="highway-car">
                                <span className="fab">
                                    <img src={tenaris} alt="Image 2" className="clientlogosSlider "/>
                                </span>
                            </li>
                            <li className="highway-car">
                                <span className="fab">
                                    <img src={danone} alt="Image 3" className="clientlogosSlider"/>
                                </span>
                            </li>
                            <li className="highway-car">
                                <span className="fab">
                                    <img src={orocobre} alt="Image 4" className="clientlogosSlider"/>
                                </span>
                            </li>
                            <li className="highway-car">
                                <span className="fab">
                                    <img src={gmp} alt="Image 5" className="clientlogosSlider"/>
                                </span>        
                            </li>
                            <li className="highway-car">
                                <span className="fab">
                                    <img src={dls} alt="Image 6" className="clientlogosSlider"/>
                                </span>
                            </li>
                            <li className="highway-car">
                                <span className="fab">
                                    <img src={dhl} alt="Image 7" className="clientlogosSlider "/>
                                </span>
                            </li>
                            <li className="highway-car">
                                <span className="fab">
                                    <img src={exar} alt="Image 8" className="clientlogosSlider"/>
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
                                    <img src={icbc} alt="Image 10" className="clientlogosSlider"/>
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
                                    <img src={eco} alt="Image 1" className="clientlogosSlider"/>
                                </span>
                            </li>
                            <li className="highway-car">
                                <span className="fab">
                                    <img src={sales} alt="Image 2" className="clientlogosSlider"/>
                                </span>
                            </li>
                            <li className="highway-car">
                                <span className="fab">
                                    <img src={josemaria} alt="Image 3" className="clientlogosSlider"/>
                                </span>
                            </li>
                            <li className="highway-car">
                                <span className="fab">
                                    <img src={eramet} alt="Image 4" className="clientlogosSlider"/>
                                </span>
                            </li>
                            <li className="highway-car">
                                <span className="fab">
                                    <img src={hochschild} alt="Image 5" className="clientlogosSlider"/>
                                </span>
                            </li>
                            <li className="highway-car">
                                <span className="fab">
                                    <img src={ternium} alt="Image 6" className="clientlogosSlider"/>
                                </span>
                            </li>
                            <li className="highway-car">
                                <span className="fab">
                                    <img src={barrick} alt="Image 7" className="clientlogosSlider"/>
                                </span>
                            </li>
                            <li className="highway-car">
                                <span className="fab">
                                    <img src={fmc} alt="Image 8" className="clientlogosSlider"/>
                                </span>
                            </li>
                            <li className="highway-car">
                                <span className="fab">
                                    <img src={panAmerican} alt="Image 9" className="clientlogosSlider"/>
                                </span>
                            </li>
                            <li className="highway-car">
                                <span className="fab">
                                    <img src={livent} alt="Image 10" className="clientlogosSlider"/>
                                </span>
                            </li>    
                            <li className="highway-car">
                                <span className="fab">
                                    <img src={cbb} alt="Image 10" className="clientlogosSlider"/>
                                </span>
                            </li>   
                            <li className="highway-car">
                                <span className="fab">
                                    <img src={mansfield} alt="Image 10" className="clientlogosSlider"/>
                                </span>
                            </li>   
                            <li className="highway-car">
                                <span className="fab">
                                    <img src={allkem} alt="Image 10" className="clientlogosSlider"/>
                                </span>
                            </li>   
                            <li className="highway-car">
                                <span className="fab">
                                    <img src={techint} alt="Image 10" className="clientlogosSlider"/>
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