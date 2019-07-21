Rails.application.routes.draw do
  #http://guides.rubyonrails.org/routing.html
  resources :companies
  resources :tickets
end
