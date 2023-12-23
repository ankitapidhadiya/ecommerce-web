// import OwlCarousel from 'react-owl-carousel';  
import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import products from '../../data/AllProducts';

import Productdetail from './ProductDetail';
//import type from '../../data/AllProducts';
import ProductCarousel from './ProductCarousel';

const ProductList = (props) => {
 const bestSeller=products.filter((item) => item.type='bestseller');
  const [productList, setProductList] = useState(products)
  const [productList1, setProductList1] = useState(products)
  const [productList2, setProductList2] = useState(products)
  return (
    <div className='featured-product section-margin-top' id="product">
      <div className='container-fluid'>
        <h2 className='product-section-title'>Trending Products</h2>
        <div className='product-tabs'>
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="-tab-pane" aria-selected="true">Fetured</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="best-seller-tab-pane" aria-selected="false">BestSeller</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#latest-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Latest </button>
            </li>
          </ul>
          <div className="row">
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active"  id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
                {/* <OwlCarousel items={4}  
                  className="products product-carousal owl-theme"  
                  loop={false}
                  autoplayHoverPause={true}
                  nav  
                  >    */}
                
                  <ProductCarousel bestSeller={bestseller} />
                    {/* { productList && productList.length ? productList.map((item, i) => { */}
                      {/* return ( */}
                      {/* //   <article className='product-miniature col-xl-3' key={i}>
                      //     <div className='product-item'>
                      //       <div className='product-image-wrapper'>
                      //         <a href='#' className='product-thumbnail'>
                      //           <span className='cover-image'>
                      //             <img src={item.image1} alt="Sample Image" />
                      //           </span>
                      //           <span className='hover-image'>
                      //             <img src={item.image2} alt="sample-image"/>
                      //           </span>
                      //         </a> 
                      //         <ul className='product-flag'>
                      //           <li className='product-flag-discount'>{item.discountPrice} </li>
                      //           <li className='product-flag-new'>new</li>  
                      //         </ul> 
                      //         <div className='product-btn-wrapper grid'>
                      //           <div className="product-btn-icon-quickview product-btn-icon">
                      //             <a className="quick-view" href="#" data-link-action="quickview">
                      //               <i className="fa fa-eye" aria-hidden="true"></i>
                      //             </a>
                      //           </div>
                      //           <div className='product-btn-add-to-cart product-btn-icon'>
                      //             <a className='add-to-cart' href='#' data-link-action="addtocart">
                      //             <i className='fa fa-shopping-basket'></i>
                      //             </a>
                      //           </div>
                      //           <div className='product-btn-wishlist product-btn-icon'>
                      //             <a className='wishlist' href='#' data-link-action="wishlist">
                      //             <i className='fa fa-heart-o'></i>
                      //             </a>
                      //           </div>
                      //         </div>
                      //       </div>
                      //       <div className='product-description'>
                      //         <div className="product-desc">
                      //             <div className='grid-reviews'>
                      //               <i className='fa fa-star-o'></i>
                      //               <i className='fa fa-star-o'></i>
                      //               <i className='fa fa-star-o'></i>
                      //               <i className='fa fa-star-o'></i>
                      //               <i className='fa fa-star-o'></i>
                      //             </div>
                      //             <h4 className='product-title'><a href="#">{item.title}</a></h4>
                      //             <p>{item.description}</p>
                      //             <div className="product-price">
                      //               <span className='price'>{item.price}</span>
                      //               <span className='regular-price'>{item.regularPrice}</span>
                      //               <span className='discount-price'>{item.discountPrice}</span>
                      //             </div>
                      //           </div>
                      //       </div>
                      //     </div>  
                      //   </article> 
                      
                      )
                    }) : <></>} */}
                {/* </`OwlCarousel`> */}
              </div>
              <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="1">
                </div> 
              <div className="tab-pane fade" id="latest-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex="2">
                <ProductCarousel productList={productList2} />
                </div>
            </div>
          </div>   
       </div>
      </div>
    </div>
  )

}
export default ProductList;