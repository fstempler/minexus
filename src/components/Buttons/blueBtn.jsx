import "./blueBtn.css"

const blueBtn = ({ text, icon }) => {
    return(
        <div className="blueBtn">
            <p>{text} <span>{icon}</span></p>
        </div>
    )
}

export default blueBtn