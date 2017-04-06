class RemoveForeignKeyFromCollaborators < ActiveRecord::Migration[5.0]
  def change
    remove_foreign_key :collaborators, column: :collaboration_id
  end
end
