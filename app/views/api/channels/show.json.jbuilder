json.extract! @channel, :id, :name, :description
json.userCount @channel.users.count
