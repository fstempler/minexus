import './subscribeForm.css'

const SubscribeForm = () => {
    return (
        <form>
            <input placeholder='your@email.com' className='subscribeForm__Input'></input>
            <button className='subscribeForm__Button'>Subscribe</button>
        </form>
    )
}

export default SubscribeForm