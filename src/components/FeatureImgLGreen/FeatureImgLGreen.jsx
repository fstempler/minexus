import './featureImgLGreen.css'

const FeatureImgLGreen = ({ ImgLink, alt, Badge, Title, Subtitle, link, Button }) => {
    return (
        
        <section className="container-fluid d-flex flex-column justify-content-center featureImgLGreen__Container p-5 align-items-center">
            <div className='container'>
                <div className='row'>
                    
                    <div className='col-12 col-lg-5 d-flex justify-content-center'>
                        <img src={ImgLink} className='featureImgLGreen__Img'alt={alt}/>
                    </div>
                    <div className='col-12 col-lg-7 p-3 d-flex flex-column justify-content-center'>
                        <h3 className='featureImgLGreen__Badge'>{Badge}</h3>
                        <h1 className='featureImgLGreen__Title'>{Title}</h1>
                        <h3 className='featureImgLGreen__Subtitle'>{Subtitle}</h3>
                        <div className='featureImgLGreen__Button'><a href={link}>{Button}</a></div>
                    </div>
                    

                </div>            
            </div>
            
        </section>
    )
}

export default FeatureImgLGreen;