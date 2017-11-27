# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  session_token   :string           not null
#  password_digest :string           not null
#  image_url       :string           default("https://rlv.zcache.com/iron_man_assemble_square_sticker-r5962aceb77654e31b7642af0558ebbce_v9i40_8byvr_324.jpg"), not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
