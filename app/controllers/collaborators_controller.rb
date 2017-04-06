class CollaboratorsController < ApplicationController

  before_action :require_user

  def create
    @collab = Collaborator.new(collab_params)
    if @collab.save
      render json: @collab
    else
    render json: @collab.errors.full_messages, status: 400
    end
  end

  private

  def collab_params
    params.permit(:user_id, :collaborator_id, :status)
  end

end
