# == Schema Information
#
# Table name: channels
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  description :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Channel < ApplicationRecord
  validates :name, presence: true
  validates :name, length: {maximum: 25}
  validates :description, length: {maximum: 50}

  has_many :messages
  has_many :subscriptions
  
  has_many :users,
  through: :subscriptions
end
