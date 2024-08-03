import "./cardBtn.css"

const contactBtn = ({ text }) => {
    return(
        <button className="cardBtn">
            <p>{text} <span><i className="bi bi-arrow-right icon"></i></span></p>
        </button>
    )
}

export default contactBtn