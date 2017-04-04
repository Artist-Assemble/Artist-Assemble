class Collaboration < ApplicationRecord

  has_many :users, through: :collaborators
  
end
