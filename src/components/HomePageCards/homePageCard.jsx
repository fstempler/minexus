import "./homePageCard.css";

const homePageCard = ({ backgroundImage, categoryLogo, title, subtitle, textData1, textData2, textData3, button, link, iconColor }) => {
    const backgroundImg = {
        backgroundImage: `url(${backgroundImage})`,    
    }
    const iconColors = {
        color: iconColor,
    }
    return(
        <div className="container d-flex flex-column homePageCard__Container">
            <div className="titleContainer" style={backgroundImg}>
                <img className="categoryLogo" src={categoryLogo}/>
                <h2 className="dataContainer__Title">{title}</h2>    
            </div>
            <div className="dataContainer p-3">
                <h3 className="dataContainer__Subtitle">{subtitle}</h3>
                <hr className="dataContainer__Line"></hr>
                <ul className="p-0">
                    <li><span><i className="bi bi-check-circle-fill" style={iconColors}></i></span> {textData1}</li>
                    <li><span><i className="bi bi-check-circle-fill" style={iconColors}></i></span> {textData2}</li>
                    <li><span><i className="bi bi-check-circle-fill" style={iconColors}></i></span> {textData3}</li>
                </ul>
                <a href={link}><div className="pr-4">{button}</div></a>
            </div>
        </div>
        
    )
}

export default homePageCard;