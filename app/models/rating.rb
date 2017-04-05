class Rating < ApplicationRecord
  belongs_to :user

  validates_numericality_of :collab, :in => 1..5

  def average_rating
    self.class.average(:collab).group(:user_id).round(2)
  end

end
