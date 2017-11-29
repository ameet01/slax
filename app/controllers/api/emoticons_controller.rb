class Api::EmoticonsController < ApplicationController
  def create
    @emoticon = Emoticon.new(emoticon_params)

    if @emoticon.save
      render "api/emoticons/show"
    else
      render json: @emoticon.errors.full_messages, status: 422
    end
  end

  def destroy
    @emoticon = Emoticon.find_by(id: params[:id])
    if @emoticon.destroy
      render json: @emoticon.id
    else
      render(json: ["Can't find emoticon"],status: 404)
    end
  end

  private
  def emoticon_params
    params.require(:emoticon).permit(:user_id, :message_id, :icon)
  end
end
