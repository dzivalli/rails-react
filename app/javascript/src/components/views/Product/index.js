import React from "react";

class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id } = this.props;

    return (
      <div>
        <span>Product ID: {id}</span>
      </div>
    )
  }
}

export default Product;
