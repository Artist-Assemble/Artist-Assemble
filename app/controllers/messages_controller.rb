class MessagesController < ApplicationController

  before_action :require_user
  before_action :find_collab

  def index
    @messages = @collaboration.messages
    render json: @messages
  end

  def create
    @message = @collaboration.messages.new(message_params)
    @message.user = current_user
    if @message.save
      Pusher.trigger("chat_#{params[:collaboration_id]}", 'new_message', body: params[:body])
      render json: @message
    else
      render @message.errors.full_messages, status: 400
    end
  end

  private

  def message_params
    params.permit(:body, :attachment)
  end

  def find_collab
    @collaboration = Collaboration.find(params[:collaboration_id])
  end


end
