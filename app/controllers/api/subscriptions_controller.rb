class Api::SubscriptionsController < ApplicationController
  def create
    @subscription = Subscription.new(subscription_params)
    @subscription.save!
    render :show
  end

  private
  def subscription_params
    params.require(:subscription).permit(:user_id, :channel_id)
  end
end
