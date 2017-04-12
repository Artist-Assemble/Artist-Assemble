class CollaborationSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :collaborator_id, :status
end
