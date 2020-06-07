Rails.application.routes.draw do
  devise_for :users
  root "lessons#index"
  get "lessons/show"
  resources :users, only: [:edit, :update]
end
