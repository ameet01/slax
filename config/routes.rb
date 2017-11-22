Rails.application.routes.draw do

  namespace :api do
    get 'messages/create'
  end

  namespace :api do
    get 'messages/update'
  end

  namespace :api do
    get 'messages/destroy'
  end

  namespace :api do
    get 'messages/index'
  end

  namespace :api do
    get 'channels/show'
  end

  namespace :api do
    get 'channels/index'
  end

  namespace :api do
    get 'channels/create'
  end

  namespace :api do
    get 'channels/destroy'
  end

  namespace :api do
    get 'channels/update'
  end

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

  root 'static_pages#root'
end
