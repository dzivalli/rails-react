Rails.application.routes.draw do
  get 'app/*other', to: 'app#index'
  get 'app', to: 'app#index'
  resources :products, only: [:show, :index]
end
