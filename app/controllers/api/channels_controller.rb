class Api::ChannelsController < ApplicationController
  before_action :require_logged_in

  def show
    @channel = Channel.find(params[:id])
    @userCount = @channel.users.count
    @users = @channel.users
  end

  def index
    @channels = current_user.channels
    @allChannels = Channel.all.includes(:users) - current_user.channels
  end

  def create
    @channel = Channel.new(params.require(:channel).permit(:name, :is_dm, :userList))

    if @channel.save
      if params[:channel][:userList]
        params[:channel][:userList].each do |userId|
          Subscription.create(user_id: userId, channel_id: @channel.id)
        end
        Subscription.create(user_id: current_user.id, channel_id: @channel.id)
      else
        Subscription.create(user_id: current_user.id, channel_id: @channel.id)
      end
      render :show
      Pusher.trigger('channel', 'update-channel', @channel.id)
    else
      render json: @channel.errors.full_messages, status: 401
    end
  end

  def destroy
    @channel = Channel.find(params[:id])

    if @channel.destroy
      render :show
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def update
    @channel = Channel.find(params[:id])

    if @channel.update_attributes(channel_params)
      render :show
      Pusher.trigger('channel', 'update-channel', @channel.id)
    else
      render json: @channel.errors.full_messages, status: 401
    end
  end

  private
  def channel_params
    params.require(:channel).permit(:name, :is_dm)
  end
end
