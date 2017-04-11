class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :bio, :artist, :producer, :engineer, :demo_rating, :collab_rating, :photo, :audio

  has_many :ratings
    class RatingSerializer < ActiveModel::Serializer
      attributes :demo, :collab, :review, :reviewer
    end

  has_many :tags
    class TagSerializer < ActiveModel::Serializer
      attributes :name
    end

  has_many :collaborations
    class CollaborationSerializer < ActiveModel::Serializer
      attributes :collaborator_id, :status
    end


end
