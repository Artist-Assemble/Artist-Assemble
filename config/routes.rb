Rails.application.routes.draw do

  scope :api do
    resources :users
    resources :tags, only: [:show]
    resources :collaborators, only: [:create]
    resources :ratings, only: [:create]


    post '/login' => 'sessions#create'
  end

end
