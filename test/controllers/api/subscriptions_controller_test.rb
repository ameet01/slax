require 'test_helper'

class Api::SubscriptionsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_subscriptions_create_url
    assert_response :success
  end

end
