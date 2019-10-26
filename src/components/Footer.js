import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer-area fruits-footer">
            <div className="food-footer-bottom pt-80 pb-70 black-bg-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-4">
                            <div className="footer-widget">
                                <div className="food-about">
                                    <a href="#"><img src="assets/img/logo/logo-11.png" alt=""/></a>
                                    <p>Fresh Fruits Online Shop</p>
                                    <div className="food-about-info">
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                         <div className="food-info-wrapper">
                                            <div className="food-address">
                                                <div className="food-info-icon">
                                                    <i className="pe-7s-map-marker"></i>
                                                </div>
                                                <div className="food-info-content">
                                                    <p>13 Banasree, Dhaka, Bangladesh</p>
                                                </div>
                                            </div>
                                            <div className="food-address">
                                                <div className="food-info-icon">
                                                    <i className="pe-7s-call"></i>
                                                </div>
                                                <div className="food-info-content">
                                                    <p>+88 -122-5184203</p>
                                                </div>
                                            </div>
                                            <div className="food-address">
                                                <div className="food-info-icon">
                                                    <i className="pe-7s-chat"></i>
                                                </div>
                                                <div className="food-info-content">
                                                    <p><a href="#">domain@mail.com</a> <br/><a href="#">company@domain.info</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-2">
                            <div className="footer-widget mt-50">
                                <h3 className="footer-widget-title-6">Options</h3>
                                <div className="food-widget-content">
                                    <ul>
                                        <li><a href="contact.html"><img src="assets/img/icon-img/41.png" alt=""/> Cart</a></li>
                                        <li><a href="register.html"><img src="assets/img/icon-img/41.png" alt=""/> My Account</a></li>
                                        <li><a href="wishlist.html"><img src="assets/img/icon-img/41.png" alt=""/>Wishlist</a></li>
                                        <li><a href="login.html"><img src="assets/img/icon-img/41.png" alt=""/> Login</a></li>
                                        <li><a href="r"><img src="assets/img/icon-img/41.png" alt=""/>Register</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="footer-widget mt-50">
                                <h3 className="footer-widget-title-6">Information</h3>
                                <div className="food-widget-content">
                                    <ul>
                                        <li><a href="about-us.html"><img src="assets/img/icon-img/41.png" alt=""/> About</a></li>
                                        <li><a href="contact.html"><img src="assets/img/icon-img/41.png" alt=""/>Contact</a></li>
                                        <li><a href="#"><img src="assets/img/icon-img/41.png" alt=""/>Privacy Policy</a></li>
                                        <li><a href="#"><img src="assets/img/icon-img/41.png" alt=""/> Ezone Address</a></li>
                                        <li><a href="blog.html"><img src="assets/img/icon-img/41.png" alt=""/>News</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="footer-widget food-widget mt-50">
                                <h3 className="footer-widget-title-6">Fliker Stream</h3>
                                <div className="food-widget-content">
                                    <a href="product-details.html"><img src="assets/img/banner/34.jpg" alt=""/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		    <div className="food-copyright black-bg-6 ptb-30">
		        <div className="container text-center">
		            <p>Copyright © <a href="https://hastech.company/">Greens Kiosk</a> 2019. All Right Reserved.</p>
		        </div>
		    </div>
		</footer>
    )
  }
}

export default Footer