FactoryGirl.define do
  factory :user do
    name "MyString"
    email "MyString"
    password_digest "MyString"
    bio "MyString"
    artist false
    producer false
    engineer false
  end
end
