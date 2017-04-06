class Rating < ApplicationRecord
  belongs_to :user

  validates_numericality_of :collab, :in => 1..5
  validates_numericality_of :demo, :in => 1..5




end
