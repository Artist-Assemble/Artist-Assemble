class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :bio, :artist, :producer, :engineer

  has_one :ratings
    class RatingSerializer < ActiveModel::Serializer
      attributes :collab
    end

  has_many :tags
    class TagSerializer < ActiveModel::Serializer
      attributes :name
    end


end
