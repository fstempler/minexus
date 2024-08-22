import "./blueBtnNav.css"

const blueBtn = ({ text }) => {
    return(
        <div className="blueBtnNav">
            <p>{text} <span><i className="bi bi-arrow-right icon"/></span></p>
        </div>
    )
}

export default blueBtn