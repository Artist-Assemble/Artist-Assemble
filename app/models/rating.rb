class Rating < ApplicationRecord
  belongs_to :user
  
  validates_numericality_of :collab, :in => 0..5
  validates_numericality_of :demo, :in => 0..5


end
