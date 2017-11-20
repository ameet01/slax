class Api::UsersController < ApplicationController
  def create

  end

  def show

  end

  def index

  end

  def update

  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
