import React from "react";

import { Link } from "react-router-dom";
import { withRouter } from "react-router";

import { productImagesPath } from "src/helpers/routes";
import ThumbnailsListBlock from "./ThumbnailsListBlock"

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeImageId: this.props.activeImageId || this.props.images[0].id
    };

    this.changeActiveImageId = this.changeActiveImageId.bind(this);
    this.getActiveImageUrl = this.getActiveImageUrl.bind(this);
  }

  changeActiveImageId(activeImageId) {
    const { isModal, history, productId } = this.props;

    isModal && history.push(productImagesPath({id: activeImageId, productId: productId}));
    this.setState({ activeImageId });
  }

  getActiveImageUrl() {
    const { images } = this.props;
    const { activeImageId } = this.state;
    const image = images.find((image) => activeImageId == image.id);

    return image.url;
  }

  render() {
    const { images, productId } = this.props;
    const { activeImageId } = this.state;

    return (
      <div id="gallery">
        <div>
          <Link
            to={{
              pathname: productImagesPath({id: activeImageId, productId: productId }),
              state: { modal: true }
            }}
          >
            <img src={this.getActiveImageUrl()} alt="" className="active-image"/>
          </Link>
        </div>
        <ThumbnailsListBlock
          images={images}
          onImageChange={this.changeActiveImageId}
          activeImageId={activeImageId}
        />
      </div>
    )
  }
}

export default withRouter(Gallery);
