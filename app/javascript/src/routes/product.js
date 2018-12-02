import React from "react";

import ProductContainer from "src/components/ProductContainer";
import { productPath } from "src/helpers/routes";

export default {
  path: productPath(),
  render: ({ match }) => (
    <ProductContainer id={match.params.id}/>
  )
}
