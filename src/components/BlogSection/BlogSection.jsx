import './blogSection.css'
//Button
import BlueBtn from '../Buttons/blueBtn'
//Card
import Card from './blogCard/BlogCard'

import { useTranslation } from 'react-i18next'


const BlogSection = () => {

    const { t, i18n } = useTranslation();

    return (
        <div className='container'>
            <div className='row'>
                <div className='row d-flex justify-content-center blogSection__TextContainer'>
                    <h3 className='blogSection__Badge'>{t('homeResourcesBadge')}</h3>
                    <h2 className='blogSection__Title'>{t('homeResourcesTitle')}</h2>
                    <p className='blogSection__Text'>{t('homeResourcesText')}</p>
                    <BlueBtn text={t('homeResourcesCTA')} icon={ <i className="bi bi-arrow-right"></i> }/>
                </div>
                    
                
            </div>
            <div className='row'>
                <div className='container d-flex flex-column flex-sm-row justify-content-center align-items-center mt-5'>
                    <Card 
                    badge={"START-UP"}
                    title={"Benefits of belonging to an online industry community"}
                    />
                    <Card 
                    badge={"START-UP"}
                    title={"Benefits of belonging to an online industry community"}
                    />
                    <Card 
                    badge={"START-UP"}
                    title={"Benefits of belonging to an online industry community"}
                    />
                </div>
            </div>
        </div>
    )
}

export default BlogSection;