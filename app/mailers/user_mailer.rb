class UserMailer < ApplicationMailer

  def signup(user)
    @user = user
    mail(to: @user.email, subject: 'Welcome to Artist Assemble!')
  end
end
