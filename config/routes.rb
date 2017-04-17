Rails.application.routes.draw do

  scope :api do
    resources :users do
      collection do
       match 'search' => 'users#search', via: [:get], as: :search
     end
      resources :collaborations, only: [:index, :create, :update]
    end
    resources :tags, only: [:show]
    resources :collaborations, only: [:index, :create, :update, :destroy] do
      resources :messages, only: [:index, :create]
    end
    resources :ratings, only: [:create]


    post '/login' => 'sessions#create'
  end

end
