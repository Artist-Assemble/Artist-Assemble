class CollaborationsController < ApplicationController

  before_action :require_user

  def index
    @collabs = current_user.collaborations
  end

  def create
    @collab = current_user.collaborations.new(collab_params)
    if @collab.save
      render json: @collab
    else
      render json: @collab.errors.full_messages, status: 400
    end
  end

  private

  def collab_params
    params.permit(:collaborator_id, :status)
  end

end
