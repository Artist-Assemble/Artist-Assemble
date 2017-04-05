class RatingsController < ApplicationController

  def create
    @rating = Rating.new(rating_params)
  end

  private

  def rating_params
    params.permit(:user_id, :collab, :review, :reviewer)
  end

end
