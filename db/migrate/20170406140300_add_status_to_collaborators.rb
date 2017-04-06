class AddStatusToCollaborators < ActiveRecord::Migration[5.0]
  def change
    add_column :collaborators, :status, :string
  end
end
