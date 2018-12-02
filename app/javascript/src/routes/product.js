import React from "react";

import Product from "src/components/views/Product";
import { productPath } from "src/helpers/routes";

export default {
  path: productPath(),
  render: ({ match }) => (
    <Product id={match.params.id}/>
  )
}
