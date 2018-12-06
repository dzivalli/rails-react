import React from "react";

class ThumbnailsListBlock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeImageIndex: this.getActiveImageIndex()
    };

    this.onLeftArrowClick = this.onLeftArrowClick.bind(this);
    this.onRightArrowClick = this.onRightArrowClick.bind(this);
    this.onThumbnailChange = this.onThumbnailChange.bind(this);
    this.isActiveImageIndex = this.isActiveImageIndex.bind(this);
  }

  getActiveImageIndex() {
    const { activeImageId, images } = this.props;
    const imageIndex = images.map((image) => image.id).indexOf(parseInt(activeImageId));

    return imageIndex < 1 ? 0 : imageIndex;
  }

  onLeftArrowClick() {
    const index = this.state.activeImageIndex === 0
      ? this.props.images.length - 1
      : this.state.activeImageIndex - 1;

    this.onThumbnailChange(index);
  }

  onRightArrowClick() {
    const index = this.state.activeImageIndex === this.props.images.length - 1
      ? 0
      : this.state.activeImageIndex + 1;

    this.onThumbnailChange(index);
  }

  onThumbnailChange(index) {
    const { images, onImageChange } = this.props;

    this.setState({ activeImageIndex: index });
    onImageChange(images[index].id);
  }

  isActiveImageIndex(index) {
    return index === this.state.activeImageIndex;
  }

  render() {
    const { images } = this.props;

    return (
      <div className="thumbnails-list">
        <span className="arrow" onClick={this.onLeftArrowClick}>&lsaquo;</span>
        {
          images.map(({ url, id }, index) => (
            <img
              src={url}
              alt=""
              key={id}
              className={this.isActiveImageIndex(index) ? "thumbnail active-thumbnail" : "thumbnail"}
              onClick={(e) => this.onThumbnailChange(index)}
            />
          ))
        }
        <span className="arrow" onClick={this.onRightArrowClick}>&rsaquo;</span>
      </div>
    )
  }
}

export default ThumbnailsListBlock;
