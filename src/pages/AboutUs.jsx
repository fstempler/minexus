import './styles/about.css'

//Components
import HeroNoImage from '../components/HeroNoImage/heroNoImage'

import { useTranslation } from 'react-i18next'

const AboutUs = () => {

    const { t, i18n } = useTranslation();

    return (
        <>
        <HeroNoImage 
        Kicker={t('aboutUsKicker')}
        Title={t('aboutUsTitle')}
        Subtitle={t('aboutUsSubtitle')}
        Button={""}
        />
        <div className='aboutUs__Main-Container'>
        <div className='container aboutUs__Mission-Container'>
            <div className='row'>
                <div className='col d-flex justify-content-center align-items-center'>
                    <h2 className='aboutUs__Title'>{t('aboutUsMission')}</h2>
                </div>
                <div className='col'>
                    <p className='aboutUs__Text'>{t('aboutUsMissionText')}</p>
                </div>
            </div>
        </div>
        <div className='aboutUs__Vision-MainContainer'>
            <div className='container aboutUs__Vision-Container'>
                <div className='row'>
                    <div className='col d-flex justify-content-center align-items-center'>
                        <h2 className='aboutUs__Title'>{t('aboutUsVision')}</h2>
                    </div>
                    <div className='col'>
                        <p className='aboutUs__Text'>{t('aboutUsVisionText')}</p>
                    </div>
                </div>
            </div>
        
        <div className='aboutUs__Values-Container d-flex flex-column justify-content-center align-items-center gap-5'>
            <h2 className='aboutUs__Title'>{t('aboutUsValues')}</h2>
                <div className='row d-flex justify-content-center align-items-start mt-3'>
                        <div className='col d-flex flex-column justify-content-center align-items-start'>
                            <h2 className='values__Title'>{t('aboutUsValuesTitle1')}</h2>
                            <p className='aboutUs__Text'>
                                {t('aboutUsValuesText1')}
                            </p>
                        </div>
                        <div className='col d-flex flex-column justify-content-center align-items-start'>
                            <h2 className='values__Title'>{t('aboutUsValuesTitle2')}</h2>
                            <p className='aboutUs__Text'>
                                {t('aboutUsValuesText2')}
                            </p>
                        </div>
                        <div className='col d-flex flex-column justify-content-center align-items-start'>
                            <h2 className='values__Title'>{t('aboutUsValuesTitle3')}</h2>
                            <p className='aboutUs__Text'>
                            {t('aboutUsValuesText3')}
                            </p>
                        </div>
                        <div className='col d-flex  flex-column justify-content- align-items-start'>
                            <h2 className='values__Title'>{t('aboutUsValuesTitle4')}</h2>
                            <p className='aboutUs__Text'>
                                {t('aboutUsValuesText4')}
                            </p>
                        </div>
                </div>
        </div>
        </div>

        <div className='aboutUs__Vision-MainContainer'>
            <div className='container aboutUs__Quality-Container'>
                <div className='row'>
                    <div className='col d-flex justify-content-center align-items-center'>
                        <h2 className='aboutUs__Title' id='qualityPolicies'>{t('aboutUsQualityPoliciesTitle')}</h2>
                    </div>
                    <div className='col'>
                        <p className='aboutUs__Text'>{t('aboutUsQualityPoliciesText')}</p>

                    </div>
                </div>
            </div>       
        
        </div>
        </div>

        </>
    )
}

export default AboutUs