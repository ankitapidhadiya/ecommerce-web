import React from "react";
import Footer from '../components/common/Footer';	
import { ReactSVG } from "react";
import { faFontAwesome } from "@fortawesome/free-solid-svg-icons";
//import ProductList from '../components/common/ProductList';
// import ProductDetail from "../components/common/ProductDetail";
import products from '../data/AllProducts';
import ProductDetail from "../components/common/ProductDetail";

export default function Shop() {
	console.log('products', products.allProducts)
	return (
		<div className="inner-page">
			<div className="breadcrumbs">
				<div className="container-fluid">
					<div className="inner-text">
						{/* <h6 className="page-title">Shop</h6>  */}
						<ol className="order1" itemScope itemType="http://schema.org/BreadcrumbList">
							<li itemProp="itemlistelement" itemScope itemType="http://schema.org/ListItem">
								<a  itemProp="item" href="home">
									<span  itemProp="name" content="1">Home</span> 
								</a>
							</li>
							<li itemProp="itemlistelement" itemScope itemType="http://schema.org/ListItem">
								<a  itemProp="item" href="shop">
									<span  itemProp="name" content="2">Shop</span> 
								</a>
							</li>
						</ol>
					</div>
			    </div>
			</div>
            <div id="product-category"  className="container-fluid">
				<div className="row">
					<div className="col-xs-12 col-sm-4 col-md-3">
					
					</div>
					<div className="left-column col-lg-9 col-md-12 col-sm-12 col-xs-12">
						<div className="category-cover">
							<img src="img/cover-img.jpg" alt="breadcrumb"></img> 
						</div>
						<div className="cat-description">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						</div>
						<div className="sub-cat" id="subcategories">
							<h5 className="subcat-title">Refine Search </h5>
							<ul>
								<li className="subcategory-block">
									<a className="subcat-name" href="#men">Men</a>
								</li>
								<li className="subcategory-block">
									<a className="subcat-name" href="#women">Women</a>
								</li>
								<li className="subcategory-block">
									<a className="subcat-name" href="#kids">kids</a>
								</li>
							</ul>
						</div>
						<div className="category-toolbar row" id="cat-toolbar">
							<div className="col-lg-6 col-xs-12">
								<div className="gridlist-toggle">
									<span className="grid-view" >
									<i className="bi bi-grid"></i>
									<i className="fa fa-th-large" aria-hidden="true"></i>

									<i className="grid-icon"></i></span>
								</div>
							</div>
						</div>
						{ products.allProducts && products.allProducts.length ? products.allProducts.map((item, i) => {
							return(
								<div className="col-lg-3 col-xs-12" key={i}>
									<ProductDetail productDetail={item} />
								</div>
							)
						}) : <></>}
						</div>	
				</div>				
			</div>
	<Footer/>
</div>
	);
}