import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";


import { cartPath } from "src/helpers/routes";
import { addProduct } from "src/actions/Cart";

const actionsToProps = (dispatch) => (bindActionCreators({ addProduct }, dispatch));

const stateToProps = (state) => ({
  products: state.cart.products
});

class Checkout extends React.Component {
  constructor(props) {
    super(props);
  }

  onDragOver(e) {
    e.preventDefault();
  }

  onProductDrop(e) {
    e.preventDefault();

    const id = JSON.parse(e.dataTransfer.getData("text"));
    this.props.addProduct({ id, amount: 1 })
  }

  render() {
    let { products } = this.props;

    return (
      <Link className="nav-link btn btn-success"
               onDrop={(e) => this.onProductDrop(e) }
               onDragOver={this.onDragOver}
               to={cartPath()}>
        Checkout ({products.length})
      </Link>
    );
  }
}

export default connect(stateToProps, actionsToProps)(Checkout);
