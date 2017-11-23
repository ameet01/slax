class Api::MessagesController < ApplicationController
  def show
    @message = Message.find(params[:id])
  end

  def index
    @messages = Message.all
    render '/api/messages/index'
  end

  def create
    @message = Message.new(message_params)

    if @message.save
      render :show
    else
      render json: @message.errors.full_messages, status: 401
    end
  end

  def destroy
  end

  def update
    @message = Message.find(params[:id])

    if @message.update_attributes(message_params)
      render :show
    else
      render json: @message.errors.full_messages, status: 401
    end
  end

  private
  def message_params
    params.require(:message).permit(:body, :user_id, :channel_id)
  end
end
