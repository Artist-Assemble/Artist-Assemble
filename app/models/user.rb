class User < ApplicationRecord

  has_many :taggings, dependent: :destroy
  has_many :tags, through: :taggings
  has_many :ratings, dependent: destroy
  has_many :collaborators
  has_many :messages, dependent: :destroy

  has_secure_password
  has_secure_token :token

  validates :name, :email, presence: true
  validates :email, uniqueness: true

  def demo_rating
    if ratings.blank?
      0
    else
      ratings.average(:demo).round(2)

  def collab_rating
    if ratings.blank?
      0
    else
      ratings.average(:collab).round(2)
    end
  end

end
