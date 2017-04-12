class Collaboration < ApplicationRecord
  belongs_to :user
  belongs_to :collaborator, class_name: "User"

  validates :collaborator, :status, presence: true



end
