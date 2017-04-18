class ApplicationController < ActionController::Base

  def fallback
    render file: Rails.root + '/public/index.html', layout: false
  end

  private

  def current_user
    @current_user ||= User.find_by(token: params[:token]) if params[:token]
  end

  def require_user
    unless current_user
      render json: ["You need to be logged in to do this."], status: 404
    end
  end

end
