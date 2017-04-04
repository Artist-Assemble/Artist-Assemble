class RemoveDemoFromRating < ActiveRecord::Migration[5.0]
  def change
    remove_column :ratings, :demo, :integer
  end
end
