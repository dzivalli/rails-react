import React from "react";
import request from "superagent";
import humps from "humps";

import Product from "src/components/views/Product";

const PRODUCTS_URL = "/products";

class ProductContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {}
    }
  }

  componentDidMount() {
    const { id }= this.props;

    request(`${PRODUCTS_URL}/${id}`)
      .then(({ body }) => {
        const product = humps.camelizeKeys(body.product);
        this.setState({ product });
      })
  }

  render() {
    let { product }= this.state;

    return (
      <Product product={product}/>
    )
  }
}

export default ProductContainer;
