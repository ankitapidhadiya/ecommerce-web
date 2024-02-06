import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import products from '../../data/AllProducts';
import item from './ProductCarousel';
const ProductDetail = (props) => {
  const product = props.productDetail;
  console.log(product);
  
  return(
    <div className='product-item'>
      <div className='product-image-wrapper'>
      <Link to={`/ProductDetails/${product.id}`} className=" innermost" id="innerpage"  >
          <span className='cover-image'>
            <img src={product.image1} alt="Sample Image" />
          </span>
          <span className='hover-image'>
            <img src={product.image2} alt="sample-image"/>
          </span>
       </Link>
        <ul className='product-flag'>
          <li className='product-flag-discount'>{product.discountPrice} </li>
          <li className='product-flag-new'>new</li>  
        </ul> 
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
            <h4 className='product-title'><a href="#">{product.title}</a></h4>
            <p>{product.description}</p>
            <div className="product-price">
              <span className='price'>{product.price}</span>
              <span className='regular-price'>{product.regularPrice}</span>
              <span className='discount-price'>{product.discountPrice}</span>
            </div>
          </div>
      </div>
    </div>
  )}
export default ProductDetail;
