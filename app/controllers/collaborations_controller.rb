class CollaborationsController < ApplicationController

  before_action :require_user
  before_action :require_collab, only: [:destroy]

  def index
    @collabs = Collaboration.where("user_id = ? OR collaborator_id = ?", current_user.id, current_user.id)
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

  def destroy
    @collab.destroy
    if @collab.destroyed?
      render json: ["Collaboration has been closed"], status: 200
    else
      render json: ["Something went wrong"], status: 400
    end
  end

  private

  def require_collab
    @collab = Collaboration.find_by(id: params[:id])
    unless current_user == @collab.user or current_user == @collab.collaborator
      render json: ["You are not allowed to do this."], status: 404
    end
  end

  def collab_params
    params.permit(:collaborator_id, :status)
  end

end
