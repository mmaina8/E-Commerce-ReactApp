import React from 'react'
import Product from './Product'

class Catalogue extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    fetch('https://greens-kiosk-api.antonyorenge.com/products')
    .then(response => response.json())
    .then(response => {
      this.setState({
        products: response
      })
    })
  }

  render() {
    return (
      <div class="product-style-area pt-130 pb-30 wow fadeInUp">
            <div class="container">
                <div class="section-title-furits text-center mb-95">
                    <img src="assets/img/icon-img/49.png" alt=""/>
                    <h2>More Fresh Products</h2>
                </div>
                <div class="row">
                  {
                    this.state.products.map(product => {
                      return (
                        <div key={product.id} class="col-lg-4 col-xl-3 col-md-6">
                        <Product item={product} addToCart={this.props.addToCart} />
                        </div>
                      )
                    })
                  }
                    

                </div>
            </div>
        </div>
    )
  }
}

export default Catalogue