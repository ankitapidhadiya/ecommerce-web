import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ProductDetail from './ProductDetail';
const ProductDetails = (props) => {
    console.log('clciked');
  
  return(
    <div className='1st-item'>
      <ProductDetail/>
    </div>
  );
}
export default ProductDetails;
