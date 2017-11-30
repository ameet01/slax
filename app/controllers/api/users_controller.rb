class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      Subscription.create(user_id: @user.id, channel_id: 1)
      render :show
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def index
    @users = User.all
    render '/api/users/index'
  end

  def update
    @user = User.find(params[:id])

    if @user.update_attributes(params.require(:user).permit(:image_url))
      render :show
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
