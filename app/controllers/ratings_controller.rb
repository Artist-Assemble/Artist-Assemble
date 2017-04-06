class RatingsController < ApplicationController

  before_action :require_user

  def create
    @rating = Rating.new(rating_params)
    if @rating.save
      render json: @rating
    else
      render json: @rating.errors.full_messages, status: 400
    end
  end

  #reviewer is current user:

  private

  def rating_params
    params.permit(:user_id, :collab, :review, :reviewer)
  end

end
