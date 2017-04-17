class User < ApplicationRecord

  before_create :confirmation_token



  mount_uploader :photo, PhotoUploader
  mount_uploader :audio, AudioUploader


  has_many :taggings, dependent: :destroy
  has_many :tags, through: :taggings
  has_many :ratings, dependent: :destroy
  has_many :given_ratings, class_name: "Rating", foreign_key: :reviewer
  has_many :collaborations
  has_many :joined_collabs, class_name: "Collaboration", foreign_key: :collaborator_id
  has_many :messages, dependent: :destroy

  has_secure_password
  has_secure_token :token

  validates :name, :email, presence: true
  validates :email, uniqueness: true
  validates_format_of :email, :with => /@/

  validates :photo, file_size: { less_than: 2.megabytes, message: "photo should be less than #{count}" }
  validates :audio, file_size: { less_than: 500.megabytes, message: "audio should be less than #{count}" }

  def demo_rating
    if ratings.where("demo is not null").any?
      ratings.average(:demo).round(2)
    else
      0
    end
  end

  def collab_rating
    if ratings.where("collab is not null").any?
      ratings.average(:collab).round(2)
    else
      0
    end
  end

  private
  def confirmation_token
    if self.confirm_token.blank?
        self.confirm_token = SecureRandom.urlsafe_base64.to_s
    end
  end

end
