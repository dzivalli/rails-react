import React from "react";

import CartContext from "src/components/cart-context";

class CartContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productsInCart: []
    };

    this.addProduct = this.addProduct.bind(this);
  }

  addProduct(id, amount = 1) {
    const productsInCart = this.state.productsInCart.slice(0);

    productsInCart.push({ id, amount });
    this.setState({ productsInCart });
  }

  render() {
    return (
      <CartContext.Provider value={{
        productsInCart: this.state.productsInCart,
        addProduct: this.addProduct
      }}>
        {this.props.children}
      </CartContext.Provider>
    )
  }
}

export default CartContainer;
