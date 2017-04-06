class AddDemoToRating < ActiveRecord::Migration[5.0]
  def change
    add_column :ratings, :demo, :integer
  end
end
