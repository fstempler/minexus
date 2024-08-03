
import './heroNoImage.css';

const heroNoImage = ({ Kicker, Title, Subtitle, Button, link }) => {
    return (
        <section className="container-fluid d-flex flex-column justify-content-center heroNoImage__Container">
            <h3 className='heroKicker'>{Kicker}</h3>
            <h1 className='heroTitle'>{Title}</h1>
            <h3 className='heroSubtitle'>{Subtitle}</h3>
            <div className='heroButton'><a href={link}>{Button}</a></div>
        </section>
    )
}

export default heroNoImage