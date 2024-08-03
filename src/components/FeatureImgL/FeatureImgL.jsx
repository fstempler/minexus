import './featureImgL.css'

const FeatureImgL = ({ ImgLink, alt, Title, Tag, Subtitle, link, Button }) => {
    return (
        
        <section className="container-fluid d-flex flex-column justify-content-center featureImgL__Container p-5 align-items-center">
            <div className='container'>
                <div className='row'>
                    
                    
                    <div className='col-12 col-lg-6 p-3 order-sm-1'>
                        <h3 className='featureImgL__Title'>{Title}</h3>
                        <h1 className='featureImgL__Tag'>{Tag}</h1>
                        <h3 className='featureImgL__Subtitle'>{Subtitle}</h3>
                        <div className='featureImgL__Button'><a href={link}>{Button}</a></div>
                    </div>
                    <div className='col-12 col-lg-6 d-flex justify-content-center'>
                        <img src={ImgLink} className='featureImgL__Img'alt={alt}/>
                    </div>

                </div>            
            </div>
            
        </section>
    )
}

export default FeatureImgL;