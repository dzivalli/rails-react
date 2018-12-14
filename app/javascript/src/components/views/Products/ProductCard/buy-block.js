import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { addProduct } from "src/actions/Cart"

const actionsToProps = (dispatch) => (bindActionCreators({ addProduct }, dispatch));

class BuyBlock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: 0
    };

    this.onAmountChange = this.onAmountChange.bind(this);
    this.onProductBuy = this.onProductBuy.bind(this);
  }

  onAmountChange(e) {
    this.setState({ amount: parseInt(e.target.value) })
  }

  onProductBuy() {
    let { amount } = this.state;
    let { addProduct, productId } = this.props;

    addProduct({ id: productId, amount })
  }

  render() {
    let { amount } = this.state;

    return (
      <div className="mt-2">
        <input type="number"
               onChange={this.onAmountChange} />
        <button className="btn btn-info float-right ml-1"
                onClick={this.onProductBuy}
                disabled={!amount}>
          Buy
        </button>
      </div>
    )
  }
}

export default  connect(null, actionsToProps)(BuyBlock);
