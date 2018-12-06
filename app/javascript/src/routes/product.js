import React from "react";

import ProductContainer from "src/components/views/Product";
import { productPath } from "src/helpers/routes";

export default {
  path: productPath(),
  render: ({ match }) => (
    <ProductContainer id={match.params.id}/>
  )
}
