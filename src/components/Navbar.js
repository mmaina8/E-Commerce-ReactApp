/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from "../assets/img/logo.png"
import Cart from './Cart'

class Navbar extends React.Component {
  render() {
    return (
      <header>
        <div className="header-bottom wrapper-padding-2 res-header-sm sticker header-sticky-3 furits-header">
          <div className="container-fluid">
            <div className="header-bottom-wrapper">
              <div className="logo-2 ptb-35">
                <Link to='/'>
                  <img src={logo} alt="" style={{ height: '150px' }} />
                </Link>
              </div>
              <div className="menu-style-2 handicraft-menu menu-hover">
                <nav>
                  <ul>
                    <li>
                      <NavLink to='/'>home</NavLink>
                    </li>
                    <li>
                      <NavLink to='/about'>about</NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="furits-login-cart">

                <div className="header-cart-4 furits-cart">
                  <a className="icon-cart" href="#">
                    <i className="pe-7s-shopbag"></i>
                    <span className="handicraft-count">{this.props.cart.length}</span>
                  </a>
                  <Cart cart={this.props.cart} removeFromCart={this.props.removeFromCart} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>
    )
  }
}

export default Navbar