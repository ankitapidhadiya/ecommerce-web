import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import products from '../../data/AllProducts';
import ProductCarousel from './ProductCarousel';

const ProductList = (props) => {
 const Bestseller=products.filter((item) => item.type ==='bestseller');
 const Featured=products.filter((item) => item.type ==='featured');
 const Latest=products.filter((item) => item.type ==='latest');
 console.log(Bestseller);
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
                  <ProductCarousel products={Featured} />
              </div>
              <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="1">
              <ProductCarousel products={Bestseller} />
                </div> 
              <div className="tab-pane fade" id="latest-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex="2">
              <ProductCarousel products={Latest} />
                </div>
            </div>
          </div>   
       </div>
      </div>
    </div>
  )

}
export default ProductList;