import React from "react";

import Gallery from "./Gallery";

class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { product } = this.props;

    return (
      <div>
        <div>Title: {product.title}</div>
        <div>Price: {product.price}</div>
        {
          product.images && <Gallery images={product.images}/>
        }
      </div>
    )
  }
}

export default Product;
