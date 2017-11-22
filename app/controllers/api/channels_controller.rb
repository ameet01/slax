class Api::ChannelsController < ApplicationController
  def show
    @channel = Channel.find(params[:id])
  end

  def index
    @channels = Channel.all
  end

  def create
    @channel = Channel.new(channel_params)

    if @channel.save
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
    params.permit(:channel).require(:name)
  end
end
