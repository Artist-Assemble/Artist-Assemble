class Rating < ApplicationRecord
  
  belongs_to :user

  validates_numericality_of :collab, :in => 0..5
  validates_numericality_of :demo, :in => 0..5
  validate :atleast_one_rating

  def atleast_one_rating
    errors.add(:base, "Must rate at least one collab or demo.") unless collab || demo
  end




end
