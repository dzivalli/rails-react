import React from "react";

import "./gallery.scss";

import Gallery from "src/components/shared/Gallery";

const GalleryContainer = (props) => (
  <Gallery images={props.images} productId={props.productId} />
);

export default GalleryContainer;
