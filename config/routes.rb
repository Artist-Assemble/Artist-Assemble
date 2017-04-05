Rails.application.routes.draw do

  scope :api do
    resources :users

    post '/login' => 'sessions#create'
  end
  
end
