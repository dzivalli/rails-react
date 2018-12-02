import React from "react";
import CartContext from "src/components/cart-context"

class BuyBlock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: 0
    };

    this.onAmountChange = this.onAmountChange.bind(this);
  }

  onAmountChange(e) {
    this.setState({ amount: parseInt(e.target.value) })
  }

  render() {
    const { amount } = this.state;
    const { productId } = this.props;

    return (
      <CartContext.Consumer>
        {
          ({ addProduct }) => (
            <div className="mt-2">
              <input type="number"
                     onChange={this.onAmountChange} />
              <button className="btn btn-info float-right ml-1"
                      onClick={() => addProduct(productId, amount)}
                      disabled={!amount}>
                Buy
              </button>
            </div>
          )
        }
      </CartContext.Consumer>

    )
  }
}

export default  BuyBlock;
