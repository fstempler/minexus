
import './heroWithImage.css';

const heroNoImage = ({ Title, Badge, Subtitle, Button, link, ImgLink, alt, background }) => {

    const sectionStyle = {
        background: background || 'none',
    };


    return (
        <section className="container-fluid d-flex flex-column justify-content-start align-items-center hero__WithImage-Container" style={sectionStyle}>
            <div className='container'>
                <div className='row heroWithImage__DataContainer'>
                    <div className='col-12 col-lg-6 order-1 p-3 d-flex flex-column gap-3'>
                        <h3 className='heroSectionBadge'>{Badge}</h3>
                        <h1 className='heroSectionTitle'>{Title}</h1>
                        <h3 className='heroSectionSubtitle'>{Subtitle}</h3>
                        <div className='heroSectionButton'><a href={link}>{Button}</a></div>
                    </div>
                    <div className='col-12 col-lg-6 order-md-1 d-flex justify-content-center align-items-center'>
                        <img src={ImgLink} className='heroSectionImg'alt={alt}/>
                    </div>
                </div>            
            </div>
            
        </section>
    )
}

export default heroNoImage