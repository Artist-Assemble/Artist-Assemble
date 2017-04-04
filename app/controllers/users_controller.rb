class UsersController < ApplicationController

  def index
    @users = User.all
    render json: @users
  end

  def create
  end



  private

  def user_params
    params_permit(:name, :email, :password, :bio, :artist, :producer, :engineer)
  end
end
