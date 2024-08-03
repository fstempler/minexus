import "./blueBtn.css"

const blueBtn = ({ text }) => {
    return(
        <div className="blueBtn">
            <p>{text} <span><i className="bi bi-arrow-right icon"/></span></p>
        </div>
    )
}

export default blueBtn