class User < ApplicationRecord

  has_many :taggings, dependent: :destroy
  has_many :tags, through: :taggings
  has_many :ratings
  has_many :collaborations, through: :collaborators
  has_many :messages, dependent: :destroy

  has_secure_password
  has_secure_token :token

  validates :name, :email, presence: true
  validates :email, uniqueness: true

end
