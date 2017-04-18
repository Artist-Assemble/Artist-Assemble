class RatingSerializer < ActiveModel::Serializer
  attributes :demo, :collab, :review, :user_id, :reviewer
end
