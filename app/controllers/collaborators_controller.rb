class CollaboratorsController < ApplicationController

  before_action :require_user

  def create
    @collab = Collaborator.new(collab_params)
    render json: @collab
  end

  private

  def collab_params
    params.permit(:user_id, :collaborator_id, :status)
  end

end
