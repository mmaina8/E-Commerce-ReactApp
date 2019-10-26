/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import img11 from '../assets/img/slider/11.png'


class Main extends React.Component {

  render() {
    return (
      <div className="slider-area">
        <div className="slider-active-2">
          <div className="single-slider-4 bg-img furits-slider">
            <div className="container">
              <div className="fadeinup-animated furits-content text-center">
                <img className="animated" alt="" />
                <p className="animated">Health is not about the weight you lose. But about the life you gain!</p>
                <a className="furits-slider-btn btn-hover animated" href="product-details.html">Shop Now</a>
                <img className="animated slide-img-position" src={img11} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Main