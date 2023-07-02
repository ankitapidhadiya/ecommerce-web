import OwlCarousel from 'react-owl-carousel';  
import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css'; 

const ListCategory =(props) =>{
    const [Category, setCategory] = useState([{
      id:0,
      image:'/img/categories/category-1.jpg',
      catTitle:'Striped Shirt', 
    },{
        id:1,
      image:'/img/categories/category-2.jpg',
      catTitle:'V-neck Shirt',  
    },{
        id:2,
      image:'/img/categories/category-3.jpg',
      catTitle:'Polo Shirt',  
    },{
        id:3,
      image:'/img/categories/category-4.jpg',
      catTitle:'Henley Shirt',  
    }
])
    const handleClickFn = () => {
        console.log('clciked')
      }
    return(
     <div className="list-category section-margin-top">
        <div className='container-fluid'>
            <div className='category-box'>
                <h2 className='product-section-title'>
                    Shop By Category
                </h2>
                <div className='row'>
                    <div className='category-box-inner'>
                    <OwlCarousel items={4}  
                        className="products product-carousal owl-theme"  
                        loop={false}
                        autoplayHoverPause={true}
                        autoheight="true"
                        nav  
                        >
                        { ListCategory && Category.length ? Category.map((item, i) => {
                          return(
                            <div className='category-layout col-xs-12' key={i}>
                                <div className='category-outer-block'>
                                    <div className='category-img'>
                                        <a href='#' className='cat-img'>
                                            <img src={item.image} alt="Girls Shirt" />
                                        </a>
                                    </div>
                                    <div className='category-desc'>
                                        <div className='cat-title'>
                                            <a href='#'>{item.catTitle}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                          )
                        }) : <></>}
                    </OwlCarousel>
                    </div>
                </div>
            </div>
        </div>
        
     </div>
    )
}
export default ListCategory;