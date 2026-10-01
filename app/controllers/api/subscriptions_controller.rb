class Api::SubscriptionsController < ApplicationController
  before_action :require_logged_in

  def create
    @subscription = current_user.subscriptions.new(subscription_params)

    if @subscription.save
      render :show
    else
      render json: @subscription.errors.full_messages, status: 422
    end
  end

  private
  def subscription_params
    # user_id is never taken from the client; subscriptions are always
    # created for the logged-in user.
    params.require(:subscription).permit(:channel_id)
  end
end
