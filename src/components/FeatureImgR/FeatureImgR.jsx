import './featureImgR.css'

const FeatureImgR = ({ ImgLink, alt, Title, Badge, Subtitle, link, Button, background }) => {

    const sectionStyle = {
        background: background || 'none',
    };

    return (
        
        <section className="container-fluid d-flex flex-column justify-content-center featureImgR__Container p-5 align-items-center" style={sectionStyle}>
            <div className='container'>
                <div className='row'>
                    
                    
                    <div className='col-12 col-lg-6 p-3 order-1 d-flex flex-column'>
                        <h3 className='featureImgR__Badge'>{Badge}</h3>
                        <h1 className='featureImgR__Title'>{Title}</h1>
                        <h3 className='featureImgR__Subtitle'>{Subtitle}</h3>
                        <div className='featureImgR__Button'><a href={link}>{Button}</a></div>
                    </div>
                    <div className='col-12 col-lg-6 order-md-1 d-flex justify-content-center'>
                        <img src={ImgLink} className='featureImgR__Img'alt={alt}/>
                    </div>
                </div>            
            </div>
            
        </section>
    )
}

export default FeatureImgR;