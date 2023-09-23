import React from "react";
import Footer from '../components/common/Footer';
import products from '../data/AllProducts';
import ProductDetail from "../components/common/ProductDetail";
import Leftcolumn from "../components/Leftcolumn";

export default function Shop() {
	// const [subMenuOpen, setSubMenuOpen] = useState(-1);
	// const toggleMenu = (x) => setSubMenuOpen(subMenuOpen === x ? -1 : x);
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
					<div className="left-column col-xs-12 col-sm-4 col-md-3">
						<Leftcolumn/>
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
								
								<div className="col-lg-3 col-xs-12 " key={i=1}>
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
										<li className="currentpage active">
											<a href="page1" className="active">1</a>
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