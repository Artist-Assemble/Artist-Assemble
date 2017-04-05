class Rating < ApplicationRecord
  belongs_to :user

  validates_numericality_of :collab, :in => 1..5



end
