import React from "react";
import ReactDOM from "react-dom";
import { withRouter } from "react-router";

import { productPath } from "src/helpers/routes";
import Gallery from "src/components/shared/Gallery";
import superagent from "superagent";

import "./product-images.scss";

const PRODUCTS_URL = "/products";

class ProductImages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: true,
      images: []
    };

    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    const { productId } = this.props;

    superagent(`${PRODUCTS_URL}/${productId}/images`)
      .then(({ body: { images } }) => {
        this.setState({ images });
      })
  }

  closeModal() {
    const { productId } = this.props;

    this.setState({ isModalOpen: false });
    this.props.history.push(productPath(productId));
  }

  render() {
    const { isModalOpen, images } = this.state;
    const { productId, id } = this.props;

    return ReactDOM.createPortal(
      (
        <div className="modal" style={{ display: isModalOpen ? "block" : "none" }}>
          <div className="modal-content">
            { !images.length || (
              <Gallery
                images={images}
                productId={productId}
                activeImageId={id}
                isModal
              />
            )}
            <div>
              <button type="button" className="btn btn-secondary" onClick={this.closeModal}>Close</button>
            </div>
          </div>

        </div>
      ),
      document.getElementById("modal-block")
    );
  }
}

export default withRouter(ProductImages);
