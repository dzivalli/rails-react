import React from "react";

import { productImagesPath } from "src/helpers/routes";
import ProductImages from "src/components/views/ProductImages";

export default {
  path: productImagesPath(),
  render: ({ match: { params: { id, productId } } }) => (
    <ProductImages id={id} productId={productId} />
  )
}
