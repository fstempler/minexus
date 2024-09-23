/* eslint-disable react/jsx-key */
//Style
import './styles/post.css'
//Images
import postImg from '../assets/blogPic.png'

import { useTranslation } from 'react-i18next'




const Post = () => {
    
    const { t, i18n } = useTranslation();

    

    return(
        <>
        <div className='post__ImageHeader-Container'>
            
        </div>
        <div className='container-fluid resources__MainContainer'>
            <div className='row'>
            <div className=' col-sm-4 categories_Container'>
                <div className='categories'>
                    <ul>
                        <li><h2 className='categories__Title'>Categories</h2></li>
                        <li><p className='categories__Link'>Blockchain</p></li>
                        <li><p className='categories__Link'>Cataloging</p></li>
                        <li><p className='categories__Link'>Industrial Development Community</p></li>
                        <li><p className='categories__Link'>Access control</p></li>
                        <li><p className='categories__Link'>Contractor control</p></li>
                        <li><p className='categories__Link'>Hotel Management</p></li>
                        <li><p className='categories__Link'>Hotel Management</p></li>
                        <li><p className='categories__Link'>Hotel Management</p></li>
                    </ul>
                    
                </div>
            </div>

            <div className='col-sm-8 categories__CardContainer' >
                <h2 className='post__Title'>Benefits of belonging to an online industry community</h2>
                <h3 className='post__Badge'>START-UP</h3>
                <p className='post__Text'>Belonging to an online industry community can offer a number of significant benefits for professionals and companies involved in that sector. Some of the main benefits include:</p>

                <p className='post__Text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et faucibus odio. In cursus non orci ac pulvinar. Pellentesque lacus libero, ornare vitae mattis ut, auctor ut ante. Vivamus varius lacus a lectus vulputate, a laoreet magna tempor. Phasellus viverra turpis sed sapien tincidunt, at rutrum mauris maximus. Aliquam malesuada eget odio sed dictum. Etiam rutrum nisi a ullamcorper hendrerit. Vestibulum nisl tellus, posuere sit amet ipsum ac, placerat semper ligula. Proin tellus risus, sodales vel est in, fermentum rhoncus diam. Curabitur tincidunt cursus mi, sit amet gravida nisi vehicula a. Duis lobortis ex nec metus dapibus sollicitudin. In malesuada congue ligula, et tempus turpis tincidunt ac. Maecenas et neque id augue dignissim elementum. Sed et nibh tristique, finibus elit eu, efficitur ligula. Morbi luctus feugiat mi, nec rhoncus tellus.
                    Morbi mattis odio sit amet maximus dictum. Vivamus quis magna ex. Cras pharetra felis enim, nec semper lacus eleifend vel. Mauris tincidunt euismod accumsan. Cras condimentum varius lorem et fringilla. Sed in lacus at sem viverra maximus a id tortor. Integer dapibus porttitor leo in auctor. Nunc interdum placerat ex, a interdum orci pretium eget. Sed id cursus nulla. Fusce euismod erat et venenatis maximus. Maecenas aliquam magna nec mattis maximus. In nec maximus leo, eget lacinia libero. Mauris ullamcorper eros odio, nec tristique dui ultricies eu.
                    Morbi posuere mollis mattis. Aenean vulputate urna massa, nec iaculis sapien ultricies eu. Mauris blandit accumsan rutrum. Nullam ultrices congue viverra. Donec molestie, tortor quis volutpat convallis, nisl nisl venenatis nisl, sed efficitur nunc odio sed sem. Etiam volutpat metus a ipsum vulputate lobortis. Sed ut malesuada ligula. Proin porttitor vehicula purus, in dapibus est facilisis sit amet. Nulla varius ligula vel suscipit condimentum. Nullam efficitur posuere varius. Quisque vitae mattis ligula, id congue ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                    Phasellus urna neque, fringilla tincidunt aliquam eu, gravida sit amet tellus. Sed ac finibus erat. Curabitur venenatis, eros sit amet hendrerit sagittis, risus tellus mollis ipsum, sit amet tempus quam nulla eget ante. Etiam quis massa eget felis auctor luctus. Fusce at mauris non nulla fringilla posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque eleifend malesuada neque sit amet feugiat. Duis efficitur rutrum nulla molestie congue. Maecenas purus tortor, auctor ut iaculis eget, lobortis a tellus. Maecenas non lacus id urna feugiat maximus vitae nec elit. Curabitur sit amet mauris id augue faucibus sollicitudin eget porta nunc. Sed maximus orci sed nisi sagittis, placerat sagittis eros cursus. Quisque ac congue purus. Proin magna tellus, feugiat at metus a, mattis lobortis dolor.
                    Vivamus tristique, quam nec ultricies volutpat, tortor ipsum condimentum sapien, efficitur tincidunt orci neque ac ligula. Praesent sagittis pretium aliquam. Nulla egestas sagittis ligula sit amet ullamcorper. Nulla in nisl vulputate neque varius dapibus. Fusce malesuada justo a turpis facilisis, eu dictum tortor dictum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam condimentum, nisi eget aliquet semper, massa est volutpat velit, in porttitor turpis dui id neque.
                </p>
                <img src={postImg} alt='Blog Image' className='post__Image'></img>
                
                
                
            </div>
            </div>
        </div>
        </>
    )
}

export default Post