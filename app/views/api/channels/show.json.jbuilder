json.extract! @channel, :id, :name, :description, :is_dm
json.userCount @userCount
json.messages @channel.messages
json.users @channel.users
json.created_at @channel.created_at.strftime("%A, %B %d")
