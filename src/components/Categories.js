import React from 'react'
import banner40 from '../assets/img/banner/40.jpg'
import banner41 from '../assets/img/banner/41.jpg'

class Categories extends React.Component {
  render() {
    return (
      <div className="banner-area pt-90 pb-160 fix">
      <div className="container">
          <div className="row d-flex justify-content-around">
              <div className="col-lg-4 col-md-4">
                  <div className="furits-banner-wrapper mb-30 wow fadeInLeft">
                      <img src={banner40} alt=""/>
                      <div className="furits-banner-content">
                          <h4>Fruits</h4>
                          
                          <a className="furits-banner-btn btn-hover" href="#">Shop Now</a>
                      </div>
                  </div>
              </div>
              <div className="col-lg-4 col-md-4">
                  <div className="furits-banner-wrapper mb-30 wow fadeInUp">
                      <img src={banner41} alt=""/>
                      <div className="furits-banner-content">
                          <h4>Vegetables</h4>
                          
                          <a className="furits-banner-btn btn-hover" href="#">Shop Now</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
    )
  }
}

export default Categories