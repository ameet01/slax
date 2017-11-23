json.extract! @channel, :id, :name, :description
json.userCount @userCount
json.messages @channel.messages
