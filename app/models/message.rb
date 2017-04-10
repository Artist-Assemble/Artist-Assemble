class Message < ApplicationRecord

  mount_uploader :attachment, AttachmentUploader

  validates :attachment, file_size: { less_than: 500.megabytes, message: "attachment should be less than #{count}" }

  belongs_to :user

end
