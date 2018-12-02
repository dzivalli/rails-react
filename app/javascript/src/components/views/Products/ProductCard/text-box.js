import React, { Component } from "react";

class TextBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="my-2">
        <strong>Title: </strong>{this.props.children}
      </div>
    )
  }
}

export default TextBox;
