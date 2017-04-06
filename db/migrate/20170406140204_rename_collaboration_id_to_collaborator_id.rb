class RenameCollaborationIdToCollaboratorId < ActiveRecord::Migration[5.0]
  def change
    rename_column :collaborators, :collaboration_id, :collaborator_id
  end
end
