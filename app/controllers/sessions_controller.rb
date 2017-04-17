class SessionsController < ApplicationController

  def create
    @user = User.find_by(email: params[:email].downcase)&.
              authenticate(params[:password])
    if @user
      render json: @user, serializer: UserExtendedSerializer
    else
      render json: ["Incorrect credentials."], status: 401
    end
  end

end
