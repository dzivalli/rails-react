import React, { Component } from "react";

class Price extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="my-2">
        <strong>Price: </strong>{this.props.price} RUB
      </div>
    )
  }
}

export default Price;
