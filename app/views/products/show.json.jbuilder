json.product do
  json.(@product, :id, :title, :price)
  json.images @product.images, :id, :url
end
