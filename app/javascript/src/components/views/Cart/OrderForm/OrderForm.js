import React from "react";
import { Form, Field }  from "formik";

const OrderForm = (props) => {
  const { handleSubmit } = props;

  return (
    <Form className="mt-3">
      <div className="form-group">
        <Field
          name="firstName"
          placeholder="First Name"
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <Field
          name="lastName"
          placeholder="Last Name"
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <Field
          name="phone"
          placeholder="Phone"
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <Field
          type="email"
          name="email"
          placeholder="Email"
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <Field
          name="address"
          placeholder="Address"
          className="form-control"
          required
        />
      </div>
      <button type="submit" className="btn btn-success">Submit</button>
    </Form>
  );
};

export default OrderForm;
