FactoryGirl.define do
  factory :message do
    body "MyText"
    recipient 1
    sender 1
    attachment "MyString"
  end
end
