class RemoveRecipientAndSenderFromMessages < ActiveRecord::Migration[5.0]
  def change
    remove_column :messages, :recipient, :integer
    remove_column :messages, :sender, :integer
    add_column :messages, :collaboration_id, :integer
  end
end
