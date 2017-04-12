class ChangeStatusToBoolean < ActiveRecord::Migration[5.0]
  def change
    execute 'ALTER TABLE collaborations ALTER COLUMN status TYPE boolean USING (status::boolean)'
  end
end
