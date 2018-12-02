import React from "react";

import { Redirect } from "react-router-dom";
import CartContext from "src/components/cart-context";
import { productsPath } from "src/helpers/routes";

class Cart extends React.Component {
  constructor(props) {
    super(props);
  }

  onDragOver(e) {
    e.preventDefault();
  }

  onProductDrop(e, addProductCallback) {
    e.preventDefault();

    const id = JSON.parse(e.dataTransfer.getData("text"));
    addProductCallback(id);
  }

  render() {
    return (
      <CartContext.Consumer>
        {
          ({productsInCart}) => {
            if (productsInCart.length === 0) {
              return (
                <Redirect
                  to={{
                    pathname: productsPath(),
                    state: { message: "Your cart is empty" }
                  }}
                />
              )
            } else {
              return (
                productsInCart.map((product, index) => (
                  <div key={index}>
                    <span className="mr-2">ID: {product.id}</span>
                    <span>Amount: {product.amount}</span>
                  </div>
                ))
              )
            }
          }
        }
      </CartContext.Consumer>
    );

  }
}

export default Cart;
