import ProductsContainer from "src/components/views/Products";
import { productsPath } from "src/helpers/routes.js";
import { requestProducts } from "src/actions/Products";

export default {
  path: productsPath(),
  component: ProductsContainer,
  exact: true,
  prepareData: (store) => {
    store.dispatch(requestProducts());
  }
};
