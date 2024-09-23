/* eslint-disable react/jsx-key */
//Style
import './styles/resources.css'


//Components
import HeroNoImage from '../components/HeroNoImage/heroNoImage'
import BlogCard from '../components/BlogSection/blogCard/BlogCard'

import { useTranslation } from 'react-i18next'




const Resources = () => {
    
    const { t, i18n } = useTranslation();

    

    return(
        <>
        <HeroNoImage 
        Kicker={"MINEXUS CENTRAL"}
        Title={"Resources"}
        Subtitle={"Discover Minexus articles for the latest industry trends and news to achieve your strategic market goals."}        
        />
        <div className='container-fluid resources__MainContainer'>
            <div className='row'>
            <div className=' col-sm-4 categories_Container'>
                <div className='categories'>
                    <ul>
                        <li><h2 className='categories__Title'>Categories</h2></li>
                        <li><p className='categories__Link'>Blockchain</p></li>
                        <li><p className='categories__Link'>Cataloging</p></li>
                        <li><p className='categories__Link'>Industrial Development Community</p></li>
                        <li><p className='categories__Link'>Access control</p></li>
                        <li><p className='categories__Link'>Contractor control</p></li>
                        <li><p className='categories__Link'>Hotel Management</p></li>
                        <li><p className='categories__Link'>Hotel Management</p></li>
                        <li><p className='categories__Link'>Hotel Management</p></li>
                    </ul>
                    
                </div>
            </div>

            <div className='col-sm-8 categories__CardContainer' >
                <div className='row'>
                    <div className='col'>
                        <BlogCard
                        badge={"START-UP"}
                        title={"Benefits of belonging to an online industry community"}
                        link={'/post'}
                        />
                    </div>
                    <div className='col'>
                        <BlogCard
                        badge={"START-UP"}
                        title={"Benefits of belonging to an online industry community"}
                        link={'/post'}
                        />
                    </div>    
                </div>
                <div className='row'>
                    <div className='col'>
                        <BlogCard
                        badge={"START-UP"}
                        title={"Benefits of belonging to an online industry community"}
                        link={'/post'}
                        />
                    </div>
                    <div className='col'>
                        <BlogCard
                        badge={"START-UP"}
                        title={"Benefits of belonging to an online industry community"}
                        link={'/post'}
                        />
                    </div>    
                </div>
                <div className='row'>
                    <div className='col'>
                        <BlogCard
                        badge={"START-UP"}
                        title={"Benefits of belonging to an online industry community"}
                        link={'/post'}
                        />
                    </div>
                    <div className='col'>
                        <BlogCard
                        badge={"START-UP"}
                        title={"Benefits of belonging to an online industry community"}
                        link={'/post'}
                        />
                    </div>    
                </div>
                
                
                
            </div>
            </div>
        </div>
        </>
    )
}

export default Resources