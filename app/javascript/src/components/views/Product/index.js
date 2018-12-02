import React from "react";

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
      </div>
    )
  }
}

export default Product;
