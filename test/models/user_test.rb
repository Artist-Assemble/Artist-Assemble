require 'test_helper'

class UserTest < ActiveSupport::TestCase
  should have_secure_password
  should have_many :tags
  should have_many :taggings
  should have_many :ratings
  should have_many :collaborations
  should have_many :messages
end
