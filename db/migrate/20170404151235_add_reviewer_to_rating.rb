class AddReviewerToRating < ActiveRecord::Migration[5.0]
  def change
    add_column :ratings, :reviewer, :integer
  end
end
