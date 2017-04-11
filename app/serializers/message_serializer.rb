class MessageSerializer < ActiveModel::Serializer
  attributes :id, :collaboration_id, :body, :attachment
  has_one :user
end
