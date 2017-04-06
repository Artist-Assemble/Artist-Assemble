class UsersController < ApplicationController

  before_action :find_user, only: [:show, :update]
  before_action :require_self, only: [:update]

  def index
    @users = User.all
    render json: @users
  end

  def create
    @user = User.new(user_params)
    tag = Tag.find_or_create_by!(name: params[:tag])
    @user.tags << tag
    if @user.save
      render json: @user, serializer: UserExtendedSerializer
    else
      render json: @user.errors.full_messages, status: 400
    end
  end

  def show
    if current_user
      render json: current_user
    else
      render json: @user
    end
  end

  def update
    if @user.update!(user_params)
      render json: @user
    else
      render json: @user.errors.full_messages, status: 400
    end
  end




  private

  def user_params
    params.permit(:name, :email, :password, :password_confirmation, :bio, :artist, :producer, :engineer, :photo, :token)
  end

  def find_user
    @user = User.find(params[:id])
  end


end
