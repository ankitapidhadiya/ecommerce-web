import React from "react";
import Footer from '../components/common/Footer';	
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
//import ProductList from '../components/common/ProductList';
// import ProductDetail from "../components/common/ProductDetail";
import products from '../data/AllProducts';
import ProductDetail from "../components/common/ProductDetail";
import userEvent from "@testing-library/user-event";

export default function Shop() {
	const [subMenuOpen, setSubMenuOpen] = useState(-1);
	// const [submenuClose, setSubMenuClose]= useState(-1);
	const toggleMenu = (x) => setSubMenuOpen(subMenuOpen === x ? -1 : x);
	// const toggleMenuClose = (y) => setSubMenuClose(subMenuOpen === y ? 0 : y)
	console.log('products', products.allProducts)
	function togglemenu1({ isLoggedIn }) {
		return (
		  <div>
			{(() => {
			  if (isLoggedIn) {
				return <p>Welcome back!</p>;
			  } else {
				return <p>Please log in to continue.</p>;
			  }
			})()}
		  </div>
		);
	  }
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
					<div className="left-column col-xs-12 col-sm-4 col-md-3">
						<div className="category-block  hidden-md-down">
							<ul className="category-top-menu">
								<li className="cat-title">
									<a href="Shop">shop</a>
								</li>
								<li className="cate-sub">
									<div id="categories-block" data-toggle="collapse">
										<ul className="category-sub-menu">
											<li data-depth="0">
												<a href="#men">Men</a>
												<div className="toggler-collapse collapsed" data-toggle="collapse" aria-expanded="false">
													<Link to="#" onClick={() => toggleMenu(1)} > 
														<ul id="category-sub-menu" class={`sub-menu ${subMenuOpen === 1 ? "is-open" : ""}`}>
														<i className="fa fa-plus"></i>
														<i className="fa fa-minus"></i>
															<li data-depth="1">
																<a href="#oxford shirt">Oxford shirt</a>
															</li>
															<li data-depth="1">
																<a href="#polo shirt">Polo shirt</a>
															</li>
															<li data-depth="1">
																<a href="#classic nameic shirt">classic shirt</a>
															</li>
														</ul>
													</Link>
												</div>
											</li>
											<li data-depth="0">
												<a href="#women">Women</a>
												<div className="toggler-collapse collapsed" data-toggle="collapse" aria-expanded="false">
													<Link to="#" onClick={() => toggleMenu(1)} > 
														<ul id="category-sub-menu" class={`sub-menu ${subMenuOpen === 1 ? "is-open" : ""}`}>
														<i className="fa fa-plus"></i>
														<i className="fa fa-minus"></i>
															<li data-depth="1">
																<a href="#Military shirt">Military shirt</a>
															</li>
															<li data-depth="1">
																<a href="#Henley shirt">Henley shirt</a>
															</li>
															<li data-depth="1">
																<a href="#v-neck shirt">V-neck shirt</a>
															</li>
														</ul>
													</Link>
												</div>
											</li>
										
											{/* <li data-depth="0">
												<a href="#men">woMen</a>
												<div className="toggler-collapse collapsed" data-toggle="collapse" aria-expanded="false">
													<i className="fa fa-plus"></i>
													<i className="fa fa-minus"></i>
												</div>
												<div className="collapse in" aria-expanded="true">
													<div id="display-cat-block" className="menu-collapse">
														<ul className="category-sub-menu">
															<li data-depth="1">
																<a href="#Military shirt">Military shirt</a>
															</li>
															<li data-depth="1">
																<a href="#Henley shirt">Henley shirt</a>
															</li>
															<li data-depth="1">
																<a href="#v-neck shirt">V-neck shirt</a>
															</li>
														</ul>
													</div>
												</div>
											</li>
											<li data-depth="0">
												<a href="#men">Kids</a>
												<div className="toggler-collapse collapsed" data-toggle="collapse" aria-expanded="false">
													<i className="fa fa-plus"></i>
													<i className="fa fa-minus"></i>
												</div>
												<div className="collapse in" aria-expanded="true">
													<div id="display-cat-block" className="menu-collapse">
														<ul className="category-sub-menu">
															<li data-depth="1">
																<a href="#oxford shirt">Batwing shirt</a>
															</li>
															<li data-depth="1">
																<a href="#polo shirt">Striped shirt</a>
															</li>
															<li data-depth="1">
																<a href="#classic nameic shirt">Ruffled shirt</a>
															</li>
														</ul>
													</div>
												</div>
											</li> */}
		
										</ul>
									</div> 
								</li>
							</ul>
							
						</div>
						<div className="filter-block  hidden-md-down">
							<h5 className="filter-title">Filter By</h5>
							<div className="filter-inner">
								<div className="filter-cat">
									<h5 className="search_filter_title">Categories</h5>
									<ul id="search-cat">
										<li>
											<span className="checkbox">
												<input type="checkbox"></input>
											</span>
											<a href="#formal">Formal</a>
										</li>
										<li>
											<span className="checkbox">
												<input type="checkbox"></input>
											</span>
											<a href="#Casual">Casual</a>
										</li>
										<li>
											<span className="checkbox">
												<input type="checkbox"></input>
											</span>
											<a href="#cotton">Cotton</a>
										</li>
									</ul>
								</div>
								<div className="filter-cat">
									<h5 className="search_filter_title">Size</h5>
									<ul id="search-cat">
										<li>
											<span className="checkbox">
												<input type="checkbox"></input>
											</span>
											<a href="#s">S</a>
										</li>
										<li>
											<span className="checkbox">
												<input type="checkbox"></input>
											</span>
											<a href="#m">M</a>
										</li>
										<li>
											<span className="checkbox">
												<input type="checkbox"></input>
											</span>
											<a href="#l">L</a>
										</li>
										<li>
											<span className="checkbox">
												<input type="checkbox"></input>
											</span>
											<a href="#xl">XL</a>
										</li>
									</ul>
								</div>
								<div className="filter-cat">
									<h5 className="search_filter_title">Color</h5>
									<ul id="search-cat">
										<li>
											<span className="checkbox">
												<input type="checkbox"></input>
											</span>
											<a href="#white">White</a>
										</li>
										<li>
											<span className="checkbox">
												<input type="checkbox"></input>
											</span>
											<a href="#black">Black</a>
										</li>
									</ul>
								</div>
								<div className="filter-cat">
									<h5 className="search_filter_title">Composition</h5>
									<ul id="search-cat">
										<li>
											<span className="checkbox">
												<input type="checkbox"></input>
											</span>
											<a href="#ceramic">Ceramic</a>
										</li>
										<li>
											<span className="checkbox">
												<input type="checkbox"></input>
											</span>
											<a href="#polyester">Polyester</a>
										</li>
										<li>
											<span className="checkbox">
												<input type="checkbox"></input>
											</span>
											<a href="#cotton">Cotton</a>
										</li>
										<li>
											<span className="checkbox">
												<input type="checkbox"></input>
											</span>
											<a href="#silk">Silk</a>
										</li>
									</ul>
								</div>
							</div>
						
						</div>
						<div className="bestseller hidden-md-down">
							{/* <ProductDetail/> */}
						</div>
						<div className="bannerhtml">
							<a href="banner"><img src="../img/bannerhtml.jpg" alt="banner-img"></img></a>
						</div>
					</div>
					
					<div className="right-column col-lg-9 col-md-12 col-sm-12 col-xs-12">
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
						<div className="category-toolbar " id="cat-toolbar">
							<div className="products-selection row">
								<div className="col-lg-6 col-xs-12">
									<div className="gridlist-toggle">
										<span className="grid-view" >
										<i className="fa fa-th-large" aria-hidden="true"></i>
										</span>
										<span className="list-view">
											<i className="fa fa-list"></i>
										</span>
									</div>
								</div>
								<div className="col-lg-6 col-xs-12">
									<div className="filter-search">
										<span className="sort-by">Sort By :</span>
										<div className="product-sort-order  dropdown">
											<div className="product-sort-order-inner show">
												<button className="btn btn-primary" >Relevance
													<i className="fa fa-caret-down"></i>
												</button>
											    
											</div>
										</div>

									</div>
								</div>
							</div>
						</div>
						<div className="product-list-grid clearfix row">
						{ products.allProducts && products.allProducts.length ? products.allProducts.map((items, i) => {
							return(
								
								<div className="col-lg-3 col-xs-12 " key={i}>
									<ProductDetail productDetail={items} />
								</div>
							)
						}) : <></>}
						</div>	
						<div className="pagination">
							<div className="row">
								<div className="col-md-6 pagination-left">
									Showing 1-12 of 19 items
								</div>
								<div className="col-md-6 pagination-right">
									<ul  className="pagelist clearfix">
										<li className="currentpage">
											<a href="page1">1</a>
										</li>
										<li className="currentpage">
											<a href="page2">2</a>
										</li>
										<li className="next">
											<a href="next"><i className="fa fa-angle-right"></i></a>
										</li>
									</ul>
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