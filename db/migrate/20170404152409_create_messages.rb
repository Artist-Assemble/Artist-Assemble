class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.text :body
      t.integer :recipient
      t.integer :sender
      t.string :attachment

      t.timestamps
    end
  end
end
