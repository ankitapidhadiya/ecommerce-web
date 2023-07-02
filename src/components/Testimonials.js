import React from "react";
import OwlCarousel from 'react-owl-carousel';  
import { useState } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css'; 


const Testimonials=(props)=>{
    const [Customer, setCustomer] = useState([{

      id:0,
      image:'/img/testimonial/customer-1.jpg',
      catTitle:'Henley Shirt',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt lorem consectetur orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor tempor incididunt enim ad minim simply random text. It has pieceveniam.',  
    },{
      id:1,
      image:'/img/testimonial/customer-2.jpg',
      catTitle:'Henley Shirt',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt lorem consectetur orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor tempor incididunt enim ad minim simply random text. It has pieceveniam.',    
    },{

      id:2,
      image:'/img/testimonial/customer-3.jpg',
      catTitle:'Henley Shirt', 
     description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt lorem consectetur orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor tempor incididunt enim ad minim simply random text. It has pieceveniam.',  
    }

])
const handleClickFn = () => {
    console.log('clciked')
    }
    return(
        <div className="testimonial-section section-margin-top">
            <div className='container-fluid'>
                <h2 className="product-section-title">
                    Our Clients Says
                </h2>
                    <div className="testimonial-box">
                        <OwlCarousel items={1}  
                            className="testimonial product-carousal owl-theme"
                            loop={false}
                            autoplayHoverPause={true}
                            autoheight="true"
                            nav  
                            >
                                { Testimonials && Customer.length ? Customer.map((item, i) => {
                            return(
                                    <div className="testimonial-item">
                                        <div className="testimonial-img">
                                            <img src={item.image} alt="testimonials-img"/>
                                        </div>
                                        <div className="testimonial-desc">
                                            <div className="testimonial-quote">
                                                  {item.description}
                                            </div>
                                        </div>
                                    </div>
                                  )
                            }) : <></>}
                        </OwlCarousel>
                </div>
            </div>
        </div>
    )
}
export default Testimonials;