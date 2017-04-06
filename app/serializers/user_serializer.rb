class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :bio, :artist, :producer, :engineer, :demo_rating, :collab_rating

  has_one :ratings
    class RatingSerializer < ActiveModel::Serializer
      attributes :demo, :collab, :review, :reviewer
    end

  has_many :tags
    class TagSerializer < ActiveModel::Serializer
      attributes :name
    end

  has_many :collaborators
    class CollaboratorSerializer < ActiveModel::Serializer
      attributes :user_id, :collaborator_id, :status
    end


end
