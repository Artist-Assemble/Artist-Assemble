class TagsController < ApplicationController

  def show
    @tag = Tag.find_by(name: params[:tag])
    render json: @tag, include: ['users.tags']
  end

end
