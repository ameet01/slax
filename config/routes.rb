Rails.application.routes.draw do

  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show, :index, :create, :update] do
      resources :channels, only: [:index]
    end
    resource :session, only: [:new, :create, :destroy]
    resources :channels, only: [:create, :index, :show, :destroy, :update] do
      resources :messages, only: [:index]
      resources :users, only: [:index]
    end
    resources :messages, only: [:show, :index, :create, :update, :destroy]
  end
end
