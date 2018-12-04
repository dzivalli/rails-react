import React, { Component } from "react";

import ProductCard from "./ProductCard";
import { withRouter } from "react-router-dom";

class Products extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { products } = this.props;
    const { state } = this.props.location;
    const message = state && state.message;

    return (
      <div>
        {
          message && (<div className="alert alert-danger mt-2">{message}</div>)
        }
        {
          products.map((product) => (
            <ProductCard product={product} key={product.id}/>
          ))
        }
      </div>
    )
  }
}

export default withRouter(Products);
