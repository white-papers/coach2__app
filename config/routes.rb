Rails.application.routes.draw do
  get 'lessons/index'

  root "lessons#index"
end
