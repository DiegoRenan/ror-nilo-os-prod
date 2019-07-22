Rails.application.routes.draw do
  #http://guides.rubyonrails.org/routing.html
  resources :companies
  resources :tickets do
    resource :company, only: [:show]
    resource :company, only: [:show], path: 'relationships/company'
  end
end
