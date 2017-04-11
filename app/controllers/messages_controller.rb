class MessagesController < ApplicationController

  def index
    Pusher.trigger('chat', 'new_message', body: params[:message])
  end

end
