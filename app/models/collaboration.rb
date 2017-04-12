class Collaboration < ApplicationRecord
  belongs_to :user

  validates :collaborator_id, :status, presence: true

end
