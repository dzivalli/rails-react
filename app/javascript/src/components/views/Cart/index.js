import React from "react";
import { connect } from "react-redux";

import { Redirect } from "react-router-dom";
import { productsPath } from "src/helpers/routes";

const stateToProps = (state) => ({
  products: state.cart.products
});

class Cart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { products } = this.props;

    return (
      products.length === 0
        ? (
          <Redirect
            to={{
              pathname: productsPath(),
              state: { message: "Your cart is empty" }
            }}
          />
        )
        : (
            products.map((product, index) => (
              <div key={index}>
                <span className="mr-2">ID: {product.id}</span>
                <span>Amount: {product.amount}</span>
              </div>
            ))
        )
    )
  }
}

export default connect(stateToProps, null)(Cart);
