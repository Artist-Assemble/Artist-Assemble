class AddAudioToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :audio, :string
  end
end
