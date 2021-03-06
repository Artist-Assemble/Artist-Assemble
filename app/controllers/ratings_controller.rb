class RatingsController < ApplicationController

  before_action :require_user

  def create
    @rating = current_user.given_ratings.new(rating_params)
    if @rating.save
      render json: @rating
    else
      render json: @rating.errors.full_messages, status: 400
    end
  end


  private

  def rating_params
    params.permit(:user_id, :collab, :demo, :review)
  end


end
