Rails.application.routes.draw do
  get 'app/*other', to: 'app#index'
  get 'app', to: 'app#index'
  resources :products, only: [:show, :index] do
    resources :images, only: [:show, :index], shallow: true
  end
  resources :dummy, only: :create
end
