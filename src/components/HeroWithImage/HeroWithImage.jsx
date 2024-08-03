
import './heroWithImage.css';

const heroNoImage = ({ Tag, Title, Subtitle, Button, link, ImgLink, alt, backgroundImage }) => {
    const backgroundImg = {
        backgroundImage: `url(${backgroundImage})`,    
    }
    return (
        <section className="container-fluid d-flex flex-column justify-content-start hero__NoImage-Container" style={backgroundImg}>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-lg-6 order-1 p-3'>
                        <h3 className='heroSectionTitle'>{Title}</h3>
                        <h1 className='heroSectionTag'>{Tag}</h1>
                        <h3 className='heroSectionSubtitle'>{Subtitle}</h3>
                        <div className='heroSectionButton'><a href={link}>{Button}</a></div>
                    </div>
                    <div className='col-12 col-lg-6 order-md-1'>
                        <img src={ImgLink} className='heroSectionImg'alt={alt}/>
                    </div>
                </div>            
            </div>
            
        </section>
    )
}

export default heroNoImage