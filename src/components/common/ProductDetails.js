import React from 'react';
import { Link ,useParams} from 'react-router-dom';
import { useState } from 'react';
import ProductDetail from './ProductDetail';
import Footer from './Footer';
import product from './ProductDetail';
import id from './ProductDetail';
import image  from './ProductDetail';
import products from '../../data/AllProducts';
import productList from './ProductList';
const ProductDetails = (props) => {
    const params=useParams(product);
    console.log(params);
    var productitem={};
    if(products && products.length){
     productitem=products.find((item) => params.id==item.id);
    console.log(productitem);
   
     }
 
  return(
    <div className='productdetail-item'>
      <div className='container-fluid'>
        <div className='row'>
       <div className='product-detail-inner'>
         {/* <div className='pp'>{productitem.id}</div> */}
         <div className='product-item'>
          <div className='product-leftside col-lg-6'>
          <div className='product-image'>
            <div className=" innermost" id="innerpage"  >
                <span className='cover-image'>
                  <img src={productitem.image1} alt="Sample Image" />
                </span>
                {/* <span className='hover-image'>
                  <img src={product.image2} alt="sample-image"/>
                </span> */}
            </div>
          </div>
          </div>
          <div className='product-rightside col-lg-6'>
            <div className='product-inner-des'>
              {/* <ul className='product-flag'>
                <li className='product-flag-discount'>{productitem.discountPrice} </li>
                <li className='product-flag-new'>new</li>  
              </ul>  */}
              <div className='product-btn-wrapper grid'>
                <div className="product-btn-icon-quickview product-btn-icon">
                  <a className="quick-view" href="#" data-link-action="quickview">
                    <i className="fa fa-eye" aria-hidden="true"></i>
                  </a>
                </div>
                <div className='product-btn-add-to-cart product-btn-icon'>
                  <a className='add-to-cart' href='#' data-link-action="addtocart">
                  <i className='fa fa-shopping-basket'></i>
                  </a>
                </div>
                <div className='product-btn-wishlist product-btn-icon'>
                  <a className='wishlist' href='#' data-link-action="wishlist">
                  <i className='fa fa-heart-o'></i>
                  </a>
                </div>
              </div>
            <div className='product-description'>
              <div className="product-desc">
                  <div className='grid-reviews'>
                    <i className='fa fa-star-o'></i>
                    <i className='fa fa-star-o'></i>
                    <i className='fa fa-star-o'></i>
                    <i className='fa fa-star-o'></i>
                    <i className='fa fa-star-o'></i>
                  </div>
                  <h4 className='product-title'><a href="#">{productitem.title}</a></h4>
                  <p>{productitem.description}</p>
                  <div className="product-price">
                    <span className='price'>{productitem.price}</span>
                    <span className='regular-price'>{productitem.regularPrice}</span>
                    <span className='discount-price'>{productitem.discountPrice}</span>
                  </div>
                </div>
            </div>
          </div>
          </div> 
          </div>
        </div>  
        </div>
       </div>
       <Footer/>
       </div>
  );
}
export default ProductDetails;
