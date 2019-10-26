import React from 'react'

class Product extends React.Component {
  render() {
    return (
      <div class="product-fruit-wrapper mb-60">
        <div class="product-fruit-img">
            <img src={this.props.item.imageUrl} alt=""/>
            <div class="product-furit-action">
                <a class="furit-animate-left" title="Add To Cart"  onClick={() => this.props.addToCart(this.props.item)}>
                    <i class="pe-7s-cart"></i>
                </a>
                <a class="furit-animate-right" title="Wishlist" href="#">
                    <i class="pe-7s-like"></i>
                </a>
            </div>
        </div>
        <div class="product-fruit-content text-center">
            <h4><a href="product-details.html">{this.props.item.name}</a></h4>
            <span>KSH {this.props.item.price} </span>
        </div>
    </div>
    )
  }
}

export default Product