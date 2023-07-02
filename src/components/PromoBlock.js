import React from "react";
import { ReactDOM } from "react";

const PromoBlock =(props) =>{
    return(
        <div className="promo-block section-margin-top">
            <div className="container-fluid">
                <div className="row">
                <h2 className="product-section-title hidden-xs-up">Our Services</h2>
                <div className="promo-block-inner clearfix">
                    <div className="promo-box col-md-3 col-xs-6">
                        <div className="promo-item">
                            <div className="promo-detail">
                                <div className="promo-img">
                                   <img src="/img/promo/promo1.png"></img>
                                </div>
                                <div className="promo-info">
                                    <h6 className="promo-title">Worldwide Shipping</h6>
                                    <div className="promo-desc">Get free Shipping over $75</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="promo-box col-md-3 col-xs-6">
                        <div className="promo-item">
                            <div className="promo-detail">
                                <div className="promo-img">
                                   <img src="/img/promo/promo2.png"></img>
                                </div>
                                <div className="promo-info">
                                    <h6 className="promo-title">Cash On Delivery</h6>
                                    <div className="promo-desc">100% money back guarantee</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="promo-box col-md-3 col-xs-6">
                        <div className="promo-item">
                            <div className="promo-detail">
                                <div className="promo-img">
                                   <img src="/img/promo/promo3.png"></img>
                                </div>
                                <div className="promo-info">
                                    <h6 className="promo-title">Special gift card</h6>
                                    <div className="promo-desc">Offer  special bonuses with gift</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="promo-box col-md-3 col-xs-6">
                        <div className="promo-item">
                            <div className="promo-detail">
                                 <div className="promo-img">
                                   <img src="/img/promo/promo4.png"></img>
                                </div>
                                <div className="promo-info">
                                    <h6 className="promo-title">Support Service</h6>
                                    <div className="promo-desc">Top notch customer service </div>
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
export default PromoBlock ;