class Api::ChannelsController < ApplicationController
  def show
    @channel = Channel.find(params[:id])
    @userCount = @channel.users.count
  end

  def index
    @channels = User.find_by(id: current_user.id).channels
  end

  def create
    @channel = Channel.new(channel_params)

    if @channel.save
      Membership.create(user_id: current_user.id, channel_id: @channel.id)
      render :show
    else
      render json: @channel.errors.full_messages, status: 401
    end
  end

  def destroy
  end

  def update
    @channel = Channel.find(params[:id])

    if @channel.update_attributes(channel_params)
      render :show
    else
      render json: @channel.errors.full_messages, status: 401
    end
  end

  private
  def channel_params
    params.require(:channel).permit(:name)
  end
end