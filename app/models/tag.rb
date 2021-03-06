class Tag < ApplicationRecord
  has_many :taggings
  has_many :users, through: :taggings

  validates :name, presence: true
end
