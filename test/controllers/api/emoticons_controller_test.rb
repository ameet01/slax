require 'test_helper'

class Api::EmoticonsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_emoticons_create_url
    assert_response :success
  end

  test "should get destroy" do
    get api_emoticons_destroy_url
    assert_response :success
  end

end
