class ImagesController < ApplicationController
  def index
    @images = Image.where(product_id: params[:product_id])
  end

  def show
    @image = Image.find(params[:id])
  end
end
