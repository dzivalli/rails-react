class DummyController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    p params
    head :ok
  end
end
