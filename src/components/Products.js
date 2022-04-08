import axios from "axios";
import React, { Component } from "react";
import ProductCard from "./ProductCard";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  async fetchProducts() {
    const response = await axios.get("http://localhost:8080/api/products");
    this.setState({
      products: response.data.products,
    });
    console.log(this.state.products);
  }

  componentDidMount() {
    this.fetchProducts();
  }
  render() {
    return (
      <div className="row">
        {this.state.products.map((product) => (
          <div key={product._id} className="col-lg-4 col-md-6 mb-4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    );
  }
}
