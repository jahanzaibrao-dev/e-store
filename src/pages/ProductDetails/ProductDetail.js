import axios from 'axios'
import React, { Component } from 'react'
import './ProductDetail.scss'

class ProductDetail extends Component {
  constructor(props) {
    super()
    this.state = {
      product: {},
      success: true
    }
  }
  async fetchSingleProduct(id) {
    axios.get(`http://localhost:8080/api/products/${id}`).then(
      (res) => {
        this.setState({ product: res.data })
      },
      (err) => {
        this.setState({ success: false })
      }
    )
  }

  componentDidMount() {
    this.fetchSingleProduct(this.props.match.params.id)
  }
  render() {
    return (
      <div className="product">
        {console.log(this.state.product.category)}
        {this.state.product && (
          <div
            className="details"
            key={this.state.product._id}
            style={{ paddingTop: '6rem' }}
          >
            <div className="big-img">
              <img src={this.state.product.productImage} alt="" />
            </div>

            <div className="box">
              <div className="row">
                <h2>{this.state.product.name}</h2>
                <span>${this.state.product.price}</span>
              </div>

              <p>{this.state.product.category?.name}</p>
              {/* <p>{this.state.product.content}</p> */}

              <button className="cart">Add to cart</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default ProductDetail
