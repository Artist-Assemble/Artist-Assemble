class UserExtendedSerializer < ActiveModel::Serializer
  attributes :id, :email, :token
end
