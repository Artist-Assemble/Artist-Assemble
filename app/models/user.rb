class User < ApplicationRecord

  has_many :taggings, dependent: :destroy
  has_many :tags, through: :taggings

  has_secure_password
  has_secure_token :token

  validates :name, :email, presence: true
  validates :email, uniqueness: true

end
