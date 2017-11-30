# == Schema Information
#
# Table name: messages
#
#  id         :integer          not null, primary key
#  body       :string           not null
#  user_id    :integer          not null
#  channel_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Message < ApplicationRecord
  validates :user_id, :channel_id, :body, presence: true

  belongs_to :user
  belongs_to :channel

  has_many :emoticons, dependent: :destroy
end
