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

  changeActiveImage(url) {
    this.setState({ activeImageUrl: url });
  }

  isActiveImage(url) {
    return url === this.state.activeImageUrl;
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
                className={this.isActiveImage(url) ? "thumbnail active-thumbnail" : "thumbnail"}
                onClick={() => this.changeActiveImage(url)}
              />
            ))
          }
        </div>
      </div>
    )
  }
}

export default Gallery;
