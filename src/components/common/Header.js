import React from 'react'
import { Link } from 'react-router-dom'


const Header = (props) => {

  return (
        <div className="header" id="header">
            <div className="header-top">  
                <div className="container-fluid"> 
                    <div className="row">
                        <div className='header-top-inner'>
                        <div className="header-top-left col-lg-4 col-xs-12">
                            <div className="dropdown" id="#Currencyselector">
                                <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                                Currency :USD<i className="fa fa-angle-down">
                                </i>
                                </button>
                                <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">$ USD</a></li>
                                <li><a className="dropdown-item" href="#">€ EURO</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="header-top-center col-lg-4 col-xs-12"><span>Free Shipping For Order Over $150!</span></div>
                        <div className="header-top-right col-lg-4 col-xs-12">
                            <div className="dropdown" id="#Myaccount">
                                <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                                    <span><i className="fa fa-user-circle"></i></span> My Account<i className="fa fa-angle-down"></i>
                                    </button>
                                    <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Login</a></li>
                                    <li><a className="dropdown-item" href="#">Register</a></li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <header className="main-header">
            <div className="container-fluid">
                <div className="row">
                    <div className="header-inner">
                        <div className="header-left col-lg-3 col-xs-6" id="desktop_logo">
                                    <a href="#home">
                                        <img src="/logo.jpg" alt="logo" className="logo img-responsive" />
                                    </a>
                        </div>
                        <div className="header-center col-xl-6 col-lg-6 col-xs-12">
                                    <div className="menu" id="desktop_top_menu">
                                        <ul className="top-menu clearfix" id="top-menu" data-depth="0">
                                            <li>
                                                <Link to={'/'} className="dropdown-item pointer" id="menu">
                                                Home
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={'/shop'} className=" dropdown-item pointer"id="menu"  data-bs-toggle="collapse" data-depth="0">
                                                    Shop
                                                </Link>
                                                    <div className="popover collapse  sub-menu" id="top-sub-menu">
                                                        <ul className="top-menu clearfix" data-depth="1">
                                                            <li><a className="dropdown-item dropdown-submenu" href="#">Men </a>
                                                                <div className='collapse' id="top_submenu">
                                                                    <ul className='top_menu clearfix' data-depth="2">
                                                                        <li className='category' id="cat-1"><a  className="dropdown-item" href="#">Oxford Shirts</a></li>
                                                                        <li className='category' id="cat-2"><a  className="dropdown-item" href="#">Polo Shirts</a></li>
                                                                        <li className='category' id="cat-3"><a  className="dropdown-item" href="#">classNameic Shirts</a></li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                            <li><a className="dropdown-item dropdown-submenu" href="#">Women</a>
                                                                <div className='collapse' id="top_submenu">
                                                                    <ul className='top-menu clearfix' data-depth="2">
                                                                        <li className='category' id="cat-3"><a  className="dropdown-item" href="#">Military Shirts</a></li>
                                                                        <li className='category' id="cat-4"><a  className="dropdown-item" href="#">Henley Shirts</a></li>
                                                                        <li className='category' id="cat-5"><a  className="dropdown-item" href="#">V-neck Shirts</a></li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                            <li><a className="dropdown-item dropdown-submenu" href="#">Kids </a>
                                                                <div className='collapse' id="top_submenu">
                                                                    <ul className='top_menu clearfix' data-depth="2">
                                                                        <li className='category' id="cat-7"><a  className="dropdown-item" href="#">Batwing Shirts</a></li>
                                                                        <li className='category' id="cat-8"><a  className="dropdown-item" href="#">Striped Shirts</a></li>
                                                                        <li className='category' id="cat-9"><a  className="dropdown-item" href="#">Ruffled Shirts</a></li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                       
                                                    </div>
                                                
                                            </li>
                                            <li><a className="dropdown-item pointer" id="menu" href="#clothes">Clothes</a></li>
                                            <li><a className="dropdown-item pointer" id="menu" href="#formal">Formal</a></li>
                                        </ul>
                                    </div>
                        </div>
                        <div className="header-right col-lg-3 col-xs-12 ">
                            <div className="header-serach">
                                <a rel="nofollow" href='#search'>
                                    <i className="fa fa-search"></i>
                                </a>
                            </div>
                            <div className="header-cart">
                                <a rel="nofollow" href='#cart'>
                                    <i className="fa fa-shopping-basket"></i>
                                    <span className="cart-products-counts">0</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>


    
	)
}

export default Header;
