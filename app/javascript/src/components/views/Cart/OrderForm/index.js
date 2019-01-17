import { connect } from "react-redux";
import { withFormik } from "formik";

import OrderForm from "./OrderForm";
import { submitOrder } from "src/actions/Cart";

const handleSubmit = (values, { props: { products, submitOrder} }) => {
  const payload = { contact: values, products };
  submitOrder(payload);
};

const dispatchToProps = (dispatch) => ({
  submitOrder: (payload) => {
    dispatch(submitOrder(payload));
  }
});

const OrderFormWithFormik = withFormik({ handleSubmit })(OrderForm);

export default connect(null, dispatchToProps)(OrderFormWithFormik);

