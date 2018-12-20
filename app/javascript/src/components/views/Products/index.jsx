import React from "react";
import { connect } from "react-redux";

import Products from "./Products";

const stateToProps = (state) => ({
  products: state.products.entries,
  isFetching: state.products.isFetching
});

class ProductsContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { products }= this.props;

    return (
      <Products products={products}/>
    );
  }
}

export default connect(stateToProps)(ProductsContainer);
