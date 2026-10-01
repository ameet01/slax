class Api::EmoticonsController < ApplicationController
  before_action :require_logged_in

  def create
    @emoticon = current_user.emoticons.new(emoticon_params)

    if @emoticon.valid?
      @emoticon.save
      render "api/emoticons/show"
    else
      render json: @emoticon.errors.full_messages, status: 422
    end
  end

  def destroy
    @emoticon = current_user.emoticons.find_by(id: params[:id])
    if @emoticon&.destroy
      render json: @emoticon.id
    else
      render(json: ["Can't find emoticon"], status: 404)
    end
  end

  private
  def emoticon_params
    # user_id is never taken from the client; reactions are always
    # attributed to the logged-in user.
    params.require(:emoticon).permit(:message_id, :icon)
  end
end
