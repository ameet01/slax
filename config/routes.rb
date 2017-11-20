Rails.application.routes.draw do

  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show, :index, :create, :update]
    resource :session, only: [:new, :create, :destroy]
    resources :channels, only: [:create, :index, :show, :destroy, :update]
    resources :messages, only: [:show, :index, :create, :update, :destroy]
  end
end
