import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Products from "./Products";

import { requestProducts } from "src/actions/Products";

const actionsToProps = (dispatch) => (bindActionCreators({ requestProducts }, dispatch));

const stateToProps = (state) => ({
  products: state.products.entries,
  isFetching: state.products.isFetching
});

class ProductsContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestProducts();
  }

  render() {
    let { products }= this.props;

    return (
      <Products products={products}/>
    );
  }
}

export default connect(stateToProps, actionsToProps)(ProductsContainer);
