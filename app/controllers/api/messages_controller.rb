class Api::MessagesController < ApplicationController
  before_action :require_logged_in

  def show
    @message = Message.find(params[:id])
    render 'api/messages/show'
  end

  def index
    @messages = Message.includes(:emoticons).where(channel_id: params[:channelId])
    channel = Channel.find_by(id: params[:channelId])
    @users = channel.users
    render '/api/messages/index'
  end

  def create
    @message = Message.new(message_params)
    if @message.save
      Pusher.trigger(
        "channel-#{@message.channel_id}", 'create-message',
        {
          id: @message.id,
          body: @message.body,
          user_id: @message.user_id,
          channel_id: @message.channel_id,
          created_at: @message.created_at.in_time_zone('Pacific Time (US & Canada)').strftime("%l:%M %p"),
          date: @message.created_at.in_time_zone('Pacific Time (US & Canada)').strftime("%A, %B %d")
        }
      )
      render 'api/messages/show'
    else
      render json: @message.errors.full_messages, status: 401
    end
  end

  def destroy
  end

  def update
    @message = Message.find(params[:id])

    if @message.update_attributes(message_params)
      render "api/messages/show"
    else
      render json: @message.errors.full_messages, status: 401
    end
  end

  private
  def message_params
    params.require(:message).permit(:body, :user_id, :channel_id)
  end
end
