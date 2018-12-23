import React from "react";

import request from "superagent";

class Contacts extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      form: {
        email: "",
        text: ""
      }
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onInputChange(e, inputName) {
    let newForm = Object.assign({}, this.state.form, { [inputName]: e.target.value });
    this.setState({ form: newForm });
  }

  onSubmit(e) {
    e.preventDefault();

    request
      .post("/dummy")
      .send(this.state.form)
      .end(this.clearForm);
  }

  clearForm() {
    this.setState({
      form: {
        email: "",
        text: ""
      }
    });
  }

  render() {
    let { email, text } = this.state.form;

    return (
      <div>
        <form className="mt-5 col-lg-8 offset-lg-2" onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => this.onInputChange(e, "email")}
            />
          </div>
          <div className="form-group">
            <label>Text</label>
            <textarea
              className="form-control"
              value={text}
              onChange={(e) => this.onInputChange(e, "text")}
            >
            </textarea>
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default Contacts;
