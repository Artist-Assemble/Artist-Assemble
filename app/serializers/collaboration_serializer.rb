class CollaborationSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :collaborator_id, :status

  has_one :user
  class UserSerializer < ActiveModel::Serializer
    attributes :name, :photo
  end

  has_one :collaborator
  class CollaboratorSerializer < ActiveModel::Serializer
    attributes :name, :photo
  end

  has_many :messages
  class MessageSerializer < ActiveModel::Serializer
    attributes :id, :collaboration_id, :body, :attachment, :user_id
  end

end
