import './heroBtn.css'

const heroBtn = ({ text }) => {
    return (
        <button className='heroBtn'> 
            {text}
            <span className='heroIcon'>  <i className="bi bi-arrow-right"></i></span>
        </button>
    )
}

export default heroBtn