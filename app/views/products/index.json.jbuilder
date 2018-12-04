json.products do
  json.array! @products do |product|
    json.(product, :id, :title, :price, :created_at)
    json.image_url product.images.first.url
  end
end

