import React from "react";
import request from "superagent";
import humps from "humps";

import Products from "src/components/views/Products";

const PRODUCTS_URL = "/products";

class ProductsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    }
  }

  componentDidMount() {
    request(PRODUCTS_URL)
      .then(({ body }) => {
        const products = humps.camelizeKeys(body.products);
        this.setState({ products });
      })
  }

  render() {
    let { products }= this.state;

    return (
      <Products products={products}/>
    )
  }
}

export default ProductsContainer;
