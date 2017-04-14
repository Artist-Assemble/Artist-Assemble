class Collaboration < ApplicationRecord
  belongs_to :user
  belongs_to :collaborator, class_name: "User"

  has_many :messages, dependent: :destroy

  validates :collaborator, :status, presence: true

end
