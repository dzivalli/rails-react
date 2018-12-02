import React from "react";

import "./gallery.scss";

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeImageUrl: this.props.images[0].url
    };

    this.changeActiveImage = this.changeActiveImage.bind(this);
  }

  removeActiveThumbnailClass() {
    document
      .querySelectorAll("#gallery .thumbnail")
      .forEach((thumbnail) => {
        thumbnail.classList.remove("active-thumbnail");
      });
  }

  changeActiveImage(e) {
    const element = e.target;
    const url = element.getAttribute("src");

    this.removeActiveThumbnailClass();
    element.classList.add("active-thumbnail");
    this.setState({ activeImageUrl: url });
  }

  render() {
    const images = this.props.images;
    const { activeImageUrl } = this.state;

    return (
      <div id="gallery">
        <div>
          <img src={activeImageUrl} alt="" className="active-image"/>
        </div>
        <div>
          {
            images.map(({ url, id }) => (
              <img
                src={url}
                alt=""
                key={id}
                className="thumbnail"
                onClick={this.changeActiveImage}
              />
            ))
          }
        </div>
      </div>
    )
  }
}

export default Gallery;
