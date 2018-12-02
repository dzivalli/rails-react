import React, { Component } from "react";

import { Link } from "react-router-dom";

import Price from "./price";
import TextBox from "./text-box";
import Image from "./image";
import BuyBlock from "./buy-block"
import { productPath} from "src/helpers/routes";

class ProductCard extends Component {
  constructor(props) {
    super(props);

    this.onProductCardDragStart = this.onProductCardDragStart.bind(this);
  }

  onProductCardDragStart(e) {
    const { id } = this.props.product;
    e.dataTransfer.setData("text",  JSON.stringify(id));
  }

  render() {
    const product = this.props.product;

    return (
      <div className="m-3 border float-left p-3"
           onDragStart={this.onProductCardDragStart}
           draggable>
        <Link to={productPath(product.id)}>
          <Image src={product.images[0].url}
                 alt={product.title}
                 width={100}
                 height={60} />
          <TextBox>{product.title}</TextBox>
          <Price price={product.price} />
        </Link>
        <BuyBlock productId={product.id} />
      </div>
    )
  }
}

export default ProductCard;
