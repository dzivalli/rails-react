import React from "react";
import { Link } from "react-router-dom";

import CartContext from "src/components/cart-context"
import { cartPath } from "src/helpers/routes";

class Checkout extends React.Component {
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
          ({ productsInCart, addProduct }) => (
            <Link className="nav-link btn btn-success"
                     onDrop={(e) => this.onProductDrop(e, addProduct) }
                     onDragOver={this.onDragOver}
                     to={cartPath()}>
              Checkout ({productsInCart.length})
            </Link>
          )
        }
      </CartContext.Consumer>
    );
  }
}

export default Checkout;
