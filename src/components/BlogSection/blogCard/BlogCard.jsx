import './blogCard.css'
import blogPic from '../../../assets/blogPic.png'

import { Link } from 'react-router-dom'


const BlogCard = ({badge, title, link}) => {
    return (
        <div className="card" style={{width: '20rem'}}>
            <img src={blogPic} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h3 className='blogSection__Badge'>{badge}</h3>
                <h5 className="card-title">{title}</h5>
                <hr></hr>                
                <div className='row d-flex flex-row'>
                    <div className='col-5 d-flex'>
                        <h5 className='blogCard__Minexus'>MINEXUS</h5>
                    </div>
                    <div className='col-7 d-flex justify-content-end'>
                        <Link to={link} className='blogCard__Link'>LEARN MORE <i className="bi bi-chevron-right"></i></Link>    
                    </div>
                    
                </div>    
            </div>
        </div>
    )
}

export default BlogCard