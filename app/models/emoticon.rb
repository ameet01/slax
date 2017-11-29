class Emoticon < ApplicationRecord
  validates :user, :icon, :message, presence: true
  validates :icon, uniqueness: {scope: [:user_id,:message_id]}

  belongs_to :message
  belongs_to :user
end
