class Collaboration < ApplicationRecord
  belongs_to :user

  validates :collaborator_id, presence: true

end
