import React from "react";
import { ReactDOM } from "react";


const Footer=(props)=>{
    return(

        <div className="footer section-margin-top">
            <div className="footer-top">
                <div className="container-fluid">
                    <div className="row">
                        <div className="footer-top-inner">
                            <div className="contact-info links col-lg-3 col-xs-12 clearfix">
                                <div className="footer-left-inner">
                                    <h6 className="footer-title">Contact Info</h6>
                                    <div className="footer-sub-menu footer-toggle collapse">
                                        <ul>
                                            <li>
                                                <span>Address:</span>
                                                124 Souths Rohnha Suited 21, NewYork, NA
                                            </li>
                                            <li>
                                                <span>Phone:</span>
                                                +91 123 456 789
                                            </li>
                                            <li>
                                                <span>E-mail:</span>
                                               <a href="#"> Demo@demo.Com</a>
                                            </li>
                                        </ul>
                                        <ul className="social-block">
                                            <div className="footer_social">
                                            <li>
                                                <a href="#" className="facebook">
                                                    <i className="fa fa-facebook"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="twitter">
                                                    <i className="fa fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="google-plus">
                                                    <i className="fa fa-google-plus"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="instagram">
                                                    <i className="fa fa-instagram"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="youtube">
                                                    <i className="fa fa-youtube"></i>
                                                </a>
                                            </li></div>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-links links col-lg-3 col-xs-12 clearfix">
                                <div className="footer-center-inner">
                                     <h6 className="footer-title">Information</h6>
                                     <div className="footer-sub-menu footer-toggle collapse">
                                        <ul>
                                            <li>
                                                <a href="#" className="page_link" >Delivery</a> 
                                            </li>
                                            <li>
                                                <a href="#" className="page_link" >Legal Notice</a> 
                                            </li>
                                            <li>
                                                <a href="#" className="page_link" >About Us</a> 
                                            </li>
                                            <li>
                                                <a href="#" className="page_link" >Stores</a> 
                                            </li>
                                            <li>
                                                <a href="#" className="page_link" >Secure Payment</a> 
                                            </li>
                                        </ul>
                                     </div>
                                </div>
                            </div>
                            <div className="account-block links col-lg-3 col-xs-12 clearfix">
                                <div className="footer-center-inner">
                                     <h6 className="footer-title">My Account</h6>
                                     <div className="footer-sub-menu footer-toggle collapse">
                                        <ul>
                                            <li>
                                                <a href="#" className="page_link" >Price Drop</a> 
                                            </li>
                                            <li>
                                                <a href="#" className="page_link" >Login</a> 
                                            </li>
                                            <li>
                                                <a href="#" className="page_link" >My Account</a> 
                                            </li>
                                            <li>
                                                <a href="#" className="page_link" >Refund Policy</a> 
                                            </li>
                                            <li>
                                                <a href="#" className="page_link" >Terms of service</a> 
                                            </li>
                                        </ul>
                                     </div>
                                </div>
                            </div>
                            <div className="newsletter_block col-lg-3 col-xs-12 clearfix">
                               <div className="newsletter_block_content">
                                    <div className="newsletter_block_label">
                                        <div className="footer-title">
                                            Subscribe Newsletter
                                        </div>
                                        <div className="news-des">
                                            <div className="newsletter_description">
                                            Subscribe to our newsletters now and stay up to date with new collections and exclusive offers.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="footer_newsletter_form">
                                        <form action="#" method="post">
                                            <div className="newsletter_form_inner">
                                                <div className="input-wrapper">
                                                    <input name="email" type="email" value="" placeholder="Enter your email..." aria-labelledby="block-newsletter-label" required=""/>
                                                    <button class="btn promo-btn" name="submitNewsletter" type="submit">
                                                    Subscribe
                                                    </button>
                                                    <input type="hidden" name="action" value="0"></input>
                                                </div>
                                            </div>
                                        </form>

                                    </div>
                               </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container-fluid">
                    <div className="row">
                        <div className="footer-bottom-inner">
                            <p className="copyright"><a href="#">@ 2023 Ecommerce  website by ReactJS</a></p>
                            <div className="footer_payment_block">
                                <div className="footer_payment">
                                    <a href="#"><img src="img/payment.png"></img>
                                    </a>
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
          </div>
    )
}
export default Footer;