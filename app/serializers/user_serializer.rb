class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :bio, :artist, :producer, :engineer

  has_one :rating
    class RatingSerializer < ActiveModel::Serializer
      attributes :collab
    end

  has_many :tags
    class TagSerializer < ActiveModel::Serializer
      attributes :name
    end

  has_many :collaborations
    class CollaborationSerializer < ActiveModel::Serializer
      attributes :status
    end
    
end
