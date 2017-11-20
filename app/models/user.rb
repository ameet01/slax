# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  session_token   :string           not null
#  password_digest :string           not null
#  image_url       :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  attr_reader :password

  validates :password, length: {minimum: 6, allow_nil: true}
  validates :password_digest, :session_token, :username, presence: true
  validates :username, uniqueness: true

  after_initialize :ensure_session_token

  has_many :messages
  has_many :subscriptions
  has_many :channels,
  through: :subscriptions

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil if !user
    if(user.valid_password?(password))
      return user
    else
      return nil
    end
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end

end
