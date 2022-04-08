import React, { Component } from "react";

class ProductDetail extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  async fetchSingleProduct() {}

  componentDidMount() {}
  render() {
    return (
      <div className="container-fluid" style={{ paddingTop: "6rem" }}>
        <h1>
          Product Details for product {this.props.match.params.id} will Go
          Here!!
        </h1>
      </div>
    );
  }
}

export default ProductDetail;
