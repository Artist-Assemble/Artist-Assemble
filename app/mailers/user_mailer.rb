class UserMailer < ApplicationMailer

  def signup(user)
    @user = user
    mail(to: @user.email, subject: 'Welcome to Artist Assemble!')
  end

  def registration_confirmation(user)
     @user = user
     mail(:to => "#{user.name} <#{user.email}>", :subject => "Registration Confirmation")
  end
  
end
