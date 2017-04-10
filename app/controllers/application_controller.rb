class ApplicationController < ActionController::Base

  private

  def current_user
    @current_user ||= User.find_by(token: params[:token]) if params[:token]
  end

  def require_user
    unless current_user
      render json: ["You need to be logged in to do this."], status: 401
    end
  end

  def require_self
    unless current_user
      render json: ["Keep your hands to yourself."], status: 404
    end
  end

end
