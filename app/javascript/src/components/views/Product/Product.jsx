import React from "react";

import Gallery from "./Gallery";

class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { product: { title, price, images } } = this.props;

    return (
      <div>
        <div>Title: {title}</div>
        <div>Price: {price}</div>
        {
          images && <Gallery images={images}/>
        }
      </div>
    )
  }
}

export default Product;
