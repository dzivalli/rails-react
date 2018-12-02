json.products do
  json.array! @products do |product|
    json.(product, :id, :title, :price, :created_at)
    json.images product.images, :id, :url
  end
end

