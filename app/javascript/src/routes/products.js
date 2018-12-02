import ProductsContainer from "src/components/ProductsContainer"
import { productsPath } from "src/helpers/routes.js"

export default {
  path: productsPath(),
  component: ProductsContainer,
  exact: true
}
