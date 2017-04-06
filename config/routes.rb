Rails.application.routes.draw do

  scope :api do
    resources :users
    resources :tags


    post '/login' => 'sessions#create'
  end

end
