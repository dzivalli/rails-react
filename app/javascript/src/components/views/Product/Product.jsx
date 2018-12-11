import React from "react";

import Gallery from "./Gallery";

class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { product: { id, title, price, images } } = this.props;

    return (
      <div>
        <div>Title: {title}</div>
        <div>Price: {price}</div>
        {
          images && <Gallery images={images} productId={id}/>
        }
      </div>
    )
  }
}

export default Product;
