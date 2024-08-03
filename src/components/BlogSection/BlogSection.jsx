import './blogSection.css'
//Button
import BlueBtn from '../Buttons/blueBtn'
//Card
import Card from './blogCard/BlogCard'
const BlogSection = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='row d-flex justify-content-center gap-3'>
                    <h3 className='blogSection__Badge'>RESOURCES</h3>
                    <h2 className='blogSection__Title'>Get informed and shape your strategy</h2>
                    <p className='blogSection__Text'>Stay up to date with Minexus news that will help you stand out in your market and achieve your goals.</p>
                    <BlueBtn text={"Read all the stories"} icon={ <i className="bi bi-arrow-right"></i> }/>
                </div>
                    
                
            </div>
            <div className='row'>
                <div className='container d-flex flex-column flex-sm-row justify-content-center mt-5'>
                    <Card 
                    badge={"START-UP"}
                    title={"Benefits of belonging to an online industry community"}
                    />
                    <Card 
                    badge={"START-UP"}
                    title={"Benefits of belonging to an online industry community"}
                    />
                    <Card 
                    badge={"START-UP"}
                    title={"Benefits of belonging to an online industry community"}
                    />
                </div>
            </div>
        </div>
    )
}

export default BlogSection;