import Products from "src/components/views/Products"
import { productsPath } from "src/helpers/routes.js"

export default {
  path: productsPath(),
  component: Products,
  exact: true
}
