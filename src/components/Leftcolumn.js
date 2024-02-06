import { useState } from 'react';
import { Link } from "react-router-dom";
import products from '../data/AllProducts';
import ProductDetail from "../components/common/ProductDetail";
import Checkbox from "react";

const Leftcolumn = (props) => {
	const [subMenuOpen, setSubMenuOpen] = useState(-1);
	const toggleMenu = (x) => setSubMenuOpen(subMenuOpen === x ? -1 : x);
    const [subMenuOpen1, setSubMenuOpen1] = useState(-1);
	const toggleMenu1 = (y) => setSubMenuOpen1(subMenuOpen1 === y ? -1 : y);
    const [subMenuOpen2, setSubMenuOpen2] = useState(-1);
	const toggleMenu2 = (z) => setSubMenuOpen2(subMenuOpen2 === z ? -1 : z);
    const [checked, setChecked] = useState(true); 
    const handleChange = (data) => {
        if(checked==true){
            console.log(checked,"our value");
        }
        setChecked(!checked)
    }
	return (
        <div className="leftcolumn-inner">
             <div className="category-block  hidden-md-down">
                <ul className="category-top-menu">
                    <li className="cat-title">
                        <a href="Shop">shop</a>
                    </li>
                    <li className="cate-sub">
                        <div id="categories-block" data-toggle="collapse">
                            <ul className="category-sub-menu-inner">
                                <li data-depth="0">
                                    <a href="#men">Men</a>
                                    <div className="toggler-collapse collapsed" data-toggle="collapse" aria-expanded="false">
                                        <Link to="#" onClick={() => toggleMenu(1)} > 
                                            <ul id="category-sub-menu" class={`sub-menu1 ${subMenuOpen === 1 ? "is-open" : ""}`}>
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
                                        <Link to="#" onClick={() => toggleMenu1(1)} > 
                                            <ul id="category-sub-menu" class={`sub-menu2 ${subMenuOpen1 === 1 ? "is-open" : ""}`}>
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
                                <li data-depth="0">
                                    <a href="#women">Kids</a>
                                        <Link to="#" onClick={() => toggleMenu2(1)} > 
                                            <ul id="category-sub-menu" class={`sub-menu3 ${subMenuOpen2 === 1 ? "is-open" : ""}`}>
                                            <i className="fa fa-plus"></i>
                                            <i className="fa fa-minus"></i>
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
                                        </Link>
                                
                                </li>
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
                                    <span className="check">
                                        <input type="checkbox"></input>
                                    </span>
                                    <a href="#formal">Formal</a>
                                </li>
                                <li>
                                    <span className="check">
                                        <input type="checkbox"></input>
                                    </span>
                                    <a href="#Casual">Casual</a>
                                </li>
                                <li>
                                    <span className="check">
                                        <input type="checkbox"></input>
                                    </span>
                                    <a href="#cotton">Cotton</a>
                                </li>
                            </ul>
                        </div>
                        <div className="filter-cat">
                            <h5 className="search_filter_title">Size</h5>
                            <ul id="search-cat" className='Checkbox'>
                                <li>
                                    <span className="check">
                                        <input type="checkbox" onChange={() => handleChange("checked")}></input>
                                    </span>
                                    <a href="#s">S</a>
                                </li>
                                <li>
                                    <span className="check">
                                        <input type="checkbox" onChange={() => handleChange("checked")}></input>
                                    </span>
                                    <a href="#m">M</a>
                                </li>
                                <li>
                                    <span className="check">
                                        <input type="checkbox" onChange={() => handleChange("checked")}></input>
                                    </span>
                                    <a href="#l">L</a>
                                </li>
                                <li>
                                    <span className="check">
                                        <input type="checkbox" onChange={() => handleChange("checked")}></input>
                                    </span>
                                    <a href="#xl">XL</a>
                                </li>
                            </ul>
                        </div>
                        <div className="filter-cat">
                            <h5 className="search_filter_title">Color</h5>
                            <ul id="search-cat">
                                <li>
                                    <span className="check">
                                        <input type="checkbox" onChange={() => handleChange("checked")}/>
                                    </span>
                                    <a href="#white">White</a>
                                </li>
                                <li>
                                    <span className="check">
                                        <input type="checkbox" onChange={() => handleChange("checked")}></input>
                                    </span>
                                    <a href="#black">Black</a>
                                </li>
                            </ul>
                        </div>
                        <div className="filter-cat">
                            <h5 className="search_filter_title">Composition</h5>
                            <ul id="search-cat">
                                <li>
                                    <span className="check">
                                        <input type="checkbox" onChange={() => handleChange("checked")}></input>
                                    </span>
                                    <a href="#ceramic">Ceramic</a>
                                </li>
                                <li>
                                    <span className="check">
                                        <input type="checkbox" onChange={() => handleChange("checked")}></input>
                                    </span>
                                    <a href="#polyester">Polyester</a>
                                </li>
                                <li>
                                    <span className="check">
                                        <input type="checkbox" onChange={() => handleChange("checked")}></input>
                                    </span>
                                    <a href="#cotton">Cotton</a>
                                </li>
                                <li>
                                    <span className="check">
                                        <input type="checkbox" onChange={() => handleChange("checked")}></input>
                                    </span>
                                    <a href="#silk">Silk</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bestseller hidden-md-down">
                    <h5 className="bestseller-title">BestSeller </h5>
                    <div className='bestseller-inner'>
                        { products && products.length  ? products.map((items, i) => {
                                
                                    return(
                                    <div className="best-seller" key={i}>
                                        { i < 3 ?
                                        <ProductDetail productDetail={items} />
                                        :<></>}
                                </div>)
                        }) : <></>}
                    </div>
                </div>
                <div className="bannerhtml">
                    <a href="banner"><img src="../img/bannerhtml.jpg" alt="banner-img"></img></a>
                </div>
        </div>               
                        
	);
}

export default Leftcolumn ;