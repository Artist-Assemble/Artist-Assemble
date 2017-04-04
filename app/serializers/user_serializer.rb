class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :bio, :artist, :producer, :engineer
  has_many :tags
    class TagSerializer < ActiveModel::Serializer
      attributes :name
    end
end
