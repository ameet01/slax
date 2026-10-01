json.extract! @channel, :id, :name, :description, :is_dm
json.userCount @userCount
json.messages @channel.messages, partial: 'api/messages/message', as: :message
json.users @channel.users, partial: 'api/users/user', as: :user
json.created_at @channel.created_at.strftime("%A, %B %d")
