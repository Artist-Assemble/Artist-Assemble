class RatingSerializer < ActiveModel::Serializer
  attributes :demo, :collab, :review, :user_id, :reviewer
  #need this to display the reviewer user information not just reviewer ID
end
