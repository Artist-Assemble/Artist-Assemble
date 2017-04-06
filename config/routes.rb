Rails.application.routes.draw do

  scope :api do
    resources :users
    resources :tags
    resources :collaborators
    resources :ratings, only: [:create]


    post '/login' => 'sessions#create'
  end

end
