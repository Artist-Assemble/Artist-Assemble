class CollaborationsController < ApplicationController

  before_action :require_user

  def index
    @collabs = User.where(id: current_user.id).includes(:collaborations, :joined_collabs).first
    render json: @collabs
  end

  def create
    @collab = current_user.collaborations.new(collab_params)
    if @collab.save
      render json: @collab
    else
      render json: @collab.errors.full_messages, status: 400
    end
  end

  def update
    if current_user.collaborations.update!(collab_params)
      render json: current_user.collaborations
    else
      render json: current_user.collaborations.errors.full_messages
    end
  end

  private

  def collab_params
    params.permit(:collaborator_id, :status)
  end

end
