import "./blueBtn.css"

const blueBtn = ({ text }) => {
    return(
        <div className="blueBtn">
            <p>{text} <span><i className="bi bi-arrow-right icon blueBtn__Icon"/></span></p>
        </div>
    )
}

export default blueBtn