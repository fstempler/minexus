import "./contactBtn.css"

const contactBtn = ({ text, icon }) => {
    return(
        <div className="contactBtn">
            <p> <span>{icon}</span> {text}</p>
        </div>
    )
}

export default contactBtn