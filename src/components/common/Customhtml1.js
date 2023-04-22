import React from "react";
import { Link } from 'react-router-dom';
 

const Customhtml1 = (props) =>{
    return(
    <div className="promo-banner-html1 section-margin-top clearfix">
        <div className="container-fluid">
        <div className="row">
            <div className="promo-banner-inner">
                <div className="banner1 banner col-xs-12 col-xl-6">
                    <div className="promo-banner">
                        <a href="#">
                            <img src="/img/banner-3.jpg" alt="banner1" />
                        </a>
                        <div className="promo-banner-desc">
                            <div className="promo-title">
                                Women's Collection
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner2 banner col-xs-12 col-xl-6">
                    <div className="promo-banner">
                        <a href="#">
                            <img src="/img/banner-4.jpg" alt="banner2" />
                        </a>
                        <div className="promo-text-wrapper">
                            <div className="promo-text-inner">
                              <div className="promo-sale">Hot List</div> 
                              <h1 className="promo-title">Men <span>Collection</span></h1> 
                              <a href="#" className="promo-btn btn btn-primary">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
    )
}

export default Customhtml1;