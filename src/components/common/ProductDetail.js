import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const ProductDetail = (props) => {

    const [productDetail, setProductdetail, length] = useState([{
        id:0,
        image1: '/img/product/product-1.jpg',
        image2: '/img/product/product-2.jpg',
        title: 'Sweatshirt',
        description: 'Lorem Ipsum',
        price:'$33',
        regularPrice:'$38',
        discountPrice: '5%',
      }, {
        id:1,
        image1: '/img/product/product-3.jpg',
        image2: '/img/product/product-4.jpg',
        title: 'T-shirt',
        description: 'Lorem Ipsum',
        price: '$50',
        regularPrice: '$55',
        discountPrice: '10%',
      }, {
        id:2,
        image1: '/img/product/product-5.jpg',
        image2: '/img/product/product-6.jpg',
        title: 'Trench Coat',
        description: 'Lorem Ipsum',
        price: '$65',
        regularPrice: '$75',
        discountPrice: '15%'
      },{
          id:3,
          image1: '/img/product/product-7.jpg',
          image2: '/img/product/product-8.jpg',
          title: 'Pullover Shirt',
          description: 'Lorem Ipsum',
          price: '$50',
          regularPrice: '$55',
          discountPrice: '10%'
        },{
          id:4,
          image1: '/img/product/product-9.jpg',
          image2: '/img/product/product-10.jpg',
          title: 'Black T-Shirt',
          description: 'Lorem Ipsum',
          price: '$50',
          regularPrice: '$55',
          discountPrice: '10%'
        }])
        const [productList1, setProductList1] = useState([{
            id:5,
            image1: '/img/product/product-11.jpg',
            image2: '/img/product/product-12.jpg',
            title: 'white hoodie-Shirt',
            description: 'Lorem Ipsum',
            price: '$32',
            regularPrice: '$38',
            discountPrice: '10%'
          },{
            id:6,
            image1: '/img/product/product-13.jpg',
            image2: '/img/product/product-14.jpg',
            title: 'Millon Otla',
            description: 'Lorem Ipsum',
            price: '$38',
            regularPrice: '$40',
            discountPrice: '5%'
          },{
              id:7,
              image1: '/img/product/product-24.jpg',
              image2: '/img/product/product-25.jpg',
              title: 'Black-Shirt',
              description: 'Lorem Ipsum',
              price: '$38',
              regularPrice: '$40',
              discountPrice: '5%' 
            }])
        
          const [productList2, setProductList2] = useState([{
            id:7,
            image1: '/img/product/product-15.jpg',
            image2: '/img/product/product-16.jpg',
            title: 'Black T-Shirt',
            description: 'Lorem Ipsum',
            price: '$32',
            regularPrice: '$38',
            discountPrice: '10%'
          },{
            id:8,
            image1: '/img/product/product-19.jpg',
            image2: '/img/product/product-18.jpg',
            title: 'Black-Shirt',
            description: 'Lorem Ipsum',
            price: '$38',
            regularPrice: '$40',
            discountPrice: '5%'
          },{
            id:9,
            image1: '/img/product/product-20.jpg',
            image2: '/img/product/product-21.jpg',
            title: 'Black-Shirt',
            description: 'Lorem Ipsum',
            price: '$38',
            regularPrice: '$40',
            discountPrice: '5%' 
          },{
            id:6,
            image1: '/img/product/product-22.jpg',
            image2: '/img/product/product-23.jpg',
            title: 'Black-Shirt',
            description: 'Lorem Ipsum',
            price: '$38',
            regularPrice: '$40',
            discountPrice: '5%' 
          }])
          
  const handleClickFn = () => {
    console.log('clciked')
  }
  return(
    <div id="products">
  { productDetail && productDetail.length ? productDetail.map((item, i) => {
                                  
    return(
        <article className='product-miniature col-xl-3' key={i}>
        <div className='product-item'>
          <div className='product-image-wrapper'>
            <a href='#' className='product-thumbnail'>
              <span className='cover-image'>
                <img src={item.image1} alt="Sample Image" />
              </span>
              <span className='hover-image'>
                <img src={item.image2} alt="sample-image"/>
              </span>
            </a> 
            <ul className='product-flag'>
              <li className='product-flag-discount'>{item.discountPrice} </li>
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
                <h4 className='product-title'><a href="#">{item.title}</a></h4>
                <p>{item.description}</p>
                <div className="product-price">
                  <span className='price'>{item.price}</span>
                  <span className='regular-price'>{item.regularPrice}</span>
                  <span className='discount-price'>{item.discountPrice}</span>
                </div>
              </div>
          </div>
        </div>  
        </article>  
        )
    }) : <></>}
  </div>
  )}
export default ProductDetail;
