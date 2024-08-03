import './featureCenter.css'

const FeatureCenter = ({ Badge, Title, Subtitle, link, Button, ImgLink, alt, ImgLinkMobile }) => {
    return (
        <section className="container-fluid d-flex flex-column justify-content-center featureCenter__Container p-5 align-items-center">
            <div className='container row-gap-3'>
                <div className='row d-flex justify-content-center'>
                    <h3 className='featureCenter__Badge'>{Badge}</h3>
                </div>
                <div className='row d-flex justify-content-center'>
                    <img src={ImgLink} className='featureCenter__Img'alt={alt}/>
                </div>
                <div className='row d-flex justify-content-center'>
                    <img src={ImgLinkMobile} className='featureCenterMobile__Img'alt={alt}/>
                </div>
                <div className='row d-flex justify-content-center row-gap-3'>
                    
                    <h1 className='featureCenter__Title'>{Title}</h1>
                    <h3 className='featureCenter__Subtitle'>{Subtitle}</h3>
                    <div className='featureCenter__Button d-flex justify-content-center'><a href={link}>{Button}</a></div>
                </div>                
                
            </div>
            
        </section>
    )
}

export default FeatureCenter