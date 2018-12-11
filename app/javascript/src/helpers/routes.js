export const productsPath = () => "/";
export const productPath = (id = ":id") => `/products/${id}`;
export const cartPath = () => "/cart";
export const contactsPath = () => "/contacts";
export const productImagesPath = ({ productId = ":productId", id = ":id" } = {}) => `/products/${productId}/images/${id}`;
