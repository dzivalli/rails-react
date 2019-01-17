import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { productsPath } from "src/helpers/routes";
import OrderForm from "./OrderForm";

const stateToProps = (state) => ({
  products: state.cart.products
});

class Cart extends React.Component {

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
          <Fragment>
            <h3 className="mt-2">Products:</h3>
            {
              products.map((product, index) => (
                <div key={index}>
                  <span className="mr-2">ID: {product.id}</span>
                  <span>Amount: {product.amount}</span>
                </div>
              ))
            }
            <OrderForm products={products} />
          </Fragment>
        )
    );
  }
}

export default connect(stateToProps, null)(Cart);
