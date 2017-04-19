require 'test_helper'

class UserTest < ActiveSupport::TestCase


  should have_secure_password
  should have_many :tags
  should have_many :taggings
  should have_many :ratings
  should have_many :collaborations
  should have_many :messages

  def test_validates_name
    @user = User.new
    refute @user.save
    assert @user.errors.full_messages.include? "Name can't be blank"
  end

  def test_validates_email
    @user = User.new
    refute @user.save
    assert @user.errors.full_messages.include? "Email can't be blank"
  end

  def test_downcase_email
    @user = User.new(name: "Test", email: "Email@email.com", password: "password")
    assert @user.save
    assert @user.email == "email@email.com"
  end

  def test_validate_password
    @user = User.new(name: "Tester", email: "test@test.com")
    refute @user.save
    assert @user.errors.full_messages.include? "Password can't be blank"
  end
end
