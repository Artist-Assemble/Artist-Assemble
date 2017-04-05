class UsersController < ApplicationController

  before_action :find_user, only: [:show, :update]
  before_action :require_self, only: [:update]

  def index
    @users = User.all
    render json: @users
  end

  def create
    @user = User.new(user_params)
    params[:tags].split(',').each do |name|
      tag = Tag.find_or_create_by!(name: name)
      @user.tags << tag
    end
    if @user.save
      render json: @user, serializer: UserExtendedSerializer
    else
      render json: @user.errors.full_messages, status: 400
    end
  end

  def show
    render json: @user
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
    params_permit(:name, :email, :password, :password_confirmation, :bio, :artist, :producer, :engineer, :photo)
  end

  def find_user
    @user = User.find(params[:id])
  end

  def require_self
    unless @user = current_user
      render json: ["Keep your hands to yourself."], status: 404
    end
  end

end
