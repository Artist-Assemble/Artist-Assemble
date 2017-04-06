class RatingsController < ApplicationController

  before_action :require_user

  def create
    @rating = Rating.new(rating_params)
    render json: @rating
  end

  #reviewer is current user:

  private

  def rating_params
    params.permit(:user_id, :collab, :review, :reviewer)
  end

end
