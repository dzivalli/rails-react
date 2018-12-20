import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { addProduct } from "src/actions/Cart";
import Checkout from "./Checkout";

const actionsToProps = (dispatch) => (bindActionCreators({ addProduct }, dispatch));

const stateToProps = (state) => ({
  products: state.cart.products
});

class CheckoutContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { products, addProduct } = this.props;

    return (
      <Checkout products={products} addProduct={addProduct}/>
    );
  }
}

export default connect(stateToProps, actionsToProps)(CheckoutContainer);
