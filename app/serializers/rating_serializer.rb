class RatingSerializer < ActiveModel::Serializer
  attributes :collab, :review, :reviewer
  #need this to display the reviewer user information not just reviewer ID
end
