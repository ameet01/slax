class Api::UsersController < ApplicationController
  before_action :require_logged_in, only: [:index, :show, :update]

  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      general = Channel.find_or_create_by!(name: 'General')
      Subscription.create(user_id: @user.id, channel_id: general.id)
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

    # Users may only update their own profile.
    unless @user == current_user
      render json: ['Not authorized'], status: 403
      return
    end

    if @user.update(params.require(:user).permit(:image_url))
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
